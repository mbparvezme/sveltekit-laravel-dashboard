import type { Actions } from './$types'
import { redirect, fail } from '@sveltejs/kit'
import { PUBLIC_API_ROUTE } from "$env/static/public"
import { COOKIES } from '$lib'

export const actions = {
	default: async ( event ) => {
		const data = await event.request.formData()
		const userid = data.get('userid')
		const password = data.get('password')

		if (!userid || !password) {
			return fail(400, {success: false, error: true, message: "Email and password are required." });
		}

		const res = await fetch(`${PUBLIC_API_ROUTE}/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json", "Accept": "application/json" },
			body: JSON.stringify({ userid, password })
		})

		if (!res.ok) {
			const result = await res.json()
			return fail(res.status, { success: false, error: true, message: result?.message })
		}

		const result = await res.json()

		if (!result.success || !result?.data?.token) {
			return fail(res.status, { success: false, error: true, message: result?.message})
		}

		await COOKIES.auth.set(result.data.token)
		throw redirect(302, '/')
	}
} satisfies Actions;