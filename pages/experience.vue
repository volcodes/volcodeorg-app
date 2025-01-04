<template>
  <div id="experience">
    <AppPageHeader :title="'Experience'" :pages="pages" />
    <div id="timeline" class="container">
      <article>
        <span class="date">2023</span>
        <span class="date-extended">February 2023 - July 2024, Germany</span>
        <div class="card">
          <strong>Senior Frontend Developer</strong>
          <span>Sdui Gmbh</span>
          <ul>
            <li>One Encrypted Chat App with React</li>
            <li>One School Platform with Vue</li>
            <li>One iOs Mobile App Instance</li>
          </ul>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageTypescript" />
              <span>TypeScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiReact" />
              <span>React.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageHtml5" />
              <span>HTML</span>
            </span>
            <span>
              <MdiIcon icon="mdiKubernetes" />
              <span>Kubernetes</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageCss3" />
              <span>CSS</span>
            </span>
            <span>
              <MdiIcon icon="mdiCheckDecagram" />
              <span>Cypress</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
            <span>
              <MdiIcon icon="mdiElectronFramework" />
              <span>Electron</span>
            </span>
            <span>
              <MdiIcon icon="mdiCheckAll" />
              <span>Jest</span>
            </span>
          </div>
          <NuxtLink to="/experience" class="cta"
            >Explore my key accomplishments <MdiIcon icon="mdiArrowTopRight"
          /></NuxtLink>
        </div>
      </article>
      <article class="right">
        <span class="date">2020</span>
        <span class="date-extended">March 2020 - December 2022, Germany</span>
        <div class="card">
          <strong>Senior Frontend Engineer</strong>
          <span>Homeday Gmbh</span>
          <ul>
            <li>The main website as PHP with Laravel Twig Templates</li>
            <li>Migrated the main website to webapp with Vue + Nuxt</li>
            <li>One Realtor App with Vue</li>
          </ul>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiNuxt" />
              <span>Nuxt</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguagePhp" />
              <span>PHP</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageTypescript" />
              <span>TypeScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageHtml5" />
              <span>HTML</span>
            </span>
            <span>
              <MdiIcon icon="mdiAbTesting" />
              <span>A/B Testing</span>
            </span>
            <span>
              <MdiIcon icon="mdiAws" />
              <span>AWS</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageCss3" />
              <span>CSS</span>
            </span>
            <span>
              <MdiIcon icon="mdiTailwind" />
              <span>Tailwind</span>
            </span>
            <span>
              <MdiIcon icon="mdiCheckDecagram" />
              <span>Cypress</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
            <span>
              <MdiIcon icon="mdiCheckAll" />
              <span>Jest</span>
            </span>
          </div>
          <NuxtLink to="/projects" class="cta"
            >Explore my key accomplishments <MdiIcon icon="mdiArrowTopRight"
          /></NuxtLink>
        </div>
      </article>
      <article>
        <span class="date">2018</span>
        <span class="date-extended">April 2018 - March 2020, Turkey</span>
        <div class="card">
          <strong>Frontend Developer</strong>
          <span>Turkish Radio Television Corporation</span>
          <ul>
            <li>One CMS & One Asset Management Platform with Vue</li>
            <li>One VOD Platform with Vue (TABII)</li>
            <li>Two landing pages with Vue</li>
            <li>Two webapps with Vue</li>
            <li>One website with PHP with Laravel Blade Templates</li>
            <li>A webapp with Nodejs & Vue</li>
          </ul>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiVuejs" />
              <span>Vue.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiNodejs" />
              <span>Node.js</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageHtml5" />
              <span>HTML</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageCss3" />
              <span>CSS</span>
            </span>
            <span>
              <MdiIcon icon="mdiAbTesting" />
              <span>A/B Testing</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
          </div>
          <NuxtLink to="/projects" class="cta"
            >Explore my key accomplishments <MdiIcon icon="mdiArrowTopRight"
          /></NuxtLink>
        </div>
      </article>
      <article class="right">
        <span class="date">2014</span>
        <span class="date-extended">July 2014 - December 2017, Turkey</span>
        <div class="card">
          <strong>Full Stack Developer</strong>
          <span>Digital Marketing Agency: Crabs Media</span>
          <ul>
            <li>
              Built 50+ interfaces and implemented WordPress for clients in
              diverse industries
            </li>
            <li>
              Develoeped a custom WordPress plugin with PHP that integrates with
              customer's database
            </li>
          </ul>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiDatabaseSearch" />
              <span>MySQL</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguagePhp" />
              <span>PHP</span>
            </span>
            <span>
              <MdiIcon icon="mdiWordpress" />
              <span>WordPress</span>
            </span>
            <span>
              <MdiIcon icon="mdiJquery" />
              <span>jQuery</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageHtml5" />
              <span>HTML</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageCss3" />
              <span>CSS</span>
            </span>
            <span>
              <MdiIcon icon="mdiSass" />
              <span>Sass</span>
            </span>
          </div>
        </div>
      </article>
      <article>
        <span class="date">2013</span>
        <span class="date-extended">May 2013 - July 2014, Turkey</span>
        <div class="card">
          <strong>UI Developer</strong>
          <span>Digital Marketing Agency: Elmalma</span>
          <ul>
            <li>
              Built ~10 websites with HTML, CSS and jQuery for digital
              advitesement of movies
            </li>
          </ul>
          <div class="technologies">
            <span>
              <MdiIcon icon="mdiJquery" />
              <span>jQuery</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageJavascript" />
              <span>JavaScript</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageHtml5" />
              <span>HTML</span>
            </span>
            <span>
              <MdiIcon icon="mdiLanguageCss3" />
              <span>CSS</span>
            </span>
          </div>
        </div>
      </article>
      <article class="right">
        <span class="date">2012</span>
        <span class="date-extended">May 2012 - September 2012, Turkey</span>
        <div class="card">
          <strong>IT Support Internship</strong>
          <span>Istanbul Metropolitan Municipality</span>
          <ul>
            <li>
              Performed hardware and software troubleshooting on staff's
              computers.
            </li>
            <li>
              Provided remote demonstrations and troubleshooting on staff's
              computers through TeamViewer.
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Experience', link: '/experience' },
];
</script>

