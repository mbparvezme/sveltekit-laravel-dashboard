import type { PageServerLoad } from './$types';
import { COOKIES, fetchGetHeader } from '$lib';
import { redirect, fail } from '@sveltejs/kit';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
    const token = await COOKIES.auth.get()

    if (!token) {
        throw redirect(303, '/sign-in');
    }

    const res = await fetch(`${PUBLIC_API_ROUTE}/profile`, {
        headers: fetchGetHeader(token as string)
    })

    const result = await res.json()

    if (!res.ok) {
        return fail(res.status, { success: false, error: true, message: result?.message })
    }

    return result.data
}