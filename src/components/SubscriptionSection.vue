<template>
    <section class="py-20 bg-white relative z-10">
      <!-- circle -->
      <div class="-z-10 absolute w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] bg-gradient-to-b from-[#5A72EA] to-[#8468B1] rounded-full top-0 -left-[75px] lg:-top-0 lg:-left-[120px]"></div>
      <div class="container mx-auto px-6 z-10">
        <!-- Section Header -->
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Start today, with free or premium plan, you choose
          </h2>
          <p class="text-gray-600">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          </p>
        </div>
  
        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-2 gap-8 w-full">

          <!-- Plans -->
          <div v-for="plan in plans" :key="plan.title" class="rounded-lg p-8 relative border" :class="plan.background + ' ' + plan.textColor + ' ' + plan.borderColor">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
            <div class="inline-block mb-6">
              <span class="text-[#5A72EA] border border-indigo-200 rounded-full px-4 py-1 text-sm font-medium" :class="plan.background === 'bg-white' ? 'text-gray-900' : 'text-white'">
                {{ plan.title }}
              </span>
            </div>
            
            <div class="flex items-baseline mb-6">
              <span class="text-5xl font-bold">{{ plan.price }}</span>
              <span class="ml-2">per month</span>
            </div>
            
            <p class="mb-8">
              {{ plan.description }}
            </p>
            
            <button class="py-3 px-6 rounded-md transition-colors w-full md:w-auto" :class="plan.buttonBackground + ' ' + plan.buttonTextColor" @click="$emit('subscribe', plan.title)">
              {{ plan.buttonText }}
            </button>
          </div>
          <ul class="space-y-4 mb-8 my-auto">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                <div class="w-5 h-5 rounded-full flex items-center justify-center mr-3" :class="plan.background === 'bg-white' ? 'bg-[#5A72EA]' : 'bg-white'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" :class="plan.background === 'bg-white' ? 'text-white' : 'text-[#5A72EA]'" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  

  const plans = [
    {
      title: 'Basic Plan',
      price: '$0',
      features: [
        'Limited access library',
        'Commercial license',
        'Hotline support 24/7',
        '300+ HTML UI Elements',
        'EaCommerce builder'
      ],
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
      buttonText: 'Join now',
      background: 'bg-white',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-200',
      buttonBackground: 'bg-[#5A72EA]',
      buttonTextColor: 'text-white',
    },
    {
      title: 'PREMIUM PLAN',
      price: '$99',
      features: [
        'Limited access library',
        'Commercial license',
        'Hotline support 24/7', 
        '300+ HTML UI Elements',
        'EaCommerce builder'
      ],
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
      buttonText: 'Join now',
      background: 'bg-gradient-to-r from-[#5A72EA] to-[#8468B1]',
      textColor: 'text-white',
      borderColor: 'border-indigo-300',
      buttonBackground: 'bg-white text-[#5A72EA]',
      buttonTextColor: 'text-[#5A72EA]',
    }
  ]
  </script>
  
  <style scoped>
  /* Any additional custom styles can go here */
  </style>