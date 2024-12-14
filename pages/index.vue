<template>
  <div>
    <div id="hero" class="container">
      <img
        src="~/assets/imgs/Frame.svg"
        alt="Hero Background"
        class="hero-bg"
      />
      <span>Hi, I’m Mehmet</span>
      <h1>
        I transform ideas into <br />
        digital solutions.
      </h1>
      <p>
        I specialise in turning concepts into user-centric applications that are
        <em>modern</em>, <em>scalable</em>, and <em>impactful</em>.
      </p>
      <p>
        With over a decade of experience, I pursue my passion by optimizing
        workflows, modernizing systems, and mentoring teams to craft
        high-quality digital solutions that drive results.
      </p>
      <section id="ctaButtons">
        <button class="btn btn--filled">Explore My Key Accomplishments</button>
        <button class="btn">Watch My Introduction</button>
      </section>
    </div>
    <div
      id="achievements"
      :class="{
        visible: isAchievemnentsVisible
      }"
      class="container"
    >
      <div
        v-for="achievement in achievementsRef"
        :key="achievement.id"
        class="achievement"
      >
        <i><MdiIcon :icon="achievement.icon" /></i>
        <span>{{ achievement.text }}</span>
      </div>
    </div>

    <div
      id="secondary"
      :class="{
        visible: isSecondaryItemVisible
      }"
    >
      <div class="container">
        <h2><em>Empowering Teams</em> with Technology and Collaboration</h2>
        <p class="text-center">
          I am passionate about technology, teamwork, helping others, and using
          cutting-edge technologies <br />
          to create meaningful digital experiences
        </p>
        <section class="grid">
          <article class="card">
            <figure class="wrapper">
              <div class="wrapper__header">
                <i class="button"></i>
                <i class="button"></i>
                <i class="button"></i>
              </div>
              <div class="wrapper__overlay">
                <img
                  src="~/assets/imgs/art-screenshot.png"
                  alt="Art Screenshot"
                />
              </div>
            </figure>
            <h3>Apps That Solve Real Problems</h3>
            <p>
              Contributing to open source is my way of sharing knowledge,
              offering free tools like anonymous reporting system, portfolio
              builders and playlist organizers that demonstrate my ability to
              deliver value.
            </p>
            <NuxtLink to="/projects" class="cta">
              Explore my projects <MdiIcon icon="mdiArrowTopRight" />
            </NuxtLink>
          </article>
          <article class="card">
            <figure class="wrapper">
              <div class="wrapper__overlay" style="max-height: 450px">
                <div class="card-sm">
                  <div class="card-sm__title">
                    <MdiIcon icon="mdiChatProcessing" />
                    <strong>Encrypted Chat App with React</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-1.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-2.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-3.jpg" alt="Profile Picture" />
                    <span>~20 people were in this product</span>
                  </div>
                </div>
                <div class="card-sm">
                  <div class="card-sm__title card-sm__title--schoolPlatform">
                    <MdiIcon icon="mdiSchool" />
                    <strong>School Platform with Vue</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-4.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-5.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-6.jpg" alt="Profile Picture" />
                    <span>~30 people were in this product</span>
                  </div>
                </div>
                <div class="card-sm">
                  <div
                    class="card-sm__title card-sm__title--realEstatePlatform"
                  >
                    <MdiIcon icon="mdiHomeAccount" />
                    <strong>Real Estate Platform with Nuxt</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-7.jpeg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-8.jpeg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-9.jpeg" alt="Profile Picture" />
                    <span>~50 people were in this product</span>
                  </div>
                </div>
              </div>
            </figure>
            <h3>Crafting Solutions, Enhancing Experiences</h3>
            <p>
              I successufuly delivered scalable, innovative solutions by
              collaborating with cross-functional, agile teams to enhance user
              experiences.
            </p>
            <NuxtLink to="/experience" class="cta"
              >Explore my experience <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </article>
        </section>
      </div>
    </div>

    <div id="technologies" class="container">
      <div v-for="technology in technologiesRef" :key="technology.id">
        <MdiIcon :icon="technology.icon" />
        <span>{{ technology.text }}</span>
      </div>
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
const technologiesRef = ref(technologies)
const scrollPosition = ref(0)
const isAchievemnentsVisible = computed(() => scrollPosition.value > 50)
const isSecondaryItemVisible = computed(() => scrollPosition.value > 600)

onMounted(() => {
  const updateScroll = () => {
    scrollPosition.value = window.scrollY
  }

  updateScroll()

  window.addEventListener('scroll', updateScroll)

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })
})
</script>

<style lang="scss">
@use '~/assets/styles/colors' as colors;
@use '~/assets/styles/vars';

#hero {
  position: relative;

  .hero-bg {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: -100px;
    transform: translateX(-50%);
  }

  span {
    color: colors.$lightBlue;
    font-size: 20px;
    font-weight: 400;
    line-height: 44px;
    text-align: center;
    margin: 44px auto 0 auto;
    display: block;
    position: relative;
    width: fit-content;

    &:after {
      content: '👋';
      font-size: 32px;
      position: absolute;
      right: -44px;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    color: colors.$textGray;
    text-align: center;
    margin: 18px 0 -16px 0;
    padding: 0 130px;
    em {
      text-decoration: underline;
      font-size: normal;
    }
  }
}

#ctaButtons {
  //make a grid that is centered two buttons
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;
}

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
  opacity: 0;
  translate: 0 -30px;
  transform: scale(0.9);
  transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);

  &.visible {
    opacity: 1;
    translate: 0 0px;
    transform: scale(1);
  }

  .achievement {
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 12px 24px;
    line-height: 32px;
    font-size: 18px;

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

#secondary {
  padding-top: 144px;
  opacity: 0;
  translate: 0 -30px;
  transform: scale(0.9);
  transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);
  background: url(~/assets/imgs/Frame-2.svg) no-repeat center 100%;
  padding-bottom: 124px;
  margin-bottom: 270px;

  &.visible {
    opacity: 1;
    translate: 0 0px;
    transform: scale(1);
  }

  .grid {
    margin-top: 64px;
  }
}

.wrapper {
  border-radius: 12px;
  margin: 0;
  overflow: hidden;

  &__header {
    border: 1px solid #1a1f3c;
    border-bottom: none;
    height: 60px;
    display: flex;
    background: colors.$navyBlue;
    border-radius: 12px 12px 0 0;
    align-items: center;
    padding: 0 32px;

    .button {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      margin-right: 8px;

      &:first-child {
        background: #da7164;
      }

      &:nth-child(2) {
        background: #ebc063;
      }

      &:nth-child(3) {
        background: #3fdd78;
      }
    }
  }
  &__overlay {
    position: relative;
    height: calc(100% - 60px);
    overflow: hidden;

    > img {
      width: 100%;
    }

    &:after {
      content: '';
      background: linear-gradient(
        to bottom,
        rgba(1, 5, 19, 0) 0%,
        colors.$darkBlue 100%
      );
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      display: block;
      height: 50%;
      width: 100%;
    }
  }
}

#technologies {
  margin-top: -316px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  pointer-events: none;
  padding: 0 125px;
  margin-bottom: 64px;

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
</style>
