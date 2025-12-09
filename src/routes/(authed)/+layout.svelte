<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte'
	import { Button } from 'theui-svelte'
	let { children } = $props()
</script>

<Navbar />

<div class="flex">
  <aside class="fixed left-0 top-[72.8px] hidden h-[calc(100vh-72.8px)] w-68 overflow-y-auto transition-all duration-200 lg:block">
    <nav class="space-y-2 py-4 px-8">
      <a class="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors bg-secondary" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
        <span>Dashboard</span>
      </a>
      <a class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted" href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </a>
    </nav>
    <div class="absolute bottom-0 left-0 right-0 border-t border-light bg-muted/30 p-4">
      <Button class="w-full flex items-center bg-slate-900 leading-4" href="/logout">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
        <span>Logout</span>
      </Button>
    </div>
  </aside>
  <article class="w-full transition-all duration-200 lg:ml-68 bg-slate-50 min-h-[calc(100vh-72.8px)]">
    <div class="p-6 space-y-6">
  	  {@render children()}
    </div>
  </article>
</div>
