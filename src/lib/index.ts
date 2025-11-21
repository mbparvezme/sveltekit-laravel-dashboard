import { COOKIE_NAME, APP_SECRET } from "$env/static/private";
import { DataCrypt } from 'data-crypt'
import { CookieCrypt } from 'cookie-crypt'

export const COOKIES = {
    auth: {
        name: async (name?: string): Promise<string> => await DataCrypt.encrypt(name || COOKIE_NAME, APP_SECRET),
        set : async (value: string): Promise<void> => await COOKIES.auth.name().then((name: string) => CookieCrypt.set(name, value)),
        get : async ()             : Promise<string|null> => await COOKIES.auth.name().then((name: string) => CookieCrypt.set(name))
    }
}