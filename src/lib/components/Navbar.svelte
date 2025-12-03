<script lang="ts">
  import { Navbar, NavBrand, NavLinkGroup, NavLink, Button } from "theui-svelte";
</script>

<Navbar class="sticky top-0 border-b border-light bg-background/95 backdrop-blur" navInnerClasses="max-w-auto">
  <div class="flex gap-4 items-center">
    <Button square={true} size="xs">M</Button>
    <NavBrand class="text-xl" href="/">EH</NavBrand>
  </div>
  <NavLinkGroup align="end">
    <NavLink href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    </NavLink>
    <NavLink href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
    </NavLink>
    <div class="flex items-center gap-4 ps-4 ms-5 border-s border-light">
      <div class="hidden text-right sm:flex flex-col">
        <span class="text-sm font-bold leading-4">Alex Johnson</span>
        <span class="text-muted text-xs leading-4">Candidate</span>
      </div>
      <div class="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 to-cyan-500"></div>
    </div>
  </NavLinkGroup>
</Navbar>