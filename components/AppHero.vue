<script setup>
import { ref, onMounted } from 'vue'
import performanceBg from '~/assets/imgs/performance-bg.png'
import dataBg from '~/assets/imgs/data-bg.png'
import collaborationBg from '~/assets/imgs/collaboration-bg.jpg'
import engagementBg from '~/assets/imgs/engagement-bg.png'
import mentorshipBg from '~/assets/imgs/mentorship-bg.png'

const closeVideoModal = () => {
  isVideoModalOpen.value = false
}
const achievements = ref([
  {
    label: "Performance & Optimization",
    hero: "I built and optimized products to millions worldwide across diverse industries.",
    image: performanceBg,
    accomplishments: [{
      "entity": "<b>Built a custom video player</b> for <a href=\"#tabbiii\">a VOD Platform</a> at <a href=\"#TRT\">TRT</a>, enabling accessible streaming on all devices with <u><b>seamless playback for over 1M+ daily users.</b></u>"
    },{
      "entity": "<b>Migrated components and pages</b> for the main website at <a href=\"#Homeday\">Homeday</a>, <u><b>improved page speeds by 40%.</b></u>"
    },{
      "entity": "<b>Implemented integration tests</b> and reduced legacy unit and E2E tests at <a href=\"#Homeday\">Homeday</a>, <u><b>accelerated build times by 25%.</b></u>"
    },{
      "entity": "<b>Implemented new flows</b> in the <a href=\"#Homeday's internal CMS\">Homeday's CMS</a>: <u>ensuring qualified buyers</u>, and <u><b>reducing costs for all parties</b>.</u>"
    }]
  },
  {
    label: "Real-Time Data Visualization",
    hero: "I built apps that transform complex information into interactive real-time interfaces.",
    image: dataBg,
    accomplishments: [{
      "entity": "<b>Built an SVG-based map</b> for Turkey’s 2019 elections, <u><b>handling 18K+ concurrent users</u></b> with dynamic updates."
    },{
      "entity": "<b>Designed an advanced search feature</b> for a VOD platform at TRT, <u><b>boosting discoverability & engagement</b></u>."
    }]
  },
  {
    label: "User Engagement",
    hero: "I crafted empathetic digital experiences that bridge user needs with technology.",
    image: engagementBg,
    accomplishments: [{
      "entity": "<b>Enhanced Sdui’s event module</b>, <u><b>increasing user interaction by 20%</b></u> via better calendar & scheduling features."
    },{
      "entity": "<b>Built video conference functionality</b> for an encrypted chat app at Sdui, <u><b>allowing users to have video calls.</b></u>"
    }]
  },
  {
    label: "Mentorship",
    hero: "I wrote educational programs that accelerated developer growth across organizations.",
    image: mentorshipBg,
    accomplishments: [{
      "entity": "<b>Created step-by-step migration guide for Vue 2 → Vue 3</b>, streamlining the process & <u><b>boosting developer productivity at Sdui</b></u>."
    },{
      "entity": "<b>Guided junior devs at Homeday & Sdui</b>, leading to <u><b>two promotions in rapid time</b></u> through mentorship, pair programming sessions & code reviews."
    }]
  },
  {
    label: "Cross-Functional Collaboration",
    hero: "I enhanced design systems, improved developer experience and boosted collabration in teams.",
    image: collaborationBg,
    accomplishments: [{
      "entity": "<b>Optimized test cases, reduced redundancies</b> of core components at Homeday, <u><b>reduced development build times by 20%.</b></u>"
    },{
      "entity": "<b>Modernized interfaces of TRT’s CMS</b>, <u><b>reduced times for search and creation user flows by 30%.</b></u>"
    }]
  }
])
const selectedAchievementIndex = ref(0)
const hasNextAchievement = computed(() => selectedAchievementIndex.value + 1 < achievements.value.length)
const nextAchievementLabel = computed(() => hasNextAchievement.value ? achievements.value[selectedAchievementIndex.value + 1].label : '')
const isVideoModalOpen = ref(false)
const selectedAchievement = ref(achievements.value[selectedAchievementIndex.value])
const isModalOpen = ref(false)
const isModalAnimationVisible = ref(false);

const closeModal = () => {
  isModalOpen.value = false
}

const handleAchievementChange = (index) => {
  if (index >= achievements.value.length) index = 0
  isModalAnimationVisible.value = true
  setTimeout(() => {
    selectedAchievementIndex.value = index
    selectedAchievement.value = achievements.value[selectedAchievementIndex.value]
    isModalAnimationVisible.value = false
  }, 200)
}

// Close modal on escape key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal()
    }
  })
})
</script>

<template>
  <div id="hero" class="container">
    <img src="~/assets/imgs/Frame.svg" alt="Hero Background" class="hero-bg" />
    <span>I'm Mehmet;</span>
    <h1>
      Software Development Specialist
    </h1>
    <p>
      Frontend-focused, 10+ years in web, experienced in backend and full stack work.
    </p>
    <p>
      I design, build, and optimize digital interfaces, apps, and infrastructures.
    </p>
    <section id="ctaButtons">
      <button class="btn btn--filled" @click="isModalOpen = true">
        Discover My Achievements
      </button>
      <button class="btn" @click="isVideoModalOpen = true">Watch My Introduction</button>
    </section>
    <div class="scroll-indicator">
      <div class="scroll-indicator__icon"></div>
      <em>Scroll down to see more</em>
    </div>

    <Teleport to="body">
      <Modal
        :is-open="isModalOpen"
        :is-animating="isModalAnimationVisible"
        :has-sidebar="true"
        sidebar-title="Key Achievements"
        @close="closeModal"
      >
        <template #sidebar>
          <button 
            v-for="(item, index) in achievements" 
            class="modal-button"
            :key="index" 
            @click="handleAchievementChange(index)" 
            :class="{'active': selectedAchievementIndex === index}">
              {{ item.label }}
          </button>
        </template>
        
        <template #content>
          <div class="hero-sentence" :style="{ backgroundImage: `url(${selectedAchievement.image})` }">
            <p>{{ selectedAchievement.hero }}</p>
          </div>
          <ol>
            <li v-for="ach in selectedAchievement.accomplishments" v-html="ach.entity"></li>
          </ol>
          <a 
            v-if="hasNextAchievement" 
            rel="nofollow" 
            class="cta cta-custom" 
            @click="handleAchievementChange(selectedAchievementIndex + 1)"
          >
            Explore {{ nextAchievementLabel }} Accomplishments 
            <MdiIcon icon="mdiArrowTopRight"/>
          </a>
          <nuxt-link v-else to="/experience" class="cta cta-custom">
            Explore my full experience (tech stack, tools, etc.) 
            <MdiIcon icon="mdiArrowTopRight"/>
          </nuxt-link>
        </template>
      </Modal>

      <Modal
        :is-open="isVideoModalOpen"
        :is-animating="false"
        :has-sidebar="false"
        @close="closeVideoModal"
      >
        <template #content>
          <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              frameborder="0"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

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

  em {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    color: colors.$textGray;
    font-style: normal;
  }
}

@keyframes scrollDown {
  0% {
    opacity: 0.8;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, 10px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 20px);
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
    font-size: 1rem;
    line-height: 1.5rem;
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
</style>
