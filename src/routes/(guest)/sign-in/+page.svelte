<script>
	import { Form, Input, Button, Checkbox, Card, HelperText} from 'theui-svelte'
</script>

<section class="h-screen w-screen overflow-y-auto flex justify-center items-center p-8 sm:p-16 lg:p-24">
	<Card class="max-w-md w-full p-6" shadow="lg">
		<div class="pb-4 mb-3 border-b border-gray-200 dark:border-gray-800">
			<h2 class=" text-3xl font-bold mb-1">Sign In</h2>
			<HelperText class="text-gray-500">Enter your credentials to continue</HelperText>
		</div>
	
		<Form>
			<Input floatingLabel variant="flat" name="email">Email</Input>
			<Input floatingLabel variant="flat" name="password" type="password">Password</Input>
			<div class="pb-2">
				<Checkbox rounded="sm" size="sm" labelClasses="text-xs text-muted" name="remember">Stay logged in for 7 days</Checkbox>
			</div>
			<Button type="submit">Sign In</Button>
		</Form>
	
		<div class="pt-4 mt-3 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-500">
			<p><a class="inline-block text-brand-secondary-500" href="/forgot-password">Forgot password?</a></p>
			<p>Don't have an account? <a class="inline-block text-brand-secondary-500" href="/sign-up">Sign up!</a></p>
		</div>
	</Card>
</section>
