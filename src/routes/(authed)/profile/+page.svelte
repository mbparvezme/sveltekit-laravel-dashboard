<script lang="ts">
  import { Button, Card, Tab, Tabs, TabPanel } from "theui-svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

<Heading title="Profile">
  <Button size="xs" outline shadow="none" class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
  </Button>
</Heading>

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
        <!-- </Card>
        <Card class="px-6 pt-2 pb-6 space-y-6" rounded="xl" shadow="none"> -->
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