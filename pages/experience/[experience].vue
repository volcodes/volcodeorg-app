<template>
  <div id="experience">
    <AppPageHeader
      v-if="currentCompany"
      :title="currentCompany.label"
      :pages="pages"
    />
    <p v-if="currentCompany" class="container explanation">
      {{ currentCompany.hero }}
    </p>
    <div v-if="currentCompany" id="timeline" class="container">
      <div v-if="currentCompanyIndex >= 0" class="go-back">
        <NuxtLink
          :to="`/experience?cI=${currentCompanyIndex ?? currentCompanyIndex + 1}`"
          ><MdiIcon icon="mdiArrowLeft" /> Go Back</NuxtLink
        >
      </div>
      <article
        v-for="(accomplishment, index) in currentCompany.accomplishments"
        :key="accomplishment.date"
        :class="{ right: index % 2 === 1 }"
      >
        <span class="date-extended">{{ accomplishment.entity.team }}</span>
        <span class="date">{{ accomplishment.date }}</span>
        <div class="card">
          <strong>{{ accomplishment.entity.action }}</strong>
          <p>{{ accomplishment.entity.effect }}</p>
          <div class="technologies">
            <span
              v-for="technology in accomplishment.entity.technologies"
              :key="technology.icon"
            >
              <MdiIcon :icon="technology.icon" />
              <span>{{ technology.label }}</span>
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Experience', link: '/experience' }
]

