<template>
  <div class="min-h-screen overflow-hidden relative">
    <!-- Navigation -->
    <Header />
    
    <!-- Main Content -->
    <main class="container mx-auto px-4 sm:px-6 pt-8 pb-16 md:pb-24 lg:pb-32 flex flex-col lg:flex-row items-center">
      <!-- Left Column - Text Content -->
      <div class="lg:w-1/2 text-white z-10 order-2 lg:order-1 mt-12 lg:mt-0">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          SaaS Delivery Management Software
        </h1>
        <p class="text-white/80 mb-8 md:mb-10 max-w-lg text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
          <a href="#" class="bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white font-medium text-center hover:bg-white/90 transition text-sm sm:text-base">
            Get started
          </a>
          <a href="#" class="bg-indigo-500/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white font-medium flex items-center justify-center hover:bg-indigo-500/40 transition text-sm sm:text-base">
            <span class="bg-white text-indigo-600 rounded-full p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </span>
            Watch Demo
          </a>
        </div>
        
        <!-- Features List -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Free Register</span>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cyan-300 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span>Great Service</span>
          </div>
        </div>
      </div>

      <!-- Right Column - Dashboard Image -->
      <div class="lg:w-1/2 mt-8 lg:mt-0 relative order-1 lg:order-2">
        <!-- White Circle Background -->
        <div class="hidden md:block absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] bg-white rounded-full -top-12 -left-12 lg:-top-20 lg:-left-20"></div>
        
        <!-- Dashboard Image -->
        <div class="relative z-10 lg:transform lg:translate-x-10">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mask%20group-33HxBiQt8tEp5GbfSZlyWBIyIrlMbE.png" 
            alt="Dashboard Interface" 
            class="w-full max-w-2xl mx-auto object-contain"
          />
        </div>
      </div>
    </main>

    <!-- Background Elements -->
    <div class="absolute w-[150%] h-[130%] -top-[15%] -left-[25%] bg-gradient-to-b -rotate-5 from-indigo-600 to-indigo-400 -z-10"></div>
    <div class="absolute w-[150%] h-[130%] -bottom-[15%] -right-[25%] rotate-5 bg-[#5A72EA] opacity-30 -z-10"></div>
  </div>
</template>

<script setup>
import Header from './Header.vue';
</script>

<style>
/* Smooth scrolling behavior */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/* Better transitions for interactive elements */
a, button {
  transition: all 0.2s ease;
}
</style>