<template>
  <div>
    <MatrixBackground v-if="isBoxesRendered" />
    <div id="hero" class="container">
      <span>I'm Mehmet;</span>
      <h1>Software Development Specialist</h1>
      <p>Frontend-focused, 10+ years in web, experienced in backend and full stack work.</p>
      <p>I design, build, and optimize digital interfaces, apps, and infrastructures.</p>
      <section id="ctaButtons">
        <button class="btn btn--filled sliding-text--button" @click="isModalOpen = true">Discover My Achievements</button>
        <button class="btn btn--video" @click="openVideoModal">
          <figure>
            <img :src="ogImage" alt="Video Icon - Watch Mehmet Deveci's Introduction" loading="lazy" width="270" height="auto" style="display: block" />
          </figure>
          Watch My Introduction
        </button>
      </section>
      <div class="scroll-indicator">
        <div class="scroll-indicator__icon"></div>
        <span>Scroll down to see more</span>
      </div>

      <Teleport to="body">
        <Modal :is-open="isModalOpen" :is-animating="isModalAnimationVisible" :has-sidebar="true" sidebar-title="Key Achievements" @close="closeModal">
          <template #sidebar>
            <div v-if="isMobile" class="select-wrapper">
              <select v-model="selectedAchievementIndex" @change="handleAchievementChange(selectedAchievementIndex)">
                <option v-for="(item, index) in achievements" :key="index" :value="index">
                  {{ item.label }}
                </option>
              </select>
              <div class="select-arrow"></div>
            </div>
            <div v-else class="flex-column">
              <button v-for="(item, index) in achievements" :key="index" class="modal-button" :class="{ active: selectedAchievementIndex === index }" @click="handleAchievementChange(index)">
                {{ item.label }}
              </button>
            </div>
          </template>

          <template #content>
            <div class="hero-sentence">
              <img :src="getImagePath(selectedAchievement.image)" :alt="`${selectedAchievement.label} - ${selectedAchievement.hero}`" loading="lazy" width="800" height="400" class="hero-sentence__bg" />
              <p>{{ selectedAchievement.hero }}</p>
            </div>
            <ol>
              <li v-for="(ach, index) in selectedAchievement.accomplishments" :key="index" v-html="ach.entity"></li>
            </ol>
            <a v-if="hasNextAchievement" rel="nofollow" class="cta cta--lightBlue cta-custom" @click="handleAchievementChange(selectedAchievementIndex + 1)">
              Explore {{ nextAchievementLabel }} Accomplishments
              <MdiIcon icon="mdiArrowTopRight" />
            </a>
            <nuxt-link v-else to="/experience/" class="cta cta-custom">
              Explore my full experience (tech stack, tools, etc.)
              <MdiIcon icon="mdiArrowTopRight" />
            </nuxt-link>
          </template>
        </Modal>

        <!-- Lazy-loaded video modal -->
        <Modal v-if="isVideoRequested" :is-open="isVideoModalOpen" :is-animating="false" :has-sidebar="false" @close="closeVideoModal">
          <template #content>
            <iframe src="https://www.youtube.com/embed/1fAYdOZw4EQ?cc_load_policy=1" frameborder="0" width="100%" height="100%" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
        </Modal>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import ogImage from 'public/assets/imgs/og-image.jpg';

// Import achievement images - add all your achievement images here
import performanceBg from 'public/assets/imgs/performance-bg.jpg';
import dataBg from 'public/assets/imgs/data-bg.jpg';
import engagementBg from 'public/assets/imgs/engagement-bg.jpg';
import mentorshipBg from 'public/assets/imgs/mentorship-bg.jpg';
import collaborationBg from 'public/assets/imgs/collaboration-bg.jpg';

const isMobile = ref(false);
const isBoxesRendered = ref(false);
const route = useRoute();

// Create a mapping object for images
const achievementImages = {
  'performance-bg.jpg': performanceBg,
  'data-bg.jpg': dataBg,
  'engagement-bg.jpg': engagementBg,
  'mentorship-bg.jpg': mentorshipBg,
  'collaboration-bg.jpg': collaborationBg
};

