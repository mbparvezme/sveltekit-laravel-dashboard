import { redirect, type Handle } from '@sveltejs/kit'
import { APP_SECRET } from "$env/static/private";
import { CookieCrypt } from 'cookie-crypt';
import { COOKIES } from '$lib';
import { guestRoutes } from '$lib/const';

const commonRoutes: string[] = ['/verify']

export const handle: Handle = async ({ event, resolve }) => {
    CookieCrypt.initialize(APP_SECRET, event);
    const token = await COOKIES.auth.get();
    const path = event.url.pathname;

    const isPublic = guestRoutes.some(r => path.startsWith(r));
    const isCommon = commonRoutes.some(r => path.startsWith(r));

    if (!token && !isPublic && !isCommon) {
        throw redirect(303, '/sign-in');
    }

    if (token && isPublic && !isCommon) {
        throw redirect(303, '/');
    }

    return resolve(event);
}