<script lang="ts">
  import type { PageData } from '../$types';
  import { Form, Input, Button, Card, HelperText, Alert } from 'theui-svelte'
  import Heading from "$lib/components/Heading.svelte"

  let {data}: {data: PageData} = $props()
</script>

<Heading title="Profile">
  <Button class="px-6" size="sm" href="/settings/profile">Edit</Button>
</Heading>

{JSON.stringify(data)}