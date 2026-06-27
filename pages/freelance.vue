<template>
  <div class="tw font-sans bg-navy text-white overflow-hidden">
    <FreelanceHero />
    <FreelanceServices />
    <FreelanceEngagement />
    <FreelanceTogglReporting />
    <FreelanceProcess />
    <FreelanceCta />
  </div>
</template>

<script setup lang="ts">
const title = 'Freelance & Contract Work — Mehmet Deveci';
const description =
  'Hire Mehmet Deveci for freelance and contract software engineering: full-stack web apps, frontend architecture, AI integration, and infrastructure. Transparent, Toggl-based time reporting on every engagement.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    {
      name: 'keywords',
      content: 'Freelance Software Engineer, Contract Developer, Hire Vue.js Developer, Freelance Frontend Engineer, AI Integration, Toggl time reporting, Remote Contract Engineer'
    },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://volcode.org/freelance' },
    { property: 'og:image', content: 'https://volcode.org/assets/imgs/og-image.jpg' }
  ]
});
</script>
