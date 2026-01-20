<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import NavBar from "./NavBar/NavBar.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<dev
	class="neumorphic-bg min-h-screen overflow-hidden flex flex-col font-display"
>
	<NavBar />
	
	{@render children()}
</dev>

<style language="postcss">
	@import "tailwindcss";
</style>
