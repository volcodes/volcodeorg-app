<!-- how to kick start a new component in nuxt 3 -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__nav">
        <NuxtLink to="/">Overview</NuxtLink>
        <NuxtLink to="/experience">Experience</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div class="footer__nav">
        <NuxtLink to="mailto:deveci2024@gmail.com"
          >deveci2024@gmail.com</NuxtLink
        >
      </div>
      <span
        >Developed & Designed with <MdiIcon icon="mdiHeart" /> by Mehmet
        Deveci</span
      >
    </div>
  </footer>
</template>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

.footer {
  padding: 64px 32px 64px 32px;
  text-align: center;
  background-color: colors.$darkBlue;
  background: linear-gradient(
    to bottom,
    colors.$navyBlue,
    colors.$darkBlue 100%
  );

  span {
    color: colors.$textGray;
    margin-top: 44px;
    display: block;
  }

  &__nav {
    width: 580px;
    margin: 0 auto;
    margin-bottom: 12px;

    a {
      text-decoration: none;
      padding: 4px 6px;
      font-size: 16px;
      line-height: 20px;
      color: colors.$cloudWhite;

      &:hover,
      &.router-link-active {
        text-decoration: underline;
      }
    }

    &:nth-child(2) {
      a {
        color: colors.$textGray;
      }
    }
  }
}
</style>
