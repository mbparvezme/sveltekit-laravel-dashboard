import type { Actions } from './$types';
import { PUBLIC_API_ROUTE } from "$env/static/public";
import { COOKIES } from '$lib'

export const actions = {
	default: async ( event ) => {
		const data = await event.request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return {status: 400, errors: { message: 'Email and password are required.' }}
		}

		try {
			// Authentication API calls
			// ...
			await COOKIES.auth.set('token')
		} catch (error) {
			console.error('Login error:', error);
			return {
				status: 500,
				errors: { message: 'Something went wrong. Please try again.' }
			};
		}
	}
} satisfies Actions;