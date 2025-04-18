<script setup>
import { ref, onMounted } from 'vue';

const isMobile = ref(false);
isMobile.value = window ? window.innerWidth < 1024 : false;

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
          '<b>Built a high-performance landing page with Vue.js</b> for 2019 Local Elections at <a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">TRT World</a>, <u><b>delivering real-time results in 1300ms.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">*</a>'
      },
      {
        entity:
          '<b>Migrated components and pages</b> from Symfony to Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>improved page speeds up to %30.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">*</a>'
      },
      {
        entity: '<b>Implemented new user flows</b> in <a rel="nofollow noopener noreferrer" target="_blank" href="https://my.homeday.de">Homeday\'s CMS</a>: ensuring qualified buyers, and <u><b>reducing costs for all parties</b>.</u>'
      }
    ]
  },
  {
    label: 'Data Visualization',
    hero: 'I built apps that transform complex information into interactive real-time interfaces.',
    image: 'data-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Built an embedded SVG-based map with Vue.js</b> for Turkey\'s 2018 General Elections at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, <u><b>handling 75k+ concurrent users</b></u>.'
      },
      {
        entity: '<b>Upgraded frontend infrastructure with AWS and GitHub Actions</b>, <u><b>reducing costs by 15% and streamlining deployments.</b></u>'
      }
    ]
  },
  {
    label: 'User Engagement',
    hero: 'I crafted empathetic digital experiences that bridge user needs with technology.',
    image: 'engagement-bg.jpg',
    accomplishments: [
      {
        entity: "<b>Enhanced Sdui's event management system</b>, <u><b>increasing user interaction at least 20%</b></u> via better calendar & scheduling features."
      },
      {
        entity:
          '<b>Built an asset management app from scratch</b>, effectively using Node.js, and Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, <u><b> reducing search times at least 50% and boosting editor efficiency.</b></u>'
      },
      {
        entity: '<b>Conceptualized and implemented video conference functionality</b> for a chat app at <a rel="nofollow noopener noreferrer" target="_blank" href="https://sdui.com/">Sdui</a>, <u><b>allowing school teachers to set video calls.</b></u>'
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
        entity: '<b>Created step-by-step migration guide for Vue 2 → Vue 3</b>, streamlining the process & <u><b>boosting developer productivity at Sdui</b></u>.'
      }
    ]
  },
  {
    label: 'Cross-Functional Collaboration',
    hero: 'I enhanced design systems, improved developer experience and boosted collabration in teams.',
    image: 'collaboration-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Optimized test cases, reduced redundancies</b> of the Design System at Homeday, <u><b>reduced development build times by ~%20.</b></u>'
      },
      {
        entity: '<b>Modernized an internal CMS at TRT World</b>, <u><b>improved search and creation user flows by 30%.</b></u>'
      },
      {
        entity: '<b>Implemented integration tests</b> and reduced legacy unit and E2E tests at <a href="#Homeday">Homeday</a>, <u><b>accelerated build times by ~%25.</b></u>'
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
</script>

<template>
  <div>
    <div id="hero" class="container">
      <div class="boxes">
        <div v-for="i in 70" :key="i"></div>
      </div>
      <!-- <img src="/assets/imgs/Frame.svg" alt="Hero Background" class="hero-bg" loading="lazy" /> -->
      <span>I'm Mehmet;</span>
      <h1>Software Development Specialist</h1>
      <p>Frontend-focused, 10+ years in web, experienced in backend and full stack work.</p>
      <p>I design, build, and optimize digital interfaces, apps, and infrastructures.</p>
      <section id="ctaButtons">
        <button class="btn btn--filled sliding-text--button" @click="isModalOpen = true">Discover My Achievements</button>
        <button class="btn btn--video" @click="isVideoModalOpen = true">
          <figure>
            <NuxtImg src="/assets/imgs/og-image.jpg" alt="Video Icon - Watch Mehmet Deveci's Introduction" loading="lazy" width="270" height="180" format="webp" quality="80" preset="og" sizes="sm:270px md:270px lg:270px" :modifiers="{ fit: 'cover' }" />
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
              <NuxtImg :src="`/assets/imgs/${selectedAchievement.image}`" :alt="`${selectedAchievement.label} - ${selectedAchievement.hero}`" loading="lazy" width="800" height="400" format="jpg" quality="80" class="hero-sentence__bg" fit="cover" />
              <p>{{ selectedAchievement.hero }}</p>
            </div>
            <ol>
              <li v-for="(ach, index) in selectedAchievement.accomplishments" :key="index" v-html="ach.entity"></li>
            </ol>
            <a v-if="hasNextAchievement" rel="nofollow" class="cta cta-custom" @click="handleAchievementChange(selectedAchievementIndex + 1)">
              Explore {{ nextAchievementLabel }} Accomplishments
              <MdiIcon icon="mdiArrowTopRight" />
            </a>
            <nuxt-link v-else to="/experience/" class="cta cta-custom">
              Explore my full experience (tech stack, tools, etc.)
              <MdiIcon icon="mdiArrowTopRight" />
            </nuxt-link>
          </template>
        </Modal>

        <Modal :is-open="isVideoModalOpen" :is-animating="false" :has-sidebar="false" @close="closeVideoModal">
          <template #content>
            <iframe src="https://www.youtube.com/embed/1fAYdOZw4EQ?cc_load_policy=1" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </template>
        </Modal>
      </Teleport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

#hero {
  position: relative;
  min-height: 90vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    margin: 4.5rem auto 0 auto;
    display: block;
    position: relative;
    width: fit-content;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.3s;
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
}

.page-transition--on #ctaButtons {
  opacity: 0;
  transform: translateY(30px);
}

.cta {
  margin-left: 4rem;
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
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% + 8px);
    box-sizing: border-box;
    max-height: 200px;
    margin: 8px 0 0 0;
    opacity: 1;
    z-index: 9;
    display: none;

    img {
      padding: 0;
      overflow: hidden;
      max-width: 270px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      margin: 0;
      padding: 0;
      display: block;
    }
  }
}

@media (max-width: 1023px) {
  .btn--video {
    figure {
      display: block;
    }
  }
}

.hero-sentence {
  position: relative;
  overflow: hidden;
  // border-radius: 8px;
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
    padding: 2rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}
.boxes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  opacity: 0;
  animation: fadeIn 0.5s cubic-bezier(0.2, 0.57, 0.76, 0.79) forwards;
  animation-delay: 2s;
  box-sizing: border-box;
  z-index: -1;
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
    min-width: 160px;
    height: 160px;
    border-right: 1px solid rgba(255, 255, 255, 0.04);
    // border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    transition: all 0.3s cubic-bezier(0.2, 0.57, 0.76, 0.79);
    position: relative;
    z-index: 0;
    box-sizing: border-box;
    &:nth-child(3n) {
      height: 160px;
      border-right: none;
      // background-color: rgba(255, 255, 255, 0.015);
      border-right: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }

    &:nth-child(3n + 1) {
      height: 160px;
      border-left: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }

    &:nth-child(3n - 1) {
      height: 160px;
      border-left: 1px solid rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
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
</style>
