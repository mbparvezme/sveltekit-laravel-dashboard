<script>
	import { Form, Input, Button, Checkbox, Card, HelperText} from 'theui-svelte'
</script>

<Card class="max-w-sm mx-auto md:mt-24 mt-16 p-6" shadow="lg">
	<div class="pb-4 mb-3 border-b border-gray-100 dark:border-gray-800">
		<h2 class=" text-3xl font-bold mb-1">Sign In</h2>
		<HelperText class="text-gray-500">Enter your credentials to continue</HelperText>
	</div>

	<Form>
		<Input variant="flat" name="email" floatingLabel>Email</Input>
		<Input variant="flat" name="password" type="password" floatingLabel>Password</Input>
		<div class="flex justify-between">
			<Checkbox rounded="sm" size="sm" labelClasses="text-xs" name="remember">Stay logged in for 7 days</Checkbox>
		</div>
		<Button type="submit">Sign In</Button>
	</Form>

	<div class="pt-4 mt-3 border-t border-gray-100 dark:border-gray-800 text-sm text-center text-gray-500">
		<p><a class="inline-block text-brand-secondary-500" href="/forgot-password">Forgot password?</a></p>
		<p>Don't have an account? <a class="inline-block text-brand-secondary-500" href="/sign-up">Sign up!</a></p>
	</div>
</Card>