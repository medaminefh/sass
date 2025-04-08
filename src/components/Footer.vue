<script setup lang="ts"></script>

<template>
	<!-- Footer -->
	<footer class="pt-16 pb-4 relative">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
				<!-- Company Info -->
				<div class="md:col-span-1 space-y-4">
					<img src="../assets/Logo.svg" alt="Logo" class="h-5" />
					<p class="text-gray-600 text-sm mb-4">
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced
						below for those interested.
					</p>
					<div class="flex space-x-3">
						<a href="#" class="w-8 h-8">
							<img src="../assets/ball.svg" alt="Ball" class="object-cover" />
						</a>
						<a href="#" class="w-8 h-8">
							<img
								src="../assets/insta.svg"
								alt="instagram logo"
								class="object-cover"
							/>
						</a>
						<a href="#" class="w-8 h-8">
							<img src="../assets/x.svg" alt="Insta" class="object-cover" />
						</a>
						<a href="#" class="w-8 h-8">
							<img src="../assets/yt.svg" alt="youtube" class="object-cover" />
						</a>
					</div>
				</div>

				<!-- Company Links -->
				<div>
					<h3 class="font-bold text-lg text-[#5A72EA] mb-4">Company</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>About</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Career</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Pricing</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Service</a
							>
						</li>
					</ul>
				</div>

				<!-- Product Links -->
				<div>
					<h3 class="font-bold text-lg text-[#5A72EA] mb-4">Product</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Invoice</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Contract</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Accounting</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Proposal</a
							>
						</li>
					</ul>
				</div>

				<!-- Resources Links -->
				<div>
					<h3 class="font-bold text-lg text-[#5A72EA] mb-4">Resource</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>API Docs</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>Tutorial Video</a
							>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-blue-500 text-sm"
								>How to Create</a
							>
						</li>
					</ul>
				</div>

				<!-- Contact Info -->
				<div>
					<h3 class="font-bold text-lg text-[#5A72EA] mb-4">Contact</h3>
					<ul class="space-y-2">
						<li class="text-gray-600 text-sm">youremail@mern.com</li>
						<li class="text-gray-600 text-sm">+012-345-678-90</li>
						<li class="text-gray-600 text-sm">St. London Maeren 01928</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	<!-- Bottom Footer -->
	<div
		class="border-t border-gray-200 py-10 flex gap-4 flex-col md:flex-row justify-around text-white items-center text-sm bg-[#5A72EA]"
	>
		<div>© 2025</div>
		<div class="flex space-x-4">
			<a href="#">FAQ</a>
			<a href="#">Terms & Conditions</a>
			<a href="#">Privacy Policy</a>
		</div>
	</div>
</template>