// Helper function to get the correct image path
const getImagePath = (imageName) => {
  return achievementImages[imageName];
};

// Defer mobile detection to client-side only
onMounted(() => {
  isMobile.value = window.innerWidth < 1024;

  // Add resize listener with debounce
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      isMobile.value = window.innerWidth < 1024;
    }, 250);
  });

  if (route.query.my_achievements) {
    setTimeout(() => {
      isModalOpen.value = true;
    }, 150);
  }
  // Render boxes with delay after critical content
  setTimeout(() => {
    isBoxesRendered.value = true;
  }, 1000); // Render boxes after LCP is done
});

const closeVideoModal = () => {
  isVideoModalOpen.value = false;
};
const achievements = ref([
  {
    label: 'Performance & Optimization',
    hero: 'I built and optimized products to millions worldwide across diverse industries.',
    image: 'performance-bg.jpg',
    accomplishments: [
      {
        entity:
          '<b>Successfully delivered election result landing pages</b> with Vue.js in 2018 & 2019 at <a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">TRT World</a>, for over <u><b>3M+ monthly visitors.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">*</a>'
      },
      {
        entity:
          '<b>Integrated i18n</b> in React/Next.js app at <a rel="nofollow noopener noreferrer" target="_blank" href="https://aimanager360.com/">AIManager360</a>, <u><b>expanded market reach by 25%.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://aimanager360.com/">*</a>'
      },
      {
        entity:
          '<b>Built dynamic election result maps</b> with Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, <u><b>used by 75k+ concurrent users across 50+ online platforms</b></u>.<a rel="nofollow noopener noreferrer" target="_blank" href="https://www.trt.global/world">*</a>'
      },
      {
        entity:
          '<b>Integrated Grafana and InfluxDB</b> at <a rel="nofollow noopener noreferrer" target="_blank" href="https://my.homeday.de">Homeday</a> to monitor web performance and strengthen observability.<a rel="nofollow noopener noreferrer" target="_blank" href="https://my.homeday.de">*</a>'
      }
    ]
  },
  {
    label: 'Development Infrastructure',
    hero: 'I built, optimized CI/CD pipelines and infrastructure to streamline development workflows.',
    image: 'data-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Developed frontend infrastructure</b> with AWS/GitHub Actions at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>trimming costs by 15%</b></u>.'
      },
      {
        entity: '<b>Automated local environment</b> through Docker at <a rel="nofollow noopener noreferrer" target="_blank" href="https://aimanager360.com/">AIManager360</a>, <u><b>cutting dev onboarding by 50%</b></u>.'
      },
      {
        entity: '<b>Built Infrastructure as Code</b> with Terraform & AWS, <u><b>publishing static apps for no costs.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://github.com/volcodes/volcodeorg-app/tree/main/terraform">*</a>'
      },
      {
        entity: '<b>Conceptualized and integrated CI services</b> utilized Node.js on asset management, and image optimization for improved bundling.'
      }
    ]
  },
  {
    label: 'User Engagement',
    hero: 'I crafted empathetic digital experiences that bridge user needs with technology.',
    image: 'engagement-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Conceptualized and delivered video conferencing features</b> in React/Electron app at <a rel="nofollow noopener noreferrer" target="_blank" href="https://sdui.com/">Sdui</a>, <u><b>enabling 200+ school admins to schedule and launch virtual meetings.</b></u>'
      },
      {
        entity: '<b>Designed a drag-and-drop feature</b> with Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, improved UX, <u><b>cutting content creation time by 30% for 100+ editorial staff</b>.</u>'
      },
      {
        entity: '<b>Revamped event listing/editing features</b> using Vue/Vuex at <a rel="nofollow noopener noreferrer" target="_blank" href="https://sdui.de/">Sdui</a>, <u><b>driving user engagement by 20%</b></u>.'
      },
      {
        entity: '<b>Implemented debounce, search algorithms</b>, using Vue/Vuex at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trt.global/">TRT World</a>, <u><b>accelerated workflows by 50%</b></u>.'
      }
    ]
  },
  {
    label: 'Mentorship',
    hero: 'I wrote educational programs that accelerated developer growth across organizations.',
    image: 'mentorship-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Guided junior devs at Homeday & Sdui</b>, leading to <u><b>two promotions in rapid time</b></u> through mentorship, pair programming sessions & code reviews.'
      },
      {
        entity: '<b>Led presentations on frontend topics</b> at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de/">Homeday</a>, contributing to team knowledge and fostering knowledge sharing.'
      },
      {
        entity: '<b>Launched structured mentorship programs</b> at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de/">Homeday</a>, empowering career switchers through 1v1 sessions.'
      }
    ]
  },
  {
    label: 'Cross-Functional Collaboration',
    hero: 'I enhanced design systems, improved developer experience and boosted collabration in teams.',
    image: 'collaboration-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Enhanced design systems with Storybook</b> at Homeday, minimizing bugs and <u><b>increasing test coverage to 74%</b></u>.'
      },
      {
        entity:
          '<b>Migrated 20+ layouts</b> from PHP to Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>improved page speeds by 20%.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">*</a>'
      },
      {
        entity: '<b>Applied snapshot, E2E, unit and integration tests</b> when appropriate in six different codebases at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a></u>.'
      },
      {
        entity: '<b>Moderated design system, D&I, and engineering workshops</b> at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>improving collaboration and design quality.</b></u>'
      }
    ]
  }
]);
const selectedAchievementIndex = ref(0);
const hasNextAchievement = computed(() => selectedAchievementIndex.value + 1 < achievements.value.length);
const nextAchievementLabel = computed(() => (hasNextAchievement.value ? achievements.value[selectedAchievementIndex.value + 1].label : ''));
const isVideoModalOpen = ref(false);
const selectedAchievement = ref(achievements.value[selectedAchievementIndex.value]);
const isModalOpen = ref(false);
const isModalAnimationVisible = ref(false);

