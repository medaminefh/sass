<template>
	<!-- Sign Up Section -->
	<div class="relative w-full">
		<div
			class="md:max-w-5xl mx-auto bg-gradient-to-l from-[#5A72EA] to-[#8468B1] rounded-xl p-10 text-white relative overflow-hidden z-20"
		>
			<div
				class="hidden md:block absolute -top-1/3 right-10 w-74 h-74 bg-white rounded-full opacity-50 -z-10"
			></div>
			<div
				class="hidden md:block absolute top-10 -right-36 w-74 h-74 bg-white rounded-full opacity-50 -z-10"
			></div>
			<div
				class="hidden md:block absolute -bottom-20 right-10 w-74 h-74 bg-white rounded-full opacity-50 -z-10"
			></div>
			<div class="w-full lg:w-1/2 flex flex-col gap-8 py-16">
				<div class="">
					<h2 class="text-2xl font-bold mb-2">Sign up and get started</h2>
					<p class="text-purple-100">
						Free trial 14 days of storage and without obligation
					</p>
				</div>

				<div class="flex flex-col sm:flex-row gap-4 items-center">
					<input
						type="email"
						placeholder="Enter your email here"
						class="px-4 py-3 rounded-lg w-full sm:w-auto flex-grow max-w-md ring-2 ring-white"
						v-model="email"
					/>
					<button
						class="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
						@click="register"
					>
						Register for free
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
const email = ref("");

const register = () => {
	if (!email.value) {
		alert("Please enter your email address");
		return;
	}

	// Here you would typically send the email to your backend
	alert(`Thank you for registering with ${email.value}!`);
	email.value = "";
};
</script>
