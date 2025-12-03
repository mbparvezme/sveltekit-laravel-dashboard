<script lang="ts">
  import { Button } from "theui-svelte";
</script>

<div class="flex">
  <aside class="fixed left-0 top-[61px] hidden h-[calc(100vh-61px)] w-64 overflow-y-auto border-r border-light bg-background transition-all duration-200 lg:block">

    <nav class="space-y-2 p-4">
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors bg-brand-primary-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
        <span>Dashboard</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile &amp; CV</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>Available jobs</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>Applications</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>Skill Exams</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>AI tools</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>Recommendations</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <span>Activity</span>
      </button>
    </nav>

    <div class="absolute bottom-0 left-0 right-0 border-t border-light bg-muted/30 p-4">
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
        <span>Logout</span>
      </button>
    </div>
  </aside>

  <article class="w-full transition-all duration-200 lg:ml-64">
    <div class="p-6 sm:p-8 space-y-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-balance">Your Career Dashboard</h2>
          <p class="text-muted-foreground mt-2">Stay on top of opportunities and track your progress</p>
        </div>
        <div class="flex gap-2">
          <Button size="xs" outline>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>This Month
          </Button>
          <Button size="xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            Get Recommendations
          </Button>
        </div>
      </div>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur">
          <div class="px-6 pt-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="text-xs font-medium text-muted-foreground mb-1">Profile Views</p>
                <p class="text-3xl font-bold">92</p>
                <p class="text-xs mt-2 flex items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                    <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
                  </svg>
                  +8% vs last month
                </p>
              </div>
              <div class="rounded-lg bg-background/50 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye text-muted-foreground">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <div class="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border border-green-200 dark:border-green-800 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur">
          <div class="px-6 pt-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="text-xs font-medium text-muted-foreground mb-1">CV Downloads</p>
                <p class="text-3xl font-bold">42</p>
                <p class="text-xs mt-2 flex items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                      <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
                  </svg>
                  +20% vs last month
                </p>
              </div>
              <div class="rounded-lg bg-background/50 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download text-muted-foreground">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <div class="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur">
          <div class="px-6 pt-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="text-xs font-medium text-muted-foreground mb-1">Total Applications</p>
                <p class="text-3xl font-bold">22</p>
                <p class="text-xs mt-2 flex items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                    <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
                  </svg>
                  +2 vs last month
                </p>
              </div>
              <div class="rounded-lg bg-background/50 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big text-muted-foreground">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
  
        <div class="text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur">
          <div class="px-6 pt-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="text-xs font-medium text-muted-foreground mb-1">Response Rate</p>
                <p class="text-3xl font-bold">18%</p>
                <p class="text-xs mt-2 flex items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right">
                    <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
                  </svg>
                  +3% vs last month
                </p>
              </div>
              <div class="rounded-lg bg-background/50 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up text-muted-foreground">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>
</div>