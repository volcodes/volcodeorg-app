<template>
  <div id="projects">
    <AppPageHeader :title="'Projects'" :pages="pages" />
    <p class="container explanation">
      Each project here represents my commitment to leveraging technology to make a positive impact, whether it's empowering employees, or crafting applications that address genuine needs of others.
    </p>
    <!-- sound effects on https://www.youtube.com/watch?v=Eq9R1_JQDCA&ab_channel=NoraEnPure 14:00 -->
    <!-- <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img
            src="~/assets/imgs/realtor-app.png"
            alt="Realtor Portfolio App Screenshot"
          />
        </figure>
        <div class="project-info">
          <strong>Realtor Portfolio Generator</strong>
          <span
            >Empowering realtors to showcase their properties with a click</span
          >
          <p>
            Realtors often lack technical expertise or resources to create
            professional online portfolios. With this generator, realtors can
            launch a portfolio in under 5 minutes. All templates tailored for
            property showcases and lead generation.
          </p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiNuxt" />
              <span>Nuxt.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiGithub" />
              <span>Github Actions</span>
            </span>
            <span>
              <MdiIcon icon="mdiAws" />
              <span>AWS</span>
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
              <MdiIcon icon="mdiEslint" />
              <span>Eslint</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageGo" />
              <span>Go</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img
            src="~/assets/imgs/spotify-app.png"
            alt="Spotify App Screenshot"
          />
        </figure>
        <div class="project-info">
          <strong>Spotify Playlist Organizer</strong>
          <span
            >Transform your Spotify playlists into perfectly curated
            collections</span
          >
          <p>
            Managing large Spotify playlists can become chaotic without advanced
            filtering and organization tools. Playlist Maestro enables users to
            sort, filter, and fine-tune playlists to match their preferences
            seamlessly. Advanced filtering saves users hours in playlist
            management.
          </p>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiReact" />
              <span>React</span>
            </span>
            <span>
              <img src="@/assets/imgs/icons/nextjs.svg" alt="Next.js" />
              <span>Next.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiGithub" />
              <span>Github Actions</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageTypescript" />
              <span>TypeScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiApi" />
              <span>Spotify API</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>Javascript</span>
            </span>
            <span>
              <MdiIcon icon="mdiEslint" />
              <span>Eslint</span>
            </span>
          </div>
          <div class="project-links">
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div> -->
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img
            src="~/assets/imgs/volcodeorg-app.png"
            alt="Mehmet Deveci Portfolio Webapp"
          />
        </figure>
        <div class="project-info">
          <strong>Devfolio: The Open-Source Portfolio App</strong>
          <span>Your portfolio, your rules—accessible, responsive, and open to all</span>
          <p>            
            Creating a personal portfolio should be effortless, adaptable, and accessible to everyone. Devfolio is a high-performance, open-source portfolio template designed for developers who value modern design, responsiveness, and flexibility. Built with best practices in accessibility and performance, it provides a seamless experience across all devices. Fork it, personalize it, and make it truly yours!
          </p>
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
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img src="~/assets/imgs/art-screenshot.png" alt="Art Screenshot" />
        </figure>
        <div class="project-info">
          <strong>Anonymous Reporting Tool</strong>
          <span>Speak up securely—your voice, your impact, your privacy</span>
          <p>
            Workplace harassment, bias, and discrimination often go unreported
            due to fear of retaliation. SafeVoice provides a fully anonymous and
            secure platform for employees to report issues, fostering safer and
            more inclusive work environments. It's 100% anonymous reporting,
            protecting users’ identities and enables companies to address
            critical issues transparently.
          </p>
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
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img
            src="~/assets/imgs/localwebsites-app.png"
            alt="Spotify App Screenshot"
          />
        </figure>
        <div class="project-info">
          <strong>Local Website Finder</strong>
          <span>Discover the local services that make life easier</span>
          <p>
            Relocating to a new city or country can be overwhelming, especially
            when trying to find essential online services. Local Website Finder
            simplifies this process by curating trusted, country-specific
            resources for services like food delivery, utilities, and more.
          </p>
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
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="container">
        <figure class="no-margin">
          <img
            src="~/assets/imgs/humanbody-app.png"
            alt="Spotify App Screenshot"
          />
        </figure>
        <div class="project-info">
          <strong>Human Body Input Binder</strong>
          <span>Connecting human data to innovative digital solutions</span>
          <p>
            Integrating human input, such as body metrics, into digital
            platforms can be complex and error-prone. Human Body Input Binder
            bridges the gap with a robust, scalable input-binding solution for
            applications in healthcare, fitness, and more.
          </p>
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
            <NuxtLink to="/projects" class="cta"
              >Github <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
            <NuxtLink to="/projects" class="cta"
              >Demo <MdiIcon icon="mdiArrowTopRight"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Projects', link: '/projects' }
]
</script>

<style lang="scss" scoped>
@use '~/assets/styles/main.scss';
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';

#projects {
  .explanation {
    font-size: 1.75rem;
    line-height: 2.25rem;
    font-family: vars.$fontFamilyRegular;
    color: colors.$blueSky;
  }

  .project {
    padding: 64px 0;

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    figure {
      max-width: 45%;
      max-height: 650px;
      overflow: hidden;
      position: relative;
      transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);

      &:hover {
        box-shadow: 4px 4px 0px colors.$cta;
        transform: translateY(-4px) translateX(-4px);
        &::after {
          background: rgba(2, 6, 23, 0);
          box-shadow: inset 0 0 50px rgba(2, 6, 23, .3);
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
        box-shadow: inset 0 0 50px rgba(2, 6, 23, .3);
        transition: all 0.3s cubic-bezier(0.25, 1.07, 0.6, 0.9);
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .project-info {
      max-width: 50%;
      display: flex;
      flex-direction: column;

      > strong {
        font-size: 1.5rem;
        line-height: 2rem;
        font-family: vars.$fontFamilyBold;
        color: colors.$cta;
      }

      > span {
        font-size: 3.2rem;
        line-height: 3.5rem;
        font-family: vars.$fontFamilyThick;
        margin: 8px 0;
        color: colors.$cloudWhite;
      }

      > p {
        font-size: 1rem;
        line-height: 1.5rem;
        font-family: vars.$fontFamilyInter;
        margin: 0rem 0 1rem 0;
        color: colors.$blueSky;
      }

      .technologies {
        color: #3d4877;
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
        max-height: 450px;
        overflow: hidden;
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
@media (max-width: 900px) {
  #projects .explanation {
    padding: 0 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-family: vars.$fontFamilyRegular;
  }
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
        font-size: 1.65rem !important;
        line-height: 1.85rem !important;
        margin: .5rem 0 !important;
      }
      > p {
        font-size: 1.25rem;
        line-height: 1.75rem;
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
</style>
