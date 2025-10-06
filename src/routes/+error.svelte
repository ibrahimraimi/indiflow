<script lang="ts">
	import { goto } from '$app/navigation';
	import { Server } from '@lucide/svelte';

	import Button from '$lib/components/ui/button/button.svelte';

	interface Action {
		label: string;
		onClick?: () => void;
		href?: string;
	}

	export let action: Action = {
		label: 'Return to Home',
		href: '/'
	};

	export let showCode: boolean = true;

	function handleAction() {
		if (action.onClick) {
			action.onClick();
		} else if (action.href) {
			goto(action.href);
		}
	}
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-6">
	<div class="w-full max-w-md text-center">
		<div class="mx-auto mb-6">
			<Server class="mx-auto h-12 w-12 text-red-200" strokeWidth={1.5} />
		</div>
		{#if showCode}
			<div class="mb-4">
				<h1 class="text-8xl font-bold text-red-500">500</h1>
				<div class="mx-auto my-6 h-1 w-16 bg-gray-200"></div>
			</div>
		{/if}
		<div class="mb-8 space-y-4">
			<h2 class="text-3xl font-bold tracking-tight">Grace, We Have a Problem</h2>
			<p class="text-gray-500">
				Our server is having a bit of a meltdown. Don't worry, our team of experts is on it. Please
				try again later.
			</p>
		</div>
		<Button onclick={handleAction} variant="outline" size="lg" class="w-full cursor-pointer">
			{action.label}
		</Button>
	</div>
</div>
