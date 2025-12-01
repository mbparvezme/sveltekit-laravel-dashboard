import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit'
import { PUBLIC_API_ROUTE } from "$env/static/public";
import { COOKIES } from '$lib';

export const actions = {
	default: async ( event ) => {
		const data = await event.request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return {status: 400, errors: { message: 'Email and password are required.' }}
		}

		await COOKIES.auth.set('token')
		throw redirect(302, '/')

	}
} satisfies Actions;