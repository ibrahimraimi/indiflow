<script lang="ts">
	import { Avatar, AvatarImage } from "$lib/components/ui/avatar";
	import * as Carousel from "$lib/components/ui/carousel";

	const testimonials = [
		{
			name: "Adewale Johnson",
			content:
				"Indiflow made getting my business loan incredibly easy. The application process was straightforward, and I received approval within hours. The flexible repayment terms have been a lifesaver for managing my cash flow.",
			avatar: "https://i.pravatar.cc/150?img=12",
			role: "Small Business Owner"
		},
		{
			name: "Chioma Okonkwo",
			content:
				"I needed emergency funds for a medical situation, and Indiflow came through when I needed it most. The transparent fee structure meant no surprises, and their customer support team was incredibly helpful throughout the process.",
			avatar: "https://i.pravatar.cc/150?img=45",
			role: "Healthcare Professional"
		},
		{
			name: "Ibrahim Hassan",
			content:
				"As a first-time borrower, I was nervous about taking out a loan. Indiflow's team walked me through every step, answered all my questions, and made me feel confident in my decision. Highly recommend their services!",
			avatar: "https://i.pravatar.cc/150?img=33",
			role: "Entrepreneur"
		},
		{
			name: "Grace Adeola",
			content:
				"The speed and efficiency of Indiflow is unmatched. I applied in the morning and had funds in my account by the afternoon. Their credit-building program has also helped me improve my financial standing.",
			avatar: "https://i.pravatar.cc/150?img=47",
			role: "Marketing Manager"
		},
		{
			name: "Emeka Nwankwo",
			content:
				"What sets Indiflow apart is their genuine care for customers. They worked with me to find a repayment plan that fit my budget, and their 24/7 support has been there whenever I had questions. True to their name!",
			avatar: "https://i.pravatar.cc/150?img=51",
			role: "IT Consultant"
		},
		{
			name: "Fatima Bello",
			content:
				"I've used other loan services before, but Indiflow is by far the best. No hidden fees, fast approval, and a user-friendly platform. They've earned my trust and my recommendation to friends and family.",
			avatar: "https://i.pravatar.cc/150?img=26",
			role: "Retail Manager"
		}
	];
</script>

<section class="py-12 md:py-20">
	<div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-balance text-4xl font-medium lg:text-5xl">What Our Customers Say</h2>
			<p class="text-muted-foreground">
				Real stories from people who trusted Indiflow with their financial needs.
			</p>
		</div>

		<div class="relative mx-auto max-w-4xl">
			<Carousel.Root class="w-full">
				<Carousel.Content>
					{#each testimonials as testimonial, index (index)}
						<Carousel.Item>
							<div class="border p-8 sm:p-12">
								<div class="space-y-6">
									<div class="flex items-center gap-4">
										<Avatar class="size-12">
											<AvatarImage src={testimonial.avatar} alt={testimonial.name} />
										</Avatar>
										<div class="text-left">
											<h3 class="text-lg font-semibold">{testimonial.name}</h3>
											<p class="text-muted-foreground text-sm">{testimonial.role}</p>
										</div>
									</div>
									<p class="text-muted-foreground leading-relaxed">
										"{testimonial.content}"
									</p>
								</div>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>

				<div class="mt-8 flex items-center justify-center gap-4">
					<Carousel.Previous class="static translate-y-0" />
					<div class="relative flex h-10 w-[100px] items-center justify-center overflow-hidden">
						<svg height="1" class="absolute h-1 w-full" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.63721 1.62573H1125.26"
								stroke="currentColor"
								stroke-opacity="0.2"
								stroke-width="1.40102"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-dasharray="5.6 8.41"
							/>
						</svg>
					</div>
					<Carousel.Next class="static translate-y-0" />
				</div>
			</Carousel.Root>
		</div>
	</div>
</section>

<style>
	/* Optional: Add smooth transitions for carousel items */
	:global([data-carousel-item]) {
		transition: opacity 0.3s ease-in-out;
	}
</style>
