<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
        Check what our clients are saying
      </h2>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span class="text-xl font-semibold text-gray-600">
                {{ testimonial.initials }}
              </span>
            </div>
            <div class="ml-4">
              <h3 class="font-semibold text-gray-800">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
            </div>
          </div>
          <p class="text-gray-600">
            "{{ testimonial.quote }}"
          </p>
          <div class="mt-4 flex">
            <span 
              v-for="star in 5" 
              :key="star"
              class="text-yellow-400"
              :class="{ 'text-gray-300': star > testimonial.rating }"
            >
              ★
            </span>
          </div>
        </div>
      </div>

      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="text-gray-600 mb-6">
          Learn ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button 
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          @click="showSignupModal = true"
        >
          Sign up and get started
        </button>
      </div>

      <div class="text-center text-sm text-gray-500">
        <p>Register for free</p>
      </div>
    </div>

    <!-- Signup Modal -->
    <div 
      v-if="showSignupModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="showSignupModal = false"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Create your account</h3>
        <form @submit.prevent="handleSignup">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="name">Full Name</label>
            <input
              id="name"
              v-model="signupForm.name"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            >
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="email">Email</label>
            <input
              id="email"
              v-model="signupForm.email"
              type="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-2" for="password">Password</label>
            <input
              id="password"
              v-model="signupForm.password"
              type="password"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            >
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    position: 'Marketing Director',
    quote: 'This service transformed our business operations. The team is responsive and the platform is incredibly intuitive.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    initials: 'MC',
    position: 'CTO',
    quote: 'We were able to integrate seamlessly with our existing systems. The API documentation is excellent.',
    rating: 4
  },
  {
    name: 'Emily Rodriguez',
    initials: 'ER',
    position: 'Small Business Owner',
    quote: 'As a non-technical person, I found the platform very easy to use. Customer support is outstanding.',
    rating: 5
  }
])

const showSignupModal = ref(false)
const signupForm = ref({
  name: '',
  email: '',
  password: ''
})

const handleSignup = () => {
  // In a real app, you would handle form submission here
  console.log('Signup form submitted:', signupForm.value)
  alert('Thank you for signing up!')
  showSignupModal.value = false
  signupForm.value = { name: '', email: '', password: '' }
}
</script>