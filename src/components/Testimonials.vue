<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white rounded-lg shadow-lg p-6 text-center">
            <p class="text-gray-600 mb-4">"{{ testimonial.quote }}"</p>
            <p class="text-sm font-semibold text-gray-800">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Testimonial {
    id: number
    quote: string
    name: string
    role: string
  }
  
  const testimonials = [
    { id: 1, quote: "This software transformed our delivery process!", name: "Jane Doe", role: "CEO, TechCorp" },
    { id: 2, quote: "Amazing support and features!", name: "John Smith", role: "Manager, LogiCo" },
    { id: 3, quote: "A game-changer for our business.", name: "Emily Brown", role: "Founder, StartUpX" },
  ]
  </script>