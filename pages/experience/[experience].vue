<template>
  <div id="experience">
    <AppPageHeader v-if="currentCompany" :title="currentCompany.label" :pages="pages" />
    <p v-if="currentCompany" class="container explanation">
      {{ currentCompany.hero }}
    </p>
    <div v-if="currentCompany" id="timeline" class="container">
      <div v-if="currentCompanyIndex >= 0" class="go-back">
        <NuxtLink :to="`/experience?cI=${currentCompanyIndex ?? currentCompanyIndex + 1}`"><MdiIcon icon="mdiArrowLeft" /> Go Back</NuxtLink>
      </div>
      <article v-for="(accomplishment, index) in currentCompany.accomplishments" :key="accomplishment.date" :class="{ right: index % 2 === 1 }">
        <span class="date-extended">{{ accomplishment.entity.team }}</span>
        <span class="date">{{ accomplishment.date }}</span>
        <div class="card">
          <strong>{{ accomplishment.entity.action }}</strong>
          <p>{{ accomplishment.entity.effect }}</p>
          <div class="technologies">
            <span v-for="technology in accomplishment.entity.technologies" :key="technology.icon">
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Experience', link: '/experience' }
];

const route = useRoute();
const slug = route.params.experience;

// Add meta robots tag for specific pages
useHead({
  meta: [
    {
      name: 'robots',
      content: route.params.experience === 'sdui' || route.params.experience === 'trt-world' || route.params.experience === 'homeday' ? 'noindex, nofollow' : 'index, follow'
    }
  ]
});

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
          action: 'Integrated video conference functionality for an encrypted chat app.',
          effect: 'Enabled users to set up video conferences, teachers to set up video calls with students.',
          technologies: [
            { icon: 'mdiReact' as const, label: 'React.js' },
            { icon: 'mdiApi' as const, label: 'API Integration' },
            { icon: 'mdiMatrix' as const, label: 'Matrix' },
            { icon: 'mdiLanguageJavascript' as const, label: 'Javascript' },
            { icon: 'mdiLanguageTypescript' as const, label: 'Typescript' },
            { icon: 'mdiLanguageCss3' as const, label: 'CSS3' },
            { icon: 'mdiLanguageHtml5' as const, label: 'HTML5' },
            { icon: 'mdiElectronFramework' as const, label: 'Electron' },
            { icon: 'mdiCheckAll' as const, label: 'Jest' },
            { icon: 'mdiKubernetes' as const, label: 'Kubernetes' },
            { icon: 'mdiGitlab' as const, label: 'Gitlab' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Education team of 10 people',
          action: 'Countless pair programming sessions, code reviews, and technical guidance.',
          effect: 'Contributed to countless mob and pair sessions with developers all levels, provided guidance when appropriate.',
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
          action: 'Authored documentation for notifications and WebSockets on iOS.',
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
          action: 'Created a step-by-step migration guide for transitioning from Vue 2 to Vue 3.',
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
          action: 'Upgraded settings in the chat app, improving user control and experience.',
          effect: 'Users were able to control their privacy settings.',
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
          effect: 'Loading times in the event listing page were reduced, and users were able to see the events in a better way.',
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
          effect: 'Made school event management seamless for school users across all devices.',
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
          action: 'Migrated components and pages from a PHP Symfony app to Vue.js Nuxt app.',
          effect: 'Improved page speeds up to ~%30 and enabled design system to be used in the new app.',
          technologies: [
            { icon: 'mdiVuejs' as const, label: 'Vue.js' },
            { icon: 'mdiNuxt' as const, label: 'Nuxt.js' },
            { icon: 'mdiTestTube' as const, label: 'Jest' },
            { icon: 'mdiCheckAll' as const, label: 'Cypress' },
            { icon: 'mdiLanguagePhp' as const, label: 'PHP/Symfony' },
            { icon: 'mdiDatabaseAlert' as const, label: 'Contentful' },
            { icon: 'mdiLanguageHtml5', label: 'HTML/CSS' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' },
            { icon: 'mdiDocker' as const, label: 'Docker' },
            { icon: 'mdiAws' as const, label: 'AWS' },
            { icon: 'mdiAbTesting' as const, label: 'AWS' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Design System Team of 28 people',
          action: 'Enhanced and integrated design systems.',
          effect: 'Reduced code redundancies in the existing design system and improved development efficiency by cutting down the number of unused child components and tests.',
          technologies: [
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiBookAccount', label: 'Storybook' },
            { icon: 'mdiTestTube', label: 'Jest' },
            { icon: 'mdiLanguageHtml5', label: 'HTML/CSS' },
            { icon: 'mdiLanguageJavascript', label: 'Javascript' },
            { icon: 'mdiTestTube', label: 'Testing Library' },
            { icon: 'mdiPencilRuler', label: 'Figma' },
            { icon: 'mdiNpm', label: 'NPM' },
            { icon: 'mdiLanguageTypescript', label: 'Typescript' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Internal CMS team of 10 people',
          action: 'Implemented integration tests.',
          effect: 'Cut pipeline rendering time by 25% and reduced reliance on unit tests.',
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
          action: 'Upgraded frontend infrastructure with AWS and GitHub Actions.',
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
        date: '',
        entity: {
          team: 'Software Development team of 18 people',
          action: 'Optimized election landing pages at 2018 & 2019.',
          effect: 'Reduced load times by 25% for peak traffic.',
          technologies: [
            { icon: 'mdiVuejs' as const, label: 'Vue.js' },
            { icon: 'mdiLanguageJavascript' as const, label: 'Javascript' },
            { icon: 'mdiLanguageCss3' as const, label: 'CSS3' },
            { icon: 'mdiLanguagePhp' as const, label: 'PHP' },
            { icon: 'mdiWebpack' as const, label: 'Webpack' },
            { icon: 'mdiApi' as const, label: 'REST API' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Software Development team of 18 people',
          action: "Built an SVG-based map for Turkey's 2018 & 2019 elections.",
          effect: 'Handled 75+ concurrent users with dynamic updates.',
          technologies: [
            { icon: 'mdiVuejs' as const, label: 'Vue.js' },
            { icon: 'mdiAws' as const, label: 'AWS' },
            { icon: 'mdiLanguageHtml5' as const, label: 'HTML/CSS/JS' },
            { icon: 'mdiWebpack' as const, label: 'Webpack' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Newsroom team of 9 people',
          action: 'Redesigned the internal image database.',
          effect: 'Reduced search times by 50% and improved newsroom efficiency.',
          technologies: [
            { icon: 'mdiLanguagePhp', label: 'PHP' },
            { icon: 'mdiVuejs', label: 'Vue.js' },
            { icon: 'mdiDatabase', label: 'MySQL' },
            { icon: 'mdiLanguageCss3', label: 'SCSS' }
          ]
        }
      },
      {
        date: '',
        entity: {
          team: 'Newsroom team of 9 people',
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
]);

const currentCompany = computed(() => {
  return companies.value.find((company) => company.slug === slug);
});

const currentCompanyIndex = computed(() => {
  return companies.value.findIndex((company) => company.slug === slug);
});
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
  opacity: 0;
  animation: fadeIn 0.7s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  animation-delay: 0.7s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  transform: translateX(-2px);

  &:hover {
    color: colors.$ctaHover;
  }

  svg {
    margin-right: 0.5rem;
  }
}

.education {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
  background: url('/assets/imgs/education.jpg') no-repeat center center;
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
.hero-sentence.hero-sentence--sm p {
  font-size: 2rem !important;
  line-height: 2.5rem !important;
}

@media (max-width: 1024px) {
  .go-back a {
    top: 0;
  }

  .go-back {
    position: fixed !important;
    top: -6px !important;
    left: 1rem !important;
  }

  .go-back a {
    font-size: 1.5rem !important;
    border-radius: 0px !important;
    border: 4px solid colors.$white;
    color: colors.$white;
  }
}
</style>
