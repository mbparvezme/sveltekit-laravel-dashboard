<script>
	import { Form, Input, Button, Card, HelperText} from 'theui-svelte'
</script>

<section class="h-screen w-screen overflow-y-auto flex justify-center items-center p-8 sm:p-16 lg:p-24">
	<Card class="max-w-md w-full p-6" shadow="lg">
		<div class="pb-4 mb-3 border-b border-gray-200 dark:border-gray-800">
			<h2 class=" text-3xl font-bold mb-1">Create Account</h2>
			<HelperText class="text-gray-500">Enter your details to create account</HelperText>
		</div>

		<Form>
			<Input variant="flat" name="name" floatingLabel>Full Name</Input>
			<Input variant="flat" name="email" type="email" floatingLabel>Email</Input>
			<Input variant="flat" name="password" type="password" floatingLabel>Password</Input>
			<Input variant="flat" name="confirm_password" type="password" floatingLabel>Confirm Password</Input>
			<div class=""></div>
			<Button type="submit">Create</Button>
		</Form>

		<div class="pt-4 mt-3 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-500">
			<p>Already have an account? <a class="inline-block text-brand-secondary-500" href="/sign-in">Sign in!</a></p>
		</div>
	</Card>
</section>