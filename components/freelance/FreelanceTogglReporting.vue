<template>
  <section id="reporting" class="relative px-5 py-24">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-1/3 h-[360px] w-[680px] max-w-[90vw] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
    </div>

    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <!-- Copy -->
        <div>
          <p class="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Radical transparency</p>
          <h2 class="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Every hour, tracked &amp; reported with <span class="text-brand">Toggl</span>
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-cloud">
            You should never wonder where your budget goes. I track all my time in Toggl against your project and tasks, then
            send clear reports on a cadence that suits you — so billing is always honest and predictable.
          </p>

          <ul class="mt-8 space-y-5">
            <li v-for="item in reporting" :key="item.title" class="flex items-start gap-4">
              <span class="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
                <MdiIcon :icon="item.icon" class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-lg font-bold text-white">{{ item.title }}</h3>
                <p class="mt-1 text-[15px] leading-relaxed text-cloud">{{ item.desc }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Report mockup -->
        <div class="relative animate-float-slow">
          <div class="overflow-hidden rounded-2xl border border-hair bg-navy-soft shadow-2xl">
            <!-- Window bar -->
            <div class="flex items-center gap-2 border-b border-hair bg-ink px-5 py-3.5">
              <span class="h-3 w-3 rounded-full bg-[#da7164]" />
              <span class="h-3 w-3 rounded-full bg-[#ebc063]" />
              <span class="h-3 w-3 rounded-full bg-[#3fdd78]" />
              <span class="ml-3 text-xs font-medium text-slatey">Weekly report — Acme App</span>
            </div>

            <div class="p-5 sm:p-6">
              <!-- Summary row -->
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-xs uppercase tracking-wider text-slatey">Total this week</p>
                  <p class="font-display text-3xl font-black text-white">32h 15m</p>
                </div>
                <span class="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">Mon–Fri · billable</span>
              </div>

              <!-- Daily bar chart -->
              <div class="mt-6 flex h-36 items-end gap-2">
                <div v-for="day in week" :key="day.day" class="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <div
                    class="w-full rounded-t-md bg-gradient-to-t from-brand/40 to-brand transition-all"
                    :style="{ height: day.pct + '%' }"
                  />
                  <span class="text-[11px] font-medium text-slatey">{{ day.day }}</span>
                </div>
              </div>

              <!-- Project breakdown -->
              <div class="mt-6 space-y-3 border-t border-hair pt-5">
                <div v-for="task in tasks" :key="task.name">
                  <div class="flex items-center justify-between text-sm">
                    <span class="flex items-center gap-2 text-cloud">
                      <span class="h-2.5 w-2.5 rounded-full" :style="{ background: task.color }" />
                      {{ task.name }}
                    </span>
                    <span class="font-medium text-white">{{ task.time }}</span>
                  </div>
                  <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div class="h-full rounded-full" :style="{ width: task.pct + '%', background: task.color }" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-3 text-center text-xs text-slatey">Illustrative report — your project, your tasks, real numbers.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reporting = [
  { icon: 'mdiTimerOutline', title: 'Tracked to the task', desc: 'Each Toggl entry is tagged to your project and the specific task, with a short description of what I did.' },
  { icon: 'mdiFileChartOutline', title: 'Reports on your cadence', desc: 'Daily standups, weekly summaries, or a full breakdown with every invoice — whatever gives you confidence.' },
  { icon: 'mdiShieldCheckOutline', title: 'Honest billing', desc: 'You only pay for tracked, billable time. Estimates and actuals sit side by side so there are no surprises.' },
  { icon: 'mdiChartTimelineVariant', title: 'Shared visibility', desc: 'Optional read-only access to the live Toggl dashboard so you can check progress any time.' }
];

const week = [
  { day: 'Mon', pct: 78 },
  { day: 'Tue', pct: 95 },
  { day: 'Wed', pct: 60 },
  { day: 'Thu', pct: 88 },
  { day: 'Fri', pct: 52 }
];

const tasks = [
  { name: 'Feature: checkout flow', time: '12h 40m', pct: 72, color: '#2bcc69' },
  { name: 'Bugfixes & code review', time: '9h 05m', pct: 52, color: '#60f285' },
  { name: 'Infra & CI pipeline', time: '6h 30m', pct: 38, color: '#3fdd78' },
  { name: 'Planning & reporting', time: '4h 00m', pct: 24, color: '#7e80a0' }
];
</script>
