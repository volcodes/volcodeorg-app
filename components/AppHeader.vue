<!-- how to kick start a new component in nuxt 3 -->
<template>
  <header id="header" class="container">
    <NuxtLink id="logo" to="/">
      <span>M</span>
    </NuxtLink>
    <nav id="nav">
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
  border-bottom: 1px solid rgba(46, 55, 90, 0.3);
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
</style>
