<script lang="ts">
  import { Button, Card, Progress } from "theui-svelte";
</script>

<div class="flex">
  <aside class="fixed left-0 top-[61px] hidden h-[calc(100vh-61px)] w-64 overflow-y-auto border-r border-light bg-background transition-all duration-200 lg:block">
    <nav class="space-y-2 py-4 ps-8 pe-4">
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors bg-brand-primary-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
        <span>Dashboard</span>
      </button>
      <button class="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors text-foreground hover:bg-muted">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
        <span>Logout</span>
      </button>
    </div>
  </aside>

  <article class="w-full transition-all duration-200 lg:ml-64">
    <div class="p-6 space-y-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-balance">Your Career Dashboard</h2>
          <p class="text-muted mt-2">Stay on top of opportunities and track your progress</p>
        </div>
        <div class="flex gap-2">
          <Button size="sm" outline shadow="none">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>This Month
          </Button>
          <Button size="sm" shadow="none" class="items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            Get Recommendations
          </Button>
        </div>
      </div>

      <!-- <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> -->
      <div class="grid gap-6 sm:grid-cols-3">
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
          <div class="px-6 pt-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <p class="font-medium mb-1">CV Downloads</p>
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

        <!-- <div class="flex flex-col gap-6 rounded-xl py-6 bg-linear-to-br backdrop-blur from-purple-500/10 to-pink-500/10">
          <div class="px-6 pt-6">
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
        </div> -->

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

      <div class="grid gap-6 md:grid-cols-3">
        <div class="md:col-span-2"></div>

        <div class="space-y-6">
          <div class="flex flex-col gap-6 rounded-xl py-6 shadow-xl overflow-hidden">
            <div class="grid items-start gap-2 px-6 pb-3">
              <div class="flex items-center justify-between">
                <div class="text-sm font-bold">AI CV Analysis</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              </div>
            </div>
            <div>
              <div class="px-6 space-y-6">
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="text-muted">Usage</span>
                    <span class="font-medium">3/5</span>
                  </div>
                  <Progress end={55} barClasses="bg-linear-to-r from-blue-500 to-cyan-500" />
                </div>
                <Button outline size="sm" class="text-gray-900 border-gray-900 w-full">Analyze CV</Button>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6 rounded-xl py-6 shadow-xl overflow-hidden">
            <div class="grid items-start gap-2 px-6 pb-3">
              <div class="flex items-center justify-between">
                <div class="text-sm font-bold">AI Cover Letter</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              </div>
            </div>
            <div>
              <div class="px-6 space-y-6">
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="text-muted">Usage</span>
                    <span class="font-medium">3 / 5</span>
                  </div>
                  <div class="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div class="h-full bg-linear-to-r from-blue-500 to-cyan-500 transition-all" style="width: 60%;"></div>
                  </div>
                </div>
                <Button outline size="sm" class="text-gray-900 border-gray-900 w-full">Generate Cover Latter</Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </article>
</div>