const slug = useRoute().params.experience
const companies = ref([
  {
    slug: 'sdui',
    label: 'Sdui Gmbh',
    hero: 'I enhanced digital communication tools for schools, focusing on performance optimization, feature development, and developer enablement at Sdui GmbH.',
    accomplishments: [
      {
        date: '2024',
        entity: {
          team: 'Messenger team of 12 people',
          action:
            'Built video conference functionality for an encrypted chat app.',
          effect:
            'Enabled all users to have video conferences, teachers to set up video calls with students.',
          technologies: [
            {
              icon: 'mdiReact',
              label: 'React.js'
            },
            {
              icon: 'mdiMatrix',
              label: 'Matrix'
            },
            {
              icon: 'mdiLanguageJavascript',
              label: 'Javascript'
            },
            {
              icon: 'mdiLanguageTypescript',
              label: 'Typescript'
            },
            {
              icon: 'mdiLanguageCss3',
              label: 'CSS3'
            },
            {
              icon: 'mdiLanguageHtml5',
              label: 'HTML5'
            },
            {
              icon: 'mdiElectronFramework',
              label: 'Electron'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Jest'
            },
            {
              icon: 'mdiKubernetes',
              label: 'Kubernetes'
            },
            {
              icon: 'mdiGitlab',
              label: 'Gitlab'
            }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Education team of 10 people',
          action:
            'Led pair programming sessions, code reviews, and technical guidance.',
          effect:
            'Enabled junior developers to grow and become more confident in their skills.',
          technologies: [
            {
              icon: 'mdiVuejs',
              label: 'Vue.js'
            },
            {
              icon: 'mdiLanguageJavascript',
              label: 'Javascript'
            },
            {
              icon: 'mdiLanguageCss3',
              label: 'CSS3'
            },
            {
              icon: 'mdiLanguageHtml5',
              label: 'HTML5'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Cypress'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Jest & Vue Test Utils'
            },
            {
              icon: 'mdiGitlab',
              label: 'Gitlab'
            },
            {
              icon: 'mdiAppleIos',
              label: 'IOS Development'
            }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Education team of 10 people',
          action:
            'Authored documentation for notifications and WebSockets on iOS.',
          effect: 'Accelerated onboarding and reduced debugging time.',
          technologies: [
            {
              icon: 'mdiApple',
              label: 'xCode'
            },
            {
              icon: 'mdiLanguageSwift',
              label: 'Swift'
            }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Education team of 10 people',
          action:
            'Created a step-by-step migration guide for transitioning from Vue 2 to Vue 3.',
          effect: 'Streamlined adoption across the engineering team.',
          technologies: [
            {
              icon: 'mdiVuejs',
              label: 'Vue.js'
            }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Messenger team of 12 people',
          action:
            'Upgraded settings in the chat app, improving user control and experience.',
          effect: 'Improved user control and experience.',
          technologies: [
            {
              icon: 'mdiReact',
              label: 'React.js'
            },
            {
              icon: 'mdiMatrix',
              label: 'Matrix'
            },
            {
              icon: 'mdiLanguageJavascript',
              label: 'Javascript'
            },
            {
              icon: 'mdiLanguageTypescript',
              label: 'Typescript'
            },
            {
              icon: 'mdiLanguageCss3',
              label: 'CSS3'
            },
            {
              icon: 'mdiLanguageHtml5',
              label: 'HTML5'
            },
            {
              icon: 'mdiElectronFramework',
              label: 'Electron'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Jest'
            },
            {
              icon: 'mdiKubernetes',
              label: 'Kubernetes'
            },
            {
              icon: 'mdiGitlab',
              label: 'Gitlab'
            }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Education team of 10 people',
          action: 'Optimized event listing screens for performance.',
          effect: 'Improved UX for school users.',
          technologies: [
            {
              icon: 'mdiVuejs',
              label: 'Vue.js'
            },
            {
              icon: 'mdiLanguageJavascript',
              label: 'Javascript'
            },
            {
              icon: 'mdiLanguageCss3',
              label: 'CSS3'
            },
            {
              icon: 'mdiLanguageHtml5',
              label: 'HTML5'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Cypress'
            },
            {
              icon: 'mdiGitlab',
              label: 'Gitlab'
            },
            {
              icon: 'mdiLanguagePhp',
              label: 'PHP'
            },
            {
              icon: 'mdiLaravel',
              label: 'Laravel'
            }
          ]
        }
      },
      {
        date: '2023',
        entity: {
          team: 'Education team of 10 people',
          action: 'Enhanced functionalities of event creation and edit flows.',
          effect:
            'Made school event management seamless for school users across all devices.',
          technologies: [
            {
              icon: 'mdiVuejs',
              label: 'Vue.js'
            },
            {
              icon: 'mdiLanguageJavascript',
              label: 'Javascript'
            },
            {
              icon: 'mdiLanguageCss3',
              label: 'CSS3'
            },
            {
              icon: 'mdiLanguageHtml5',
              label: 'HTML5'
            },
            {
              icon: 'mdiCheckAll',
              label: 'Cypress'
            },
            {
              icon: 'mdiGitlab',
              label: 'Gitlab'
            },
            {
              icon: 'mdiLanguagePhp',
              label: 'PHP'
            },
            {
              icon: 'mdiLaravel',
              label: 'Laravel'
            }
          ]
        }
      }
    ]
  },
  {
    slug: 'homeday',
    label: 'Homeday Gmbh',
    hero: 'Modernized real estate technology by migrating systems, optimizing processes, and mentoring developers at Homeday GmbH.',
    accomplishments: [
      {
        date: '2023',
        entity: {
          team: 'Customer acquisition team of 12 people',
          action:
            'Migrated components and pages from a PHP Symfony app to Vue.js Nuxt app.',
          effect: 'Improved page speeds by 40% and enhanced UX.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiNuxt', label: 'Nuxt.js' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Cypress' },
            { icon: 'mdiLanguagePhp', label: 'PHP/Symfony' },
            { icon: 'mdiContentful', label: 'Contentful' },
            { icon: 'mdiLanguageHtml5', label: 'HTML/CSS/JS' },
            { icon: 'mdiDocker', label: 'Docker' },
            { icon: 'mdiAws', label: 'AWS' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Product & Design team of 28 people',
          action: 'Enhanced and integrated design systems.',
          effect:
            'Reduced code redundancies and improved development efficiency.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiStorybook', label: 'Storybook' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Testing Library' },
            { icon: 'mdiLanguageCss3', label: 'SCSS' },
            { icon: 'mdiLanguageHtml5', label: 'HTML/CSS/JS' },
            { icon: 'mdiFigma', label: 'Figma' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Internal CMS team of 10 people',
          action: 'Implemented integration tests.',
          effect:
            'Cut pipeline rendering time by 25% and reduced reliance on unit tests.',
          technologies: [
            { icon: 'mdiCheckAll', label: 'Cypress' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Testing Library' },
            { icon: 'mdiGithub', label: 'GitHub Actions' },
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' },
            { icon: 'mdiLanguageCss3', label: 'CSS' },
            { icon: 'mdiLanguageHtml5', label: 'HTML' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Internal CMS team of 10 people',
          action: 'Implemented new flows in the Homeday CMS.',
          effect: 'Ensured qualified buyers and reduced costs for all parties.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiCheckAll', label: 'Vue Test Utils' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Testing Library' },
            { icon: 'mdiCheckAll', label: 'Cypress' },
            { icon: 'mdiLanguageHtml5', label: 'HTML' },
            { icon: 'mdiLanguageCss3', label: 'CSS' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' },
            { icon: 'mdiCheckAll', label: 'Travis CI' },
            { icon: 'mdiAws', label: 'AWS' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Frontend team of 24 people',
          action:
            'Upgraded frontend infrastructure with AWS and GitHub Actions.',
          effect: 'Reduced costs by 15% and streamlined deployments.',
          technologies: [
            { icon: 'mdiAws', label: 'AWS' },
            { icon: 'mdiGithub', label: 'GitHub Actions' },
            { icon: 'mdiDocker', label: 'Docker' },
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiCheckAll', label: 'Vue Test Utils' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Testing Library' },
            { icon: 'mdiLanguageHtml5', label: 'HTML' },
            { icon: 'mdiLanguageCss3', label: 'CSS' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Frontend team of 24 people',
          action: 'Mentored junior developers through pair programming.',
          effect: 'Enabled one promotion within 8 months.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiCheckAll', label: 'Vue Test Utils' },
            { icon: 'mdiCheckAll', label: 'Jest' },
            { icon: 'mdiCheckAll', label: 'Testing Library' },
            { icon: 'mdiLanguageHtml5', label: 'HTML' },
            { icon: 'mdiLanguageCss3', label: 'CSS' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' }
          ]
        }
      }
    ]
  },
  {
    slug: 'trt',
    label: 'TRT World',
    hero: 'Built and optimized high-traffic election pages and modernized internal tools for journalists at TRT World.',
    accomplishments: [
      {
        date: 'February',
        entity: {
          action: 'Optimized election landing pages at 2018 & 2019.',
          effect: 'Reduced load times by 25% for peak traffic.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' },
            { icon: 'mdiLanguageCss3', label: 'CSS3' },
            { icon: 'mdiLanguagePhp', label: 'PHP' },
            { icon: 'mdiWebpack', label: 'Webpack' },
            { icon: 'mdiApi', label: 'REST API' }
          ]
        }
      },
      {
        date: 'June',
        entity: {
          action: 'Built an SVG-based map for Turkey’s 2018 & 2019 elections.',
          effect: 'Handled 18K+ concurrent users with dynamic updates.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiAws', label: 'AWS' },
            { icon: 'mdiLanguageHtml5', label: 'HTML/CSS/JS' },
            { icon: 'mdiWebpack', label: 'Webpack' }
          ]
        }
      },
      {
        date: 'June',
        entity: {
          action: 'Redesigned the internal image database.',
          effect:
            'Reduced search times by 50% and improved newsroom efficiency.',
          technologies: [
            { icon: 'mdiLanguagePhp', label: 'PHP' },
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiDatabase', label: 'MySQL' },
            { icon: 'mdiLanguageCss3', label: 'SCSS' }
          ]
        }
      },
      {
        date: 'June',
        entity: {
          action: 'Developed and optimized a CMS editor.',
          effect: 'Streamlined content creation for journalists.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiLanguagePhp', label: 'PHP' },
            { icon: 'mdiDatabase', label: 'MySQL' },
            { icon: 'mdiApi', label: 'REST API' }
          ]
        }
      }
    ]
  }
  // {
  //   label: 'Homeday Gmbh',
  //   hero: 'Modernized real estate technology by migrating systems, optimizing processes, and mentoring developers at Homeday GmbH.',
  //   image: companyTwoBg,
  //   accomplishments: [
  //     {
  //       date: 'February',
  //       entity:
  //         "<b>Migrated components and pages</b> from a PHP Symfony app to Vue.js Nuxt app, <u><b>improved page speeds by 40% and enhancing UX.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>Nuxt.js</b>, <b>Jest</b>, <b>Cypress</b>, <b>PHP/Symfony</b>, <b>Contentful</b>, <b>HTML/CSS/JS</b>, <b>Docker</b>, <b>AWS</b></span>"
  //     },
  //     {
  //       date: 'May',
  //       entity:
  //         "<b>Enhanced and integrated design systems</b>, <u><b>reducing code redundancies and improving development efficiency.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>Storybook</b>, <b>Jest</b>, <b>Testing Library</b>, <b>SCSS</b>, <b>HTML/CSS/JS</b>, <b>Figma</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Implemented integration tests</b>, <u><b>cutting pipeline rendering time by 25% and reducing reliance on unit tests.</b></u> <span class='tech-stack'><b>Cypress</b>, <b>Jest</b>, <b>GitHub Actions</b>, <b>Vue.js</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Implemented new flows</b> in the Homeday's CMS: <u><b>ensuring qualified buyers</b></u> and <u><b>reducing costs for all parties.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>Vue Test Utils</b>, <b>Jest</b>, <b>Testing Library</b>, <b>Cypress</b>, <b>HTML/CSS/JS</b>, <b>Travis CI</b>, <b>AWS</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Upgraded frontend infrastructure</b> with AWS and GitHub Actions, <u><b>reducing costs by 15% and streamlining deployments.</b></u> <span class='tech-stack'><b>AWS</b>, <b>GitHub Actions</b>, <b>Docker</b>, <b>Vue.js</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Mentored junior developers</b> through pair programming, <u><b>enabling one promotion within 8 months.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>Vue Test Utils</b>, <b>Jest</b>, <b>Testing Library</b>, <b>HTML/CSS/JS</b></span>"
  //     }
  //   ]
  // },
  // {
  //   label: 'Turkish Radio and Television Corporation',
  //   hero: 'Built and optimized high-traffic election pages and modernized internal tools for journalists at TRT World.',
  //   image: companyThreeBg,
  //   accomplishments: [
  //     {
  //       date: 'February',
  //       entity: {
  //         action: 'Optimized election landing pages at 2018 & 2019.',
  //         effect: 'Reduced load times by 25% for peak traffic.',
  //         technologies: [
  //           {
  //             icon: 'mdiVuejs',
  //             label: 'Vue.js'
  //           },
  //           {
  //             icon: 'mdiLanguageJavascript',
  //             label: 'Javascript'
  //           },
  //           {
  //             icon: 'mdiLanguageCss3',
  //             label: 'CSS3'
  //           },
  //           {
  //             icon: 'mdiLanguagePhp',
  //             label: 'PHP'
  //           },
  //           {
  //             icon: 'mdiWebpack',
  //             label: 'Webpack'
  //           },
  //           {
  //             icon: 'mdiApi',
  //             label: 'REST API'
  //           }
  //         ]
  //       }
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Built an SVG-based map</b> for Turkey’s 2018 & 2019 elections, <u><b>handling 18K+ concurrent users with dynamic updates.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>AWS</b>, <b>HTML/CSS/JS</b>, <b>Webpack</b>, <b>AWS</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Redesigned the internal image database</b>, <u><b>reducing search times by 50% and improving newsroom efficiency.</b></u> <span class='tech-stack'><b>PHP</b>, <b>Vue.js</b>, <b>MySQL</b>, <b>SCSS</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Developed and optimized a CMS editor</b>, <u><b>streamlining content creation for journalists.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>PHP</b>, <b>MySQL</b>, <b>REST API</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Created a custom video player</b> for TRT World, <u><b>enabling seamless playback for over 1M+ daily users.</b></u> <span class='tech-stack'><b>Vue.js</b>, <b>AWS</b>, <b>HTML/CSS/JS</b>, <b>Webpack</b>, <b>REST API</b></span>"
  //     },
  //     {
  //       date: 'June',
  //       entity:
  //         "<b>Designed an advanced search feature</b> for a VOD platform at TRT, <u><b>boosting discoverability & engagement.</b></u> <span class='tech-stack'><b>PHP</b>, <b>HTML/CSS/JS</b>, <b>Vue.js</b>, <b>Laravel</b>, <b>Docker</b></span>"
  //     }
  //   ]
  // }
])
const currentCompany = computed(() => {
  return companies.value.find((company) => company.slug === slug)
})
const currentCompanyIndex = computed(() => {
  return companies.value.findIndex((company) => company.slug === slug)
})
</script>

<style lang="scss" scoped>
@use '~/assets/styles/main.scss';
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';
.go-back {
  position: sticky;
  top: 8rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background: transparent;
  z-index: 9;
}

.go-back a {
  font-size: 2rem;
  font-family: vars.$fontFamilyRegular;
  color: colors.$cta;
  line-height: 2rem;
  display: block;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  border-radius: 10px;
  width: fit-content;
  background: colors.$navyBlue;
  padding: 0.5rem 1rem;

  &:hover {
    color: colors.$ctaHover;
  }

  svg {
    margin-right: 0.5rem;
  }
}

.explanation {
  color: colors.$blueSky;
  padding: 0;
}

.education {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
  background: url('~/assets/imgs/education.png') no-repeat center center;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  padding: 1rem;
  box-sizing: border-box;
  margin-top: 4rem;
  margin-bottom: 1rem;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(2, 6, 23, 0.3);
    box-shadow: inset 0 0 50px rgba(2, 6, 23, 0.3);
    z-index: 1;
  }

  h2 {
    background-size: cover;
    position: relative;
    z-index: 2;
    padding: 0;
    font-size: 4.5rem;
    line-height: 5rem;
    color: white;
    text-shadow: 2px 2px 0px colors.$navyBlue;
  }
}

.explanation {
  color: colors.$textGray;
  font-weight: 500;
  margin-top: 0rem;
  position: relative;
  z-index: 2;
  // padding: 1rem;
  font-family: vars.$fontFamilyRegular;
  font-size: 1.75rem;
  line-height: 2.5rem;
}
.hero-sentence.hero-sentence--sm p {
  font-size: 2rem !important;
  line-height: 2.5rem !important;
}

@media (max-width: 1024px) {
  .go-back a {
    top: 0;
  }

  .go-back {
    // position: fixed !important;
    top: 0.5rem !important;
    left: -2rem !important;
  }

  .go-back a {
    font-size: 1.5rem !important;
    border-radius: 0px !important;
    border: 4px solid colors.$white;
    color: colors.$white;
  }
}
</style>
