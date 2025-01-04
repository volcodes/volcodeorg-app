<template>
  <div>
    <AppHero />
    <AppAchievements />

    <div
      id="secondary"
    >
      <div class="container">
        <h2><em>Empowering Teams</em> with Technology and Collaboration</h2>
        <p class="text-center">
          I am passionate about technology, teamwork, helping others, and using
          cutting-edge technologies <br />
          to create meaningful digital experiences
        </p>
        <section class="grid">
          <article class="card">
            <figure class="wrapper">
              <div class="wrapper__header">
                <i class="button"></i>
                <i class="button"></i>
                <i class="button"></i>
              </div>
              <div class="wrapper__overlay" style="max-height: 450px">
                <img
                  src="~/assets/imgs/art-screenshot.png"
                  alt="Art Screenshot"
                />
              </div>
            </figure>
            <h3>Apps That Solve Real Problems</h3>
            <p>
              Contributing to open source is my way of sharing knowledge,
              offering free tools like anonymous reporting system, portfolio
              builders and playlist organizers that demonstrate my ability to
              deliver value.
            </p>
            <NuxtLink to="/projects" class="cta">
              Explore my projects <MdiIcon icon="mdiArrowTopRight" />
            </NuxtLink>
          </article>
          <article class="card">
            <figure class="wrapper">
              <div class="wrapper__overlay">
                <div class="card-sm">
                  <div class="card-sm__title">
                    <MdiIcon icon="mdiChatProcessing" />
                    <strong>Encrypted Chat App with React</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-1.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-2.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-3.jpg" alt="Profile Picture" />
                    <span>~20 people were in this product</span>
                  </div>
                </div>
                <div class="card-sm">
                  <div class="card-sm__title card-sm__title--schoolPlatform">
                    <MdiIcon icon="mdiSchool" />
                    <strong>School Platform with Vue</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-4.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-5.jpg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-6.jpg" alt="Profile Picture" />
                    <span>~30 people were in this product</span>
                  </div>
                </div>
                <div class="card-sm">
                  <div
                    class="card-sm__title card-sm__title--realEstatePlatform"
                  >
                    <MdiIcon icon="mdiHomeAccount" />
                    <strong>Real Estate Platform with Nuxt</strong>
                  </div>
                  <div class="card-sm__content">
                    <img src="~/assets/imgs/pp-7.jpeg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-8.jpeg" alt="Profile Picture" />
                    <img src="~/assets/imgs/pp-9.jpeg" alt="Profile Picture" />
                    <span>~50 people were in this product</span>
                  </div>
                </div>
              </div>
            </figure>
            <h3>Crafting Solutions, Enhancing Experiences</h3>
            <p>
              I successufuly delivered scalable, innovative solutions by
              collaborating with cross-functional, agile teams to enhance user
              experiences.
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
</script>

<style lang="scss">
@use '~/assets/styles/colors' as colors;
@use '~/assets/styles/vars';

#secondary {
  padding-top: 144px;
  background: url(~/assets/imgs/Frame-2.svg) repeat-x center 100%;
  padding-bottom: 124px;
  margin-bottom: 270px;
  transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);
  transition-delay: 0.8s;

  .grid {
    margin-top: 64px;
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

@media (max-width: 1024px) {
  #secondary {
    padding-top: 2rem;
    padding-bottom: 2rem;

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
    padding: 0 1rem;
  }
}
</style>