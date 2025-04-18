<template>
  <div
    id="technologies"
    class="container page-transition"
    :class="{
      'page-transition--on': !isActive
    }"
  >
    <div v-for="technology in technologiesRef" :key="technology.id">
      <MdiIcon :icon="technology.icon" />
      <span>{{ technology.text }}</span>
    </div>
  </div>
  <footer class="footer">
    <div class="container">
      <div class="footer__nav">
        <NuxtLink to="/">Overview</NuxtLink>
        <NuxtLink to="/experience/">Experience</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <span>Designed & Built with <MdiIcon icon="mdiHeart" /> by <a href="https://linkedin.com/in/deveci96">Mehmet Deveci</a></span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const technologies = [
  { id: 1, icon: 'mdiLanguageHtml5', text: 'HTML' },
  { id: 2, icon: 'mdiLanguageCss3', text: 'CSS' },
  { id: 3, icon: 'mdiSass', text: 'SASS' },
  { id: 4, icon: 'mdiLanguageJavascript', text: 'JavaScript' },
  { id: 5, icon: 'mdiVuejs', text: 'Vue.js' },
  { id: 6, icon: 'mdiLanguageTypescript', text: 'Typescript' },
  { id: 7, icon: 'mdiTestTube', text: 'Jest & Cypress' },
  { id: 8, icon: 'mdiNuxt', text: 'Nuxt' },
  { id: 9, icon: 'mdiNodejs', text: 'Node.js' },
  { id: 10, icon: 'mdiAbTesting', text: 'A/B Testing' },
  { id: 11, icon: 'mdiReact', text: 'React' },
  { id: 12, icon: 'mdiLanguagePhp', text: 'PHP' },
  { id: 13, icon: 'mdiDatabaseSearch', text: 'MySQL' },
  { id: 14, icon: 'mdiAws', text: 'AWS' },
  { id: 15, icon: 'mdiVuetify', text: 'Vuetify' },
  { id: 16, icon: 'mdiBootstrap', text: 'Bootstrap' },
  { id: 17, icon: 'mdiTailwind', text: 'Tailwind' },
  { id: 18, icon: 'mdiWebpack', text: 'Webpack' },
  { id: 19, icon: 'mdiElectronFramework', text: 'Electron' },
  { id: 20, icon: 'mdiEslint', text: 'Eslint' },
  { id: 21, icon: 'mdiDocker', text: 'Docker' },
  { id: 22, icon: 'mdiFirebase', text: 'Firebase' },
  { id: 23, icon: 'mdiJquery', text: 'jQuery' },
  { id: 24, icon: 'mdiKubernetes', text: 'Kubernetes' },
  { id: 25, icon: 'mdiBitbucket', text: 'Bitbucket' },
  { id: 26, icon: 'mdiNpm', text: 'NPM' },
  { id: 27, icon: 'mdiWordpress', text: 'WordPress' },
  { id: 30, icon: 'mdiLanguageC', text: '' },
  { id: 28, icon: 'mdiLanguageJava', text: 'Java' },
  { id: 29, icon: 'mdiLanguageCsharp', text: '' },
  { id: 31, icon: 'mdiLanguageCpp', text: '' }
];
const technologiesRef = ref(technologies);
const isActive = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isActive.value = window.scrollY > 1;
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

.footer {
  padding: 2rem 3rem;
  text-align: center;
  background-color: colors.$darkBlue;
  background: linear-gradient(to bottom, colors.$navyBlue, colors.$darkBlue 100%);

  a {
    color: colors.$cloudWhite;

    &:hover {
      color: colors.$cta;
    }
  }

  &.is-visible {
    transform: translateY(0);
  }

  span {
    color: colors.$textGray;
    padding: 1rem 0;
    display: block;
  }

  &__nav {
    width: 580px;
    margin: 0 auto;

    a {
      text-decoration: none;
      padding: 0.5rem 1rem;
      font-size: 1.15rem;
      line-height: 1.5rem;
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

#technologies {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  pointer-events: none;
  padding: 0 2rem;
  margin-bottom: 3rem;
  margin-top: 5rem;

  div {
    font-size: 18px;
    font-weight: 500;
    color: colors.$textGray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    opacity: 1;
    margin: 4px 8px;
    // background: colors.$navyBlue;
    // padding: 2px;

    svg {
      width: 32px;
      height: 32px;
      margin-right: 4px;
      font-size: 24px;
    }
  }
}

@media (max-width: 1024px) {
  #technologies {
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 3rem;

    div {
      font-size: 1rem;
      svg {
        width: 26px;
        height: 26px;
      }
    }
  }

  .footer {
    padding: 1rem 1.6rem;
  }

  .container {
    width: 100%;
    box-sizing: border-box;
  }
}

.footer__nav {
  width: auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media (max-width: 768px) {
  .footer__nav {
    a {
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>
