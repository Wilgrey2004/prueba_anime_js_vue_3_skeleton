<template>
  <div class="min-h-screen bg-gray-950 text-slate-200 flex flex-col md:flex-row gap-0">
    <!-- Patient List -->
    <aside class="md:w-80 w-full bg-gray-900 border-r border-slate-800 flex flex-col">
      <div class="px-6 py-5 border-b border-slate-800">
        <h1 class="text-xl font-bold tracking-wide text-sky-400">🩻 Radiología</h1>
        <p class="text-sm text-slate-500 mt-1">Lista de pacientes</p>
      </div>
      <ul class="flex-1 overflow-y-auto divide-y divide-slate-800">
        <li
          v-for="p in patients"
          :key="p.id"
          @click="select(p)"
          class="px-6 py-4 cursor-pointer hover:bg-slate-800 transition-colors"
          :class="selected?.id === p.id ? 'bg-slate-800 border-l-4 border-sky-400' : 'border-l-4 border-transparent'"
        >
          <div class="flex items-center justify-between">
            <span class="font-semibold text-sm">{{ p.nombre }}</span>
            <span class="text-xs text-slate-500">{{ p.edad }} años</span>
          </div>
          <p class="text-xs text-slate-400 mt-1">{{ p.diagnostico }}</p>
          <span class="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-sky-900 text-sky-300 font-mono">
            {{ p.parte }}
          </span>
        </li>
      </ul>
    </aside>

    <!-- Skeleton Viewer -->
    <main class="flex-1 flex flex-col items-center justify-center p-6 min-h-[60vh]">
      <div v-if="!selected" class="text-center text-slate-600">
        <div class="text-6xl mb-4">🦴</div>
        <p class="text-lg">Selecciona un paciente para ver el esqueleto</p>
      </div>
      <template v-else>
        <div class="mb-4 text-center">
          <h2 class="text-2xl font-bold text-sky-400">{{ selected.nombre }}</h2>
          <p class="text-slate-400 text-sm mt-1">{{ selected.diagnostico }}</p>
          <span class="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-sky-900 text-sky-300 font-mono">
            Zona afectada: <strong>{{ selected.parte }}</strong>
          </span>
        </div>
        <div class="w-full max-w-xs h-[480px]">
          <SkeletonViewer :parte="selected.parte" />
        </div>
      </template>
    </main>
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
