<template>
  <section id="services" class="relative px-5 py-24">
    <div class="mx-auto max-w-6xl">
      <header class="max-w-2xl">
        <p class="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">What I do</p>
        <h2 class="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
          Services I offer as a freelancer
        </h2>
        <p class="mt-4 text-lg text-cloud">
          Full-stack capability across the whole product lifecycle. Bring me in for a single feature, a focused sprint, or as an
          embedded contractor on your team.
        </p>
      </header>

      <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="group relative overflow-hidden rounded-2xl border border-hair bg-navy-soft/60 p-7 transition-all duration-300 hover:border-brand/50 hover:bg-navy-soft"
          :class="service.span"
        >
          <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="relative">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
              <MdiIcon :icon="service.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-5 font-display text-xl font-bold text-white">{{ service.title }}</h3>
            <p class="mt-2 text-[15px] leading-relaxed text-cloud">{{ service.desc }}</p>
            <ul v-if="service.tags" class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="tag in service.tags"
                :key="tag"
                class="rounded-full border border-hair bg-white/5 px-3 py-1 text-xs font-medium text-slatey"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
          <span class="sr-only">{{ i }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Frontend architecture',
    icon: 'mdiVuejs',
    desc: 'Scalable Vue/Nuxt & React apps, design systems, and component libraries built for maintainability and speed.',
    tags: ['Vue 3', 'Nuxt', 'React', 'TypeScript'],
    span: 'lg:col-span-2'
  },
  {
    title: 'AI integration',
    icon: 'mdiRobotOutline',
    desc: 'Bring LLMs and AI-assisted workflows into your product and your engineering process — practically and safely.',
    tags: ['LLMs', 'RAG', 'Tooling'],
    span: ''
  },
  {
    title: 'Full-stack delivery',
    icon: 'mdiLayersTriple',
    desc: 'End-to-end features across Java Spring Boot microservices, Node.js, and modern frontends.',
    tags: ['Spring Boot', 'Node.js', 'REST'],
    span: ''
  },
  {
    title: 'Performance & observability',
    icon: 'mdiSpeedometer',
    desc: 'Audits, Core Web Vitals work, Datadog/Grafana tracing and structured logging for real production visibility.',
    tags: ['Web Vitals', 'Datadog', 'Grafana'],
    span: 'lg:col-span-2'
  },
  {
    title: 'Infrastructure as Code',
    icon: 'mdiTerraform',
    desc: 'Terraform + AWS/Cloudflare pipelines, CI/CD, and cost-efficient hosting for static and dynamic apps.',
    tags: ['Terraform', 'AWS', 'Cloudflare', 'CI/CD'],
    span: 'lg:col-span-2'
  },
  {
    title: 'Technical leadership',
    icon: 'mdiAccountGroupOutline',
    desc: 'RFCs, code reviews, mentorship, and migration planning to level up your team while we ship.',
    tags: ['RFCs', 'Mentorship', 'Reviews'],
    span: ''
  }
];
</script>
