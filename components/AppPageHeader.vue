<template>
  <div id="page-header" class="container">
    <h1>{{ title }}</h1>
    <div class="breadcrumb">
      <NuxtLink to="/">Overview</NuxtLink>
      <span>Experience</span>
      <!-- TODO: add page instance here -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  pages: {
    name: string
    link: string
  }[]
}>()
</script>

<style lang="scss">
@use '~/assets/styles/colors';

#page-header {
  display: flex;
  margin: 3rem auto 1rem auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 .2rem 0;

  h1 {
    color: colors.$white;
  }

  .breadcrumb {
    display: flex;
    gap: 12px;

    a,
    span {
      text-decoration: none;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: colors.$cloudWhite;
      display: flex;
      align-items: center;
    }

    a:not(:last-child) {
      color: colors.$cta;
      &:after {
        content: '/';
        margin-left: 12px;
      }
    }
  }
}

@media only screen and (min-device-width: 1023px) and (max-device-width: 1200px) {
  #page-header {
    margin: 1rem auto;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
  }
}
@media (max-width: 1024px) {
  #page-header {
    margin: 1rem auto;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }

  .breadcrumb {
    padding-bottom: 0rem;

    a, span {
      font-size: 1rem !important;
    }
  }

  .explanation {
    padding: 0rem 1rem 2rem 1rem !important
  }
}
</style>
