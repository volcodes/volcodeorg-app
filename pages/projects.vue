<template>
  <div id="projects">
    <AppPageHeader :title="'Projects'" :pages="pages" />
    <p class="container explanation">Each project here represents my commitment to leveraging technology to make a positive impact, whether it's empowering employees, or crafting applications that address genuine needs of others.</p>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <NuxtImg src="/assets/imgs/betonsa-screenshot.jpg" alt="Betonsa Screenshot" loading="lazy" preset="project" height="1000" width="485" class="project-image" fit="contain" />
        </figure>
        <div class="project-info">
          <!-- <strong>Anonymous Reporting Tool</strong> -->
          <span>Designed and built a modern website for Betonsa Ltd.</span>
          <p>Aligned with stakeholders to gather requirements, prototyped, designed, and built a website that showcases Betonsa's mission, services, and products.</p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue</span>
            </span>
            <span>
              <MdiIcon icon="mdiNuxt" />
              <span>Nuxt.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>Javascript</span>
            </span>
            <span>
              <MdiIcon icon="mdiTailwind" />
              <span>Tailwind</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
            <span>
              <MdiIcon icon="mdiEslint" />
              <span>Eslint</span>
            </span>
            <span>
              <MdiIcon icon="mdiCodeGreaterThanOrEqual" />
              <span>Prettier</span>
            </span>
            <span>
              <MdiIcon icon="mdiGithub" />
              <span>Github Actions</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://betonsa.com.gh" class="cta">Visit betonsa.com.gh <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <NuxtImg src="/assets/imgs/volcodeorg-app.jpg" alt="Mehmet Deveci Portfolio Webapp" loading="lazy" preset="project" height="780" width="700" class="project-image" fit="contain" />
        </figure>
        <div class="project-info">
          <span>Developed a high-performance, modular portfolio template for devs.</span>
          <p>I built a customizable portfolio app that improves setup efficiency and simplifies maintenance, helping developers showcase their work with minimal effort.</p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue</span>
            </span>
            <span>
              <MdiIcon icon="mdiNuxt" />
              <span>Nuxt</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageTypescript" />
              <span>TypeScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>Javascript</span>
            </span>
            <span>
              <MdiIcon icon="mdiGithub" />
              <span>Github Actions</span>
            </span>
            <span>
              <MdiIcon icon="mdiEslint" />
              <span>Eslint</span>
            </span>
            <span>
              <MdiIcon icon="mdiCodeGreaterThanOrEqual" />
              <span>Prettier</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://github.com/volcodes/volcodeorg-app" class="cta">Github <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://volcode.org" class="cta">Demo <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <NuxtImg src="/assets/imgs/art-screenshot.jpg" alt="Anonymous Reporting Tool Screenshot" loading="lazy" preset="project" height="567" width="480" class="project-image" fit="contain" />
        </figure>
        <div class="project-info">
          <span>Engineered a secure, anonymous reporting tool for workplaces.</span>
          <p>I led a team of 6 people to build an anonymous reporting platform that ensures privacy and encourages safer work environments, helping organizations build trust with employees.</p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue</span>
            </span>
            <span>
              <MdiIcon icon="mdiFirebase" />
              <span>Firebase</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>Javascript</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
            <span>
              <MdiIcon icon="mdiEslint" />
              <span>Eslint</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://github.com/volcanioo/anonymous-reporting-tool" class="cta">Github <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://affectionate-williams-df6f76.netlify.app/" class="cta">Demo <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <NuxtImg src="/assets/imgs/localwebsites-app.jpg" alt="Local Websites App Screenshot" loading="lazy" preset="project" height="750" width="680" class="project-image" fit="contain" />
        </figure>
        <div class="project-info">
          <span>Developed a localized service finder for easy relocations.</span>
          <p>I designed an open source service finder that curates trusted local resources, reducing time spent searching and simplifying access to essential services for new residents.</p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiWebpack" />
              <span>Webpack</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaSCript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageMarkdown" />
              <span>Markdown</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://github.com/volcanioo/local-websites" class="cta">Github <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://volcanioo.github.io/local-websites/dist/index.html" class="cta">Demo <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <NuxtImg src="/assets/imgs/humanbody-app.jpg" alt="Human Body Input Binder Screenshot" loading="lazy" preset="project" height="750" width="515" class="project-image" fit="contain" />
        </figure>
        <div class="project-info">
          <!-- <strong>Human Body Input Binder</strong> -->
          <span>Created a scalable data-binding tool for digital applications.</span>
          <p>Human Body Input Binder integrates human input, such as body metrics, into digital platforms.</p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>Javascript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageR" />
              <span>R</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://github.com/volcanioo/Human-Body-Rendering-HTML" class="cta">Github <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
            <NuxtLink rel="noopener noreferrer" target="_blank" to="https://maya-gans.shinyapps.io/human_body_app/" class="cta">Demo <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects - Mehmet Deveci',
  meta: [
    {
      name: 'description',
      content: 'Explore my portfolio of frontend development projects as a Software Development Specialist, including open-source contributions and professional work.'
    },
    {
      name: 'keywords',
      content: 'Software Development Specialist, Frontend Projects, Portfolio, Open Source, Vue.js Projects'
    },
    {
      property: 'og:title',
      content: 'Projects - Mehmet Deveci'
    },
    {
      property: 'og:description',
      content: 'Explore my portfolio of frontend development projects as a Software Development Specialist, including open-source contributions and professional work.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://volcode.org/projects'
    },
    {
      property: 'og:image',
      content: 'https://volcode.org/public/assets/imgs/og-image.jpg'
    }
  ]
});

