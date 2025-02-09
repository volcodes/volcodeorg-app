<script setup>
import { ref, onMounted } from 'vue'
import performanceIcon from '~/assets/icons/performance.svg'
import realTimeIcon from '~/assets/icons/realtime.svg'
import engagementIcon from '~/assets/icons/engagement.svg'
import mentorshipIcon from '~/assets/icons/mentorship.svg'
import designIcon from '~/assets/icons/design.svg'

const achievements = ref([
  {
    label: "Performance & Optimization",
    hero: "I built and optimized products to millions worldwide across diverse industries.",
    icon: performanceIcon,
    accomplishments: [{
      "entity": "<b>Migrated components and pages</b> for the main website at <a href=\"#Homeday\">Homeday</a>, <u><b>improved page speeds by 40%.</b></u>"
    },{
      "entity": "<b>Implemented integration tests</b> and reduced legacy unit tests at <a href=\"#Homeday\">Homeday</a>, <u><b>accelerated build times by 25%.</b></u>"
    },{
      "entity": "<b>Built a custom video player</b> for <a href=\"#tabbiii\">a VOD Platform</a> at <a href=\"#TRT\">TRT</a>, enabling accessible streaming on all devices with <u><b>seamless playback for over 1M+ daily users.</b></u>"
    },{
      "entity": "<b>Implemented new flows</b> in the <a href=\"#Homeday's internal CMS\">Homeday's CMS</a>: <u>ensuring qualify buyers earlier in the process</u>, and <u><b>reducing costs for all parties</b>.</u>"
    }]
  },
  {
    label: "Real-Time Data Visualization",
    hero: "I built apps that transform complex information into interactive real-time interfaces.",
    icon: realTimeIcon,
    accomplishments: [{
      "entity": "<b>Built an SVG-based map</b> for Turkey’s 2019 elections, <u><b>handling 18K+ concurrent users</u></b> with dynamic updates."
    },{
      "entity": "<b>Designed an advanced search feature</b> for a VOD platform at TRT, <u><b>boosting discoverability & engagement</b></u>."
    }]
  },
  {
    label: "User Engagement",
    hero: "I crafted empathetic digital experiences that bridge user needs with technology",
    icon: engagementIcon,
    accomplishments: [{
      "entity": "<b>Enhanced Sdui’s event module</b>, <u><b>increasing user interaction by 20%</b></u> via better calendar & scheduling features."
    },{
      "entity": "<b>Integrated video conference support</b> in Sdui’s chat app, <u><b>allowing users to have video calls.</b></u>"
    }]
  },
  {
    label: "Mentorship",
    hero: "I developed technical guidance programs that accelerated developer growth across organizations.",
    icon: mentorshipIcon,
    accomplishments: [{
      "entity": "<b>Created step-by-step migration guide for Vue 2 → Vue 3</b>, streamlining the process & <u><b>boosting developer productivity at Sdui</b></u>."
    },{
      "entity": "<b>Guided junior devs at Homeday & Sdui</b>, leading to <u><b>two promotions within 8 months</b></u> through mentorship, pair programming sessions & code reviews."
    }]
  },
  {
    label: "UI/UX & Design Systems",
    hero: "I enhanced design systems, improved developer experience and boosted collabration in cross functional teams.",
    icon: designIcon,
    accomplishments: [{
      "entity": "<b>Optimized test cases, reduced redundancies</b> of core components at Homeday, <u><b>reduced development build times by 20%.</b></u>"
    },{
      "entity": "<b>Modernized interfaces of TRT’s CMS</b>, <u><b>reduced times for search and creation user flows by 30%.</b></u>"
    }]
  }
])
const selectedAchievementIndex = ref(0)
const selectedAchievement = ref(achievements.value[selectedAchievementIndex.value])
const isModalOpen = ref(false)
const isModalAnimationVisible = ref(false);

const closeModal = () => {
  isModalOpen.value = false
}

