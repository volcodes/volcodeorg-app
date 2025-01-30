<template>
  <div id="achievements" class="container">
    <div
      v-for="achievement in achievementsRef"
      :key="achievement.id"
      class="achievement"
    >
      <i><MdiIcon :icon="achievement.icon" /></i>
      <span>{{ achievement.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const achievements = [
  {
    id: 1,
    icon: 'mdiWeb',
    text: 'Developed Scalable Web and Mobile Solutions'
  },
  {
    id: 2,
    icon: 'mdiRecycle',
    text: 'Modernised Legacy Codebases'
  },
  { id: 3, icon: 'mdiAccountMultipleCheck', text: 'Mentored Developers' },
  { id: 4, icon: 'mdiChartAreaspline', text: 'Optimized Performance' },
  { id: 5, icon: 'mdiSitemap', text: 'Streamlined Operational Processes' },
  {
    id: 6,
    icon: 'mdiFileDocumentCheck',
    text: 'Provided Technical Guidance'
  },
  { id: 7, icon: 'mdiPenPlus', text: 'Enhanced Design Systems' },
  { id: 8, icon: 'mdiAccountGroup', text: 'Aligned with Stakeholders' },
  { id: 9, icon: 'mdiPipe', text: 'Improved CI/CD Pipelines' },
  { id: 10, icon: 'mdiHandHeart', text: 'Promoted Diversity and Inclusion' }
]

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
  { id: 26, icon: 'mdiNpm', text: 'NPM' }
]
const achievementsRef = ref(achievements)
</script>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

#achievements {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 84px;
  gap: 16px;
  margin-top: 144px;
  padding: 0 144px;
  transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);
  transition-delay: 0.7s;
  font-family: "Inter";

  .achievement {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.15rem;
    line-height: 1.45rem;
    gap: 0.5rem;

    i {
      align-items: center;
      display: inherit;
      font-size: 32px;
      line-height: 32px;
      padding: 0 8px;
      color: colors.$lightBlue;
    }
    span {
      color: colors.$cloudWhite;
      font-weight: 400;
    }
  }
}
.page-transition--on {
  #achievements {
    opacity: 0;
    transform: translateY(30px);
  }
}

@media (max-width: 1024px) {
  #achievements {
    margin: 3rem 0;
    width: 100%;
    display: flex;
    padding: 0 1rem;
    box-sizing: border-box;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
  }

  .achievement {
    flex-direction: column;
    background: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 0.6rem 0.6rem;
    width: auto;
    max-width: 50%;
    text-align: center;
    min-width: 200px;
    min-height: 150px;

    &:nth-child(3n) {
      width: 150px;
    }
  }

  #achievements .achievement i {
    margin-bottom: 12px;
  }

  #achievements .achievement span {
    color: #0c0c0c;
    line-height: 25px;
  }
}
</style>
