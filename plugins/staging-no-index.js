export default defineNuxtPlugin((_nuxtApp) => {
  // Get runtime config
  const config = useRuntimeConfig();

  // If this is the staging environment, add noindex meta tag
  if (config.public.isStaging) {
    useHead({
      meta: [{ name: 'robots', content: 'noindex, nofollow' }]
    });
  }
});
