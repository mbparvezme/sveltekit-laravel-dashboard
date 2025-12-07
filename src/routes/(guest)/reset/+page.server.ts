import type { Actions } from './$types'
import { fail } from '@sveltejs/kit'
import { PUBLIC_API_ROUTE } from "$env/static/public"

export const actions = {
    default: async ( event ) => {
        const data = await event.request.formData()
        const email = data.get('email')

        if (!email) {
            return fail(400, {success: false, error: true, message: "Please enter a valid Email." });
        }

        const res = await fetch(`${PUBLIC_API_ROUTE}/password/forgot`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ email })
        })

        if (!res.ok) {
            const result = await res.json()
            return fail(res.status, { success: false, message: result?.message })
        }

        const result = await res.json()

        if (!result.success || result?.errors?.length > 0) {
            return fail(res.status, {success: false, message: result?.message})
        }

        return result
    }
} satisfies Actions;