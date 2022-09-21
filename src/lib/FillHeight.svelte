<script lang="ts">
	import { onMount } from 'svelte';

	let vh: number;

	onMount(() => {
		document.body.style.padding = '0';
		document.body.style.margin = '0';
		handleViewportSize();
	});

	function handleViewportSize() {
		vh = window.innerHeight * 0.01;
	}
</script>

<svelte:window on:resize={handleViewportSize} />

<div class="app" style="--vh: {vh}px; height: calc(var(--vh, 1vh) * 100);">
	<slot />
</div>

<style>
	.app {
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
	}
</style>
