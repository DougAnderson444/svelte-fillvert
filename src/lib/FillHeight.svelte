<script>
	import { onMount } from 'svelte';

	/**
	 * @type {number}
	 */
	let vh;

	onMount(() => {
		document.body.style.padding = '0';
		document.body.style.margin = '0';
		handleViewportSize();
	});

	function handleViewportSize(_) {
		vh = window.innerHeight * 0.01;
		console.log('vh', vh);
	}
</script>

<svelte:window on:resize={handleViewportSize} />

<div class="app" style="--vh: {vh}px; height: calc(var(--vh, 1vh) * 100);">
	<slot />
</div>

<style>
	.app {
		height: 100vh; /* Fallback for browsers that do not support Custom Properties */
		display: flex;
		flex-direction: column;
	}
</style>
