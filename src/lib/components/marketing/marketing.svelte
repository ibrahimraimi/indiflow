<script>
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import Button from "$lib/components/ui/button/button.svelte";

	import Cta from "./cta.svelte";
	import Faq from "./faq.svelte";
	import Team from "./team.svelte";
	import Services from "./services.svelte";
	import HowItWorks from "./how-it-works.svelte";
	import Testimonials from "./testimonials.svelte";
	import SiteHeader from "$lib/layout/header/site-header.svelte";
	import SiteFooter from "$lib/layout/footer/site-footer.svelte";
</script>

<div>
	<SiteHeader />
	<main class="overflow-hidden">
		<div class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
			<div
				class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
			></div>
			<div
				class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
			></div>
			<div
				class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
			></div>
		</div>
		<section>
			<div class="relative pt-24 md:pt-36">
				<div
					class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
				></div>
				<div class="mx-auto max-w-7xl px-6">
					<div class="text-center sm:mx-auto lg:mr-auto lg:mt-0">
						<div>
							<a
								href="#link"
								class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
							>
								<span class="text-foreground text-sm">Introducing Quick & Easy Access to Loans</span
								>
								<span
									class="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
								></span>
								<div
									class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
								>
									<div
										class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
									>
										<span class="flex size-6">
											<ArrowRight class="m-auto size-3" />
										</span>
										<span class="flex size-6">
											<ArrowRight class="m-auto size-3" />
										</span>
									</div>
								</div>
							</a>
						</div>
						<h1 class="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
							Smart Loans for Your Financial Growth
						</h1>
						<p class="mx-auto mt-8 max-w-2xl text-balance text-lg">
							Flexible, transparent, and hassle-free loans designed to meet your needs. Apply
							online, track repayments, and secure your future with confidence.
						</p>
						<div class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
							<div class="p-0.5" style="border-radius: calc(0.5rem + 0.125rem + 4px);">
								<Button href="#link" size="lg" class="rounded-xl px-5 text-base">
									<span class="text-nowrap">Apply for a Loan</span>
								</Button>
							</div>
							<Button size="lg" href="#" variant="ghost" class="rounded-xl px-5"
								>Check Eligibility</Button
							>
						</div>
					</div>
				</div>
				<div class="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
					<div
						class="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
					></div>
					<div
						class="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15"
					>
						<img
							class="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
							src=""
							alt="app screen"
							width="2700"
							height="1440"
						/>
						<img
							class="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
							src="https://sv-blocks.vercel.app/mail2-light.png"
							alt="app screen"
							width="2700"
							height="1440"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Services Section -->
		<Services />

		<!-- How It Works Section -->
		<HowItWorks />

		<!-- Testimonlial Section-->
		<Testimonials />

		<!-- Team Section -->
		<Team />

		<!-- Call to Action Section -->
		<Cta />

		<!-- FAQ Section -->
		<Faq />
	</main>

	<!-- Footer Section -->
	<SiteFooter />
</div>