<style lang="scss" scoped>
@use '~/assets/styles/main.scss';
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';

#timeline {
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 1px;
    background: colors.$textGray;
    opacity: 0.5;
    transform: translateX(-50%);
    z-index: -1;
  }

  article {
    max-width: calc(50% - 64px);
    position: relative;
    box-sizing: border-box;
    margin-top: 64px;
    margin-bottom: 64px;

    .card {
      border-radius: 4px;
      margin-top: 12px;

      p {
        margin-bottom: 0;
        color: colors.$cloudWhite;
      }
    }

    .date {
      position: absolute;
      left: calc(100% + 64px);
      width: 300px;
      padding-left: 32px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: 600;
      color: colors.$textGray;
      font-family: vars.$fontFamilyBold;
      letter-spacing: -0.02em;

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background: colors.$lightBlue;
        position: absolute;
        left: -9px;
        margin-right: 10px;
        border: 4px solid #020617;
      }
    }

    .date-extended {
      display: block;
      font-size: 1.15rem;
      font-weight: 500;
      color: colors.$textGray;
    }

    &.right {
      margin-left: calc(50% + 64px);

      .date-extended {
        text-align: left;
      }

      .date {
        left: -64px;
        text-indent: -144px;
      }
    }
  }
}

@media (max-width: 1024px) {
  #timeline article .date {
      left: calc(100% + 1rem) !important;
      transform: translateY(0) !important;
      font-size: 14px !important;
      padding-left: 1rem !important;
      text-indent: 0 !important;
      width: 60px !important;;
      box-sizing: border-box;
  }

  #timeline article {
      width: 100% !important;
      max-width: calc(85% - 1rem) !important;
      padding-left: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }

  #timeline:after {
      transform: translate(0px, 0px) !important;
      left: 85%;
  }

  #timeline article.right {
      margin-left: 0 !important;
  }

  #timeline article .date:before {
      left: -7px;
  }
}
</style>
