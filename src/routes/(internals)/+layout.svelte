<script lang="ts">
	import SiteFooter from "$lib/layout/footer/site-footer.svelte";
	import SiteHeader from "$lib/layout/header/site-header.svelte";

	interface Props {
		children?: import("svelte").Snippet;
		maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl" | "full";
		centerContent?: boolean;
	}

	let { children, maxWidth = "7xl", centerContent = true }: Props = $props();

	// Map maxWidth prop to Tailwind classes
	const maxWidthClasses = {
		sm: "max-w-screen-sm",
		md: "max-w-screen-md",
		lg: "max-w-screen-lg",
		xl: "max-w-screen-xl",
		"2xl": "max-w-screen-2xl",
		"4xl": "max-w-[1440px]",
		"6xl": "max-w-[1920px]",
		"7xl": "max-w-[2560px]",
		full: "max-w-full"
	};
</script>

<main>
	<SiteHeader />
	{@render children?.()}
	<SiteFooter />
</main>