const closeModal = () => {
  isModalOpen.value = false;
};

const handleAchievementChange = (index) => {
  if (index >= achievements.value.length) index = 0;
  isModalAnimationVisible.value = true;
  setTimeout(() => {
    selectedAchievementIndex.value = index;
    selectedAchievement.value = achievements.value[selectedAchievementIndex.value];
    isModalAnimationVisible.value = false;
  }, 200);
};

// Close modal on escape key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal();
    }
  });
});

// Lazy-load video modal content
const isVideoRequested = ref(false);
const openVideoModal = () => {
  isVideoRequested.value = true;
  nextTick(() => {
    isVideoModalOpen.value = true;
  });
};
</script>

<style lang="scss" scoped>
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

#hero {
  position: relative;
  min-height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  contain: content; /* Improve paint performance */

  .hero-bg {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(00%);
    width: 65%;
    max-width: 1200px;
    height: auto;
    z-index: 9;
    pointer-events: none;
  }

  span {
    color: colors.$cloudWhite;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    text-align: center;
    display: block;
    position: relative;
    width: fit-content;
    margin-top: -76px;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.3s;
    will-change: transform, opacity; /* Optimize for animations */
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
    color: colors.$cloudWhite;
    font-family: 'Inter';
    text-align: center;
    margin: 0;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.55s;
    will-change: transform, opacity; /* Optimize for animations */

    u {
      text-decoration: none;
    }

    em {
      text-decoration: underline;
      font-size: normal;
    }
  }

  h1 {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.5s;
    will-change: transform, opacity; /* Optimize for animations */
  }
}

.page-transition--on #hero {
  span {
    opacity: 0;
    transform: translateY(12px);
  }
  p {
    opacity: 0;
    transform: translateY(54px);
  }
  h1 {
    opacity: 0;
    transform: translateY(48px);
  }
}

#ctaButtons {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 16px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  align-items: flex-start;

  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transition-delay: 0.6s;
  will-change: transform, opacity; /* Optimize for animations */
}

