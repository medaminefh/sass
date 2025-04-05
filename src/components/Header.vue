<template>
  <nav class="container mx-auto px-4 sm:px-6 pt-6 pb-6 md:pt-8 md:pb-20 flex justify-between items-center">
    <div class="text-white text-3xl font-bold">
      <img src="../assets/LogoWhite.svg" alt="Logo" class="h-8 md:h-10">
    </div>
    
    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-6 lg:space-x-10">
      <a href="#" class="text-white hover:text-white/80 transition">Home</a>
      <a href="#" class="text-white hover:text-white/80 transition">Products</a>
      <a href="#" class="text-white hover:text-white/80 transition">Solutions</a>
      <a href="#" class="text-white hover:text-white/80 transition">Pricing</a>
      <a href="#" class="text-white border border-white rounded-full px-4 py-1 lg:px-6 lg:py-2 hover:bg-white/10 transition">Log in</a>
      <a href="#" class="bg-white text-indigo-600 rounded-full px-4 py-1 lg:px-6 lg:py-2 hover:bg-white/90 transition">Sign up</a>
    </div>
    
    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    
    <!-- Mobile Menu -->
    <div :class="{'translate-x-0': isOpen, 'translate-x-full': !isOpen}" class="md:hidden fixed inset-0 bg-indigo-900 z-50 flex flex-col items-center justify-center space-y-8 transition-all duration-300 transform">
      <button @click="toggleMenu" class="absolute top-6 right-6 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <a @click="toggleMenu" href="#" class="text-white text-xl hover:text-white/80 transition">Home</a>
      <a @click="toggleMenu" href="#" class="text-white text-xl hover:text-white/80 transition">Products</a>
      <a @click="toggleMenu" href="#" class="text-white text-xl hover:text-white/80 transition">Solutions</a>
      <a @click="toggleMenu" href="#" class="text-white text-xl hover:text-white/80 transition">Pricing</a>
      <a @click="toggleMenu" href="#" class="text-white border border-white rounded-full px-6 py-2 hover:bg-white/10 transition">Log in</a>
      <a @click="toggleMenu" href="#" class="bg-white text-indigo-600 rounded-full px-6 py-2 hover:bg-white/90 transition">Sign up</a>
    </div>
  </nav>
</template>

<script setup>

import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Optional: prevent body scrolling when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
</script>