<script setup>
import { ref, onMounted, computed, nextTick } from 'vue';
import MatrixBackground from '~/components/MatrixBackground.vue';

// Import achievement images - add all your achievement images here
import performanceBg from '~/assets/imgs/performance-bg.jpg';
import dataBg from '~/assets/imgs/data-bg.jpg';
import engagementBg from '~/assets/imgs/engagement-bg.jpg';
import mentorshipBg from '~/assets/imgs/mentorship-bg.jpg';
import collaborationBg from '~/assets/imgs/collaboration-bg.jpg';

const isMobile = ref(false);
const isBoxesRendered = ref(false);

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
  // In development mode, use the direct path
  if (process.env.NODE_ENV === 'development') {
    return `/assets/imgs/${imageName}`;
  }
  // In production mode, use the imported image
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
          '<b>Built a high-performance landing page</b> with Vue.js for 2019 Local Elections at <a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">TRT World</a>, <u><b>delivering real-time results in 1300ms.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://web.archive.org/web/20190421194033/http://secim2019.trthaber.com/">*</a>'
      },
      {
        entity:
          '<b>Migrated components and pages</b> from PHP to Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>improved page speeds up to 30%.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">*</a>'
      },
      {
        entity:
          '<b>Built an embedded SVG-based map</b> with Vue.js for Turkey\'s 2018 General Elections at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, <u><b>handling 75k+ concurrent users with 100% uptime</b></u>.<a rel="nofollow noopener noreferrer" target="_blank" href="https://www.trt.global/world">*</a>'
      },
      {
        entity:
          '<b>Implemented new user flows</b> in <a rel="nofollow noopener noreferrer" target="_blank" href="https://my.homeday.de">Homeday\'s CMS</a> with Vue.js, ensuring users to be qualified, <u><b>reducing costs for all parties</b>.<a rel="nofollow noopener noreferrer" target="_blank" href="https://my.homeday.de">*</a></u>'
      }
    ]
  },
  {
    label: 'Development Infrastructure',
    hero: 'I built, optimized CI/CD pipelines and infrastructure to streamline development workflows.',
    image: 'data-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Developed frontend infrastructure</b> with AWS and GitHub Actions at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>reducing costs by 15% and streamlining deployments</b></u>.'
      },
      {
        entity: '<b>Built Infrastructure as Code</b> with Terraform & AWS, <u><b>publishing static apps for no costs.</b></u><a rel="nofollow noopener noreferrer" target="_blank" href="https://github.com/volcodes/volcodeorg-app/tree/main/terraform">*</a>'
      },
      {
        entity: '<b>Optimized existing testing pipelines</b>, with Testing Library at <a rel="nofollow noopener noreferrer" target="_blank" href="https://homeday.de">Homeday</a>, <u><b>reducing deployment loading times at least 20%</b></u>.'
      }
    ]
  },
  {
    label: 'User Engagement',
    hero: 'I crafted empathetic digital experiences that bridge user needs with technology.',
    image: 'engagement-bg.jpg',
    accomplishments: [
      {
        entity: '<b>Enhanced the event management system</b> at <a rel="nofollow noopener noreferrer" target="_blank" href="https://sdui.de/">Sdui</a>, <u><b>increasing user interaction at least 20%</b></u> via better calendar & scheduling features.'
      },
      {
        entity:
          '<b>Built an asset management app from scratch</b>, effectively using Node.js, and Vue.js at <a rel="nofollow noopener noreferrer" target="_blank" href="https://trtworld.com/">TRT World</a>, <u><b> reducing search times at least 50% and boosting editor efficiency.</b></u>'
      },
      {
        entity: '<b>Conceptualized and implemented video conference features</b> for a chat app at <a rel="nofollow noopener noreferrer" target="_blank" href="https://sdui.com/">Sdui</a>, <u><b>allowing school teachers to set video calls.</b></u>'
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
        entity: '<b>Optimized test cases, reduced redundancies</b> of the Design System at Homeday, <u><b>reduced development build times.</b></u>'
      },
      {
        entity: '<b>Implemented integration tests</b> and reduced legacy unit and E2E tests at <a href="#Homeday">Homeday</a>, <u><b>accelerated build times.</b></u>'
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

// Canvas-based matrix animation
const matrixCanvasRef = ref(null);
const matrixAnimationStarted = ref(false);
let animationFrameId = null;
let matrixCanvas = null;
let matrixCtx = null;

// Matrix character set
const matrixChars = '01'.split('');

// Matrix character set
const matrixWords = [
  // Frontend Frameworks & Libraries
  'VUE',
  'NUXT',
  'NEXT',
  'REACT',
  'VITE',
  'WEBPACK',
  'BABEL',
  'TYPESCRIPT',
  'JAVASCRIPT',
  'HTML',
  'CSS',
  'SCSS',
  'TAILWIND',
  'VUEX',
  'GRAPHQL',

  // Backend & Servers
  'NODE',
  'EXPRESS',
  'NEST',
  'SYMFONY',
  'LARAVEL',
  'PHP',
  'GO',
  'POSTGRESQL',
  'MYSQL',
  'DOCKER',
  'KUBERNETES',

  // Cloud & DevOps
  'AWS',
  'EC2',
  'S3',
  'LAMBDA',
  'CLOUDFRONT',
  'FIREBASE',
  'NETLIFY',
  'VERCEL',
  'HEROKU',
  'GITHUB',
  'GITLAB',
  'BITBUCKET',
  'CI/CD',
  'JENKINS',
  'TERRAFORM',
  'GRAFANA',

  // Design & UX
  'UI',
  'UX',
  'FIGMA',
  'SKETCH',
  'ADOBE',
  'PHOTOSHOP',
  'WIREFRAME',
  'PROTOTYPE',
  'ACCESSIBILITY',
  'A11Y',
  'RESPONSIVE',
  'MOBILE',

  // General Programming
  'STAGING',
  'BUILD',
  'TEST',
  'DEBUG',
  'DEPLOY',
  'RELEASE',
  'AGILE',
  'SCRUM',
  'KANBAN',
  'JIRA',
  'API',
  'REST',
  'CLEAN',
  'SOLID',
  'PATTERNS',
  'ALGORITHMS',
  'DATA',

  // Performance & Optimization
  'OPTIMIZE',
  'CACHE',
  'LAZY',
  'BUNDLE',
  'MINIFY',
  'COMPRESS',
  'PERFORMANCE',
  'METRICS',
  'LIGHTHOUSE',
  'WEBVITALS',
  'LCP',
  'FID',
  'CLS',
  'SEO',
  'PWA',

  // Data & Analytics
  'ANALYTICS',
  'AI',
  'VISUALIZATION',
  'D3',
  'CHART',
  'DASHBOARD',
  'LOGGING',
  'MONITOR',
  'TRACK'
];
const drops = [];

// Initialize the drops
const initDrops = () => {
  if (!matrixCanvas) return;

  // Calculate how many drops to add based on width
  const fontSize = isMobile.value ? 10 : 14;
  const columns = Math.floor((matrixCanvas.width / fontSize) * 1.2); // Increase density of columns

  // Reset drops array
  drops.length = 0;

  // Create initial drops
  for (let i = 0; i < columns; i++) {
    // Random starting y position
    drops.push({
      x: i * fontSize * 2 + Math.random() * fontSize, // Reduce spacing between words
      y: Math.random() * matrixCanvas.height,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.03 + Math.random() * 0.15, // Lower overall opacity
      word: matrixWords[Math.floor(Math.random() * matrixWords.length)],
      length: Math.floor(2 + Math.random() * 5), // Fewer trailing characters
      chars: []
    });

    // Generate trailing characters for this drop
    for (let j = 0; j < drops[i].length; j++) {
      drops[i].chars.push({
        char: drops[i].word[Math.floor(Math.random() * drops[i].word.length)],
        opacity: j === 0 ? 0.9 : (1 - j / drops[i].length) * 0.7
      });
    }
  }
};

// The animation loop
const startMatrixAnimation = () => {
  if (!matrixCtx || !matrixCanvas) return;

  // More thorough clearing to prevent trails
  matrixCtx.globalCompositeOperation = 'source-over';
  matrixCtx.fillStyle = 'rgba(2, 6, 23, 0.15)'; // Increased opacity for better clearing
  matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  const fontSize = isMobile.value ? 10 : 14;

  // Draw each drop
  drops.forEach((drop, _) => {
    // Skip drops without proper initialization
    if (!drop || !drop.word || !drop.chars || !Array.isArray(drop.chars)) return;

    // Move drop down by its speed
    drop.y += drop.speed;

    // Draw the main word at the head of the drop with lighter green
    matrixCtx.font = `bold ${fontSize}px monospace`;
    // Clear compositing to prevent white halos
    matrixCtx.globalCompositeOperation = 'source-over';
    // Use a lighter shade of green with lower opacity
    matrixCtx.fillStyle = `rgba(120, 230, 160, ${drop.opacity * 0.8})`; // Lighter green with reduced opacity
    matrixCtx.fillText(drop.word, drop.x, drop.y);

    // Draw trailing characters
    drop.chars.forEach((charObj, j) => {
      // Skip undefined char objects
      if (!charObj || typeof charObj !== 'object') return;

      // Create trailing effect with fading CTA color
      const trailY = drop.y - (j + 1) * fontSize;

      if (trailY > 0 && trailY < matrixCanvas.height) {
        // Trailing characters have fading opacity and color transition from CTA to white
        const opacity = (1 - j / drop.length) * drop.opacity * 0.5; // Lower opacity for trails

        if (j < 2) {
          // First trailing characters with lighter green
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(140, 245, 180, ${opacity})`;
        } else {
          // Rest fade to very light cyan
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(160, 245, 200, ${opacity})`;
        }

        matrixCtx.font = `${fontSize}px monospace`;
        matrixCtx.fillText(charObj.char, drop.x + (Math.random() > 0.5 ? fontSize / 4 : 0), trailY);

        // Occasionally change character
        if (Math.random() > 0.92) {
          if (drop.word && drop.word.length > 0) {
            charObj.char = drop.word[Math.floor(Math.random() * drop.word.length)];
          }
        }
      }
    });

    // Reset drop when it goes off screen
    if (drop.y > matrixCanvas.height + fontSize) {
      // Move drop far above viewport to prevent trails
      drop.y = -fontSize * 4; // Position higher above the viewport
      drop.speed = 0.5 + Math.random() * 1.5;
      drop.opacity = 0.03 + Math.random() * 0.15; // Lower overall opacity
      drop.word = matrixWords[Math.floor(Math.random() * matrixWords.length)];

      // Ensure length is properly set
      if (!drop.length || drop.length < 1) {
        drop.length = Math.floor(2 + Math.random() * 5);
      }

      // Clear and regenerate trailing characters
      drop.chars = [];
      for (let j = 0; j < drop.length; j++) {
        if (drop.word && drop.word.length > 0) {
          drop.chars.push({
            char: drop.word[Math.floor(Math.random() * drop.word.length)],
            opacity: j === 0 ? 0.9 : (1 - j / drop.length) * 0.7
          });
        }
      }
    }
  });

  // Occasionally add a new fast "highlight" drop
  if (Math.random() > 0.99 && drops.length < (matrixCanvas.width / fontSize) * 1.2) {
    const fontSize = isMobile.value ? 10 : 14;
    const x = Math.floor((Math.random() * matrixCanvas.width) / fontSize) * fontSize;

    // Check if there's already a drop at this x position
    const existingDropIndex = drops.findIndex((d) => d.x === x);

    if (existingDropIndex === -1) {
      // Add a new bright drop
      const newDrop = {
        x,
        y: -5 * fontSize,
        speed: 2 + Math.random() * 3,
        opacity: 0.7 + Math.random() * 0.3,
        length: Math.floor(4 + Math.random() * 8),
        chars: []
      };

      // Generate characters for this drop
      for (let j = 0; j < newDrop.length; j++) {
        newDrop.chars.push({
          char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
          opacity: j === 0 ? 1 : (1 - j / newDrop.length) * 0.9
        });
      }

      drops.push(newDrop);
    }
  }

  // Occasionally add a new fast "highlight" drop with a full word
  if (Math.random() > 0.97 && drops.length < matrixCanvas.width / fontSize) {
    // Increased probability and allowed density
    const x = Math.floor((Math.random() * matrixCanvas.width) / fontSize) * fontSize;

    // Check if there's already a drop near this x position (with smaller distance check)
    const existingDropIndex = drops.findIndex((d) => Math.abs(d.x - x) < fontSize * 2);

    if (existingDropIndex === -1) {
      // Add a new bright word drop
      const newWord = matrixWords[Math.floor(Math.random() * matrixWords.length)];
      const newDrop = {
        x,
        y: -5 * fontSize,
        speed: 2 + Math.random() * 3,
        opacity: 0.04 + Math.random() * 0.12, // Much lower opacity
        word: newWord,
        length: Math.floor(2 + Math.random() * 4),
        chars: []
      };

      // Generate trailing characters for this drop
      for (let j = 0; j < newDrop.length; j++) {
        newDrop.chars.push({
          char: newWord[Math.floor(Math.random() * newWord.length)],
          opacity: j === 0 ? 1 : (1 - j / newDrop.length) * 0.9
        });
      }

      drops.push(newDrop);
    }
  }

  // Continue animation loop
  animationFrameId = requestAnimationFrame(startMatrixAnimation);
};

// Matrix digital rain effect setup
onMounted(() => {
  // Render boxes after LCP is done
  setTimeout(() => {
    isBoxesRendered.value = true;
  }, 1000);

  // Initialize matrix animation after boxes are rendered
  setTimeout(() => {
    matrixAnimationStarted.value = true;
    initMatrixAnimation();
  }, 1500);

  // Keyboard event listeners
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      closeModal();
    }
  });
});

