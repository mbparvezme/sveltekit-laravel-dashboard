import { redirect } from '@sveltejs/kit';
import { COOKIES } from '$lib';
import { loginRoute } from '$lib/const';
import { PUBLIC_API_ROUTE } from '$env/static/public';

export async function GET() {

    const token = await COOKIES.auth.get();

    if (!token) {
        throw redirect(303, '/sign-in');
    }

    await fetch(`${PUBLIC_API_ROUTE}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    COOKIES.auth.delete();
    throw redirect(303, loginRoute);
}
