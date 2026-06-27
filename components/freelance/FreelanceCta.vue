<template>
  <section class="relative px-5 pb-28 pt-10">
    <div class="mx-auto max-w-5xl">
      <div class="relative overflow-hidden rounded-3xl border border-brand/30 bg-navy-soft px-6 py-16 text-center sm:px-12">
        <div class="pointer-events-none absolute inset-0 -z-10">
          <div class="absolute left-1/2 top-0 h-72 w-[560px] max-w-full -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1f3c_1px,transparent_1px),linear-gradient(to_bottom,#1a1f3c_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        </div>

        <h2 class="mx-auto max-w-2xl font-display text-4xl font-black tracking-tight sm:text-5xl">
          Have a project in mind?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-lg text-cloud">
          Tell me what you're building. I'll reply with how I can help, an honest estimate, and how reporting will work — usually
          within a day.
        </p>

        <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/contact?intent=freelance"
            class="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 font-display text-lg font-bold text-navy shadow-brand transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-brand-lg"
          >
            Start a conversation
            <MdiIcon icon="mdiArrowRight" class="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </NuxtLink>
          <a
            href="mailto:deveci2024@gmail.com?subject=Freelance%20project%20inquiry"
            class="inline-flex items-center gap-2 rounded-md border border-hair bg-white/5 px-7 py-3.5 font-display text-lg font-bold text-white transition-colors hover:border-brand/60 hover:text-brand"
          >
            <MdiIcon icon="mdiEmailOutline" class="h-5 w-5" />
            deveci2024@gmail.com
          </a>
        </div>

        <div class="mt-8 flex items-center justify-center gap-5 text-2xl text-slatey">
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/deveci96/" aria-label="LinkedIn" class="transition-colors hover:text-brand">
            <MdiIcon icon="mdiLinkedin" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://x.com/volcanioo" aria-label="X" class="transition-colors hover:text-brand">
            <MdiIcon icon="mdiTwitter" />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/volcanioo" aria-label="GitHub" class="transition-colors hover:text-brand">
            <MdiIcon icon="mdiGithub" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
