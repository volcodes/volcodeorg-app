<template>
  <section id="process" class="relative px-5 py-24">
    <div class="mx-auto max-w-6xl">
      <header class="max-w-2xl">
        <p class="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">The process</p>
        <h2 class="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">How an engagement runs</h2>
        <p class="mt-4 text-lg text-cloud">A simple, predictable path from first message to shipped work.</p>
      </header>

      <ol class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative rounded-2xl border border-hair bg-navy-soft/50 p-6 transition-colors hover:border-brand/40"
        >
          <span class="font-display text-5xl font-black text-brand/25">0{{ i + 1 }}</span>
          <h3 class="mt-3 font-display text-lg font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-[15px] leading-relaxed text-cloud">{{ step.desc }}</p>
          <MdiIcon
            v-if="i < steps.length - 1"
            icon="mdiArrowRight"
            class="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-hair lg:block"
          />
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Discovery call', desc: 'A free call to understand your goals, scope, timeline, and constraints.' },
  { title: 'Proposal & estimate', desc: 'A clear plan with an engagement model, milestones, and a transparent time estimate.' },
  { title: 'Build with reports', desc: 'I ship in iterations and send Toggl-backed time reports on your chosen cadence.' },
  { title: 'Delivery & handover', desc: 'Reviewed, tested code with documentation — plus optional ongoing support.' }
];
</script>
