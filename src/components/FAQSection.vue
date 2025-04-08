<template>
	<div class="min-h-screen relative">
		<div
			class="absolute h-[250%] w-full bg-[#D9DFFF] opacity-30 -z-10 bottom-0"
		></div>
		<!-- white bottom white rectangle -->
		<div
			class="absolute w-[110%] h-[200px] bg-white -left-10 -bottom-[180px] -z-10 rotate-2 hidden md:block"
		></div>

		<!-- FAQ Section -->
		<div class="container mx-auto px-4 py-16 max-w-4xl">
			<div class="text-center mb-8">
				<h2 class="text-2xl font-bold text-gray-800 mb-2">
					Do you have any question
				</h2>
				<p class="text-gray-500 text-sm">
					Our support team ready to help you please contact with them
				</p>
			</div>

			<div class="bg-white rounded-xl shadow-sm p-6 mb-8">
				<!-- FAQ Accordion -->
				<div class="space-y-4">
					<div
						v-for="(faq, index) in faqs"
						:key="index"
						class="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
					>
						<div
							class="flex items-start gap-3 cursor-pointer py-2"
							@click="toggleFaq(index)"
						>
							<div class="flex-shrink-0 mt-1">
								<div
									class="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white"
								>
									<span v-if="activeFaq === index">-</span>
									<span v-else>+</span>
								</div>
							</div>
							<div>
								<h3 class="font-medium text-gray-800">{{ faq.question }}</h3>
								<div
									v-if="activeFaq === index"
									class="mt-2 text-gray-600 text-sm"
								>
									{{ faq.answer }}
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Show More Button -->
				<div class="flex justify-center mt-6">
					<button
						class="bg-primary text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300"
						@click="showMore"
					>
						Show More
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const activeFaq = ref(0); // First FAQ is open by default

const faqs = ref([
	{
		question: "Website response taking time, how to improve?",
		answer:
			"To improve website response time, optimize images, enable browser caching, minify CSS/JS files, use a content delivery network (CDN), choose a better web host, and reduce server response time. These optimizations will help your website load faster and provide a better user experience.",
	},
	{
		question: "App installation failed, how to update system information?",
		answer:
			"If app installation failed, try updating your system by checking for OS updates, clearing cache, ensuring sufficient storage space, updating app store/package manager, and restarting your device. If problems persist, check system requirements and compatibility.",
	},
	{
		question: "App installation failed, how to update system information?",
		answer:
			"This is a duplicate question that appears in the screenshot. The answer would be the same as above, focusing on system updates, cache clearing, and ensuring compatibility.",
	},
	{
		question: "How to contact help or Support team?",
		answer:
			"You can contact our help or support team through multiple channels: email us at support@mern.com, call our support line at +88-01234-567890, use the live chat feature on our website, or submit a ticket through our help center portal.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cryptocurrency. All transactions are secure and encrypted for your protection.",
	},
]);

const toggleFaq = (index) => {
	if (activeFaq.value === index) {
		activeFaq.value = null; // Close if already open
	} else {
		activeFaq.value = index; // Open the clicked FAQ
	}
};

const showMore = () => {
	// This would typically load more FAQs or show all FAQs
	alert("This would load more FAQs from the server or show all available FAQs");
};
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>
