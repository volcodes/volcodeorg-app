<script setup>
import { useRoute } from 'vue-router'

const isMobileMenuActive = ref(false)
const route = useRoute()

// Watch for route changes to close the mobile menu
watch(() => route.path, () => {
  isMobileMenuActive.value = false
})

// Close mobile menu on scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (isMobileMenuActive.value) {
      isMobileMenuActive.value = false
    }
  }, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
    if (isMobileMenuActive.value) {
      isMobileMenuActive.value = false
    }
  })
})

const toggleMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value
}
</script>

<template>
  <header id="header" class="container">
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
      <NuxtLink to="/contact">Contact</NuxtLink>
      <button class="btn">
        <MdiIcon icon="mdiDownload" />
        Resume
      </button>
    </nav>
  </header>
</template>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

#header {
  display: grid;
  grid-template-columns: 10% auto;
  align-items: center;
}

#nav {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;

  a {
    font-family: 'GT Walsheim Trial';
    font-size: 20px;
    color: white;
    text-decoration: none;
    font-weight: 400;
    margin-right: 32px;
    position: relative;
    line-height: 44px;

    &:last-child {
      margin-right: 0;
    }

    &:after {
      content: '';
      position: absolute;
      left: 0px;
      bottom: 10px;
      width: 0;
      height: 14px;
      background: colors.$lightBlue;
      display: block;
      z-index: -1;
      transition: 0.2s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    }

    &:hover,
    &.router-link-active {
      &:after {
        width: calc(100% + 6px);
        left: -3px;
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

  &:hover {
    transform: translateX(-2px) translateY(-2px);
    box-shadow: 4px 4px 0px 0px colors.$lightBlue;
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
  border-bottom: 1px solid rgba(46, 55, 90, 0.3);
}

.page-transition--on#header {
  opacity: 0;
  transform: translateY(-12px);
  border-bottom: 1px solid rgba(46, 55, 90, 0);
}

.mobile-menu-btn {
  display: none;
}

@media (max-width: 1024px) {
  .mobile-menu-btn {
    cursor: pointer;
    display: block;
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

  #nav a {
    font-size: 3rem;
    width: 100%;
    height: calc((100vh - 70px) / 5);
    display: flex;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(46, 55, 90, 0.3);
  }

  #nav a:after {
    display: none;
  }

  a.router-link-active.router-link-exact-active {
    border-left: 10px solid white;
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
  }
}
</style>
