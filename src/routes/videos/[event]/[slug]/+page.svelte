<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svelte:head>
  <title>Videos | Creatorsgarten</title>
</svelte:head>

<div class="cg-container min-h-[80vh]">
  <div class="mt-16">
    <iframe
      title="YouTube video player"
      src="https://www.youtube.com/embed/{data.video.data.youtube}"
      class="aspect-video w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
  <div class="prose max-w-none">
    <h2 class="mt-16 text-3xl font-semibold md:text-4xl">{data.video.data.title}</h2>
    <div class="lead">
      <p class="whitespace-pre-line">{data.video.data.description}</p>
    </div>
  </div>
</div>
