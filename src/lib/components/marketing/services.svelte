<script>
	import {
		Zap,
		Fingerprint,
		Calendar1,
		ChartLine,
		HeartHandshake,
		Lightbulb
	} from "@lucide/svelte";
</script>

<section class="py-12 md:py-20" id="services">
	<div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-balance text-4xl font-medium lg:text-5xl">
				The foundation for stress-free lending
			</h2>
			<p>
				Indiflow is more than just another loan service. We provide simple, transparent, and
				reliable tools to help you access funds and manage repayments with ease.
			</p>
		</div>

		<div
			class="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3"
		>
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<Zap class="size-4" />
					<h3 class="text-sm font-medium">Fast Approval</h3>
				</div>
				<p class="text-sm">Get your loan approved in hours, not weeks.</p>
			</div>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<Calendar1 class="size-4" />
					<h3 class="text-sm font-medium">Flexible Repayment</h3>
				</div>
				<p class="text-sm">Choose repayment schedules that fit your lifestyle.</p>
			</div>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<Fingerprint class="size-4" />

					<h3 class="text-sm font-medium">Secure & Trusted</h3>
				</div>
				<p class="text-sm">Your data and transactions are safe with bank-level security.</p>
			</div>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<Lightbulb class="size-4" />
					<h3 class="text-sm font-medium">Transparent Fees</h3>
				</div>
				<p class="text-sm">No hidden charges, see exactly what you pay.</p>
			</div>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<ChartLine class="size-4" />
					<h3 class="text-sm font-medium">Credit Growth</h3>
				</div>
				<p class="text-sm">Build your credit history with every successful repayment.</p>
			</div>
			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<HeartHandshake class="size-4" />
					<h3 class="text-sm font-medium">24/7 Support</h3>
				</div>
				<p class="text-sm">Our team is always ready to guide you through the process.</p>
			</div>
		</div>
	</div>
</section>
