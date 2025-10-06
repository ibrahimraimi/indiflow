<script lang="ts">
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */

	let { children } = $props();
</script>

<div class="grid min-h-svh lg:grid-cols-2">
	<div class="flex flex-col gap-4 p-6 md:p-10">
		<div class="flex justify-center gap-2 md:justify-start">
			<a href="/" class="flex items-center gap-2 font-medium">Indiflow.</a>
		</div>
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-xl">
				{@render children?.()}
			</div>
		</div>
	</div>
	<div class="bg-muted relative hidden lg:block">
		<img
			src="/images/placeholder.jpg"
			alt="placeholder"
			class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>
