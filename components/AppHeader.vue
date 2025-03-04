<script setup>
import { useRoute } from 'vue-router'
import Resume from '~/assets/files/resume.pdf'

const isMobileMenuActive = ref(false)
const isHeaderFixed = ref(false)
const route = useRoute()

let lastScrollTop = 0

const handleScroll = () => {
  const currentScrollTop = window.scrollY
  const isScrollingDown = currentScrollTop > lastScrollTop;
  if (!isScrollingDown) {
    isHeaderFixed.value = !isScrollingDown && currentScrollTop > 100
  }

  lastScrollTop = currentScrollTop
}

// Watch for route changes to close the mobile menu
watch(() => route.path, () => {
  isMobileMenuActive.value = false
})

// Close mobile menu on scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value
}

const downloadFile = async () => {
  try {
    const link = document.createElement('a')
    link.href = Resume
    link.download = 'MehmetDeveciResume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}
</script>

<template>
  <header id="header" :class="{'header--fixed': isHeaderFixed}">
    <div class="container">
      <NuxtLink id="logo" to="/">
        <span>M</span>
      </NuxtLink>
      <button class="mobile-menu-btn">
        <MdiIcon v-if="!isMobileMenuActive" icon="mdiMenu" @click="toggleMenu" />
        <MdiIcon v-else icon="mdiCloseThick" @click="toggleMenu" />
      </button>
      <nav id="nav" :class="{
        'active': isMobileMenuActive
      }">
        <NuxtLink to="/">Overview</NuxtLink>
        <NuxtLink to="/experience">Experience</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
        <NuxtLink to="/contact">Contact</NuxtLink>
        <button @click="downloadFile" class="btn">
          Download Resume
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

#header {
  box-sizing: border-box;
  box-shadow: 0px 30px 40px colors.$navyBlue;
}

#header .container {
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
}

#nav {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;

  .btn {
    border: 4px solid white;
    color: white;
    min-height: 50px;
  }

  a {
    font-family: vars.$fontFamilyRegular;
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
    margin-right: 32px;
    position: relative;
    line-height: 1.5rem;
    align-items: center;
    display: flex;

    &:last-child {
      margin-right: 0;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0px;
      width: 0;
      height: 5px;
      background: colors.$cta;
      display: block;
      z-index: -1;
      transition: 0.2s cubic-bezier(0.38, 0.98, 0.6, 0.9);
      top: 37px;
    }

    &:hover,
    &.router-link-active {
      &:after {
        width: 100%;
      }
    }
  }
}

#logo {
  text-decoration: none;
  padding: 0;
  margin: 2rem 0;
  width: 50px;
  height: 50px;
  border: 4px solid white;
  font-size: 46px;
  color: white;
  font-family: 'GT Walsheim Trial Bd';
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: vars.$borderRadius;
  transition: 0.2s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transform: translateX(-2px) translateY(-2px);
  box-shadow: 4px 4px 0px 0px colors.$greenShadow;

  &:hover {
    transform: translateX(-5px) translateY(-5px);
    box-shadow: 6px 6px 0px 0px colors.$greenShadow;
  }

  &:active {
    position: relative;
    top: 1px;
  }
}

.page-transition#header {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s cubic-bezier(0.38, 0.98, 0.6, 0.9);
}

.page-transition--on#header {
  opacity: 0;
  transform: translateY(-12px);
}

.mobile-menu-btn {
  display: none;
}

@media (max-width: 1024px) {
  .mobile-menu-btn {
    cursor: pointer;
    display: block;
  }
  #header .container {
    justify-content: space-between;
    padding: 0;
  }
  #nav {
    display: none !important;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #020617;
    top: 70px;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: flex-start;

    &.active {
      display: block !important;
    }

    .btn {
      margin: 2rem;
    }
  }

  #header {
    position: relative;
    z-index: 9;
  }

  #header #nav a {
    font-size: 1.5rem;
    width: 100%;
    height: calc((100vh - 70px) / 7);
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(46, 55, 90, 0.3);
  }

  #header #nav .btn {
    margin: 1rem 2rem
  }

  #header #nav a:after {
    display: none;
  }

  #header a.router-link-active.router-link-exact-active:not(#logo) {
    border-left: 5px solid white;
    padding-left: 1rem;
  }
  .mobile-menu-btn {
    width: auto;
    height: 52px;
    padding: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 52px;
  }

  #header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0px 0.5rem 0px 1rem;
  }

  #logo {
    width: 40px;
    height: 38px;
    font-size: 33px;
    border: 3px solid white;
    margin: 0;
  }
}

.header--fixed {
  background: colors.$navyBlue;
  position: sticky !important;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 99;

  #logo {
    margin: 1rem 0;
  }
}
</style>
