<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from "$lib/components/ui/accordion";
	const faqItems = [
		{
			id: "item-1",
			question: "How quickly can I get approved for a loan?",
			answer:
				"Most applications are approved within minutes once your profile is verified and all required documents are submitted. In some cases, additional review may be needed, which can take up to 24 hours."
		},
		{
			id: "item-2",
			question: "What documents do I need to apply?",
			answer:
				"To apply for a loan, you'll need to provide a government-issued ID, proof of income, and any relevant financial documents. This helps us verify your identity and assess your eligibility."
		},
		{
			id: "item-3",
			question: "What is the maximum loan amount I can take?",
			answer:
				"Our loan limits depend on your credit profile and repayment history. First-time borrowers may start with lower amounts, while returning customers with good standing can access higher limits."
		},
		{
			id: "item-4",
			question: "How do I repay my loan?",
			answer:
				"We offer several repayment options, including automatic bank transfers, credit card payments, and manual payments through our website. You can choose the option that works best for you during the loan application process."
		},
		{
			id: "item-5",
			question: "Are there hidden fees?",
			answer:
				"We strive to be transparent about all fees associated with our loans. There are no hidden fees, but it's important to review the loan agreement carefully to understand all terms and conditions."
		}
	];
</script>

<section class="py-16 md:py-24">
	<div class="mx-auto max-w-5xl px-4 md:px-6">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
				Frequently Asked Questions
			</h2>
			<p class="text-muted-foreground mt-4 text-balance">
				Everything you need to know about Indiflow loans and services.
			</p>
		</div>

		<div class="mx-auto mt-12 max-w-xl">
			<Accordion type="single" class="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
				{#each faqItems as item}
					<div class="group">
						<AccordionItem
							value={item.id}
							class="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
						>
							<AccordionTrigger class="cursor-pointer text-base hover:no-underline"
								>{item.question}</AccordionTrigger
							>
							<AccordionContent>
								<p class="text-base">{item.answer}</p>
							</AccordionContent>
						</AccordionItem>
						<hr class="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
					</div>
				{/each}
			</Accordion>

			<p class="text-muted-foreground mx-auto mt-6 w-fit text-sm">
				Can't find what you're looking for? Contact our{" "}
				<a href="/contact" class="text-primary font-medium hover:underline">
					customer support team
				</a>
			</p>
		</div>
	</div>
</section>