.page-transition--on #ctaButtons {
  opacity: 0;
  transform: translateY(30px);
}

.cta {
  margin-left: 4rem;
}

.cta--lightBlue {
  color: colors.$cloudWhite;
  border-color: colors.$cloudWhite;

  &:after {
    background-color: colors.$cta;
  }

  svg {
    transform: rotate(135deg) translate(0, 0);
  }

  &:hover {
    color: black;
    border-color: colors.$ctaHover;

    svg {
      transform: rotate(135deg) translate(-0.9rem, -0.75rem);
    }
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: colors.$textGray;
  margin-bottom: 3rem;

  &__icon {
    width: 24px;
    height: 40px;
    border: 2px solid colors.$textGray;
    border-radius: 14px;
    position: relative;
    margin-top: 1rem;

    &::before {
      content: '';
      width: 4px;
      height: 8px;
      background: colors.$cta;
      position: absolute;
      left: 50%;
      top: 6px;
      transform: translateX(-50%);
      border-radius: 2px;
      opacity: 0.8;
      animation: scrollDown 1s cubic-bezier(0.25, 1.07, 0.6, 0.9) infinite;
      will-change: transform, opacity; /* Optimize for animations */
    }
  }

  span {
    font-family: 'Inter';
    font-size: 1.25rem;
    font-weight: 400;
    color: colors.$textGray;
    font-style: normal;
    margin-top: 0 !important;
  }
}

@media only screen and (min-device-width: 1023px) and (max-device-width: 1200px) {
  #hero h1 {
    font-size: 3.5rem;
    line-height: 4rem;
  }
  #hero p {
    font-size: 1.15rem;
    line-height: 1.7rem;
  }
}

@media (max-width: 1023px) {
  #hero {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 0;
    min-height: auto;
    align-items: flex-start;
    justify-content: flex-start;

    .hero-bg {
      width: 100%;
    }
  }
  #hero h1 {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 0.6rem;
    margin-top: 0.3rem;
    box-sizing: border-box;
    text-align: left;

    br {
      display: none;
    }
  }
  #hero p {
    font-size: 1.15rem;
    line-height: 1.7rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    text-align: left;
    padding: 0;
  }
  #hero span {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-top: 1.5rem;
    margin-left: 0;
  }
  #ctaButtons {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 1rem;
  }
  #hero p {
    margin-left: 0;
  }
  .scroll-indicator {
    display: none;
  }
}

.btn--video {
  position: relative;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  figure {
    width: 100%;
    box-sizing: border-box;
    margin: 8px 0 0 0;
    opacity: 1;
    z-index: 9;
    display: none;
  }
}

@media (max-width: 1023px) {
  .btn--video {
    color: white;
    border-color: white;
    figure {
      display: block;
      margin: 0 -24px;
      transform: translateX(-24px);
    }
  }
}

.hero-sentence {
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: relative;
    z-index: 1;
    padding: 4rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}

/* Optimized boxes with reduced CSS complexity */
.boxes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  opacity: 0;
  animation: fadeIn 0.5s cubic-bezier(0.2, 0.57, 0.76, 0.79) forwards;
  animation-delay: 0.2s;
  box-sizing: border-box;
  z-index: -1;
  contain: layout style paint; /* Improve performance */

  &.matrix-animation-active {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, transparent 0%, colors.$navyBlue 70%);
      z-index: 1;
      opacity: 0.7;
      pointer-events: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 10px 0px 80px 80px colors.$navyBlue;
    z-index: 2;
    pointer-events: none;
  }

  > div {
    border-right: 1px solid rgba(255, 255, 255, 0.04);
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    box-sizing: border-box;
    transform: translateZ(0); /* Hardware acceleration */
    position: relative;
    transition:
      background-color 0.5s ease,
      opacity 0.5s ease;
    will-change: background-color, opacity;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: transparent;
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    &:hover {
      background-color: rgba(43, 204, 105, 0.2) !important;
      opacity: 1 !important;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes matrixGlow {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
</style>
