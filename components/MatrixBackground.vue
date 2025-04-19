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

// Mouse position for parallax effect
const mouseX = ref(0);
const mouseY = ref(0);
const parallaxOffsetX = ref(0);
const parallaxOffsetY = ref(0);

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

// Secondary smaller words
const secondaryWords = [
  'CODE',
  'DEVELOP',
  'RENDER',
  'STATE',
  'PROPS',
  'MODULE',
  'EXPORT',
  'IMPORT',
  'FUNCTION',
  'METHOD',
  'ASYNC',
  'AWAIT',
  'PROMISE',
  'CLASS',
  'INTERFACE',
  'TYPE',
  'UNION',
  'ANY',
  'NULL',
  'UNDEFINED',
  'STRING',
  'NUMBER',
  'BOOLEAN',
  'ARRAY',
  'OBJECT',
  'MAP',
  'SET',
  'SYMBOL',
  'DOM',
  'EVENT',
  'STORE',
  'VUEX',
  'PINIA',
  'REDUX',
  'HOOK',
  'REF',
  'REACTIVE',
  'COMPUTED',
  'WATCH',
  'EFFECT',
  'LIFECYCLE',
  'MOUNTED',
  'CREATED',
  'EMIT',
  'BINDING',
  'TEMPLATE',
  'STYLE',
  'SCOPE',
  'SHADOW',
  'SERVER',
  'CLIENT',
  'HYBRID',
  'ISOMORPHIC',
  'HEADLESS',
  'STATIC',
  'DYNAMIC',
  'NATIVE'
];

// Combined words list for more variety
const allWords = [...matrixWords, ...secondaryWords];

// Array to hold falling word objects
const drops = [];

