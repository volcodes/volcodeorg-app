<template>
  <div id="hero" class="container">
    <img src="~/assets/imgs/Frame.svg" alt="Hero Background" class="hero-bg" />
    <span>Hi, I'm Mehmet</span>
    <h1>
      <!-- Welcome to my portfolio -->
      Software Development Specialist
      <!-- I transform ideas into <br> digital solutions. -->
    </h1>
    <p>
      Frontend-focused, 10+ years in web, experienced in <u class="tooltip" data-tooltip="PHP, Node.js, Go, Python">backend and full stack work</u>.
      <!-- With over a decade of experience across diverse sectors, I craft scalable digital solutions that drive business growth and innovation -->
      <!-- I have a decade of experience in web development, specializing in crafting scalable digital solutions that drive business growth and innovation. -->
      <!-- I bring a decade of expertise in frontend development, working across diverse industries and tech stacks. -->
      <!-- 
        I specialise in turning concepts into user-centric applications that are modern, scalable, and impactful.
        With over a decade of experience - I pursue my passion by optimizing workflows, modernizing systems, and mentoring people to craft high-quality digital solutions that drive results.
      -->

    </p>
    <p>
      <!-- My strongest skills are in frontend frameworks like Vue.js and React, backend technologies such as PHP and Node.js, and cloud infrastructure tools like AWS to deliver seamless user experiences.  -->
      <!-- frontend frameworks like Vue.js and React, backend technologies such as PHP and Node.js, and cloud infrastructure tools like AWS to deliver seamless user experiences.  -->
      <!-- From modernizing legacy systems to mentoring developers and optimizing workflows, I thrive at the intersection of technology and innovation, delivering scalable applications that solve real-world challenges. -->
      I design, build, and optimize digital interfaces, apps, and infrastructures.
      <!-- I can design and optimize experiences, applications, and infrastructures.  -->
    </p>
    <section id="ctaButtons">
      <!-- TODO: add a modal with Teleport -->
      <button class="btn btn--filled">Explore My Key Accomplishments</button>
      <button class="btn">Watch My Introduction</button>
    </section>
    <div class="scroll-indicator">
      <div class="scroll-indicator__icon"></div>
      <em>Scroll down to see more</em>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

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
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.5rem;
    text-align: center;
    margin: 3rem auto 0 auto;
    display: block;
    position: relative;
    width: fit-content;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.3s;

    &:after {
      content: '👋';
      font-size: 32px;
      position: absolute;
      right: -44px;
    }
  }

  p {
    font-size: 1.35rem;
    line-height: 2rem;
    font-weight: 400;
    color: colors.$blueSky;
    font-family: 'Inter';
    font-weight: 500;
    text-align: center;
    margin: 1rem 0;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.55s;

    u {
      text-decoration: none;
    }

    em {
      text-decoration: underline;
      font-size: normal;
    }
  }

  h1 {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.5s;
  }
}

.page-transition--on #hero {
  span {
    opacity: 0;
    transform: translateY(12px);
  }
  p {
    opacity: 0;
    transform: translateY(54px);
  }
  h1 {
    opacity: 0;
    transform: translateY(48px);
  }
}

#ctaButtons {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 16px;
  margin-top: 3rem;
  margin-bottom: 3rem;

  opacity: 1;
  transform: translateY(0px);
  transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
  transition-delay: 0.6s;
}

.page-transition--on #ctaButtons {
  opacity: 0;
  transform: translateY(30px);
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: colors.$textGray;
  margin-bottom: 3rem;

  &__icon {
    width: 24px;
    height: 40px;
    border: 2px solid colors.$textGray;
    border-radius: 14px;
    position: relative;

    &::before {
      content: '';
      width: 4px;
      height: 8px;
      background: colors.$lightBlue;
      position: absolute;
      left: 50%;
      top: 6px;
      transform: translateX(-50%);
      border-radius: 2px;
      opacity: 0.8;
      animation: scrollDown 1s cubic-bezier(0.25, 1.07, 0.6, 0.9) infinite;
    }
  }

  em {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
    color: colors.$textGray;
    font-style: normal;
  }
}

@keyframes scrollDown {
  0% {
    opacity: 0.8;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, 10px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
}

// TODO: this doesn't work why???
// .page-transition--on .scroll-indicator {
//   transform: translateY(50px);
// }

// responsive support for the views where the height of the page is less than 700
// @media (min-height: 800px) {
//     #hero {
//         margin-top: 140px;
//     }
//     .hero-bg {
//         top: -140px !important;
//     }
//     #hero span {
//         font-size: 24px;
//         line-height: 48px;
//     }
//     #hero h1 {
//         font-size: 76px;
//         line-height: 80px;
//         margin-top: 24px;
//     }
//     #hero p {
//         font-size: 24px;
//         line-height: 32px;
//         margin-top: 24px;
//         padding: 0 0px;
//     }
//     #ctaButtons {
//         margin-top: 64px;
//     }
//     #ctaButtons .btn {
//         font-size: 22px;
//         line-height: 52px;
//         padding: 0 32px;
//     }
//     .scroll-indicator {
//         margin: 64px 0;
//     }
// }

@media (max-width: 1024px) {
  #hero {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-bottom: 0;

    .hero-bg {
      width: 100%;
    }
  }
  #hero h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    letter-spacing: -0.03em;
    margin-bottom: 0.6rem;
    box-sizing: border-box;
    text-align: left;

    br {
      display: none;
    }
  }
  #hero p {
    font-size: 1.15rem;
    line-height: 1.7rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    text-align: left;
    padding: 0;
  }
  #hero span {
    margin-top: 2rem;
    margin-left: 0;
  }
  #ctaButtons {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    margin-top: 1rem;
  }
  #hero p {
    margin-left: 0;
  }
  // #hero p:nth-child(3) {
  //   font-size: 0.9rem;
  //   line-height: 1.2rem;
  //   padding: 0 0;
  //   text-align: left;
  // }
  .scroll-indicator {
    display: none;
  }
}
</style>
