<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<section class="py-12 md:py-20" id="how-it-works">
	<div class="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-balance text-4xl font-medium lg:text-5xl">How It Works</h2>
			<p class="text-muted-foreground">
				Getting a loan with Indiflow is simple and stress-free — just four easy steps to access the
				funds you need.
			</p>
		</div>

		<div class="relative mx-auto max-w-7xl border">
			<div class="p-8 sm:p-12">
				<div class="flex gap-4 sm:flex-col">
					<!-- Timeline content -->
					<div class="grid w-full gap-10 sm:grid-cols-4">
						<!-- Step 1: Create Account -->
						<div class="flex h-full flex-col justify-between gap-4">
							<div class="flex flex-col">
								<div
									class="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium"
								>
									<span class="bg-background grid h-full place-items-center px-2">01</span>
								</div>
								<h3 class="mt-5 text-sm font-medium">Sign Up & Create Your Account</h3>
								<p class="text-muted-foreground mt-2 text-sm">
									Open an account in minutes. Provide your basic details and verify your identity to
									get started.
								</p>
							</div>
						</div>

						<!-- Step 2: Get Approved -->
						<div class="flex h-full flex-col justify-between gap-4">
							<div class="flex flex-col">
								<div
									class="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium"
								>
									<span class="bg-background grid h-full place-items-center px-2">02</span>
								</div>
								<h3 class="mt-5 text-sm font-medium">Apply for a Loan</h3>
								<p class="text-muted-foreground mt-2 text-sm">
									Choose how much you need and your repayment period. We’ll show you the breakdown
									instantly.
								</p>
							</div>
						</div>

						<!-- Step 3: Receive Funds -->
						<div class="flex h-full flex-col justify-between gap-4">
							<div class="flex flex-col">
								<div
									class="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium"
								>
									<span class="bg-background grid h-full place-items-center px-2">03</span>
								</div>
								<h3 class="mt-5 text-sm font-medium">Get Approved Instantly</h3>
								<p class="text-muted-foreground mt-2 text-sm">
									Most applications are approved within minutes based on your profile and credit
									standing.
								</p>
							</div>
						</div>

						<!-- Step 4: Receive Funds -->
						<div class="flex h-full flex-col justify-between gap-4">
							<div class="flex flex-col">
								<div
									class="bg-border border-border flex h-8 w-fit items-center gap-px overflow-hidden rounded-md border text-sm font-medium"
								>
									<span class="bg-background grid h-full place-items-center px-2">04</span>
								</div>
								<h3 class="mt-5 text-sm font-medium">Receive Funds Securely</h3>
								<p class="text-muted-foreground mt-2 text-sm">
									Your loan is deposited directly into your bank account — safe and fast.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Mobile: Top to bottom animation */
	@keyframes timeline-reveal-mobile {
		from {
			clip-path: inset(0 0 100% 0);
		}
		to {
			clip-path: inset(0% 0 0 0);
		}
	}

	/* Desktop: Left to right animation */
	@keyframes timeline-reveal-desktop {
		from {
			clip-path: inset(0 100% 0 0);
		}
		to {
			clip-path: inset(0 0% 0 0);
		}
	}

	:global(.animate-timeline-reveal) {
		animation: timeline-reveal-mobile 5s linear;
	}

	@media (min-width: 640px) {
		:global(.animate-timeline-reveal) {
			animation: timeline-reveal-desktop 5s linear;
		}
	}
</style>
