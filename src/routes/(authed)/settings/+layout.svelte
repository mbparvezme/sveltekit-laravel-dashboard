<script lang="ts">
    import { Card } from 'theui-svelte';
    import Heading from "$lib/components/Heading.svelte"
	  let { children } = $props();
</script>

<section class="grid grid-cols-4 gap-12">

    <div class="flex flex-col">
      <Heading title="Settings" align="center" />
      <br>
      <a class="font-semibold px-3 py-2 border-b border-slate-200/60 hover:bg-gray-50 transition-colors duration-500" href="/settings/profile">Profile settings</a>
      <a class="font-semibold px-3 py-2 border-b border-slate-200/60 hover:bg-gray-50 transition-colors duration-500" href="/settings/account">Account settings</a>
    </div>

    {@render children()}
</section>
