<script lang="ts">
  import { Form, Input, Button, Card, FileInput, Label } from 'theui-svelte'
  let {data} = $props()
</script>

<Card class="p-2 lg:col-span-3" shadow="none">
  <h3 class="font-bold text-2xl text-muted mb-4">Account Settings</h3>
  <Form>
      <div class="flex flex-col gap-3">
        <Label class="text-muted">Full Name</Label>
        <div class="flex">
          <Input wrapperClasses="flex-1" value={data.name} class="rounded-r-none"/>
          <Button class="rounded-s-none py-2" href="/profile/edit">Update</Button>
        </div>
      </div>
  </Form>
</Card>