const changeSelected = (index) => {
  if (index >= achievements.length - 1) index = 0
  isModalAnimationVisible.value = true;
  setTimeout(() => {
    selectedAchievementIndex.value = index
    selectedAchievement.value = achievements.value[selectedAchievementIndex.value]
    isModalAnimationVisible.value = false
  }, 200);
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
      <button class="btn">Watch My Introduction</button>
    </section>
    <div class="scroll-indicator">
      <div class="scroll-indicator__icon"></div>
      <em>Scroll down to see more</em>
    </div>

    <Teleport to="body">
      <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
        <button class="modal__close" @click="closeModal">
          <MdiIcon icon="mdiClose" />
        </button>
        <div class="modal" @click.stop>
          <div class="modal-inner">
            <aside class="modal-sidebar">
              <strong>Key Achievements</strong>
              <button 
                v-for="(item, index) in achievements" 
                class="modal-button"
                v-key="key" 
                @click="changeSelected(index)" 
                :class="{'active': selectedAchievementIndex === index}">
                  {{ item.label }}
                </button>
            </aside>
            <div class="modal-wrapper" :class="{'animation': isModalAnimationVisible}">
              <div class="hero-sentence">
                <p>{{ selectedAchievement.hero }}</p>
                <img :src="selectedAchievement.icon" :alt="selectedAchievement.label" class="hero-bg" />
              </div>
              <ol>
                <li v-for="ach in selectedAchievement.accomplishments" v-html="ach.entity"></li>
                <!-- <li>
                  <b>Built a custom video player</b> for <a href="#tabbiii">a VOD</a> at <a href="#TRT">TRT</a>, enabling HLS streaming with <u><b>seamless playback for 1M+ users</b></u>
                </li>
                <li><b>Migrated components and pages</b> for the main website at <a href="#Homeday">Homeday</a>, <u><b>improved page speeds by 40%</b>.</u></li>
                <li><b>Implemented integration tests</b> and reduced legacy unit and E2E tests at <a href="#Homeday">Homeday</a>, <u><b>accelerated build times by 25%</b></u></li>
                <!-- a PHP/Symfony website to Vue.js/Nuxt for -->
                <!-- <li><b>Implemented a new flow</b> for the existing process on the <a href="#Homeday's realtor platform">Homeday's realtor platform</a>: <u>ensuring qualified buyers</u>, and <u><b>reducing costs for all parties</b></u>.</li> --> 
              </ol>
              <a v-if="selectedAchievementIndex + 1 < achievements.length" rel="nofollow" class="cta" @click="changeSelected(selectedAchievementIndex+1)">See my accomplishments in {{ achievements[selectedAchievementIndex + 1].label }} <MdiIcon icon="mdiArrowTopRight"
                /></a>
              <a v-else rel="nofollow" class="cta" @click="changeSelected(0)">See my accomplishments in {{ achievements[0].label }} <MdiIcon icon="mdiArrowTopRight"
                /></a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss">
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

@keyframes modalExpand {
  0% {
    width: 1%;
    height: 1vh;
  }
  20% {
    width: 20%;
    height: 1vh;
  }
  40% {
    width: 40%;
    height: 1px;
  }
  60% {
    width: 90%;
    height: 1vh;
  }
  80% {
    width: 90%;
    height: 10vh;
  }
  100% {
    width: 90%;
    height: 90vh;
  }
}
.modal {
  width: 0%;
  height: 1px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: colors.$modalBg;
  overflow: hidden;
  z-index: 999;
  animation: modalExpand .7s cubic-bezier(.15,.74,1,1) forwards;
  transform-origin: center;
  display: flex;

  .modal-button {
    padding: .75rem 1rem;
    font-size: 1rem;
    font-family: "Inter";
    font-weight: 600;
    border: 0;
    cursor: pointer;
    color: #fff;
    background-color: rgba(255, 255, 255, 0);
    text-align: left;
    transition: all .4s;
    box-sizing: border-box;
    // border: 1px dashed  rgba(255, 255, 255, 0.08);
    border-bottom: 1px dashed  rgba(255, 255, 255, 0.08); 
    border-left: 4px solid rgba(255, 255, 255, 0);

    &:first-child {
      border-top: 1px dashed  rgba(255, 255, 255, 0.08); 
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
      padding-left: 1.2rem;
    }
    &.active {
      background-color: rgb(15 23 59);
      border-left: 4px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 1rem;
      border-right: none;
    }
  }

  .modal-inner {
    opacity: 0;
    display: flex;
    animation: modalFadeIn 0.3s ease-out forwards;
    animation-delay: .9s;
    // display: flex;
    // align-items: center;
    // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    // background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);

    .modal-wrapper {
      overflow: scroll;
      max-width: 75%;
      transition: all .3s;
      opacity: 1;
      padding: 2rem 0rem 2rem 2rem;
      background-color: #0f173c;

      .cta {
        margin: 1rem 0;
        cursor: pointer;
      }

      &.animation {
        opacity: 0;
        transform: translateY(3px)
        // animation: modalFadeIn 0.3s ease-out;
      }
    }

    p {
      color: white;
    }
  }
}

.modal-sidebar {
  width: 25%;
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.25rem;
    padding: 1.25rem;
    color: colors.$cloudWhite;
    font-family: vars.$fontFamilyBold;
  }
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-overlay {
  background-color: colors.$navyBlue;
  z-index: 99;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  animation: modalFadeIn 0.3s ease-out forwards;
}

.modal__close {
  width: 5%;
  height: 10vh;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  right: 0px;
  top: 0;

  &:hover {
    background-color: colors.$navyBlue;
  }
}

.modal ul,
.modal ol {
  padding: 0rem 0rem .5rem 3rem;

  li {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 2rem;
    border-bottom: 4px solid rgba(255,255,255,.1);
    font-family: vars.$fontFamily;
    color: white;

    &:last-child {
      border: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    a {
      font-family: vars.$fontFamily;
      color: white;
      text-decoration: none;
    }

    > b {
      font-weight: 900;
      font-family: vars.$fontFamilyBold;
    }
    u {
      text-decoration: none;

      b {
        font-weight: normal;
        border-bottom: 1px dotted colors.$cloudWhite;
      }
    }
  }
}
.hero-sentence {
  padding: 0rem 2rem 1rem 0rem;
  position: relative;
  display: flex;
  align-items: flex-start;

  img {
    max-width: 15%;
    height: auto;
    display: block;
    margin-top: 1rem;
  }
  p {
    width: 85%;
    box-sizing: border-box;
    font-size: 2.5rem;
    line-height: 3.5rem;
    margin: 1rem 2rem 0rem 0;
    font-family: vars.$fontFamilyBold;
    letter-spacing: -.6px;
    font-weight: 300;
    color: colors.$navyBlue;
    box-sizing: border-box;
  }

  b {
    font-family: vars.$fontFamilyBold;
  }
}
</style>
