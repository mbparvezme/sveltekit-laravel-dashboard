<script lang="ts">
  import { Button, Card, Progress } from "theui-svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

<Heading title="Dashboard" subtitle="Welcome to this dashboard">
  <Button size="sm" outline shadow="none">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>This Month
  </Button>
  <Button size="sm" shadow="none" class="items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
    </svg>
    Get Connections
  </Button>
</Heading>

<!-- <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> -->
<div class="grid gap-6 sm:grid-cols-4">
  <Card shadow="none" class="flex flex-col rounded-xl bg-linear-to-br backdrop-blur from-blue-500/10 to-cyan-500/10">
    <div class="px-6 pt-2">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <p class="font-medium mb-1">Profile Views</p>
          <p class="text-3xl font-bold">92</p>
          <p class="text-sm mt-2 flex items-center gap-1 text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
            </svg>
            +8% vs last month
          </p>
        </div>
        <div class="rounded-lg bg-background/50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      </div>
    </div>
  </Card>

  <Card shadow="none" class="flex flex-col rounded-xl bg-linear-to-br backdrop-blur from-green-500/10 to-emerald-500/10">
    <div class="px-6 pt-2">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <p class="font-medium mb-1">File Downloads</p>
          <p class="text-3xl font-bold">42</p>
          <p class="text-sm mt-2 flex items-center gap-1 text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
            </svg>
            +20% vs last month
          </p>
        </div>
        <div class="rounded-lg bg-background/50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
        </div>
      </div>
    </div>
  </Card>

  <Card shadow="none" class="flex flex-col rounded-xl bg-linear-to-br backdrop-blur from-purple-50 to-purple-100">
    <div class="px-6 pt-2">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium mb-1">Total Applications</p>
          <p class="text-3xl font-bold">22</p>
          <p class="text-xs mt-2 flex items-center gap-1 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
            </svg>
            +2 vs last month
          </p>
        </div>
        <div class="rounded-lg bg-background/50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        </div>
      </div>
    </div>
  </Card>

  <Card shadow="none" class="flex flex-col rounded-xl bg-linear-to-br backdrop-blur from-orange-500/10 to-red-500/10">
    <div class="px-6 pt-6">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <p class="font-medium mb-1">AI Usage</p>
          <p class="text-3xl font-bold">5/10</p>
          <p class="text-sm mt-2 flex items-center gap-1 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
            </svg>
            50% of monthly limit
          </p>
        </div>
        <div class="rounded-lg bg-background/50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
      </div>
    </div>
  </Card>
</div>