import type { Actions } from './$types'
import { redirect, fail } from '@sveltejs/kit'
import { PUBLIC_API_ROUTE } from "$env/static/public"
import { COOKIES } from '$lib'

export const actions = {
  default: async ( event ) => {
    const data = await event.request.formData()
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')
    const password_confirmation = data.get('password_confirmation')

    if (!name || !email || !password || !password_confirmation) {
      return fail(400, {success: false, errors: { message: "Please fill the registration from properly." }})
    }

    const res = await fetch(`${PUBLIC_API_ROUTE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name, email, password, password_confirmation })
    })

    if (!res.ok) {
      const result = await res.json()
      return fail(res.status, { success: false, errors: { message: result?.message }})
    }

    const result = await res.json()

    if (!result.success || !result?.data?.token) {
      return fail(res.status, {success: false, errors: {message: result?.message}})
    }

    await COOKIES.auth.set(result.data.token)
    throw redirect(302, '/')
  }
} satisfies Actions