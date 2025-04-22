<template>
  <div class="error-page">
    <MatrixBackground v-if="isBoxesRendered" />
    <div class="container">
      <h1>Oops!</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <NuxtLink to="/" class="btn btn--filled"> Back to Home </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import MatrixBackground from '~/components/MatrixBackground.vue';
const isBoxesRendered = ref(false);
defineProps({
  error: {
    type: Object,
    required: true
  }
});
onMounted(() => {
  setTimeout(() => {
    isBoxesRendered.value = true;
  }, 1000);
});
</script>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  //   background: linear-gradient(to bottom, colors.$navyBlue 0%, colors.$darkBlue 100%);
  color: colors.$cloudWhite;

  .container {
    padding: 2rem;
  }

  h1 {
    font-size: 8rem;
    line-height: 1;
    margin-bottom: 1rem;
    color: colors.$cta;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    font-weight: bold;
    color: colors.$white;
  }

  .btn {
    width: fit-content;
    margin: 0 auto;
    text-decoration: none;
  }
}
</style>
