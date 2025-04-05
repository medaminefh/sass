<template>
  <div class="min-h-screen">
    <main>
      <Hero />
      <CompaniesSection />
      <Process />
      <SubscriptionSection />
      <FeaturesSection />
      <Testimonials />
    </main>
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import CompaniesSection from './components/CompaniesSection.vue'
import Process from './components/Process.vue'
import SubscriptionSection from './components/SubscriptionSection.vue'
import Testimonials from './components/Testimonials.vue'
import FeaturesSection from './components/FeaturesSection.vue'
</script>