import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const isScrolled = ref(false);
  const scrollPosition = ref(0);

  const handleScroll = () => {
    scrollPosition.value = window.scrollY;
    isScrolled.value = scrollPosition.value > 50;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    isScrolled,
    scrollPosition
  };
}
