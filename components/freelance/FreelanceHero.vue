<template>
  <section class="relative isolate min-h-[92vh] flex items-center px-5 pt-28 pb-20">
    <!-- Background grid + glow -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1f3c_1px,transparent_1px),linear-gradient(to_bottom,#1a1f3c_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      <div class="absolute inset-0 bg-grid-fade" />
      <div class="absolute left-1/2 top-24 h-[420px] w-[680px] max-w-[90vw] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
    </div>

    <div class="mx-auto w-full max-w-6xl">
      <span class="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand animate-fade-up">
        <span class="relative flex h-2.5 w-2.5">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
          <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
        </span>
        Available for freelance &amp; contract work
      </span>

      <h1 class="mt-7 max-w-4xl font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up" style="animation-delay: 0.08s">
        Ship faster with a
        <span class="bg-brand-gradient bg-clip-text text-transparent">senior product engineer</span>
        who reports every hour.
      </h1>

      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-cloud animate-fade-up sm:text-xl" style="animation-delay: 0.16s">
        I'm Mehmet — 10+ years building web products end to end, from frontend architecture to backend microservices and AI.
        I take on freelance projects and contracts with <span class="text-white">radical transparency</span>:
        you see exactly what I work on, when, and for how long.
      </p>

      <div class="mt-9 flex flex-wrap items-center gap-4 animate-fade-up" style="animation-delay: 0.24s">
        <NuxtLink
          to="/contact?intent=freelance"
          class="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-display text-lg font-bold text-navy shadow-brand transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-brand-lg"
        >
          Start a project
          <MdiIcon icon="mdiArrowRight" class="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
        <a
          href="#reporting"
          class="inline-flex items-center gap-2 rounded-md border border-hair bg-white/5 px-6 py-3 font-display text-lg font-bold text-white transition-colors hover:border-brand/60 hover:text-brand"
        >
          See how I report time
        </a>
      </div>

      <!-- Trust stats -->
      <dl class="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4 animate-fade-up" style="animation-delay: 0.32s">
        <div v-for="stat in stats" :key="stat.label">
          <dt class="font-display text-3xl font-black text-white sm:text-4xl">{{ stat.value }}</dt>
          <dd class="mt-1 text-sm text-slatey">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10+', label: 'Years of experience' },
  { value: '6', label: 'Industries shipped in' },
  { value: '150+', label: 'Collaborators worldwide' },
  { value: '100%', label: 'Transparent hours' }
];
</script>
