<template>
  <div>
    <AppHero />

    <div id="secondary" :class="{ isActive: isActive }">
      <div class="container">
        <h2>
          <em>10+ years of experience in <span class="tooltip bottom" data-tooltip="IT, e-commerce, SaaS, media, real estate, education tech">6 industries</span></em>
          with 150+ collaborators worldwide
        </h2>
        <section class="grid">
          <article class="card">
            <h3>Open Source Projects</h3>
            <p>Discover practical tools and apps that tackle real-world challenges, showcasing my tech expertise, innovation, and commitment to creating real value.</p>
            <NuxtLink to="/projects" class="cta"> Explore My Projects <MdiIcon icon="mdiArrowTopRight" /> </NuxtLink>
          </article>
          <article class="card">
            <h3>Demonstrated Professional Expertise</h3>
            <p>Explore my journey in programming and web technologies, spanning six industries over 10 years, where I've delivered impactful, scalable solutions in agile teams.</p>
            <NuxtLink to="/experience/" class="cta">Review My Career Path <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mehmet Deveci - Software Development Specialist',
  meta: [
    {
      name: 'description',
      content: 'Software Development Specialist with 10+ years of experience in frontend development, specializing in Vue.js, Javascript, and modern web technologies.'
    },
    {
      name: 'keywords',
      content: 'Software Development Specialist, Frontend Developer, Vue.js, Web Development, JavaScript, TypeScript'
    },
    {
      property: 'og:title',
      content: 'Mehmet Deveci - Software Development Specialist'
    },
    {
      property: 'og:description',
      content: 'Software Development Specialist with 10+ years of experience in frontend development, specializing in Vue.js, Javascript, and modern web technologies.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://volcode.org'
    },
    {
      property: 'og:image',
      content: 'https://volcode.org/public/assets/imgs/og-image.jpg'
    }
  ]
});

// const { data: repos } = await useAsyncData('repos', () =>
//   $fetch('https://api.github.com/users/volcodes/repos')
// )

// const { data: repos } = await useFetch('https://api.github.com/users/volcodes/repos')
const isActive = ref(false);

onMounted(() => {
  const handleScroll = () => {
    isActive.value = window.scrollY > 1;
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors' as colors;
@use '~/assets/styles/vars';

#secondary {
  padding-top: 0rem;
  background: url(/public/assets/imgs/Frame-2.svg) repeat-x center 350px;
  padding-bottom: 3rem;
  background-size: 100% auto;
  transition: all 0.7s cubic-bezier(0.25, 1.07, 0.6, 0.9);
  margin-bottom: -6rem;
  position: relative;
  opacity: 0;
  background-color: colors.$navyBlue;
  box-shadow: 0px 0px 40px 60px colors.$navyBlue;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 30px 40px colors.$navyBlue;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .grid {
    padding: 3rem 0;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  &.isActive {
    opacity: 1;
  }

  .subtitle {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 4rem;
  }

  h2 {
    font-weight: 900;
    font-family: vars.$fontFamilyBold;
    margin-bottom: 0;
  }
}

.page-transition--on {
  #secondary {
    opacity: 0;
    transform: translateY(30px);
  }
}

.wrapper {
  border-radius: 12px;
  margin: 0;
  overflow: hidden;
  max-height: 480px;
  margin-bottom: 1rem;

  &__header {
    border: 1px solid colors.$borderColor;
    border-bottom: none;
    height: 60px;
    display: flex;
    background: colors.$navyBlue;
    border-radius: 12px 12px 0 0;
    align-items: center;
    padding: 0 32px;

    .button {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      margin-right: 8px;

      &:first-child {
        background: colors.$redButton;
      }

      &:nth-child(2) {
        background: colors.$yellowButton;
      }

      &:nth-child(3) {
        background: colors.$greenButton;
      }
    }
  }
  &__overlay {
    position: relative;
    height: calc(100% - 60px);
    overflow: hidden;

    > img {
      width: 100%;
    }

    &:after {
      content: '';
      background: linear-gradient(to bottom, rgba(1, 5, 19, 0) 0%, colors.$darkBlue 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      display: block;
      height: 50%;
      width: 100%;
    }
  }
}

h2 {
  margin-bottom: 3rem;
  margin-top: -4rem;
}

@media (max-width: 1024px) {
  #secondary {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 0;
    opacity: 1;
    .grid {
      margin-top: 0;
      padding-top: 1rem;
    }

    h2 {
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    p {
      padding-left: 1rem;
      text-align: left;

      br {
        display: none;
      }
    }
  }

  h2 {
    font-size: 1.75rem;
    line-height: 2.5rem;
    text-align: left;
    padding: 1rem 0;
    margin-bottom: 0;
    display: block;
    width: 70%;
    margin-top: -2rem;
  }
}
</style>
