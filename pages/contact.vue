<template>
  <div>
    <AppPageHeader :title="'Let\'s connect!'" :pages="pages" />
    <div class="container">
      <p class="explanation">I'm always looking for new opportunities to collaborate and build meaningful projects.</p>
      <div class="grid">
        <div class="card">
          <strong>e-Mail</strong>
          <a href="mailto:deveci2024@gmail.com">deveci2024@gmail.com</a>
        </div>
        <div class="card">
          <strong>Social</strong>
          <div class="grid socials">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/deveci96/"><MdiIcon icon="mdiLinkedin" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://x.com/volcanioo"><MdiIcon icon="mdiTwitter" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/volcanioo"><MdiIcon icon="mdiGithub" /></a>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="form-group" :class="{ 'has-error': errors.name }">
          <label for="name">Name</label>
          <input id="name" v-model="formData.name" type="text" name="name" :class="{ error: errors.name }" />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <label for="email">Email</label>
          <input id="email" v-model="formData.email" type="email" name="email" :class="{ error: errors.email }" />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
        <div class="form-group form-group--textarea" :class="{ 'has-error': errors.message }">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" name="message" :class="{ error: errors.message }"></textarea>
          <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>
        <div v-if="submitStatus" :class="['status-message', submitStatus.type]">
          {{ submitStatus.message }}
        </div>
        <button class="btn btn--filled" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import axios from 'axios';

useHead({
  title: 'Contact - Mehmet Deveci',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with me, a Software Development Specialist, for collaboration opportunities, project inquiries, or professional networking.'
    },
    {
      name: 'keywords',
      content: 'Contact Software Development Specialist, Frontend Developer, Collaboration, Project Inquiries'
    },
    {
      property: 'og:title',
      content: 'Contact - Mehmet Deveci'
    },
    {
      property: 'og:description',
      content: 'Get in touch with me, a Software Development Specialist, for collaboration opportunities, project inquiries, or professional networking.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://volcode.org/contact'
    },
    {
      property: 'og:image',
      content: 'https://volcode.org/assets/imgs/og-image.jpg'
    }
  ]
});

const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Contact', link: '/contact' }
];

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null);

const validateForm = () => {
  let isValid = true;
  errors.name = '';
  errors.email = '';
  errors.message = '';

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    await axios.get('https://betonsa.com.gh/utils/test.php', {
      params: {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    });

    submitStatus.value = {
      type: 'success',
      message: 'Thank you for your message! I will get back to you soon.'
    };

    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again later.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';
h2 {
  text-align: left;
  margin: 3rem 0 -0.5rem 0;
}
.card {
  padding: 1.5rem;
  border: 2px dashed rgba(255, 255, 255, 0.023);
  margin-bottom: 1rem;
  border-radius: vars.$borderRadius;
  display: flex;
  color: colors.$cloudWhite;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  font-size: 1.25rem;
  background-color: transparent;

  strong {
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: colors.$white;
  }

  a,
  p {
    color: colors.$grayShade;
    transition: all 0.1s ease;

    &:hover {
      color: colors.$cta;
    }
  }

  > a {
    font-size: 1.25rem;
  }
}

.socials {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 0.4rem;
  font-size: 2.5rem;
  box-sizing: border-box;

  a {
    transition: color 0.3s ease;
    margin-left: -4px;
    height: 40px;
  }
  a:hover {
    color: colors.$cta;
  }
}

form {
  .btn {
    margin: 1.5rem 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    position: relative;
    background: rgba(255, 255, 255, 0.023);
    margin-bottom: 2px;
    padding: 1.5rem;
    border-radius: 2px;
    font-size: 1.25rem;
    min-height: 48px;

    &--textarea {
      min-height: 76px;
    }

    input,
    textarea {
      resize: none;
      background: transparent;
      border: none;
      pointer-events: none;
      transition: all 0.1s ease;
      font-size: 1rem;
      color: white;
      padding: 1.5rem 1.5rem 0 1.5rem;
      pointer-events: auto;
      opacity: 1;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      box-sizing: border-box;
    }

    textarea {
      padding: 3.3rem 1.5rem 1.5rem 1.5rem;
    }

    label {
      color: colors.$grayShade;
      font-family: vars.$fontFamilyBold;
      position: absolute;
      z-index: 1;
      font-size: 1.25rem;
    }

    &.has-error {
      border: 1px solid colors.$error;
    }

    .error-message {
      background: colors.$error;
      color: colors.$white;
      font-size: 0.875rem;
      margin-top: 0.5rem;
      position: absolute;
      bottom: 0;
      display: block;
      padding: 4px 8px;
    }

    input.error,
    textarea.error {
      border-color: colors.$error;
    }
  }
}

.status-message {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: vars.$borderRadius;
  text-align: center;

  &.success {
    background-color: rgba(0, 255, 0, 0.1);
    color: #00ff00;
  }

  &.error {
    background-color: rgba(255, 0, 0, 0.1);
    color: colors.$error;
  }
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-success {
  color: colors.$cta;
}
</style>
