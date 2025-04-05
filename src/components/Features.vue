<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.id" class="text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const features = [
    { id: 1, title: 'Scalable', description: 'Grow without limits.' },
    { id: 2, title: 'Secure', description: 'Top-tier security features.' },
    { id: 3, title: 'Fast', description: 'Lightning-fast performance.' },
  ]
  </script>