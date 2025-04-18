<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader
      class="page-transition"
      :class="{
        'page-transition--on': isPageTransitionOff
      }"
    />
    <NuxtLoadingIndicator />
    <div style="color: white; min-height: 500px">
      <NuxtLayout>
        <NuxtPage
          class="page-transition"
          :class="{
            'page-transition--on': isPageTransitionOff
          }"
        />
      </NuxtLayout>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isPageTransitionOff = ref(true);

onMounted(() => {
  // First make sure all content is visible
  document.documentElement.classList.add('content-visible');

  // Force content to be visible after a delay, regardless of transition state
  setTimeout(() => {
    isPageTransitionOff.value = false;
    document.documentElement.classList.add('transitions-ready');

    // Try to re-trigger animations after a delay
    setTimeout(() => {
      const elements = document.querySelectorAll('.page-transition');
      elements.forEach((el) => {
        el.style.opacity = '0';
        setTimeout(() => {
          el.style.opacity = '1';
        }, 50);
      });
    }, 500);
  }, 200);
});

router.beforeEach((_to, _from, next) => {
  isPageTransitionOff.value = true;
  next();
});
router.afterEach(() => {
  setTimeout(() => {
    isPageTransitionOff.value = false;
  }, 200);
});
</script>

<style lang="scss">
@use '~/assets/styles/main.scss';
@use '~/assets/styles/responsive.scss';
@use '~/assets/styles/colors' as colors;

html.transitions-ready .page {
  opacity: 1 !important;
}

.page-transition {
  position: relative;
  transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transition-delay: 0.1s;
  opacity: 1; /* Ensure content is visible by default */

  &--on {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
