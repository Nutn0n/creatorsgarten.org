<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>Videos | Creatorsgarten</title>
</svelte:head>

<div class="cg-container min-h-[80vh]">
  <div class="prose max-w-none">
    <h2 class="mt-16 text-3xl font-semibold md:text-4xl">Videos</h2>
    <div class="lead">
      <p>Meetup videos recorded by Creatorsgarten.</p>
    </div>
    <hr />
    <div class="not-prose flex flex-wrap gap-x-2 gap-y-4">
      {#each data.videos as video}
        <a href="/videos/{video.event}/{video.slug}">
          <div class="flex w-[210px] flex-col">
            <div class="relative aspect-video overflow-hidden bg-slate-500">
              {#if video.imageFilePath}
                <img
                  src="https://raw.githubusercontent.com/creatorsgarten/videos/main/{video.imageFilePath}"
                  alt="Video thumbnail"
                  class="absolute inset-0 object-cover"
                />
              {/if}
            </div>
            {video.data.title}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
