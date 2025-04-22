import { ref } from 'vue';
import type { ModalProps } from '~/types/components';

export function useModal() {
  const modalState = ref<ModalProps>({
    isOpen: false,
    title: '',
    content: '',
    onClose: () => {}
  });

  const openModal = (props: Omit<ModalProps, 'isOpen'>) => {
    modalState.value = {
      ...props,
      isOpen: true
    };
  };

  const closeModal = () => {
    modalState.value.isOpen = false;
    modalState.value.onClose();
  };

  return {
    modalState,
    openModal,
    closeModal
  };
}
