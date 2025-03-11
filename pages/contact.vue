<template>
  <div>
    <AppPageHeader :title="'Let\'s connect!'" :pages="pages" />
    <div class="container">
      <p class="explanation">
        I'm always looking for new opportunities to collaborate and build
        meaningful projects.
      </p>
      <div class="grid">
        <div class="card">
          <strong>e-Mail</strong>
          <a href="mailto:deveci2024@gmail.com">deveci2024@gmail.com</a>
        </div>
        <div class="card">
          <strong>Social</strong>
          <div class="grid socials">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/deveci96/"
              ><MdiIcon icon="mdiLinkedin"
            /></a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/volcanioo"
              ><MdiIcon icon="mdiTwitter"
            /></a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/volcanioo"
              ><MdiIcon icon="mdiGithub"
            /></a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/deveci2024/"
              ><MdiIcon icon="mdiXing"
            /></a>
          </div>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div class="form-group form-group--textarea">
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button class="btn btn--filled" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const pages = [
  { name: 'Overview', link: '/' },
  { name: 'Contact', link: '/contact' }
]

const handleSubmit = (e: Event) => {
  e.preventDefault()
}
</script>

<style lang="scss" scoped>
@use '~/assets/styles/colors';
@use '~/assets/styles/vars';
h2 {
  text-align: left;
  margin: 3rem 0 -0.5rem 0;
}
.explanation {
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-family: vars.$fontFamilyRegular;
  color: colors.$blueSky;
  margin-bottom: 2rem;
}
.card {
  padding: 1.5rem;
  border: 2px dashed rgba(255, 255, 255, 0.023);
  margin-bottom: 1rem;
  border-radius: vars.$borderRadius;
  display: flex;
  color: colors.$blueSky;
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

    // input:active,
    // textarea:active,
    // input:focus,
    // textarea:focus {
    // }
  }
}
</style>
