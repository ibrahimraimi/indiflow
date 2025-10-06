<script lang="ts">
	import "$styles/app.css";
	import "@fontsource-variable/inter";

	import { Toaster } from "$lib/components/ui/sonner";

	let { data, children } = $props();
</script>

<Toaster position="bottom-left" richColors />

{@render children?.()}
