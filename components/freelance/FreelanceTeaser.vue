<template>
  <div class="tw font-sans">
    <section class="px-5 py-16">
      <div class="mx-auto max-w-[1200px]">
        <div class="relative overflow-hidden rounded-3xl border border-hair bg-navy-soft p-8 sm:p-12">
          <div class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
          <div class="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span class="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Now available for freelance
              </span>
              <h2 class="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                Need an extra senior engineer — with hours you can actually see?
              </h2>
              <p class="mt-3 max-w-xl text-lg text-cloud">
                I take freelance &amp; contract work and report every hour transparently with Toggl. Full-stack delivery,
                AI integration, and infrastructure — without the black box.
              </p>
            </div>
            <div class="flex flex-col gap-3 lg:items-end">
              <NuxtLink
                to="/freelance"
                class="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-display text-lg font-bold text-navy shadow-brand transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-brand-lg lg:w-auto"
              >
                Explore freelance services
                <MdiIcon icon="mdiArrowRight" class="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </NuxtLink>
              <NuxtLink
                to="/contact?intent=freelance"
                class="inline-flex w-full items-center justify-center gap-2 rounded-md border border-hair bg-white/5 px-6 py-3 font-display text-lg font-bold text-white transition-colors hover:border-brand/60 hover:text-brand lg:w-auto"
              >
                Hire me directly
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
