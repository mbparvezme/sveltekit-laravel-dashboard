<script>
	import { Form, Input, Button, Card, HelperText} from 'theui-svelte'
</script>

<Card class="max-w-xl mx-auto md:mt-24 mt-16 p-6" shadow="lg">
	<div class="pb-4 mb-3 border-b border-gray-100 dark:border-gray-800">
		<h2 class=" text-3xl font-bold mb-1">Create Account</h2>
		<HelperText class="text-gray-500">Enter your details to create account</HelperText>
	</div>

	<Form class="grid grid-cols-2">
		<Input variant="flat" name="name" floatingLabel>Full Name</Input>
		<Input variant="flat" name="email" type="email" floatingLabel>Email</Input>
		<Input variant="flat" name="password" type="password" floatingLabel>Password</Input>
		<Input variant="flat" name="confirn_password" type="password" floatingLabel>Confirm Password</Input>
    <div class="col-span-2 text-center">
      <Button type="submit">Create</Button>
    </div>
	</Form>

	<div class="pt-4 mt-3 border-t border-gray-100 dark:border-gray-800 text-sm text-center text-gray-500">
		<p>Already have an account? <a class="inline-block text-brand-secondary-500" href="/sign-in">Sign in!</a></p>
	</div>
</Card>