<script setup lang="ts">
import { useScroll } from '~/composables/useScroll';

const { isScrolled } = useScroll();
const route = useRoute();

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header :class="['fixed w-full z-50 transition-all duration-300', isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent']">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold"> Volcode </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-sm font-medium transition-colors hover:text-primary" :class="[route.path === item.href ? 'text-primary' : 'text-gray-600']">
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2" aria-label="Toggle menu" @click="toggleMenu">
          <Icon :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="block px-4 py-2 text-sm font-medium transition-colors hover:text-primary" :class="[route.path === item.href ? 'text-primary' : 'text-gray-600']" @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>
