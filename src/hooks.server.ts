import { redirect, type Handle } from '@sveltejs/kit'

const guestRoutes: string[] = ['/login', '/create', '/forgot-password', '/update-password', '/verify']

export const handle: Handle = async ({ event, resolve }) => {
    const cookie : string|null = event.cookies.get("COOKIE_NAME") ?? null

    // If no cookie and not on guest rout, redirect to login
    if (!cookie && !guestRoutes.includes(event.url.pathname)){
        throw redirect(302, '/login')
    }

    return await resolve(event)
}