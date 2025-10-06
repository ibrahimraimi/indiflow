<script lang="ts">
	import { scrollY } from "svelte/reactivity/window";

	import { PUBLIC_DATABASE } from "$env/static/public";

	import X from "@lucide/svelte/icons/x";
	import Menu from "@lucide/svelte/icons/menu";

	import * as Avatar from "$lib/components/ui/avatar";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	import { getUserType } from "$lib/helpers/user-helper";
	import { page } from "$app/stores";

	let menuItems = [
		{ name: "Services", href: "#services" },
		{ name: "How It Works", href: "#how-it-works" },
		{ name: "Rates & Fees", href: "#pricing" },
		{ name: "About Us", href: "/about" },
		{ name: "Contact Us", href: "/contact" }
	];

	let menuState = $state(false);
	let isScrolled = $derived.by(() => {
		if (scrollY.current !== undefined && scrollY.current > 50) {
			return true;
		}
		return false;
	});

	let userType: string | undefined = $derived.by(() => getUserType($page.data.user));
	console.log("Header user", $page.data.user);
	console.log("User type:", userType);

	export function getInitials(name?: string): string {
		if (!name) return "??";

		const parts = name.trim().split(" ");
		if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

		return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
	}

	export const getAvatar = (user: any) => {
		if (!user.avatar) return "";
		return `${PUBLIC_DATABASE}/api/files/${user.collectionName}/${user.id}/${user.avatar}`;
	};
</script>

<header>
	<nav
		class="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
	>
		<div class="m-auto max-w-5xl px-6">
			<div class="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
				<div class="flex w-full justify-between lg:w-auto">
					<a href="/" aria-label="home" class="flex items-center space-x-2">
						<span class="font-semibold">Indiflow</span>
					</a>

					<button
						onclick={() => (menuState = !menuState)}
						aria-label={menuState == true ? "Close Menu" : "Open Menu"}
						class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
					>
						<Menu
							class={["m-auto size-6 duration-200", menuState && "rotate-180 scale-0 opacity-0"]}
						/>
						<X
							class={[
								"absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
								menuState && "rotate-0 scale-100 opacity-100"
							]}
						/>
					</button>
				</div>

				<div
					class={[
						"bg-background  mb-6  w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
						menuState ? "block lg:flex" : "hidden"
					]}
				>
					<div class="lg:pr-4">
						<ul class="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
							{#each menuItems as item, index}
								<li>
									<a
										href={item.href}
										class="text-muted-foreground hover:text-accent-foreground block duration-150"
									>
										<span>{item.name}</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>

					{#if $page.data.user}
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								{#snippet child({ props }: { props: Record<string, any> })}
									<Button
										{...props}
										variant="ghost"
										class="relative size-8 cursor-pointer rounded-full"
									>
										<Avatar.Root class="size-9">
											<Avatar.Image src={$page.data.user.avatar} alt={$page.data.user} />
											<Avatar.Fallback
												>{getInitials(
													$page.data.user.name ||
														`${$page.data.user.firstname || ""} ${$page.data.user.lastname || ""}`.trim() ||
														"U"
												)}</Avatar.Fallback
											>
											<Avatar.Image src={getAvatar($page.data.user)} alt={$page.data.user.name} />
										</Avatar.Root>
									</Button>
								{/snippet}
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-64 p-2" align="end">
								<DropdownMenu.Group>
									<DropdownMenu.Label class="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
										<div class="flex flex-col space-y-1">
											<p class="text-sm font-semibold">
												{$page.data.user.firstname}
												{" "}
												{$page.data.user.lastname}
											</p>
											<p class="text-xs text-gray-600 dark:text-gray-400">
												{$page.data.user.email}
											</p>
										</div>
									</DropdownMenu.Label>
									<DropdownMenu.Separator class="my-2" />
									<DropdownMenu.Group class="space-y-1">
										{#if getUserType($page.data.user) === "customer"}
											<!-- Customer-specific menu items -->
											<DropdownMenu.Item class="p-0">
												<a
													href="/dashboard/profile"
													class="flex w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													Profile
												</a>
											</DropdownMenu.Item>
											<DropdownMenu.Item class="p-0">
												<a
													href="/dashboard"
													class="flex w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													Dashboard
												</a>
											</DropdownMenu.Item>
											<DropdownMenu.Item class="p-0">
												<a
													href="/dashboard/settings"
													class="flex w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													Settings
												</a>
											</DropdownMenu.Item>
										{:else if getUserType($page.data.user) === "admin"}
											<!-- Admin-specific menu items -->
											<DropdownMenu.Item class="p-0">
												<a
													href="/admin/dashboard"
													class="flex w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
												>
													Dashboard
												</a>
											</DropdownMenu.Item>
										{/if}
									</DropdownMenu.Group>
									<DropdownMenu.Separator class="my-2" />
									<DropdownMenu.Item class="p-0">
										<a
											href="/logout"
											class="flex w-full rounded-md px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
										>
											Sign out
										</a>
									</DropdownMenu.Item>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					{:else}
						<div
							class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6"
						>
							<Button variant="outline" href="/signup" size="sm" class="cursor-pointer"
								>Sign Up</Button
							>
							<Button size="sm" href="/login" class="cursor-pointer">Login</Button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</nav>
</header>
