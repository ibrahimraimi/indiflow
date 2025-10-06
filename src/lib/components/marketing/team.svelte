<script>
	const members = [
		{
			name: "Liam Brown",
			role: "Founder - CEO",
			avatar: "https://alt.tailus.io/images/team/member-one.webp",
			link: "#"
		},
		{
			name: "Elijah Jones",
			role: "Co-Founder - CTO",
			avatar: "https://alt.tailus.io/images/team/member-two.webp",
			link: "#"
		},
		{
			name: "Isabella Garcia",
			role: "Sales Manager",
			avatar: "https://alt.tailus.io/images/team/member-three.webp",
			link: "#"
		},
		{
			name: "Henry Lee",
			role: "UX Engeneer",
			avatar: "https://alt.tailus.io/images/team/member-four.webp",
			link: "#"
		},
		{
			name: "Ava Williams",
			role: "Interaction Designer",
			avatar: "https://alt.tailus.io/images/team/member-five.webp",
			link: "#"
		},
		{
			name: "Olivia Miller",
			role: "Visual Designer",
			avatar: "https://alt.tailus.io/images/team/member-six.webp",
			link: "#"
		}
	];
</script>

<section class="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
	<div class="mx-auto max-w-5xl px-6">
		<div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
			<h2 class="text-balance text-4xl font-medium lg:text-5xl">Our dream team</h2>
			<p class="text-muted-foreground">
				The people behind Indiflow are passionate about helping you achieve financial freedom
				with transparency and trust.
			</p>
		</div>
		<div class="mt-12 md:mt-24">
			<div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
				{#each members as member, index}
					<div class="group overflow-hidden">
						<img
							class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
							src={member.avatar}
							alt="team member"
							width="826"
							height="1239"
						/>
						<div class="px-2 pt-2 sm:pb-0 sm:pt-4">
							<div class="flex justify-between">
								<h3
									class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider"
								>
									{member.name}
								</h3>
								<span class="text-xs">_0{index + 1}</span>
							</div>
							<div class="mt-1 flex items-center justify-between">
								<span
									class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
									>{member.role}</span
								>
								<a
									href={member.link}
									class="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
								>
									{" "}
									Linktree
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
