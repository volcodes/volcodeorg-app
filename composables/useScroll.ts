import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = (threshold = 100) => {
  const isScrollingUp = ref(false)
  const isFixed = ref(false)
  let lastScrollTop = 0

  const handleScroll = () => {
    const currentScrollTop = window.scrollY
    const isScrollingDown = currentScrollTop > lastScrollTop

    if (!isScrollingDown) {
      isFixed.value = !isScrollingDown && currentScrollTop > threshold
      isScrollingUp.value = true
    } else {
      isScrollingUp.value = false
    }

    lastScrollTop = currentScrollTop
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrollingUp,
    isFixed
  }
}
