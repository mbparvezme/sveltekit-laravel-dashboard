import { COOKIE_NAME } from "$env/static/private";
import { CookieCrypt } from 'cookie-crypt'

export const COOKIES = {
    auth: {
        name: async (name?: string): Promise<string> => name || COOKIE_NAME,
        set: async (value: string): Promise<void> => await COOKIES.auth.name().then((name: string) => CookieCrypt.set(name, value)),
        get: async (): Promise<string | null> => await COOKIES.auth.name().then((name: string) => CookieCrypt.get(name)),
        delete: async () : Promise<void> => await COOKIES.auth.name().then((name: string) => CookieCrypt.delete(name))
    }
}