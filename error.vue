<template>
  <div class="error-container">
    <div class="error-content">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <p v-if="error.statusCode === 404">The page you're looking for doesn't exist or has been moved.</p>
      <p v-else>Sorry, something went wrong. Please try again later.</p>
      <NuxtLink to="/" class="btn btn--filled">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
});

// Clear error on page leave
definePageMeta({
  layout: 'default'
});

onMounted(() => {
  useHead({
    title: props.error?.statusCode === 404 ? 'Page not found' : 'Error occurred'
  });
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';

.error-container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.error-content {
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: colors.$white;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: colors.$cloudWhite;
  }

  .btn {
    display: inline-block;
    margin-top: 1rem;
  }
}
</style>
