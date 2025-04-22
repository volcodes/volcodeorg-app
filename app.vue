<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader class="page-transition" />
    <NuxtLoadingIndicator />
    <div style="color: white; min-height: 500px">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isPageTransitionVisible = ref(false);

// Add navigation guard
router.beforeEach((_to, _from, next) => {
  isPageTransitionVisible.value = false;
  next();
});

router.afterEach(() => {
  isPageTransitionVisible.value = true;
});

onMounted(() => {
  setTimeout(() => {
    isPageTransitionVisible.value = true;
  }, 200);
  // // First make sure all content is visible
  // document.documentElement.classList.add('content-visible');
  // // Force content to be visible after a delay, regardless of transition state
  // setTimeout(() => {
  //   isPageTransitionOff.value = false;
  //   document.documentElement.classList.add('transitions-ready');
  //   // Try to re-trigger animations after a delay
  //   setTimeout(() => {
  //     const elements = document.querySelectorAll('.page-transition');
  //     elements.forEach((el) => {
  //       el.style.opacity = '0 !important';
  //       setTimeout(() => {
  //         el.style.opacity = '1';
  //       }, 50);
  //     });
  //   }, 500);
  // }, 200);
});
// router.afterEach(() => {
//   setTimeout(() => {
//     isPageTransitionOff.value = false;
//   }, 200);
// });
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
  transition: all 0.8s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transition-delay: 0.1s;
  opacity: 0;
  transform: translateX(0px);

  &--finished {
    opacity: 1;
    transform: scale(1) translateX(40px);
  }
}
</style>
