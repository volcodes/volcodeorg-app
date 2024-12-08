<template>
    <div class="container" id="hero">
        <img src="~/assets/imgs/Frame.svg" alt="Hero Background" class="hero-bg">
        <span>Hi, I’m Mehmet</span>
        <h1>I transform ideas into <br> digital solutions.</h1>
        <p>I specialise in turning concepts into user-centric applications that are <em>modern</em>, <em>scalable</em>, and <em>impactful</em>.</p>
        <p>With over a decade of experience, I pursue my passion by optimizing workflows, modernizing systems, and mentoring teams to craft high-quality digital solutions that drive results.</p>
        <section id="ctaButtons">
            <button class="btn btn--filled">Explore My Key Accomplishments</button>
            <button class="btn">Watch My Introduction</button>
        </section>
    </div>
    <div
        :class="{
            visible: isAchievemnentsVisible
        }"
        class="container"
        id="achievements"
    >
        <div class="achievement" v-for="achievement in achievementsRef">
            <i><MdiIcon :icon="achievement.icon" /></i>
            <span>{{ achievement.text }}</span>
        </div>
    </div>

    <div
        :class="{
            visible: isSecondaryItemVisible
        }"
        id="secondary"
    >
        <div class="container">
            <h2><em>Empowering Teams</em> with Technology and Collaboration</h2>
            <p class="text-center">I am passionate about technology, teamwork, helping others, and using cutting-edge technologies <br> to create meaningful digital experiences</p>
            <section class="grid">
                <article class="card">
                    <figure class="wrapper">
                        <div class="wrapper__header">
                            <i class="button"></i>
                            <i class="button"></i>
                            <i class="button"></i>
                        </div>
                        <div class="wrapper__overlay">
                            <img src="~/assets/imgs/art-screenshot.jpg" alt="Art Screenshot">
                        </div>
                    </figure>
                    <h3>Apps That Solve Real Problems</h3>
                    <p>Contributing to open source is my way of sharing knowledge, offering free tools like anonymous reporting system, portfolio builders and playlist organizers that demonstrate my ability to deliver value.</p>
                    <NuxtLink to="/projects" class="cta">Explore my projects <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
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
                                    <img src="~/assets/imgs/pp-1.jpg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-2.jpg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-3.jpg" alt="Profile Picture">
                                    <span>~20 people were in this product</span>
                                </div>
                            </div>
                            <div class="card-sm">
                                <div class="card-sm__title card-sm__title--schoolPlatform">
                                    <MdiIcon icon="mdiSchool" />
                                    <strong>School Platform with Vue</strong>
                                </div>
                                <div class="card-sm__content">
                                    <img src="~/assets/imgs/pp-4.jpg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-5.jpg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-6.jpg" alt="Profile Picture">
                                    <span>~30 people were in this product</span>
                                </div>
                            </div>
                            <div class="card-sm">
                                <div class="card-sm__title card-sm__title--realEstatePlatform">
                                    <MdiIcon icon="mdiHomeAccount" />
                                    <strong>Real Estate Platform with Nuxt</strong>
                                </div>
                                <div class="card-sm__content">
                                    <img src="~/assets/imgs/pp-7.jpeg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-8.jpeg" alt="Profile Picture">
                                    <img src="~/assets/imgs/pp-9.jpeg" alt="Profile Picture">
                                    <span>~50 people were in this product</span>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <h3>Crafting Solutions, Enhancing Experiences</h3>
                    <p>I successufuly delivered scalable, innovative solutions by collaborating with cross-functional, agile teams to enhance user experiences.</p>
                    <NuxtLink to="/experience" class="cta">Explore my experience <MdiIcon icon="mdiArrowTopRight" /></NuxtLink>
                </article>
            </section>
        </div>
    </div>

    <div
        class="container"
        id="technologies"
    >
        <div v-for="technology in technologiesRef">
            <MdiIcon :icon="technology.icon" />
            <span>{{ technology.text }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const achievements = [
    {
        icon: 'mdiWeb',
        text: 'Developed Scalable Web and Mobile Solutions'
    },
    {
        icon: 'mdiRecycle',
        text: 'Modernised Legacy Codebases'
    },
    { icon: 'mdiAccountMultipleCheck', text: 'Mentored Developers' },
    { icon: 'mdiChartAreaspline', text: 'Optimized Performance' },
    { icon: 'mdiSitemap', text: 'Streamlined Operational Processes' },
    { icon: 'mdiFileDocumentCheck', text: 'Provided Technical Guidance' },
    { icon: 'mdiPenPlus', text: 'Enhanced Design Systems' },
    { icon: 'mdiAccountGroup', text: 'Aligned with Stakeholders' },
    { icon: 'mdiPipe', text: 'Improved CI/CD Pipelines' },
    { icon: 'mdiHandHeart', text: 'Promoted Diversity and Inclusion' },
]

const technologies = [
    { icon: 'mdiLanguageHtml5', text: 'HTML' },
    { icon: 'mdiLanguageCss3', text: 'CSS' },
    { icon: 'mdiSass', text: 'SASS' },
    { icon: 'mdiLanguageJavascript', text: 'JavaScript' },
    { icon: 'mdiVuejs', text: 'Vue.js' },
    { icon: 'mdiLanguageTypescript', text: 'Typescript' },
    { icon: 'mdiTestTube', text: 'Jest & Cypress' },
    { icon: 'mdiNuxt', text: 'Nuxt' },
    { icon: 'mdiNodejs', text: 'Node.js' },
    { icon: 'mdiAbTesting', text: 'A/B Testing' },
    { icon: 'mdiReact', text: 'React' },
    { icon: 'mdiLanguagePhp', text: 'PHP' },
    { icon: 'mdiDatabaseSearch', text: 'MySQL' },
    { icon: 'mdiAws', text: 'AWS' },
    { icon: 'mdiVuetify', text: 'Vuetify' },
    { icon: 'mdiBootstrap', text: 'Bootstrap' },
    { icon: 'mdiTailwind', text: 'Tailwind' },
    { icon: 'mdiWebpack', text: 'Webpack' },
    { icon: 'mdiElectronFramework', text: 'Electron' },
    { icon: 'mdiEslint', text: 'Eslint' },
    { icon: 'mdiDocker', text: 'Docker' },
    { icon: 'mdiFirebase', text: 'Firebase' },
    { icon: 'mdiJquery', text: 'jQuery' },
    { icon: 'mdiKubernetes', text: 'Kubernetes' },
    { icon: 'mdiBitbucket', text: 'Bitbucket' },
    { icon: 'mdiNpm', text: 'NPM' },
]
const achievementsRef = ref(achievements)
const technologiesRef = ref(technologies)
const scrollPosition = ref(0);
const isAchievemnentsVisible = computed(() => (scrollPosition.value > 50))
const isSecondaryItemVisible = computed(() => (scrollPosition.value > 600))

onMounted(() => {
  const updateScroll = () => {
    scrollPosition.value = window.scrollY;
  };

  updateScroll();

  window.addEventListener('scroll', updateScroll);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
  });
});
</script>

