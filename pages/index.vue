<template>
  <div>
    <AppHero />
    {{ repos }}
    <!-- <AppAchievements /> -->

    <div id="secondary" :class="{ 'isActive': isActive }">
      <div class="container">
        <!-- 10+ years of experience | 6+ industries | 300+ collaborators worldwide. -->
        <h2><em>10+ years of experience in <span class="tooltip" data-tooltip="IT, e-commerce, SaaS, media, real estate, education tech">6 industries</span></em> with 150+ collaborators worldwide</h2>
        <section class="grid">
          <article class="card">
            <h3>Real Solutions, Open Source</h3>
            <p>
              Explore practical tools and apps that solve real-world challenges, showcasing my commitment to innovation and value creation.
            </p>
            <NuxtLink to="/projects" class="cta">
              Explore my projects <MdiIcon icon="mdiArrowTopRight" />
            </NuxtLink>
          </article>
          <article class="card">
            <h3>Proven Expertise in Action</h3>
            <p>
              Dive into my journey of delivering impactful, scalable solutions and driving results across diverse projects and teams.
            </p>
            <NuxtLink to="/experience" class="cta"
              >Explore my experience <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style lang="scss">
@use '~/assets/styles/colors' as colors;
@use '~/assets/styles/vars';

#secondary {
  padding-top: 144px;
  background: url(~/assets/imgs/Frame-2.svg) repeat-x center 291px;
  padding-bottom: 124px;
  transition: all 0.7s cubic-bezier(0.25, 1.07, 0.6, 0.9);
  // transition-delay: 0.8s;
  margin-bottom: -5rem;
  opacity: 0.03;

  &.isActive {
    opacity: 1;
  }

  .subtitle {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 4rem;
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
    border: 1px solid #1a1f3c;
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
        background: #da7164;
      }

      &:nth-child(2) {
        background: #ebc063;
      }

      &:nth-child(3) {
        background: #3fdd78;
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
      background: linear-gradient(
        to bottom,
        rgba(1, 5, 19, 0) 0%,
        colors.$darkBlue 100%
      );
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

    p {
      padding-left: 1rem;
      text-align: left;

      br {
        display: none;
      }
    }
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: left;
    padding: 1rem;
  }
}
</style>

