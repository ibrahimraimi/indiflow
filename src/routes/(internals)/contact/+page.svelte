<script lang="ts">
	import { Mail, MapPin, Phone, Clock } from "@lucide/svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";

	interface ContactInfo {
		icon: any;
		title: string;
		description: string;
		value: string;
		href: string;
	}

	const contactInfo: ContactInfo[] = [
		{
			icon: Mail,
			title: "Email",
			description: "Get a response within 24 hours",
			value: "hello@savinggrace.com",
			href: "mailto:hello@savinggrace.com"
		},
		{
			icon: Phone,
			title: "Phone",
			description: "Mon-Fri, 9AM-6PM WAT",
			value: "+234 (0) 123-4567",
			href: "tel:+2340123456789"
		},
		{
			icon: MapPin,
			title: "Office",
			description: "Visit us in person",
			value: "123 Victoria Island, Lagos",
			href: "#"
		}
	];

	let formData = $state({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		agreeToTerms: false
	});

	let isSubmitting = $state(false);
	let submitStatus = $state<"idle" | "success" | "error">("idle");

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = "idle";

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Simulate success
		const success = Math.random() > 0.2;
		submitStatus = success ? "success" : "error";
		isSubmitting = false;

		if (success) {
			formData = {
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
				agreeToTerms: false
			};
		}
	};
</script>

<section class="py-12 md:py-20">
	<div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
		<!-- Header -->
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-balance text-4xl font-medium lg:text-5xl">Get in Touch</h2>
			<p class="text-muted-foreground">
				Have questions about our loan services? Our team is ready to help you find the perfect
				financial solution.
			</p>
		</div>

		<div class="relative mx-auto max-w-4xl">
			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Contact Information -->
				<div class="space-y-4">
					{#each contactInfo as info}
						<div class="border p-6">
							<div class="flex items-start gap-4">
								<div class="flex size-10 flex-shrink-0 items-center justify-center">
									<svelte:component this={info.icon} class="size-5" />
								</div>
								<div class="min-w-0 flex-1 space-y-1">
									<h3 class="text-sm font-medium">{info.title}</h3>
									<p class="text-muted-foreground text-sm">{info.description}</p>
									<a href={info.href} class="text-sm font-medium transition-colors hover:underline">
										{info.value}
									</a>
								</div>
							</div>
						</div>
					{/each}

					<!-- Office Hours Card -->
					<div class="border p-6">
						<div class="flex items-start gap-4">
							<div class="flex size-10 flex-shrink-0 items-center justify-center">
								<Clock class="size-5" />
							</div>
							<div class="min-w-0 flex-1 space-y-3">
								<h3 class="text-sm font-medium">Office Hours</h3>
								<div class="text-muted-foreground space-y-2 text-sm">
									<div class="flex justify-between">
										<span>Monday - Friday</span>
										<span class="font-medium">9:00 AM - 6:00 PM</span>
									</div>
									<div class="flex justify-between">
										<span>Saturday</span>
										<span class="font-medium">10:00 AM - 4:00 PM</span>
									</div>
									<div class="flex justify-between">
										<span>Sunday</span>
										<span class="font-medium">Closed</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="border p-6 sm:p-8">
					<div class="mb-6 space-y-2">
						<h3 class="text-lg font-semibold">Send us a message</h3>
						<p class="text-muted-foreground text-sm">
							Fill out the form below and we'll get back to you within 24 hours.
						</p>
					</div>

					<form onsubmit={handleSubmit} class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="firstName" class="text-sm font-medium">First Name *</Label>
								<Input id="firstName" bind:value={formData.firstName} placeholder="John" required />
							</div>
							<div class="space-y-2">
								<Label for="lastName" class="text-sm font-medium">Last Name *</Label>
								<Input id="lastName" bind:value={formData.lastName} placeholder="Doe" required />
							</div>
						</div>

						<div class="space-y-2">
							<Label for="email" class="text-sm font-medium">Email Address *</Label>
							<Input
								id="email"
								type="email"
								bind:value={formData.email}
								placeholder="john@example.com"
								required
							/>
						</div>

						<div class="space-y-2">
							<Label for="phone" class="text-sm font-medium">Phone Number</Label>
							<Input
								id="phone"
								type="tel"
								bind:value={formData.phone}
								placeholder="+234 (0) 123-4567"
							/>
						</div>

						<div class="space-y-2">
							<Label for="message" class="text-sm font-medium">Message *</Label>
							<Textarea
								id="message"
								bind:value={formData.message}
								placeholder="Tell us how we can help you..."
								rows={4}
								required
								class="resize-none"
							/>
						</div>

						<div class="flex items-start space-x-3">
							<Checkbox id="agreeToTerms" bind:checked={formData.agreeToTerms} required />
							<Label for="agreeToTerms" class="text-muted-foreground text-sm leading-relaxed">
								I agree to the{" "}
								<a href="/terms" class="text-primary font-medium hover:underline">
									Terms of Service
								</a>
								{" "}and{" "}
								<a href="/privacy" class="text-primary font-medium hover:underline">
									Privacy Policy
								</a>
							</Label>
						</div>

						{#if submitStatus === "success"}
							<div
								class="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950"
							>
								<svg
									class="size-5 text-green-600 dark:text-green-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="text-sm font-medium text-green-800 dark:text-green-200">
									Message sent successfully!
								</span>
							</div>
						{/if}

						{#if submitStatus === "error"}
							<div
								class="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950"
							>
								<svg
									class="size-5 text-red-600 dark:text-red-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span class="text-sm font-medium text-red-800 dark:text-red-200">
									Something went wrong. Please try again.
								</span>
							</div>
						{/if}

						<Button type="submit" disabled={isSubmitting || !formData.agreeToTerms} class="w-full">
							{#if isSubmitting}
								<div class="flex items-center gap-2">
									<div
										class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
									/>
									Sending...
								</div>
							{:else}
								Submit
							{/if}
						</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
