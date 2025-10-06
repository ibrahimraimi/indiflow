<script lang="ts">
	import { ArrowUpRight } from "@lucide/svelte";

	const profile = {
		title: "Indiflow",
		subtitle: "Your trusted financial partner",
		bio: `We're a team of dedicated financial experts committed to providing accessible, transparent, and stress-free lending solutions. Our mission is to empower individuals and businesses with the financial support they need to achieve their goals.`,
		vision: `We believe everyone deserves access to fair and flexible financial services. Our goal is to build lasting relationships with our customers by offering transparent terms, personalized support, and innovative lending solutions that adapt to your unique needs.`,
		outro: `Join thousands of satisfied customers who trust Indiflow for their financial needs. Let's help you achieve your dreams together.`,
		team: [
			{ id: "01", item: "Abayomi Olaoluwa", type: "HR/Admin Officer" },
			{ id: "02", item: "Promise Shadrach", type: "Head of Customer Support Executive" },
			{ id: "03", item: "Shobiye Oluwafunmilayo", type: "Customer Support Executive" },
			{ id: "04", item: "Abigail Abu", type: "Customer Support Executive" },
			{ id: "05", item: "Iromidayo Efotan", type: "Sales Manager" }
		]
	};
</script>

<section class="py-12 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex flex-col-reverse gap-8 md:flex-row md:gap-12">
			<!-- Sidebar -->
			<div class="w-full md:w-1/3 md:pr-4">
				<div class="sticky top-20 md:p-6">
					<div class="mb-8">
						<div class="mb-6 flex items-center gap-4">
							<div class="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
								<span class="text-primary text-2xl font-bold">SG</span>
							</div>
							<div>
								<h3 class="font-semibold">{profile.title}</h3>
								<p class="text-muted-foreground text-sm">
									{profile.subtitle}
								</p>
							</div>
						</div>
					</div>

					<nav>
						<div class="py-4">
							<a
								href="/contact"
								class="group flex p-0 text-start text-xl font-medium hover:bg-transparent sm:text-2xl"
							>
								<span class="border-border border-b-2 pb-0.5 transition-colors"> Contact Us </span>
								<ArrowUpRight
									class="ml-1 h-6 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</a>
						</div>
					</nav>
				</div>
			</div>

			<!-- Main Content -->
			<div class="w-full md:w-2/3 md:p-6">
				<div class="max-w-4xl">
					<h1 class="mb-12 text-5xl font-semibold md:text-6xl lg:text-7xl">About Us</h1>

					<div class="space-y-12">
						<p
							class="w-full text-xl font-medium leading-relaxed md:max-w-2xl md:text-2xl md:leading-[36px]"
						>
							{profile.bio}
						</p>

						<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
							<h2 class="text-xl font-medium md:text-2xl">Our Vision</h2>
							<p class="leading-relaxed">{profile.vision}</p>
						</div>

						<div class="my-12">
							<div class="bg-muted aspect-video overflow-hidden rounded-2xl">
								<img
									src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&h=675&fit=crop"
									alt="Indiflow team"
									class="h-full w-full object-cover"
								/>
							</div>
						</div>

						<div>
							<h2 class="mb-8 text-xl font-medium md:text-2xl">Our Team</h2>
							<div class="space-y-6">
								{#each profile.team as { id, item, type }}
									<div class="flex items-center justify-between border-b py-4">
										<div class="flex items-center gap-4">
											<span class="text-muted-foreground font-mono text-sm">
												{id}
											</span>
											<span class="text-sm md:text-base">{item}</span>
										</div>
										<span class="text-muted-foreground text-xs md:text-sm">
											{type}
										</span>
									</div>
								{/each}
							</div>
						</div>

						<div class="mt-16">
							<p class="leading-relaxed">{profile.outro}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
