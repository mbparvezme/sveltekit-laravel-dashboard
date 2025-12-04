<script lang="ts">
    import type { Snippet } from "svelte";
    let {children, title, subtitle} : {children?: Snippet, title: string, subtitle?: string} = $props();
</script>

<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div>
        <h2 class="text-3xl font-bold tracking-tight text-balance">{@html title}</h2>
        {#if subtitle}
        <p class="text-muted mt-2">{@html subtitle}</p>
        {/if}
    </div>
    {#if children}
        <div class="flex gap-2">
            {@render children?.()}
        </div>
    {/if}
</div>