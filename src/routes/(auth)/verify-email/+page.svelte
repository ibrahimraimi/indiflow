<script lang="ts">
	import { onMount } from "svelte";

	let email: string | null = $state(null);

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		email = urlParams.get("email");
	});
</script>

<svelte:head>
	<title>Verify email</title>
</svelte:head>

<div class="flex w-full flex-col items-center justify-center">
	<div class="mb-4 w-full max-w-[300px] space-y-6 text-center md:max-w-[360px]">
		<h1 class="text-xl font-semibold">Verify your email</h1>
		<p class="break">
			A verification email has been sent to you.<br /> Please click the link to verify your email.
		</p>
		{#if email}
			<div class="text-muted-foreground">
				<p class="text-xs">You registered with:</p>
				<p class="text-ling-400 text-sm">{email}</p>
			</div>
		{/if}
	</div>
	<a
		href="/login"
		class="text-muted-foreground flex items-center justify-center gap-1.5 text-xs underline underline-offset-4"
		>Go to Login</a
	>
</div>
