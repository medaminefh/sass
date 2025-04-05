<template>

    <div class="bg-white lg:w-96 lg:h-[480px] w-auto rounded-xl p-6 md:p-8 text-center shadow-lg transition-all duration-300 group relative overflow-hidden">
        <div class="absolute w-full h-0 bottom-0 left-0 right-0 bg-gradient-to-r from-[#5A72EA] to-[#8468B1] group-hover:h-3 transform duration-200"></div>
          <!-- Step Number -->
          <div v-if="step.id" class="w-14 h-14 rounded-full border-2 border-[#5A72EA] z-10 text-[#5A72EA] flex items-center justify-center mx-auto mb-6 bg-white text-xl font-semibold">
            <span>{{ step.id }}</span>
          </div>
          
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto mb-6 p-3 bg-indigo-50 rounded-full">
            <div v-html="step.img" class="w-full h-full text-indigo-600"></div>
          </div>
          
          <!-- Title -->
          <h3 class="text-xl md:text-2xl text-gray-900 mb-4">{{ step.title }}</h3>
          
          <!-- Description -->
          <p class="text-gray-600 leading-relaxed">
            {{ step.description }}
          </p>
        </div>
</template>

<script setup>
// from props
const props = defineProps(['step'])
const step = props.step

</script>