<template>
    <div id="hero" class="container">
      <img
        src="~/assets/imgs/Frame.svg"
        alt="Hero Background"
        class="hero-bg"
      />
      <span>Hi, I’m Mehmet</span>
      <h1>
        I transform ideas into <br />
        digital solutions.
      </h1>
      <p>
        I specialise in turning concepts into user-centric applications that are
        <em>modern</em>, <em>scalable</em>, and <em>impactful</em>.
      </p>
      <p>
        With over a decade of experience - I pursue my passion by optimizing workflows, modernizing systems, and mentoring people to craft high-quality digital solutions that drive results.
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
    font-size: 20px;
    font-weight: 400;
    line-height: 44px;
    text-align: center;
    margin: 32px auto 0 auto;
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
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    color: colors.$blueSky;
    font-family: "Inter";
    text-align: center;
    margin: 18px 0 -12px 0;
    padding: 0 100px;

    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.38, 0.98, 0.6, 0.9);
    transition-delay: 0.55s;
  
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
  margin-top: 48px;

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
  gap: 12px;
  margin: 32px 0;
  color: colors.$textGray;
  font-size: 16px;
  
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
    font-family: "Inter";
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
</style>
