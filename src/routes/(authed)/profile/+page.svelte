<script lang="ts">
  import { Button, Card, Tab, Tabs, TabPanel, Progress } from "theui-svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

<Heading title="Profile">
  <Button size="xs" outline shadow="none" class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
  </Button>
</Heading>

<div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 space-y-6">
        <div class="flex flex-col sm:flex-row gap-6 p-8 rounded-xl bg-white">
            <div class="flex-shrink-0">
                <div class="w-32 h-32 mb-4 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div class="flex gap-2">
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md gap-1.5 h-8 w-8 p-0 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                    <button data-slot="button" class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-md gap-1.5 h-8 w-8 p-0 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </button>
                </div>
            </div>
            <div class="flex-1">
                <h3 class="text-2xl font-bold">Alex Johnson</h3>
                <p class="text-muted mb-2 font-medium">Full Stack Developer</p>
                <div class="leading-5 text-sm mb-4">
                    <span class="block text-muted/80 font-medium text-xs">Address</span>
                    29, UNC street, Amlapara, Kushtia, Bangladesh - 7000
                </div>
                <div class="flex flex-col sm:flex-row gap-4 text-sm mb-4">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-muted"><rect gray-500="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        <span>aaliyah@gmail.com</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-muted"><path gray-500="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>+966 456 8789</span>
                    </div>
                </div>
            </div>
        </div>

        <Card class="p-4" rounded="xl" shadow="none">
            <h3 class="leading-none font-semibold mb-3">Skills</h3>
            <div class="flex flex-wrap gap-2">
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Creative</div>
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Team Player</div>
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Communication</div>
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Critical Thinking</div>
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Customer Service</div>
                <div class="px-3 py-1.5 rounded-full border border-light text-sm text-muted hover:border-light transition-colors">Time Management</div>
            </div>
        </Card>

        <Card class="p-4" rounded="xl" shadow="none">
            <h3 class="leading-none font-semibold mb-3">Work Experience</h3>

            <div class="flex gap-4 items-start">
                <div class="w-12 h-12 bg-gray-200 shrink-0 rounded-lg"></div>
                <div class="flex-1">
                    <h4 class="font-semibold text-brand-primary-500">Coop Training</h4>
                    <p class="text-sm text-muted mb-4">Saudi Arabia | Jan 2023 - Jan 2024</p>
                    <div class="flex flex-col gap-y-3">
                        <div class="text-sm space-y-1">
                            <p class="font-medium">• Cyber Security Associate</p>
                            <p class="text-xs text-muted ml-2">May 2023 - Jan 2024</p>
                            <p class="text-xs text-muted ml-2">Enhanced IliniWatch by boosting high alert notifications...</p>
                            <p class="text-xs text-muted ml-2">Integrated third-party APIs to extract e-commerce platform user behavior records...</p>
                        </div>
                        <div class="text-sm space-y-1">
                            <p class="font-medium">• Cyber Security Associate</p>
                            <p class="text-xs text-muted ml-2">May 2023 - Jan 2024</p>
                            <p class="text-xs text-muted ml-2">Enhanced IliniWatch by boosting high alert notifications...</p>
                            <p class="text-xs text-muted ml-2">Integrated third-party APIs to extract e-commerce platform user behavior records...</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="border-b border-light pt-3 mb-3"></div>

            <div class="flex gap-4 items-start">
                <div class="w-12 h-12 bg-gray-200 shrink-0 rounded-lg"></div>
                <div class="flex-1">
                    <h4 class="font-semibold text-brand-primary-500">Coop Training</h4>
                    <p class="text-sm text-muted mb-4">Saudi Arabia | Jan 2023 - Jan 2024</p>
                    <div class="flex flex-col gap-y-3">
                        <div class="text-sm space-y-1">
                            <p class="font-medium">• Cyber Security Associate</p>
                            <p class="text-xs text-muted ml-2">May 2023 - Jan 2024</p>
                            <p class="text-xs text-muted ml-2">Enhanced IliniWatch by boosting high alert notifications...</p>
                            <p class="text-xs text-muted ml-2">Integrated third-party APIs to extract e-commerce platform user behavior records...</p>
                        </div>
                        <div class="text-sm space-y-1">
                            <p class="font-medium">• Cyber Security Associate</p>
                            <p class="text-xs text-muted ml-2">May 2023 - Jan 2024</p>
                            <p class="text-xs text-muted ml-2">Enhanced IliniWatch by boosting high alert notifications...</p>
                            <p class="text-xs text-muted ml-2">Integrated third-party APIs to extract e-commerce platform user behavior records...</p>
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    </div>
    <div class="space-y-6">
        <Card class="p-4" rounded="xl" shadow="none">
                <h3 class="mb-0 font-semibold">Profile Completion</h3>
            <div>
            <span class="text-4xl text-brand-primary-500 font-black mb-2 block">55%</span>
            <Progress end={55} />
            </div>
        </Card>
        <Card class="p-4" rounded="xl" shadow="none">
            <h3 class="mb-2 font-semibold">Personal Info</h3>

            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Date of Birth</span>
                    1 Jan, 2001
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Gender</span>
                    Male
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Nationality</span>
                    Bangladeshi
                </div>
            </div>

        </Card>
    </div>
