import { redirect } from '@sveltejs/kit';
import { COOKIES } from '$lib';
import { loginRoute } from '$lib/const';

export function GET() {
    COOKIES.auth.delete();
    throw redirect(303, loginRoute);
}
