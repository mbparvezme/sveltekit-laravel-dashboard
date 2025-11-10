import { API_ROUTE } from "$env/static/private"


/**
 * Laravel response format
 */
export interface LaravelResponse<T> {
	success: boolean;
	message: string;
	data?: T;
}


/**
 * Standard API response wrapper for SvelteKit
 */
export interface ApiResponse<T> {
	ok: boolean;                     // true if network + backend success
	status: number;                  // HTTP status
	response?: LaravelResponse<T>;   // Laravel JSON response
	message?: string;                // Network or backend error message
}


/**
 * Always include credentials for Laravel Sanctum
 */
const defaultFetchOptions = {
	credentials: 'include' as const
};


/**
 * Initialize CSRF cookie
 */
export async function initCSRF(): Promise<void> {
	try {
		await fetch(`${API_ROUTE}sanctum/csrf-cookie`, { ...defaultFetchOptions });
	} catch (err) {
		console.error('Failed to get CSRF cookie', err);
	}
}


/**
 * Helper to handle network or fetch errors
 */
const handleFetchError = (err: unknown): ApiResponse<never> => {
	let message: string;

	if (err instanceof Error) {
		message = err.message;
	} else {
		message = String(err) || 'Unknown error';
	}

	return { ok: false, status: 0, message };
}


/**
 * Centralized response handler (Laravel-aware)
 */
async function handleResponse<T>(response: Response, endpoint: string, method: string): Promise<ApiResponse<T>> {
	let json: unknown = null;

	try { json = await response.json(); }
  catch {json = null; }

	// Network-level error
	if (!response.ok) {
		let errorMessage = `${method} ${endpoint} failed (${response.status})`;
		if (json && typeof json === 'object' && 'message' in json) {
			errorMessage = (json as { message?: string }).message || errorMessage;
		}
		return { ok: false, status: response.status, message: errorMessage };
	}

	// Backend (Laravel) response
	const laravelResp = json as LaravelResponse<T>;

	return {
		ok: laravelResp?.success ?? false,
		status: response.status,
		response: laravelResp,
		message: laravelResp?.message || undefined
	};
}


/**
 * GET request helper
 */
export async function apiGet<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
	try {
		const response = await fetch(`${API_ROUTE}${endpoint}`, {
			method: 'GET',
			headers: {Accept: 'application/json', ...defaultFetchOptions}
		});
		return await handleResponse<T>(response, endpoint, 'GET');
	} catch (err: unknown) {
		return handleFetchError(err);
	}
}


/**
 * POST request helper
 */
export async function apiPost<T = unknown>(endpoint: string, body: object): Promise<ApiResponse<T>> {
	try {
		const response = await fetch(`${API_ROUTE}${endpoint}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json', Accept: 'application/json', ...defaultFetchOptions},
			body: JSON.stringify(body)
		});
		return await handleResponse<T>(response, endpoint, 'POST');
	} catch (err: unknown) {
		return handleFetchError(err);
	}
}


/**
 * PUT request helper
 */
export async function apiPut<T = unknown>(endpoint: string, body: object): Promise<ApiResponse<T>> {
	try {
		const response = await fetch(`${API_ROUTE}${endpoint}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json', Accept: 'application/json', ...defaultFetchOptions},
			body: JSON.stringify(body)
		});
		return await handleResponse<T>(response, endpoint, 'PUT');
	} catch (err: unknown) {
		return handleFetchError(err);
	}
}


/**
 * DELETE request helper
 */
export async function apiDelete<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
	try {
		const response = await fetch(`${API_ROUTE}${endpoint}`, {
			method: 'DELETE',
      headers: {Accept: 'application/json', ...defaultFetchOptions}
		});
		return await handleResponse<T>(response, endpoint, 'DELETE');
	} catch (err: unknown) {
		return handleFetchError(err);
	}
}