const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Projects', link: '/projects' }
];
</script>

<style lang="scss" scoped>
@use '~/assets/styles/main.scss';
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';

#projects {
  .project {
    padding: 3rem 0;
    border-bottom: 1px solid colors.$modalBg;
    transition: padding 0.6s;

    &:nth-child(2n - 1) {
      background-color: colors.$darkBlue;
      padding: 5rem 0;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    figure {
      max-width: 40%;
      max-height: 600px;
      overflow: hidden;
      position: relative;
      transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);

      &:hover {
        box-shadow: 4px 4px 0px colors.$cta;
        transform: translateY(-4px) translateX(-4px);
        &::after {
          background: rgba(2, 6, 23, 0);
          box-shadow: inset 0 0 50px rgba(2, 6, 23, 0.3);
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(2, 6, 23, 0.65);
        box-shadow: inset 0 0 50px rgba(2, 6, 23, 0.3);
        transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);
      }

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .project-info {
      max-width: 56%;
      display: flex;
      flex-direction: column;

      > strong {
        font-size: 1.15rem;
        line-height: 2rem;
        font-family: vars.$fontFamilyBold;
        color: colors.$greenShadow;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
      }

      > span {
        font-size: 2.5rem;
        line-height: 3rem;
        font-family: vars.$fontFamilyThick;
        margin: 8px 0;
        color: white;
      }

      > p {
        font-size: 1.25rem;
        line-height: 2rem;
        font-family: vars.$fontFamilyInter;
        margin: 0rem 0 1rem 0;
        color: colors.$grayShade;
        width: 80%;
      }

      .technologies {
        color: colors.$grayShade;
        font-size: 1rem;
        margin-top: 0;

        strong,
        svg {
          width: 44px;
          height: 44px;
        }

        > span {
          width: 44px;
          height: 44px;
        }
      }
    }

    &:nth-child(2n - 2) {
      .container {
        flex-direction: row-reverse;
      }

      figure {
        max-height: 500px;
        overflow: hidden;

        img {
          display: block;
        }
      }
    }
  }
}

.project-links {
  display: flex;
  flex-direction: row;

  .cta {
    margin-right: 14px;
  }
}

@media only screen and (min-device-width: 900px) and (max-device-width: 1100px) {
  #projects {
    .project {
      figure {
        max-width: 35%;
        max-height: 550px;
      }

      .project-info {
        max-width: 60%;

        > strong {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }

        > span {
          font-size: 2rem;
          line-height: 2.5rem;
        }

        > p {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
}
@media (max-width: 868px) {
  .project {
    margin: 1rem 0;
    border-radius: 2px;
    padding: 1rem 0 !important;
    background-color: colors.$darkBlue;
    .container {
      flex-direction: column !important;
    }
    figure {
      max-width: 100% !important;
      width: 100% !important;
      max-height: 280px !important;
    }
    .project-info {
      max-width: 100% !important;
      padding: 1rem 0;
      > strong {
        font-size: 1.1rem !important;
      }
      > span {
        font-size: 2rem !important;
        line-height: 2.5rem !important;
        margin: 0.5rem 0 !important;
      }
      > p {
        font-size: 1.15rem !important;
        line-height: 1.5rem !important;
        width: 100% !important;
      }
    }

    .technologies svg,
    .technologies > span {
      width: 32px !important;
      height: 32px !important;
    }
  }

  .project-links .cta {
    margin-top: 0;
    font-size: 1.15rem;
    line-height: 1.55rem;
  }

  .cta svg {
    height: 28px !important;
  }
}

.project-image {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.explanation {
  color: colors.$grayShade;
}
</style>
