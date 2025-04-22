import { ref } from 'vue';
import type { ContactForm } from '~/types/components';

interface FormErrors extends Partial<ContactForm> {
  submit?: string;
}

export function useForm() {
  const form = ref<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const errors = ref<FormErrors>({});
  const isSubmitting = ref(false);
  const isSuccess = ref(false);

  const validateForm = (): boolean => {
    errors.value = {};

    if (!form.value.name.trim()) {
      errors.value.name = 'Name is required';
    }

    if (!form.value.email.trim()) {
      errors.value.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
      errors.value.email = 'Please enter a valid email';
    }

    if (!form.value.message.trim()) {
      errors.value.message = 'Message is required';
    }

    return Object.keys(errors.value).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    isSubmitting.value = true;

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
      });

      if (!response.ok) throw new Error('Failed to submit form');

      isSuccess.value = true;
      form.value = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('Form submission error:', error);
      errors.value.submit = 'Failed to submit form. Please try again.';
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    errors,
    isSubmitting,
    isSuccess,
    submitForm
  };
}
