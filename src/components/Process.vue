<template>
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <!-- Section Header -->
        <div class="text-center mb-40">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learn more about process</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate
          </p>
        </div>
  
        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative place-items-center">
          <!-- Connecting Lines (visible on md screens and up) -->
          <div class="hidden md:block absolute -top-[60px] z-20 place-items-center">
            <img src="../assets/lines.svg" class="object-cover w-[90%] md:w-[85%]" />
          </div>

          
          <div v-for="step in steps" :key="step.id" class="bg-white rounded-lg p-8 text-center relative shadow-lg hover:border-b-4 hover:border-indigo-500 transition duration-300 w-sm h-[480px]">
          <!-- Step Number -->
            <div class="w-14 h-14 rounded-full border-2 border-indigo-500 text-indigo-500 flex items-center justify-center mx-auto mb-8 bg-white text-xl font-semibold">
                <span>{{ step.id }}</span>
          </div>
          
          <!-- Icon -->
          <div class="w-20 h-20 mx-auto mb-6">
            <div v-html="step.img" class="w-full h-full"></div>
          </div>
          
          <!-- Title -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
          
          <!-- Description -->
          <p class="text-gray-600">
            {{ step.description }}
          </p>

          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const steps = [
    {
        id:"01",
      title: 'Discover',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-indigo-500">
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="5" cy="5" r="2" />
              <circle cx="19" cy="19" r="2" />
              <line x1="12" y1="10" x2="12" y2="5" />
              <line x1="12" y1="14" x2="12" y2="19" />
              <line x1="14" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="10" y2="12" />
              <line x1="7" y1="7" x2="10" y2="10" />
              <line x1="14" y1="14" x2="17" y2="17" />
              <line x1="17" y1="7" x2="14" y2="10" />
              <line x1="10" y1="14" x2="7" y2="17" />
            </svg>`
    },
    {
        id:"02",
      title: 'Collect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-indigo-500">
              <path d="M20 11H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              <line x1="8" y1="15" x2="10" y2="15" />
              <line x1="14" y1="15" x2="16" y2="15" />
            </svg>`
    },
    {
        id:"03",
      title: 'Convert',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-indigo-500">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <rect x="9" y="9" width="16" height="16" rx="2" ry="2" />
              <path d="M5 9V5h4" />
              <path d="M19 19v-4h-4" />
              <path d="M15 5h4v4" />
              <path d="M9 19H5v-4" />
            </svg>`
    },
  ]
  </script>
  
  <style scoped>
  /* Any additional custom styles can go here */
  </style>