// Initialize the drops
const initDrops = () => {
  if (!matrixCanvas) return;

  // Calculate how many drops to add based on width
  const baseFontSize = isMobile.value ? 10 : 14;
  const columns = Math.floor((matrixCanvas.width / baseFontSize) * 1.5); // Increase density further

  // Reset drops array
  drops.length = 0;

  // Create initial drops with different sizes and depths
  for (let i = 0; i < columns; i++) {
    // Determine size/depth layer (1-3, where 1 is largest, 3 is smallest)
    const depthLayer = Math.ceil(Math.random() * 3);
    const fontSize = depthLayer === 1 ? baseFontSize : depthLayer === 2 ? baseFontSize * 0.8 : baseFontSize * 0.6;
    const wordsList = depthLayer === 1 ? matrixWords : allWords;

    // Random starting y position
    drops.push({
      x: i * baseFontSize * 1.5 + Math.random() * baseFontSize, // Reduce spacing between words
      y: Math.random() * matrixCanvas.height,
      speed: 0.3 + Math.random() * 1.5,
      opacity: 0.03 + Math.random() * (depthLayer === 1 ? 0.15 : 0.1), // Different opacity per layer
      word: wordsList[Math.floor(Math.random() * wordsList.length)],
      length: Math.floor(2 + Math.random() * 5), // Fewer trailing characters
      chars: [],
      fontSize, // Store font size with the drop
      depthLayer, // Store depth layer for parallax effect
      parallaxFactor: depthLayer === 1 ? 0.05 : depthLayer === 2 ? 0.03 : 0.01 // Different parallax response
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

  // Draw each drop with parallax effect
  drops.forEach((drop) => {
    // Skip drops without proper initialization
    if (!drop || !drop.word || !drop.chars || !Array.isArray(drop.chars)) return;

    // Apply parallax offset based on depth layer
    const parallaxX = drop.x + parallaxOffsetX.value * drop.parallaxFactor;
    const parallaxY = drop.y + parallaxOffsetY.value * drop.parallaxFactor;

    // Move drop down by its speed
    drop.y += drop.speed;

    // Draw the main word at the head of the drop with lighter green
    matrixCtx.font = `bold ${drop.fontSize}px monospace`;
    // Clear compositing to prevent white halos
    matrixCtx.globalCompositeOperation = 'source-over';

    // Use a lighter shade of green with opacity based on depth
    const opacity = drop.depthLayer === 1 ? drop.opacity * 1.3 : drop.depthLayer === 2 ? drop.opacity * 1.1 : drop.opacity * 0.9;
    matrixCtx.fillStyle = `rgba(130, 255, 170, ${opacity})`;
    matrixCtx.fillText(drop.word, parallaxX, parallaxY);

    // Draw trailing characters with parallax
    drop.chars.forEach((charObj, j) => {
      // Skip undefined char objects
      if (!charObj || typeof charObj !== 'object') return;

      // Create trailing effect with fading CTA color
      const trailY = parallaxY - (j + 1) * drop.fontSize;

      if (trailY > 0 && trailY < matrixCanvas.height) {
        // Trailing characters have fading opacity and color transition from CTA to white
        const trailOpacity = (1 - j / drop.length) * drop.opacity * 0.7; // Increased opacity for trails

        if (j < 2) {
          // First trailing characters with lighter green
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(150, 255, 190, ${trailOpacity * 1.3})`;
        } else {
          // Rest fade to very light cyan
          matrixCtx.globalCompositeOperation = 'source-over';
          matrixCtx.fillStyle = `rgba(170, 255, 210, ${trailOpacity})`;
        }

        matrixCtx.font = `${drop.fontSize}px monospace`;
        matrixCtx.fillText(charObj.char, parallaxX + (Math.random() > 0.5 ? drop.fontSize / 4 : 0), trailY);

        // Occasionally change character
        if (Math.random() > 0.92) {
          if (drop.word && drop.word.length > 0) {
            charObj.char = drop.word[Math.floor(Math.random() * drop.word.length)];
          }
        }
      }
    });

    // Reset drop when it goes off screen
    if (drop.y > matrixCanvas.height + drop.fontSize) {
      // Move drop far above viewport to prevent trails
      drop.y = -drop.fontSize * 4; // Position higher above the viewport
      drop.speed = 0.3 + Math.random() * 1.5;

      // Refresh word based on depth layer
      const wordsList = drop.depthLayer === 1 ? matrixWords : allWords;
      drop.word = wordsList[Math.floor(Math.random() * wordsList.length)];

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
  if (Math.random() > 0.97 && drops.length < matrixCanvas.width / 10) {
    // Increased probability and allowed density
    const x = Math.floor(Math.random() * matrixCanvas.width);
    const depthLayer = Math.ceil(Math.random() * 3);
    const fontSize = depthLayer === 1 ? (isMobile.value ? 10 : 14) : depthLayer === 2 ? (isMobile.value ? 8 : 11) : isMobile.value ? 7 : 9;
    const wordsList = depthLayer === 1 ? matrixWords : allWords;

    // Check if there's already a drop near this x position (with smaller distance check)
    const existingDropIndex = drops.findIndex((d) => Math.abs(d.x - x) < fontSize * 1.5);

    if (existingDropIndex === -1) {
      // Add a new bright word drop
      const newWord = wordsList[Math.floor(Math.random() * wordsList.length)];
      const newDrop = {
        x,
        y: -5 * fontSize,
        speed: 1.5 + Math.random() * 3,
        opacity: 0.04 + Math.random() * (depthLayer === 1 ? 0.12 : 0.09),
        word: newWord,
        length: Math.floor(2 + Math.random() * 4),
        chars: [],
        fontSize,
        depthLayer,
        parallaxFactor: depthLayer === 1 ? 0.05 : depthLayer === 2 ? 0.03 : 0.01
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

// Update parallax values based on mouse position
const handleMouseMove = (e) => {
  if (!matrixCanvas) return;

  // Calculate mouse position relative to center of canvas
  const rect = matrixCanvas.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Calculate distance from center (normalized -1 to 1)
  mouseX.value = (e.clientX - centerX) / (rect.width / 2);
  mouseY.value = (e.clientY - centerY) / (rect.height / 2);

  // Apply easing for smoother movement
  parallaxOffsetX.value += (mouseX.value * 20 - parallaxOffsetX.value) * 0.05;
  parallaxOffsetY.value += (mouseY.value * 20 - parallaxOffsetY.value) * 0.05;
};

// Gyroscope parallax for mobile
const handleDeviceOrientation = (e) => {
  if (!matrixCanvas || !e.gamma || !e.beta) return;

  // Use device orientation data for parallax
  // gamma is the left-to-right tilt in degrees, beta is front-to-back
  const gammaRange = 20; // Limit the effect range
  const betaRange = 20;

  // Normalize and limit value range (-1 to 1)
  const normalizedGamma = Math.max(Math.min(e.gamma / gammaRange, 1), -1);
  const normalizedBeta = Math.max(Math.min((e.beta - 45) / betaRange, 1), -1);

  // Apply easing for smoother movement
  parallaxOffsetX.value += (normalizedGamma * 20 - parallaxOffsetX.value) * 0.05;
  parallaxOffsetY.value += (normalizedBeta * 20 - parallaxOffsetY.value) * 0.05;
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

    // Add mouse/device movement listeners for parallax
    if (isMobile.value) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

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
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('deviceorientation', handleDeviceOrientation);
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
  perspective: 1000px; /* Add perspective for 3D effect */
}

.matrix-canvas {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(0); /* Hardware acceleration */
  will-change: transform; /* Optimize for animations */
  opacity: 0.9; // Higher opacity for vivid effect
  filter: contrast(1.1) brightness(1.05) blur(0.3px); // Added slight blur for glow effect
  image-rendering: optimizeSpeed; // Improve rendering performance
  background: linear-gradient(to bottom, #01020d, #03050d); // Vertical gradient
  transition: transform 0.05s ease-out; /* Smooth transition for parallax effect */
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
