<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from '$app/state';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<style language="postcss">
	@import "tailwindcss";
</style>

<dev
  class="neumorphic-bg min-h-screen overflow-hidden flex flex-col font-display"
>
  <header class="flex items-center justify-between px-8 py-5 z-50"></header>
  <div class="flex items-center gap-12">
    <div class="flex items-center gap-3 text-primary">
      <div class="size-9 p-1.5 neumorphic-raised rounded-lg">
        <svg
          class="w-full h-full"
          fill="none"
          viewbox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
          <path
            clip-rule="evenodd"
            d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
      <h2 class=" text-2xl font-bold tracking-tight">red_string</h2>
    </div>
    <nav class="hidden lg:flex items-center gap-6">
      <a
        class="nav-item-neumorphic px-5 py-2 rounded-xl text-primary text-sm font-bold"
		class:active={page.url.pathname === '/new'}
        href="/new">New Path</a>
      <a
        class="nav-item-neumorphic px-5 py-2 rounded-xl text-primary text-sm font-bold"
        href="/">Curriculum</a>
      <a
        class="text-gray-500 text-sm font-medium px-5 py-2 hover:text-gray-800 transition-colors"
        href="/">Resources</a>
      <a
        class="text-gray-500 text-sm font-medium px-5 py-2 hover:text-gray-800 transition-colors"
        href="/">Community</a>
    </nav>
  </div>
  {@render children()}
</dev>
