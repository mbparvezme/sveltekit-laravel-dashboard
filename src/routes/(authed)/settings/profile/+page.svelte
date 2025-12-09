<script lang="ts">
  import { Form, Input, Button, Card, FileInput, Label } from 'theui-svelte'
  import Heading from "$lib/components/Heading.svelte"

  let {data} = $props()
</script>

<Card class="p-2 lg:col-span-3" shadow="none">
  <h3 class="font-bold text-2xl text-muted mb-4">Profile Settings</h3>
  
  <Form>
      <div class="flex flex-col gap-3">
        <Label class="text-muted">Full Name</Label>
        <div class="flex">
          <Input wrapperClasses="flex-1" value={data.name} class="rounded-r-none"/>
          <Button class="rounded-s-none py-2" href="/profile/edit">Update</Button>
        </div>
      </div>
  </Form>
  <Form>
      <div class="flex flex-col gap-3">
        <Label class="text-muted">Profile Picture</Label>
        <div class="flex">
          <FileInput variant="flat" wrapperClasses="flex-1" class="rounded-r-none"/>
          <Button class="py-2" href="/profile/edit">Upload</Button>
        </div>
      </div>
  </Form>
</Card>