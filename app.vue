<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader class="page-transition" :class="{
      'page-transition--on': isPageTransitionOff
    }" />
    <NuxtLoadingIndicator />
    <div style="color: white; min-height: 500px;">
      <NuxtLayout>
        <NuxtPage class="page-transition" :class="{
          'page-transition--on': isPageTransitionOff
        }"/>
      </NuxtLayout>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const isPageTransitionOff = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPageTransitionOff.value = false;
  }, 200);
})

router.beforeEach((to, from, next) => {
  isPageTransitionOff.value = true
  next()
})
router.afterEach((to, from, next) => {
  setTimeout(() => {
    isPageTransitionOff.value = false
    next()
  }, 200);
})
</script>

<style lang="scss">
@use '~/assets/styles/main.scss';
@use '~/assets/styles/responsive.scss';
@use '~/assets/styles/colors' as colors;

.page-transition {
  position: relative;
  transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transition-delay: 0.1s;

  &--on {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>