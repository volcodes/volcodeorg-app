<template>
  <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
    <button class="modal__close" @click="$emit('close')">
      <MdiIcon icon="mdiClose" />
    </button>
    <div
      class="modal"
      :class="{
        'modal--full': hasSidebar
      }"
      @click.stop
    >
      <div class="modal-inner">
        <aside v-if="hasSidebar" class="modal-sidebar">
          <strong>{{ sidebarTitle }}</strong>
          <slot name="sidebar" />
        </aside>
        <div
          class="modal-wrapper"
          :class="{
            animation: isAnimating,
            'modal-wrapper--full': !hasSidebar
          }"
        >
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  isAnimating: Boolean,
  hasSidebar: Boolean,
  sidebarTitle: String
});

defineEmits(['close']);

// Store original body styles
let originalStyles = {};

const lockScroll = () => {
  // Store original styles before modifying
  originalStyles = {
    overflow: document.body.style.overflow,
    paddingRight: document.body.style.paddingRight
  };

  // Calculate scroll bar width to prevent content shift
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Lock scroll and compensate for scrollbar removal
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollBarWidth}px`;
};

const unlockScroll = () => {
  // Restore original styles
  document.body.style.overflow = originalStyles.overflow || '';
  document.body.style.paddingRight = originalStyles.paddingRight || '';
};

// Watch for changes in isOpen prop
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }
);

// Cleanup on component unmount
onUnmounted(() => {
  if (props.isOpen) {
    unlockScroll();
  }
});
</script>

<style lang="scss">
@use '@/assets/styles/colors' as colors;
@use '@/assets/styles/vars';

@media (min-width: 912px) {
  @keyframes modalExpand {
    0% {
      width: 1%;
      height: 1vh;
    }
    20% {
      width: 20%;
      height: 1vh;
    }
    40% {
      width: 40%;
      height: 1px;
    }
    60% {
      width: 90%;
      height: 1vh;
    }
    80% {
      width: 90%;
      height: 10vh;
    }
    100% {
      width: 90%;
      height: 90vh;
    }
  }
}
@media (max-width: 912px) and (min-width: 430px) {
  @keyframes modalExpand {
    0% {
      width: 1%;
      height: 1vh;
    }
    20% {
      width: 20%;
      height: 1vh;
    }
    40% {
      width: 40%;
      height: 1px;
    }
    60% {
      width: 90%;
      height: 1vh;
    }
    80% {
      width: 85%;
      height: 300px;
    }
    100% {
      width: 85%;
      height: 350px;
    }
  }
}
@keyframes modalExpandFull {
  0% {
    width: 1%;
    height: 1vh;
  }
  20% {
    width: 20%;
    height: 1vh;
  }
  40% {
    width: 40%;
    height: 1px;
  }
  60% {
    width: 90%;
    height: 1vh;
  }
  80% {
    width: 90%;
    height: 85vh;
  }
  100% {
    width: 90%;
    height: 85vh;
  }
}
@media (max-width: 430px) {
  @keyframes modalExpand {
    0% {
      width: 1%;
      height: 1vh;
    }
    20% {
      width: 20%;
      height: 1vh;
    }
    40% {
      width: 40%;
      height: 1px;
    }
    60% {
      width: 90%;
      height: 1vh;
    }
    80% {
      width: 100%;
      height: 250px;
    }
    100% {
      width: 100%;
      height: 250px;
    }
  }
  .modal-wrapper--full {
    max-height: 260px;
  }
}
.modal {
  width: 0%;
  height: 1px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: colors.$modalBg;
  overflow: hidden;
  z-index: 999;
  animation: modalExpand 0.7s cubic-bezier(0.15, 0.74, 1, 1) forwards;
  transform-origin: center;
  display: flex;

  &.modal--full {
    animation: modalExpandFull 0.7s cubic-bezier(0.15, 0.74, 1, 1) forwards;
  }

  .modal-button {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-family: 'Inter';
    font-weight: 600;
    border: 0;
    cursor: pointer;
    color: #fff;
    background-color: rgba(255, 255, 255, 0);
    text-align: left;
    transition: all 0.4s;
    box-sizing: border-box;
    // border: 1px dashed  rgba(255, 255, 255, 0.08);
    border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
    border-left: 4px solid rgba(255, 255, 255, 0);

    &:first-child {
      border-top: 1px dashed rgba(255, 255, 255, 0.08);
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.04);
      padding-left: 1.2rem;
    }
    &.active {
      background-color: rgb(15 23 59);
      border-left: 4px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 1rem;
      border-right: none;
    }
  }

  .modal-inner {
    opacity: 0;
    display: flex;
    animation: modalFadeIn 0.3s ease-out forwards;
    animation-delay: 0.9s;
    width: 100%;

    .modal-wrapper {
      overflow: scroll;
      width: 75%;
      transition: all 0.3s;
      height: 100%;
      opacity: 1;
      background-color: colors.$modalBg;
      padding-bottom: 8rem;

      &.modal-wrapper--full {
        width: 100%;
        padding-bottom: 0;
      }

      .cta {
        margin: 1rem 0;
        cursor: pointer;
      }

      &.animation {
        opacity: 0;
        transform: translateY(3px);
      }
    }

    p {
      color: white;
    }
  }
}

.modal-sidebar {
  width: 25%;
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.25rem;
    padding: 1.25rem;
    color: colors.$cloudWhite;
    font-family: vars.$fontFamilyBold;
  }
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.modal-overlay {
  background-color: colors.$navyBlue;
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  animation: modalFadeIn 0.3s ease-out forwards;
}

.modal__close {
  width: 5%;
  height: 10vh;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 1000;
  background: white;
  color: black;

  &:hover {
    background-color: colors.$navyBlue;
    color: white;
  }
}

.modal ul,
.modal ol {
  padding: 1rem 0rem 2rem 6rem;

  li {
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 3rem;
    border-bottom: 4px solid rgba(255, 255, 255, 0.1);
    font-family: vars.$fontFamily;
    color: white;

    &:last-child {
      border: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    a {
      font-family: vars.$fontFamily;
      color: white;
      text-decoration: none;
    }

    > b {
      font-weight: 900;
      font-family: vars.$fontFamilyBold;
    }
    u {
      text-decoration: none;

      b {
        font-weight: normal;
        border-bottom: 1px dotted colors.$cloudWhite;
      }
    }
  }
}
.hero-sentence {
  position: relative;
  display: flex;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  p {
    width: 100%;
    box-sizing: border-box;
    font-size: 2.5rem !important;
    line-height: 3.5rem !important;
    margin: 0 0;
    font-family: vars.$fontFamilyBold;
    letter-spacing: -0.6px;
    font-weight: 300 !important;
    color: colors.$navyBlue;
    box-sizing: border-box;
    background-color: rgba(16, 24, 60, 0.8);
    padding: 3.75rem 3.75rem 3.75rem 3.75rem;
  }

  b {
    font-family: vars.$fontFamilyBold;
  }
}
.cta-custom {
  margin: 1rem 5rem 4rem 5rem !important;
}

@media (max-width: 1024px) {
  .modal__close {
    width: 50px;
    height: 50px;
    top: 0;
    margin: 0;
    padding: 0;
  }
  .modal-wrapper {
    min-width: 100%;
  }

  .modal-sidebar {
    width: 100% !important;
  }

  .modal-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .modal__close {
    right: 2rem;
    top: 0.75rem;
  }
  .modal-sidebar {
    padding: 0;
  }
  .modal-inner {
    flex-direction: column !important;
  }
  .modal .modal-inner p {
    padding: 2rem !important;
    font-size: 1.5rem !important;
    line-height: 1.85rem !important;
    letter-spacing: 0;
  }

  .modal .modal-inner ol {
    padding: 0 0 0 3rem;
  }

  .modal .modal-inner ol li {
    font-size: 1.15rem;
    line-height: 1.5rem;
  }
  .modal .modal-inner .modal-wrapper .cta {
    margin: 0 !important;
    position: fixed;
    bottom: 0px;
    width: 100%;
    font-size: 1rem !important;
    background: #020617;
    padding: 1rem;
    border-radius: 0 0 0 0;
    box-sizing: border-box;
    padding: 0.8rem 1.2rem;
    border-bottom: 0;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translateX(-50%);
    left: 50%;
    box-shadow: 0px 0px 0px 20px #0c1439;
    .cta svg {
      transform: rotate(45deg) !important;
    }
  }

  .modal-sidebar strong {
    font-size: 1.25rem;
  }
}
</style>
