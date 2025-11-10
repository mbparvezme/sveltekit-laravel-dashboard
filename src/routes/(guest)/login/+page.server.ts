import type { Actions } from './$types';
import { API_ROUTE } from "$env/static/private";
import { initCSRF, apiPost } from '$lib/api';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

    if (!email || !password) {
			return {status: 400, errors: { message: 'Email and password are required.' }}
		}

    try {


		} catch (error) {
			console.error('Login error:', error);
			return {
				status: 500,
				errors: { message: 'Something went wrong. Please try again.' }
			};
		}
	}
} satisfies Actions;