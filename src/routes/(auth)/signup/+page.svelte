<script lang="ts">
	import { run } from "svelte/legacy";
	import { enhance } from "$app/forms";
	import type { HTMLFormAttributes } from "svelte/elements";

	import { toast } from "svelte-sonner";
	import { Turnstile } from "svelte-turnstile";

	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";

	import { cn, type WithElementRef } from "$lib/utils.js";

	let { form } = $props();

	let loading: boolean = $state(false);
	let firstname: string | undefined = $state("");
	let lastname: string | undefined = $state("");
	let email: string | undefined = $state("");
	let phone: string | undefined = $state("");
	let password: string | undefined = $state("");
	let confirmPassword: string | undefined = $state("");

	let reset: (() => void) | undefined = $state(undefined);
	let ctVerified: boolean = $state(false);

	const submitSignupUser = () => {
		loading = true;
		reset?.();
		ctVerified = false;
	};

	const ctCallback = () => {
		ctVerified = true;
	};

	run(() => {
		if (form?.errorMessage) {
			toast.error(form?.errorMessage);
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Sign Up</title>
</svelte:head>

<div class="flex w-full flex-col items-center justify-center">
	<form
		autocomplete="off"
		class="mb-4 w-full max-w-[300px] space-y-4 md:max-w-[360px]"
		method="POST"
		use:enhance={submitSignupUser}
	>
		<div class="mb-1 w-full">
			<div class="text-center">
				<h1 class="text-title mb-1 mt-4 text-xl font-semibold">Create a Indiflow Account</h1>
				<p class="text-muted-foreground text-sm">Welcome! Create an account to get started</p>
			</div>

			<div class="mt-6 grid grid-cols-2 gap-3">
				<div class="space-y-2">
					<Label for="firstname" class="text-sm font-medium">Firstname</Label>
					<Input
						type="text"
						bind:value={firstname}
						required
						name="firstname"
						id="firstname"
						placeholder="Firstname"
						class="h-10"
					/>
				</div>
				<div class="space-y-2">
					<Label for="lastname" class="text-sm font-medium">Lastname</Label>
					<Input
						type="text"
						bind:value={lastname}
						required
						name="lastname"
						id="lastname"
						placeholder="Lastname"
						class="h-10"
					/>
				</div>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="email" class="text-sm font-medium">Email</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					bind:value={email}
					name="email"
					id="email"
					placeholder="Enter email address"
					required
					type="email"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="phone" class="text-sm font-medium">Phone Number</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					bind:value={phone}
					name="phone"
					id="phone"
					placeholder="Enter phone number"
					required
					type="tel"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="password" class="text-sm font-medium">Password</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					bind:value={password}
					name="password"
					id="password"
					placeholder="Enter password"
					required
					type="password"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Label for="confirmPassword" class="text-sm font-medium">Confirm Password</Label>
				<Input
					autocomplete="off"
					autocorrect="off"
					bind:value={confirmPassword}
					name="passwordConfirm"
					id="confirmPassword"
					placeholder="Enter the password again"
					required
					type="password"
					class="h-10"
				/>
			</div>

			<div class="mt-4 space-y-2">
				<Button
					class="h-10 w-full"
					disabled={!ctVerified ||
						!password ||
						!phone ||
						!email ||
						password.length < 8 ||
						password !== confirmPassword}
					type="submit"
				>
					<span>Create account</span>
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

				<div class="mx-auto mt-4 h-[65px]">
					<Turnstile
						size="flexible"
						bind:reset
						on:callback={ctCallback}
						siteKey="0x4AAAAAAAeyH75n6ODlvEKX"
						theme="light"
					/>
				</div>
			</div>
		</div>
	</form>

	<div class="flex w-full justify-center text-center">
		<p class="text-sm text-gray-600">
			Already have an account? <a class="text-primary font-medium underline" href="/login"
				>Login instead</a
			>
		</p>
	</div>
</div>
