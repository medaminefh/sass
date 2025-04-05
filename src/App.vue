<template>
  <div class="min-h-screen">
    <main>
      <Hero />
      <CompaniesSection />
      <Process />
      <Testimonials />
    </main>
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import CompaniesSection from './components/CompaniesSection.vue'
import Process from './components/Process.vue'
import Testimonials from './components/Testimonials.vue'
</script>