</div>



<div class="grid grid-cols-3 gap-8">
    <div class="space-y-6">
        <Card class="px-6 pt-2 pb-6 space-y-6" rounded="xl" shadow="none">
            <div class="border border-blue-400 p-1 h-36 w-36 rounded-full">
                <div class="w-full h-full rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shrink-0"></div>
            </div>
            <div class="mb-6">
                <h3 class="text-2xl font-bold mb-1">Alex Johnson</h3>
                <p class="text-muted mb-3 font-medium">Full Stack Developer</p>
                <p class="text-sm text-muted">Passionate about building scalable web applications with modern technologies. 5+ years of experience in software development.</p>
            </div>
        </Card>
        <Card class="px-6 pt-2 pb-6 space-y-6" rounded="xl" shadow="none">
            <h3 class="mb-2 font-semibold">Personal Info</h3>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Address</span>
                    29, UNC street, Amlapara, Kushtia, Bangladesh - 7000
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Email</span>
                    mbp@gmail.com
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Mobile</span>
                    +880 1717 815 14
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Date of Birth</span>
                    1 Jan, 2001
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Gender</span>
                    Male
                </div>
            </div>
    
            <div class="flex gap-4 justify-start items-start text-sm">
                <span class="block h-8 w-8 bg-gray-100 rounded-sm shrink-0"></span>
                <div class="leading-4">
                    <span class="block text-muted/80 font-medium text-xs">Nationality</span>
                    Bangladeshi
                </div>
            </div>
        </Card>
    </div>
    <div class="col-span-2">
        <Tabs variant="tabs">
        {#snippet tabs()}
            <Tab>Experience</Tab>
            <Tab>Education</Tab>
            <Tab>Projects</Tab>
            <Tab>Others</Tab>
        {/snippet}
        <TabPanel>TabPanel 1</TabPanel>
        <TabPanel>TabPanel 2</TabPanel>
        <TabPanel>TabPanel 3</TabPanel>
        <TabPanel>TabPanel 4</TabPanel>
        </Tabs>
    </div>
</div>



<Card class="py-6" shadow="2xl" rounded="xl">
    <div class="grid auto-rows-min items-start gap-2 px-6">
        <div class="leading-none font-semibold">Profile Information</div>
    </div>
    <div class="px-6 space-y-6">
        <div class="flex items-start gap-4">
            <div class="h-24 w-24 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shrink-0"></div>
            <div class="flex-1 min-w-0">
                <h3 class="text-2xl font-bold mb-1">Alex Johnson</h3>
                <p class="text-muted mb-3">Full Stack Developer | React &amp; Node.js</p>
                <div class="space-y-1 text-sm">
                    <p>📍 San Francisco, CA</p>
                    <p>📧 alex.johnson@email.com</p>
                    <p>📱 +1 (555) 123-4567</p>
                </div>
            </div>
        </div>
        <div class="border-t border-light pt-4">
            <p class="text-sm text-muted">Passionate about building scalable web applications with modern technologies. 5+ years of experience in software development.</p>
        </div>
    </div>
</Card>