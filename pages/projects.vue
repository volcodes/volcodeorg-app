<template>
  <div id="projects">
    <header class="container">
      <h1>Projects</h1>
      <div class="breadcrumb">
        <NuxtLink to="/">Overview</NuxtLink>
        <span>Projects</span>
      </div>
    </header>
    <p class="container explanation">
      I believe in creating accessible, open-source tools that solve real-world
      problems. Each project here represents my commitment to leveraging
      technology to make a positive impact, whether it's empowering employees,
      simplifying workflows, or enhancing professional presence.
    </p>
    <div class="project">
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

<style lang="scss" scoped>
@use '~/assets/styles/main.scss';
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';

#projects {
  min-height: 500px;

  > header {
    display: flex;
    margin: 44px auto;
    justify-content: space-between;
    align-items: center;

    .breadcrumb {
      display: flex;
      gap: 12px;

      a,
      span {
        text-decoration: none;
        font-size: 18px;
        color: colors.$cloudWhite;
        display: flex;
        align-items: center;
      }

      a:not(:last-child) {
        color: colors.$lightBlue;
        &:after {
          content: '/';
          margin-left: 12px;
        }
      }
    }
  }

  .explanation {
    font-size: 26px;
    line-height: 34px;
    font-family: vars.$fontFamilyThick;
    color: colors.$textGray;
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
        font-size: 20px;
        line-height: 24px;
        font-family: vars.$fontFamilyRegular;
        color: colors.$lightBlue;
      }

      > span {
        font-size: 48px;
        line-height: 52px;
        font-family: vars.$fontFamilyThick;
        margin: 8px 0;
        color: colors.$cloudWhite;
      }

      > p {
        font-size: 20px;
        line-height: 26px;
        font-family: vars.$fontFamilyRegular;
        margin: 0 0 16px 0;
        color: colors.$textGray;
      }

      .technologies {
        color: #3d4877;
        font-size: 14px;
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
</style>
