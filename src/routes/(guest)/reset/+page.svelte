<script>
	import { Form, Input, Button, Card, HelperText} from 'theui-svelte'
</script>

<Card class="max-w-md mx-auto md:mt-24 mt-16 p-6" shadow="lg">
	<div class="pb-4 mb-3 border-b border-gray-200 dark:border-gray-800">
		<h2 class=" text-3xl font-bold mb-1">Reset Password</h2>
		<HelperText class="text-gray-500">Reset your password and login.</HelperText>
	</div>

	<Form>
		<Input variant="flat" name="password" type="password" floatingLabel>Password</Input>
		<Input variant="flat" name="confirm_password" type="password" floatingLabel>Confirm Password</Input>
        <div></div>
		<Button type="submit">Reset Password</Button>
	</Form>
</Card>