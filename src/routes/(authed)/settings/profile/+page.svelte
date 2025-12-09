<script lang="ts">
    import type { SELECT_DATA } from 'theui-svelte/type';
    import type { PageData } from '../$types'
    import { Form, Input, Button, Card, FileInput, Label, Select, Checkbox } from 'theui-svelte'
    let {data} = $props()

    let differentLivingAddress = $state(false)

    const genders: SELECT_DATA[] = [
        {
            text: "Male",
            value: "male"
        },
        {
            text: "Female",
            value: "female"
        },
        {
            text: "Other",
            value: "other"
        }
    ]

</script>

<Card class="p-4" shadow="none" rounded="lg">
    <h3 class="font-bold text-2xl text-muted mb-4">Profile Settings</h3>
    <Form>
        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <Input name="full_name" value={data.name}>Full Name</Input>
            <Input name="mobile" value={data.profile.mobile}>Mobile</Input>
            <Input name="dob" value={data.profile.mobile} type="date">Date of Birth</Input>
            <Select name="gender" options={genders} label="Gender" />
            <Input wrapperClasses="col-span-2" type="textarea" value={data.profile.bio}>Bio</Input>
            <div class="flex justify-end col-span-2 pt-2">
              <Button>Update</Button>
            </div>
        </div>
    </Form>
</Card>

<Card class="p-4" shadow="none" rounded="lg">
    <h3 class="font-bold text-2xl text-muted mb-4">Address Settings</h3>
    <Form>
        <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <Input name="full_name" value="">Country</Input>
            <Input name="mobile" value="">City</Input>
            <Input wrapperClasses="col-span-2" type="textarea" value={data.profile.bio}>Full Address</Input>

            <div class="theui-input-container flex gap-2 items-center">
              <input bind:checked={differentLivingAddress} id="_idmiyz5ifp13" class="theui-input theui-checkbox theui-input-md outline-hidden h-4 w-4 border border-gray-300 dark:border-gray-600 focus:border-brand-primary-500 ring-transparent focus:ring-brand-primary-500 ring-offset-0 rounded-md bg-gray-100 dark:bg-gray-800 cursor-pointer checked:bg-brand-primary-500 theui-animate ease-in-out duration-300 transition-all" type="checkbox" aria-checked="true">
              <label for="_idmiyz5ifp13" class="font-medium flex flex-col text-base text-gray-700 dark:text-gray-300 cursor-pointer">Currently living in different place.</label>
            </div>

            <div class="flex justify-end col-span-2 pt-2">
              <Button>Update</Button>
            </div>
        </div>
    </Form>
</Card>