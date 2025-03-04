<template>
  <div id="page-header" class="container">
    <h1>{{ title }}</h1>
    <div class="breadcrumb">
      <template v-for="(page, index) in breadcrumbs" :key="index">
        <NuxtLink v-if="page.link" :to="page.link">{{ page.name }}</NuxtLink>
        <span v-else>{{ page.name }}</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  title: string
  pages: {
    name: string
    link: string
  }[]
}>()

const route = useRoute()
const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const crumbs = [{ name: 'Overview', link: '/' }]

  if (paths.length) {
    paths.forEach((path) => {
      crumbs.push({
        name: path.charAt(0).toUpperCase() + path.slice(1),
        link: path === paths[paths.length - 1] ? '' : `/${path}`
      })
    })
  }

  return crumbs
})
</script>

<style lang="scss">
@use '~/assets/styles/colors';

#page-header {
  display: flex;
  margin: 3rem auto 1rem auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 0.2rem 0;

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

    a,
    span {
      font-size: 1rem !important;
    }
  }

  .explanation {
    padding: 0rem 1rem 2rem 1rem !important;
  }
}
</style>