<style lang="scss">
@use "~/assets/styles/colors" as colors;

#hero {
    position: relative;

    .hero-bg {
        position: absolute;
        z-index: -1;
        left: 50%;
        top: -100px;
        transform: translateX(-50%);
    }

    span {
        color: colors.$lightBlue;
        font-size: 20px;
        font-weight: 400;
        line-height: 44px;
        text-align: center;
        margin: 44px auto 0 auto;
        display: block;
        position: relative;
        width: fit-content;

        &:after {
            content: "👋";
            font-size: 32px;
            position: absolute;
            right: -44px;
        }
    }

    p {
        font-size: 24px;
        line-height: 34px;
        font-weight: 400;
        color: colors.$textGray;
        text-align: center;
        margin: 18px 0 -16px 0;
        em {
            text-decoration: underline;
            font-size: normal;
        }
    }
}

#ctaButtons {
    //make a grid that is centered two buttons 
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 16px;
    margin-top: 48px;
}

#achievements {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 84px;
    gap: 16px;
    margin-top: 144px;
    padding: 0 144px;
    opacity: 0;
    translate: 0 -30px;
    transform: scale(.9);
    transition: all .3s cubic-bezier(.25,1.07,.6,.9);

    &.visible {
        opacity: 1;
        translate: 0 0px;
        transform: scale(1);
    }

    .achievement {
        display: flex;
        justify-content: center;
        align-items: center;
        // padding: 12px 24px;
        line-height: 32px;
        font-size: 18px;

        i {
            align-items: center;
            display: inherit;
            font-size: 32px;
            line-height: 32px;
            padding: 0 8px;
            color: colors.$lightBlue;
        }
        span {
            color: colors.$cloudWhite;
            font-weight: 400;
        }
    }    
}

#secondary {
    padding-top: 144px;
    opacity: 0;
    translate: 0 -30px;
    transform: scale(.9);
    transition: all .3s cubic-bezier(.25,1.07,.6,.9);
    background: url(~/assets/imgs/Frame-2.svg) no-repeat center 100%;
    padding-bottom: 124px;
    margin-bottom: 270px;

    &.visible {
        opacity: 1;
        translate: 0 0px;
        transform: scale(1);
    }
    
    .grid {
        margin-top: 64px;
    }
}

.wrapper {
    border-radius: 12px;
    margin: 0;
    overflow: hidden;

    &__header {
        border: 1px solid #1A1F3C;
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
                background: #DA7164;
            }

            &:nth-child(2) {
                background: #EBC063;
            }

            &:nth-child(3) {
                background: #3FDD78;
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
            content: "";
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

#technologies {
    margin-top: -316px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    pointer-events: none;
    padding: 0 125px;
    margin-bottom: 64px;

    div {
        font-size: 18px;
        font-weight: 500;
        color: colors.$textGray;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        opacity: 1;
        margin: 4px 8px;
        // background: colors.$navyBlue;
        // padding: 2px;

        svg {
            width: 32px;
            height: 32px;
            margin-right: 4px;
            font-size: 24px;
        }
    }
}
</style>
  