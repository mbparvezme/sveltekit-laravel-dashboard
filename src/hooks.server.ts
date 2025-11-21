import { redirect, type Handle } from '@sveltejs/kit'
import { APP_SECRET } from "$env/static/private";
import { CookieCrypt } from 'cookie-crypt';
import { COOKIES } from '$lib';

const guestRoutes: string[] = ['/login', '/create', '/forgot-password', '/update-password', '/verify']

export const handle: Handle = async ({ event, resolve }) => {
    CookieCrypt.initialize(APP_SECRET, event);
    const cookie: string | null = await COOKIES.auth.get();

    if (!cookie && !guestRoutes.includes(event.url.pathname)){
        throw redirect(302, '/login')
    }

    return await resolve(event)
}