<script lang="ts">
	import { onMount } from "svelte";
	import { run } from "svelte/legacy";

	import * as Drawer from "$lib/components/ui/drawer";
	import { Button } from "$lib/components/ui/button";

	let showCookieConsent: boolean = $state(false);

	run(() => {
		showCookieConsent;
	});

	onMount(() => {
		const cookiesAccepted = localStorage.getItem("cookiesAccepted");
		if (!cookiesAccepted) {
			showCookieConsent = true;
		}
	});

	function acceptCookies() {
		localStorage.setItem("cookiesAccepted", "true");
		showCookieConsent = false;
	}

	function rejectCookies() {
		localStorage.setItem("cookiesAccepted", "false");
		showCookieConsent = false;
	}
</script>

<Drawer.Root open={showCookieConsent}>
	<Drawer.Content>
		<Drawer.Header class="text-left">
			<Drawer.Description class="text-left text-xs">
				<p class="mb-4">
					We use cookies to enhance your browsing experience, analyze site traffic, and personalize
					content. Cookies are small text files stored on your device that help us provide you with
					a better user experience.
				</p>
				<h3 class="text-foreground mb-2 font-bold">Types of cookies we use:</h3>
				<ul class="mb-4 list-disc px-8">
					<li><strong>Essential cookies:</strong> Required for the website to function properly</li>
					<li>
						<strong>Analytics cookies:</strong> Help us understand how visitors interact with our site
					</li>
					<li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
					<li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
				</ul>
				<p class="mb-4">
					By clicking "Accept All", you consent to our use of cookies. You can manage your
					preferences at any time through your browser settings or by visiting our Privacy Policy
					page.
				</p>
				<p class="text-muted-foreground text-xs">
					For more information, please read our <a href="/privacy-policy" class="underline"
						>Privacy Policy</a
					>
					and <a href="/cookie-policy" class="underline">Cookie Policy</a>.
				</p>
			</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer>
			<div class="flex w-full gap-2">
				<Button onclick={rejectCookies} variant="outline" class="w-50">Reject</Button>
				<Button onclick={acceptCookies} class="w-50">Accept All</Button>
			</div>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
