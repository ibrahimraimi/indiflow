<script lang="ts">
	import { run } from "svelte/legacy";
	import { goto } from "$app/navigation";

	import { enhance } from "$app/forms";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";

	import { toast } from "svelte-sonner";

	let { form } = $props();

	let loading: boolean = $state();

	const submitSignInUser = () => {
		loading = true;
		return async ({ update }) => {
			await update({ reset: false });
		};
	};

	run(() => {
		if (form?.errorMessage) {
			toast.error(form?.errorMessage);
			loading = false;
		}
	});

	run(() => {
		if (form?.redirectUrl) goto(form?.redirectUrl);
	});
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex w-full flex-col items-center justify-center">
	<form
		class="mb-4 w-full max-w-[300px] space-y-4 md:max-w-[360px]"
		use:enhance={submitSignInUser}
		method="POST"
	>
		<div class="mb-1 w-full">
			<div class="text-center">
				<h1 class="text-title mb-1 mt-4 text-xl font-semibold">Sign In to Indiflow</h1>
				<p class="text-muted-foreground text-sm">Welcome back! Sign in to continue</p>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="email" class="text-sm font-medium">Email</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					name="id"
					id="email"
					placeholder="Enter email address"
					required
					type="email"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="password" class="text-sm font-medium">Password</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					name="password"
					id="password"
					placeholder="Enter your password"
					required
					type="password"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Button class="h-10 w-full" type="submit">
					<span>Log in</span>
					{#if loading}
						<svg class="ml-2 size-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
								fill="currentColor"
							>
								<animateTransform
									attributeName="transform"
									dur="0.75s"
									repeatCount="indefinite"
									type="rotate"
									values="0 12 12;360 12 12"
								/>
							</path>
						</svg>
					{/if}
				</Button>
			</div>
		</div>
	</form>
	<div class="flex w-full justify-center text-center">
		<p class="text-sm text-gray-600">
			Don't have an account? <a class="text-primary font-medium underline" href="/signup"
				>Create account</a
			>
		</p>
	</div>
</div>
