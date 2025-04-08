<template>
	<div class="min-h-screen">
		<main>
			<Hero />
			<CompaniesSection />
			<Process />
			<SubscriptionSection />
			<FeaturesSection />
			<Testimonials />
			<SignupSection />
			<FAQSection />
			<Footer />
		</main>
	</div>
</template>

<script setup lang="ts">
import Hero from "./components/Hero.vue";
import CompaniesSection from "./components/CompaniesSection.vue";
import Process from "./components/Process.vue";
import SubscriptionSection from "./components/SubscriptionSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import Testimonials from "./components/Testimonials.vue";
import SignupSection from "./components/SignupSection.vue";
import FAQSection from "./components/FAQSection.vue";
import Footer from "./components/Footer.vue";
</script>
