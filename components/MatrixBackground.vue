<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

defineProps({
  isVisible: {
    type: Boolean,
    default: true
  }
});

const isMobile = ref(false);
const isAnimationStarted = ref(false);
const matrixCanvasRef = ref(null);
let animationFrameId = null;
let matrixCanvas = null;
let matrixCtx = null;
let resizeTimeout;

// Matrix words
const matrixWords = [
  // Frontend Frameworks & Libraries
  'VUE',
  'NUXT',
  'NEXT',
  'REACT',
  'VITE',
  'WEBPACK',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'NODE',
  'REST',
  'AXIOS',
  'CYPRESS',
  'JEST',
  'PHP',
  'GIT',
  'GRAPHQL',
  'DOCKER',
  'POSTMAN',
  'HTML',
  'CSS',
  'SCSS',
  'LESS',
  'BOOTSTRAP',
  'TAILWIND',
  'FIGMA',
  'AGILE',
  'SCRUM',
  'KANBAN',
  'BEM',
  'GITHUB',
  'MYSQL',
  'AWS',
  'LARAVEL',
  'SQL',
  'JQUERY',
  'UI',
  'UX',
  'TERRAFORM',
  'FIREBASE',
  'GITHUB-ACTIONS',

  // Backend & Servers
  'EXPRESS',
  'NEST',
  'SYMFONY',
  'GO',
  'POSTGRESQL',
  'KUBERNETES',

  // Cloud & DevOps
  'EC2',
  'S3',
  'LAMBDA',
  'CLOUDFRONT',
  'NETLIFY',
  'VERCEL',
  'HEROKU',
  'GITLAB',
  'BITBUCKET',
  'CI/CD',
  'JENKINS',
  'GRAFANA',

  // Design & UX
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
  'JIRA',
  'API',
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

// Array to hold falling word objects
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

  // Partial clearing to maintain some trails but prevent excessive accumulation
  matrixCtx.globalCompositeOperation = 'source-over';
  matrixCtx.fillStyle = 'rgba(2, 6, 23, 0.85)'; // Semi-transparent navyBlue
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
    matrixCtx.fillStyle = `rgba(130, 255, 170, ${drop.opacity * 1.2})`; // Brighter green with increased opacity
    matrixCtx.fillText(drop.word, drop.x, drop.y);

    // Draw trailing characters
    drop.chars.forEach((charObj, j) => {
      // Skip undefined char objects
      if (!charObj || typeof charObj !== 'object') return;

      // Create trailing effect with fading CTA color
      const trailY = drop.y - (j + 1) * fontSize;

      if (trailY > 0 && trailY < matrixCanvas.height) {
        // Trailing characters have fading opacity and color transition from CTA to white
        const opacity = (1 - j / drop.length) * drop.opacity * 0.7; // Increased opacity for trails

        if (j < 2) {
          // First trailing characters with lighter green
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(150, 255, 190, ${opacity * 1.3})`;
        } else {
          // Rest fade to very light cyan
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(170, 255, 210, ${opacity})`;
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

// Initialize the matrix animation
const initMatrixAnimation = () => {
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

    // Create gradient background
    const gradient = matrixCtx.createLinearGradient(0, 0, 0, matrixCanvas.height);
    gradient.addColorStop(0, '#01020d');
    gradient.addColorStop(1, '#03050d');

    // Initial full clear of the canvas with gradient
    matrixCtx.fillStyle = gradient;
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    // Set canvas dimensions to match container
    const container = matrixCanvas.parentElement;
    if (container) {
      matrixCanvas.width = container.offsetWidth;
      matrixCanvas.height = container.offsetHeight;
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
          if (container) {
            matrixCanvas.width = container.offsetWidth;
            matrixCanvas.height = container.offsetHeight;
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
    isAnimationStarted.value = true;
  });
};

// Lifecycle hooks
onMounted(() => {
  isMobile.value = window.innerWidth < 1024;

  // Start animation with a slight delay
  setTimeout(() => {
    initMatrixAnimation();
  }, 500);
});

// Clean up animation on component unmount
onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }

  // Remove event listeners
  window.removeEventListener('resize', () => {});
});
</script>

<template>
  <div class="matrix-container" :class="{ 'matrix-animation-active': isAnimationStarted }">
    <canvas ref="matrixCanvasRef" class="matrix-canvas"></canvas>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/colors' as colors;

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
  opacity: 0.9; // Higher opacity for vivid effect
  filter: contrast(1.08) brightness(1.05) blur(0.3px); // Added slight blur for glow effect
  image-rendering: optimizeSpeed; // Improve rendering performance
  background: linear-gradient(to bottom, #01020d, #03050d); // Vertical gradient
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
