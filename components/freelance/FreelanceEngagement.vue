<template>
  <section id="engagement" class="relative px-5 py-24">
    <div class="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-hair to-transparent" />
    <div class="mx-auto max-w-6xl">
      <header class="max-w-2xl">
        <p class="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">How we work together</p>
        <h2 class="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">Engagement models</h2>
        <p class="mt-4 text-lg text-cloud">
          Flexible ways to collaborate — every model comes with the same transparent, Toggl-based time reporting.
        </p>
      </header>

      <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        <article
          v-for="model in models"
          :key="model.name"
          class="relative flex flex-col rounded-2xl border p-7 transition-all duration-300"
          :class="model.featured ? 'border-brand/60 bg-navy-soft shadow-glow' : 'border-hair bg-navy-soft/50 hover:border-brand/40'"
        >
          <span
            v-if="model.featured"
            class="absolute right-6 top-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-navy"
          >
            Most popular
          </span>
          <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
            <MdiIcon :icon="model.icon" class="h-6 w-6" />
          </span>
          <h3 class="mt-5 font-display text-2xl font-bold text-white">{{ model.name }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-cloud">{{ model.desc }}</p>
          <p class="mt-5 font-display text-sm font-semibold text-brand">{{ model.best }}</p>
          <ul class="mt-4 space-y-2.5 border-t border-hair pt-5">
            <li v-for="point in model.points" :key="point" class="flex items-start gap-2.5 text-[15px] text-cloud">
              <MdiIcon icon="mdiCheckCircle" class="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const models = [
  {
    name: 'Hourly',
    icon: 'mdiClockOutline',
    desc: 'Pay for exactly the time you use, tracked to the minute in Toggl.',
    best: 'Best for: ongoing support & small fixes',
    points: ['Detailed daily time entries', 'No minimum commitment', 'Weekly summary report'],
    featured: false
  },
  {
    name: 'Project-based',
    icon: 'mdiRocketLaunchOutline',
    desc: 'A fixed scope with a clear deliverable, milestones, and a transparent estimate.',
    best: 'Best for: defined features & MVPs',
    points: ['Milestone-based delivery', 'Scoped estimate up front', 'Hours still reported in full'],
    featured: true
  },
  {
    name: 'Retainer',
    icon: 'mdiCalendarCheckOutline',
    desc: 'A reserved block of hours each month so I can act as your embedded engineer.',
    best: 'Best for: long-term partnerships',
    points: ['Priority availability', 'Monthly Toggl breakdown', 'Discounted blended rate'],
    featured: false
  }
];
</script>
