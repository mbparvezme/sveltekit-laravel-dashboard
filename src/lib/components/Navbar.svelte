<script lang="ts">
  import { Navbar, NavBrand, NavLinkGroup, NavLink, Button } from "theui-svelte";
</script>

<Navbar class="sticky top-0 border-b border-light bg-background/95 backdrop-blur">
  <div class="flex gap-4 items-center">
    <Button square={true} size="xs">M</Button>
    <NavBrand class="text-xl" href="/">EH</NavBrand>
  </div>
  <NavLinkGroup>
    <NavLink href="#" text="Notification" />
    <NavLink href="#" text="Setting" />
    <div class="flex items-center gap-4 ps-4 ms-5 border-s border-light">
      <div class="hidden text-right sm:flex flex-col">
        <span class="text-sm font-bold leading-4">Alex Johnson</span>
        <span class="text-muted text-xs leading-4">Candidate</span>
      </div>
      <div class="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
    </div>
  </NavLinkGroup>
</Navbar>