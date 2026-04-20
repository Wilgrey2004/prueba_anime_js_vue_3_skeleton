<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_45%,#020617_100%)] text-slate-100">
    <div class="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:px-8 lg:py-8">
      <aside class="w-full lg:w-80 rounded-[2rem] border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 overflow-hidden">
        <div class="border-b border-white/10 px-6 py-6">
          <span class="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
            🩻 Panel clínico
          </span>
          <h1 class="mt-4 text-2xl font-semibold text-white">Radiología anatómica</h1>
          <p class="mt-2 text-sm leading-6 text-slate-400">
            Un flujo más limpio para revisar pacientes y detectar rápido la zona afectada.
          </p>
        </div>

        <div class="border-b border-white/10 px-6 py-4">
          <div class="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
            Selecciona una ficha para centrar la atención en el hueso lesionado.
          </div>
        </div>

        <ul class="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          <li v-for="p in patients" :key="p.id">
            <button
              type="button"
              @click="select(p)"
              class="w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200"
              :class="selected?.id === p.id
                ? 'border-sky-300/70 bg-sky-400/15 shadow-lg shadow-sky-950/30'
                : 'border-white/8 bg-white/4 hover:border-slate-600 hover:bg-white/8'"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-sm font-semibold text-white">{{ p.nombre }}</p>
                  <p class="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">Paciente</p>
                </div>
                <span class="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
                  {{ p.edad }} años
                </span>
              </div>

              <p class="mt-3 text-sm leading-6 text-slate-300">{{ p.diagnostico }}</p>

              <div class="mt-4 flex items-center justify-between">
                <span class="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  {{ p.parte }}
                </span>
                <span class="text-xs text-slate-500">
                  {{ selected?.id === p.id ? 'Activo' : 'Ver detalle' }}
                </span>
              </div>
            </button>
          </li>
        </ul>
      </aside>

      <main class="flex-1">
        <section class="rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/15 backdrop-blur-xl sm:p-6 lg:p-8">
          <div v-if="!selected" class="flex min-h-[720px] items-center justify-center">
            <div class="max-w-lg text-center">
              <div class="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-sky-300/20 bg-sky-400/10 text-5xl shadow-lg shadow-sky-950/20">
                🦴
              </div>
              <h2 class="mt-6 text-3xl font-semibold text-white">Selecciona un paciente</h2>
              <p class="mt-3 text-base leading-7 text-slate-400">
                El visor se activará con una presentación más clara del esqueleto y foco sobre la lesión.
              </p>
            </div>
          </div>

          <div v-else class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div class="rounded-[1.75rem] border border-white/8 bg-slate-950/70 p-5 sm:p-6">
              <div class="flex flex-col gap-4 border-b border-white/8 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Paciente seleccionado</p>
                  <h2 class="mt-2 text-3xl font-semibold text-white">{{ selected.nombre }}</h2>
                  <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                    Ajustamos la escena para una lectura anatómica más cómoda: pose abierta, manos separadas del torso y controles visibles.
                  </p>
                </div>

                <span class="inline-flex items-center rounded-full border border-sky-300/25 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100">
                  Zona afectada: {{ selected.parte }}
                </span>
              </div>

              <div class="mt-6 h-[620px] w-full">
                <SkeletonViewer :parte="selected.parte" />
              </div>
            </div>

            <div class="space-y-4">
              <article class="rounded-[1.75rem] border border-white/8 bg-white/5 p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Resumen clínico</p>
                <dl class="mt-4 space-y-4 text-sm text-slate-300">
                  <div>
                    <dt class="text-slate-500">Diagnóstico</dt>
                    <dd class="mt-1 text-base text-white">{{ selected.diagnostico }}</dd>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="rounded-2xl border border-white/8 bg-slate-950/60 p-4">
                      <dt class="text-slate-500">Edad</dt>
                      <dd class="mt-1 text-xl font-semibold text-white">{{ selected.edad }}</dd>
                    </div>
                    <div class="rounded-2xl border border-white/8 bg-slate-950/60 p-4">
                      <dt class="text-slate-500">Zona</dt>
                      <dd class="mt-1 text-xl font-semibold text-sky-200">{{ selected.parte }}</dd>
                    </div>
                  </div>
                </dl>
              </article>

              <article class="rounded-[1.75rem] border border-sky-400/15 bg-sky-400/10 p-5 text-sm leading-6 text-sky-50">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">Mejoras UX/UI</p>
                <ul class="mt-3 space-y-2 text-slate-200">
                  <li>• El visor ahora respira mejor con una composición más limpia.</li>
                  <li>• La postura abierta evita que las manos se peguen visualmente al cuerpo.</li>
                  <li>• Puedes detener o reanudar la animación desde el panel del esqueleto.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { patients, type Patient } from './data/patients'
import SkeletonViewer from './components/SkeletonViewer.vue'

const selected = ref<Patient | null>(null)

function select(p: Patient) {
  if (selected.value?.id === p.id) {
    selected.value = null
  } else {
    selected.value = p
  }
}
</script>
