<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtLoadingIndicator />
    <div style="color: white; min-height: 500px;">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <AppFooter />
  </div>
</template>

<script>
</script>

<style lang="scss">
@use "~/assets/styles/main.scss";
</style>