// Initialize the matrix animation
const initMatrixAnimation = () => {
  if (!isBoxesRendered.value) return;

  // Only set up canvas once
  nextTick(() => {
    matrixCanvas = matrixCanvasRef.value;
    if (!matrixCanvas) return;

    // Create canvas context with settings to prevent white background artifacts
    matrixCtx = matrixCanvas.getContext('2d', {
      alpha: false,
      willReadFrequently: false,
      desynchronized: true
    });

    // Disable text anti-aliasing for sharper text
    matrixCtx.imageSmoothingEnabled = false;

    // Initial full clear of the canvas
    matrixCtx.fillStyle = 'rgb(2, 6, 23)'; // navyBlue
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    // Set canvas dimensions to match container
    const hero = document.getElementById('hero');
    if (hero) {
      matrixCanvas.width = hero.offsetWidth;
      matrixCanvas.height = hero.offsetHeight;
    } else {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    }

    // Add resize listener
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        isMobile.value = window.innerWidth < 1024;

        // Resize canvas
        if (matrixCanvas) {
          if (hero) {
            matrixCanvas.width = hero.offsetWidth;
            matrixCanvas.height = hero.offsetHeight;
          } else {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
          }

          // Reset drops when resizing
          initDrops();
        }
      }, 250);
    });

    // Start matrix animation
    initDrops();
    startMatrixAnimation();
  });
};

// Clean up animation on component unmount
onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

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
              <NuxtImg :src="getImagePath(selectedAchievement.image)" :alt="`${selectedAchievement.label} - ${selectedAchievement.hero}`" loading="lazy" width="800" height="400" format="jpg" quality="80" class="hero-sentence__bg" fit="cover" />
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
// #hero {
//   *:not(.boxes > div):not(.boxes):not(.btn):not(.btn--video):not(.modal-button) {
//     pointer-events: none;
//   }
// }

/* Canvas-based Matrix animation for better performance */
.matrix-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 0.5s cubic-bezier(0.2, 0.57, 0.76, 0.79) forwards;
  animation-delay: 0.2s;
  box-sizing: border-box;
  z-index: -1;
  contain: layout style paint; /* Improve performance */
}

.matrix-canvas {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0); /* Hardware acceleration */
  will-change: transform; /* Optimize for animations */
  opacity: 0.7; // Slightly reduced opacity
  filter: contrast(1.05) brightness(1.05); // Reduced filter intensity to minimize trails
  image-rendering: optimizeSpeed; // Improve rendering performance
  background-color: rgb(2, 6, 23); // Match canvas background to prevent white flashes
}
</style>
