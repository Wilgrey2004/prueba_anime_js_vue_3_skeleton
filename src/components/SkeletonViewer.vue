<template>
  <div class="relative flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] border border-sky-300/12 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_32%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))] p-4 shadow-[0_30px_80px_rgba(2,132,199,0.12)] sm:p-5">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Visualizador anatómico</p>
        <p class="mt-2 max-w-md text-sm leading-6 text-slate-400">
          Pose abierta para separar las manos del torso y mejorar la lectura de las extremidades.
        </p>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-900 disabled:text-slate-500"
        :class="isAnimationPaused
          ? 'border-emerald-400/35 bg-emerald-400/12 text-emerald-100 hover:bg-emerald-400/18'
          : 'border-sky-300/30 bg-sky-400/12 text-sky-100 hover:bg-sky-400/18'"
        :disabled="!props.parte"
        @click="toggleAnimation"
      >
        {{ isAnimationPaused ? 'Reanudar animación' : 'Detener animación' }}
      </button>
    </div>

    <div class="relative mt-5 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/6 bg-slate-950/70 px-4 py-6">
      <div class="pointer-events-none absolute inset-0 rounded-[1.5rem] scanlines opacity-20"></div>
      <div class="pointer-events-none absolute inset-x-8 top-5 h-28 rounded-full bg-sky-400/10 blur-3xl"></div>
      <div class="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl"></div>

      <div
        v-if="isAnimationPaused"
        class="absolute right-4 top-4 z-10 rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100"
      >
        Animación detenida
      </div>

      <svg
        ref="svgEl"
        viewBox="0 0 240 600"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full max-h-[540px] w-full max-w-[340px] select-none"
      >
        <defs>
          <radialGradient id="boneGrad" cx="32%" cy="28%" r="72%">
            <stop offset="0%" stop-color="#f1f5f9"/>
            <stop offset="55%" stop-color="#94a3b8"/>
            <stop offset="100%" stop-color="#475569"/>
          </radialGradient>
          <linearGradient id="shaftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#64748b"/>
            <stop offset="40%" stop-color="#e2e8f0"/>
            <stop offset="100%" stop-color="#475569"/>
          </linearGradient>
          <filter id="boneShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0.8" dy="1.2" stdDeviation="1" flood-color="#00000055"/>
          </filter>
        </defs>

        <g data-parte="cráneo" class="bone" filter="url(#boneShadow)">
          <path d="M120 10 C90 10 74 24 70 46 C66 68 74 86 86 94
                   C92 98 100 100 120 100 C140 100 148 98 154 94
                   C166 86 174 68 170 46 C166 24 150 10 120 10 Z"/>
          <path d="M82 30 Q101 22 120 22 Q139 22 158 30" fill="none" stroke-width="1" stroke-dasharray="2,2" class="suture"/>
          <path d="M120 10 Q121 32 120 54" fill="none" stroke-width="1" stroke-dasharray="2,2" class="suture"/>
          <path d="M84 30 Q78 44 80 60" fill="none" stroke-width="1.5" stroke-dasharray="2,2" class="suture"/>
          <path d="M156 30 Q162 44 160 60" fill="none" stroke-width="1.5" stroke-dasharray="2,2" class="suture"/>
          <path d="M76 62 Q70 68 72 76 Q80 84 92 82" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M164 62 Q170 68 168 76 Q160 84 148 82" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="105" cy="54" rx="13" ry="11" class="cavity"/>
          <ellipse cx="135" cy="54" rx="13" ry="11" class="cavity"/>
          <rect x="117" y="46" width="6" height="20" rx="3"/>
          <path d="M112 70 Q120 77 128 70 Q126 84 120 87 Q114 84 112 70 Z" class="cavity"/>
          <path d="M91 90 Q120 99 149 90 L147 95 Q120 103 93 95 Z"/>
          <path d="M87 90 Q120 100 153 90 L151 96 L151 114
                   Q149 122 145 126 Q134 133 120 133 Q106 133 95 126
                   Q91 122 89 114 L89 96 Z"/>
          <line x1="97" y1="96" x2="97" y2="103" stroke-width="1.5"/>
          <line x1="103" y1="97" x2="103" y2="104" stroke-width="1.5"/>
          <line x1="109" y1="98" x2="109" y2="105" stroke-width="1.5"/>
          <line x1="115" y1="98" x2="115" y2="105" stroke-width="1.5"/>
          <line x1="120" y1="98" x2="120" y2="105" stroke-width="1.5"/>
          <line x1="125" y1="98" x2="125" y2="105" stroke-width="1.5"/>
          <line x1="131" y1="98" x2="131" y2="105" stroke-width="1.5"/>
          <line x1="137" y1="97" x2="137" y2="104" stroke-width="1.5"/>
          <line x1="143" y1="96" x2="143" y2="103" stroke-width="1.5"/>
          <path d="M104 126 Q120 132 136 126" fill="none" stroke-width="2"/>
        </g>

        <g data-parte="columna" class="bone">
          <ellipse cx="120" cy="140" rx="10" ry="5"/>
          <rect x="115" y="147" width="10" height="7" rx="2"/>
          <path d="M120 146 L122 143 L118 143 Z"/>
          <rect x="115" y="156" width="10" height="7" rx="2"/>
          <path d="M120 155 L122 152 L118 152 Z"/>
          <rect x="115" y="165" width="10" height="7" rx="2"/>
          <path d="M120 164 L122 161 L118 161 Z"/>
          <rect x="114" y="175" width="12" height="8" rx="2"/>
          <path d="M120 174 L123 171 L117 171 Z"/>
          <rect x="114" y="186" width="12" height="8" rx="2"/>
          <path d="M120 185 L123 182 L117 182 Z"/>
          <rect x="114" y="197" width="12" height="8" rx="2"/>
          <path d="M120 196 L123 193 L117 193 Z"/>
          <rect x="114" y="208" width="12" height="8" rx="2"/>
          <path d="M120 207 L123 204 L117 204 Z"/>
          <rect x="114" y="219" width="12" height="8" rx="2"/>
          <path d="M120 218 L123 215 L117 215 Z"/>
          <rect x="114" y="230" width="12" height="8" rx="2"/>
          <path d="M120 229 L123 226 L117 226 Z"/>
          <rect x="114" y="241" width="12" height="8" rx="2"/>
          <path d="M120 240 L123 237 L117 237 Z"/>
          <rect x="112" y="253" width="16" height="10" rx="3"/>
          <path d="M120 252 L124 248 L116 248 Z"/>
          <rect x="112" y="266" width="16" height="10" rx="3"/>
          <path d="M120 265 L124 261 L116 261 Z"/>
          <rect x="112" y="279" width="16" height="10" rx="3"/>
          <path d="M120 278 L124 274 L116 274 Z"/>
          <path d="M112 293 Q110 310 112 323 Q115 331 120 331
                   Q125 331 128 323 Q130 310 128 293
                   Q125 290 120 290 Q115 290 112 293 Z"/>
          <path d="M116 329 Q120 336 124 329 L122 343 Q120 348 118 343 Z"/>
        </g>

        <g data-parte="clavícula" class="bone">
          <path d="M116 158 Q97 160 78 165 Q61 169 46 172" fill="none" stroke-width="7" stroke-linecap="round"/>
          <circle cx="46" cy="172" r="6"/>
          <path d="M124 158 Q143 160 162 165 Q179 169 194 172" fill="none" stroke-width="7" stroke-linecap="round"/>
          <circle cx="194" cy="172" r="6"/>
        </g>

        <g data-parte="costillas" class="bone">
          <path d="M115 158 Q120 156 125 158 Q127 170 127 192
                   Q127 216 125 232 Q123 238 120 238 Q117 238 115 232
                   Q113 216 113 192 Q113 170 115 158 Z"/>
          <path d="M116 234 Q120 242 124 234 L122 250 Q120 254 118 250 Z"/>
          <path d="M114 166 Q87 170 72 184 Q62 196 64 212 Q69 222 80 221
                   Q92 215 105 200 Q111 185 113 177" fill="none" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M114 178 Q85 184 68 200 Q58 216 62 234 Q68 245 81 243
                   Q94 237 108 218 Q113 201 113 190" fill="none" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M113 190 Q83 198 65 216 Q55 234 60 253 Q67 265 82 262
                   Q97 255 111 232 Q115 213 113 202" fill="none" stroke-width="4" stroke-linecap="round"/>
          <path d="M113 202 Q82 212 64 232 Q55 252 61 271 Q69 283 85 279
                   Q100 271 113 245 Q116 225 113 214" fill="none" stroke-width="4" stroke-linecap="round"/>
          <path d="M112 215 Q82 226 64 248 Q56 269 63 286 Q72 298 88 293
                   Q103 284 113 257 Q116 237 113 226" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M112 228 Q84 240 70 260 Q66 274 72 284" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M112 240 Q89 251 78 268 Q75 279 79 288" fill="none" stroke-width="3" stroke-linecap="round"/>
          <path d="M112 252 Q96 261 90 272 Q88 280 90 287" fill="none" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M126 166 Q153 170 168 184 Q178 196 176 212 Q171 222 160 221
                   Q148 215 135 200 Q129 185 127 177" fill="none" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M126 178 Q155 184 172 200 Q182 216 178 234 Q172 245 159 243
                   Q146 237 132 218 Q127 201 127 190" fill="none" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M127 190 Q157 198 175 216 Q185 234 180 253 Q173 265 158 262
                   Q143 255 129 232 Q125 213 127 202" fill="none" stroke-width="4" stroke-linecap="round"/>
          <path d="M127 202 Q158 212 176 232 Q185 252 179 271 Q171 283 155 279
                   Q140 271 127 245 Q124 225 127 214" fill="none" stroke-width="4" stroke-linecap="round"/>
          <path d="M128 215 Q158 226 176 248 Q184 269 177 286 Q168 298 152 293
                   Q137 284 127 257 Q124 237 127 226" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M128 228 Q156 240 170 260 Q174 274 168 284" fill="none" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M128 240 Q151 251 162 268 Q165 279 161 288" fill="none" stroke-width="3" stroke-linecap="round"/>
          <path d="M128 252 Q144 261 150 272 Q152 280 150 287" fill="none" stroke-width="2.5" stroke-linecap="round"/>
        </g>

        <g data-parte="cadera" class="bone">
          <path d="M100 308 Q75 313 62 334 Q54 354 61 372
                   Q70 385 87 387 Q102 389 114 383 Q120 378 120 370
                   Q120 355 116 337 Q112 318 100 308 Z"/>
          <path d="M140 308 Q165 313 178 334 Q186 354 179 372
                   Q170 385 153 387 Q138 389 126 383 Q120 378 120 370
                   Q120 355 124 337 Q128 318 140 308 Z"/>
          <circle cx="83" cy="375" r="13" class="cavity"/>
          <circle cx="157" cy="375" r="13" class="cavity"/>
          <ellipse cx="98" cy="380" rx="9" ry="5" class="cavity"/>
          <ellipse cx="142" cy="380" rx="9" ry="5" class="cavity"/>
          <path d="M112 374 Q120 382 128 374 L126 386 Q120 392 114 386 Z"/>
        </g>

        <g data-parte="brazo" class="bone">
          <circle cx="46" cy="176" r="10"/>
          <path d="M39 184 Q30 194 22 203 Q16 210 17 217
                   Q18 223 23 225 Q28 227 34 223 Q42 218 51 208
                   Q58 201 57 194 Q56 188 49 183 Z"/>
          <ellipse cx="18" cy="218" rx="10" ry="7"/>
          <circle cx="194" cy="176" r="10"/>
          <path d="M201 184 Q210 194 218 203 Q224 210 223 217
                   Q222 223 217 225 Q212 227 206 223 Q198 218 189 208
                   Q182 201 183 194 Q184 188 191 183 Z"/>
          <ellipse cx="222" cy="218" rx="10" ry="7"/>
        </g>

        <g data-parte="antebrazo" class="bone">
          <path d="M11 223 Q8 248 9 279 Q9 287 12 290
                   Q14 292 16 290 Q18 287 18 279 Q19 248 15 223 Z"/>
          <path d="M23 223 Q26 248 27 280 Q27 288 30 291
                   Q32 293 34 291 Q36 288 36 280 Q37 248 33 223 Z"/>
          <path d="M229 223 Q232 248 231 279 Q231 287 228 290
                   Q226 292 224 290 Q222 287 222 279 Q221 248 225 223 Z"/>
          <path d="M217 223 Q214 248 213 280 Q213 288 210 291
                   Q208 293 206 291 Q204 288 204 280 Q203 248 207 223 Z"/>
        </g>

        <g data-parte="mano" class="bone">
          <rect x="4" y="292" width="32" height="14" rx="5"/>
          <rect x="6" y="308" width="5" height="18" rx="2"/>
          <rect x="12" y="308" width="5" height="20" rx="2"/>
          <rect x="18" y="308" width="5" height="19" rx="2"/>
          <rect x="24" y="308" width="5" height="16" rx="2"/>
          <rect x="2" y="296" width="6" height="14" rx="2" transform="rotate(-26 2 296)"/>
          <rect x="0" y="311" width="6" height="11" rx="2" transform="rotate(-26 0 311)"/>
          <rect x="6" y="328" width="5" height="12" rx="2"/>
          <rect x="12" y="328" width="5" height="13" rx="2"/>
          <rect x="18" y="328" width="5" height="12" rx="2"/>
          <rect x="24" y="328" width="5" height="10" rx="2"/>
          <rect x="6" y="342" width="5" height="9" rx="2"/>
          <rect x="12" y="342" width="5" height="10" rx="2"/>
          <rect x="18" y="342" width="5" height="9" rx="2"/>
          <rect x="24" y="342" width="5" height="8" rx="2"/>

          <rect x="204" y="292" width="32" height="14" rx="5"/>
          <rect x="212" y="308" width="5" height="16" rx="2"/>
          <rect x="218" y="308" width="5" height="19" rx="2"/>
          <rect x="224" y="308" width="5" height="20" rx="2"/>
          <rect x="230" y="308" width="5" height="18" rx="2"/>
          <rect x="232" y="296" width="6" height="14" rx="2" transform="rotate(26 232 296)"/>
          <rect x="234" y="311" width="6" height="11" rx="2" transform="rotate(26 234 311)"/>
          <rect x="212" y="328" width="5" height="10" rx="2"/>
          <rect x="218" y="328" width="5" height="12" rx="2"/>
          <rect x="224" y="328" width="5" height="13" rx="2"/>
          <rect x="230" y="328" width="5" height="12" rx="2"/>
          <rect x="212" y="342" width="5" height="8" rx="2"/>
          <rect x="218" y="342" width="5" height="9" rx="2"/>
          <rect x="224" y="342" width="5" height="10" rx="2"/>
          <rect x="230" y="342" width="5" height="9" rx="2"/>
        </g>

        <g data-parte="muslo" class="bone">
          <circle cx="83" cy="375" r="10"/>
          <path d="M76 383 Q70 412 74 452 Q75 462 83 470
                   Q87 474 93 474 Q99 474 103 470 Q110 462 110 452
                   Q112 412 104 383 Q97 372 89 372 Z"/>
          <ellipse cx="93" cy="478" rx="15" ry="8"/>
          <circle cx="157" cy="375" r="10"/>
          <path d="M164 383 Q170 412 166 452 Q165 462 157 470
                   Q153 474 147 474 Q141 474 137 470 Q130 462 130 452
                   Q128 412 136 383 Q143 372 151 372 Z"/>
          <ellipse cx="147" cy="478" rx="15" ry="8"/>
        </g>

        <g data-parte="rodilla" class="bone">
          <ellipse cx="93" cy="487" rx="13" ry="9"/>
          <ellipse cx="147" cy="487" rx="13" ry="9"/>
        </g>

        <g data-parte="pierna" class="bone">
          <path d="M85 496 Q82 524 83 553 Q84 560 90 562
                   Q96 564 101 560 Q106 554 105 553
                   Q104 524 102 496 Z"/>
          <path d="M107 500 Q111 528 110 557 Q110 561 112 561
                   Q114 561 114 557 Q115 528 111 500 Z"/>
          <path d="M138 496 Q142 524 155 553 Q156 560 144 562
                   Q138 564 134 560 Q129 554 130 553
                   Q131 524 138 496 Z"/>
          <path d="M133 500 Q129 528 130 557 Q130 561 132 561
                   Q134 561 134 557 Q135 528 127 500 Z"/>
        </g>

        <g data-parte="pie" class="bone">
          <ellipse cx="94" cy="566" rx="14" ry="7"/>
          <ellipse cx="82" cy="576" rx="10" ry="6"/>
          <rect x="70" y="581" width="38" height="9" rx="4"/>
          <rect x="70" y="592" width="6" height="8" rx="2"/>
          <rect x="77" y="592" width="6" height="9" rx="2"/>
          <rect x="84" y="592" width="6" height="8" rx="2"/>
          <rect x="91" y="592" width="5" height="7" rx="2"/>
          <rect x="97" y="592" width="5" height="6" rx="2"/>
          <rect x="70" y="602" width="6" height="5" rx="2"/>
          <ellipse cx="146" cy="566" rx="14" ry="7"/>
          <ellipse cx="158" cy="576" rx="10" ry="6"/>
          <rect x="132" y="581" width="38" height="9" rx="4"/>
          <rect x="133" y="592" width="5" height="6" rx="2"/>
          <rect x="139" y="592" width="5" height="7" rx="2"/>
          <rect x="145" y="592" width="6" height="8" rx="2"/>
          <rect x="152" y="592" width="6" height="9" rx="2"/>
          <rect x="159" y="592" width="6" height="8" rx="2"/>
          <rect x="159" y="602" width="6" height="5" rx="2"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { animate } from 'animejs'

const props = defineProps<{ parte: string | null }>()

const svgEl = ref<SVGSVGElement | null>(null)
const isAnimationPaused = ref(false)

const GLOW_CYCLE_MS = 1600

type AnimeReturn = ReturnType<typeof animate>
let rotAnim: AnimeReturn | null = null
let glowFrame = 0

function stopAll() {
  if (rotAnim) {
    rotAnim.pause()
    rotAnim = null
  }
  cancelAnimationFrame(glowFrame)
  glowFrame = 0
}

function resetBones() {
  if (!svgEl.value) return

  svgEl.value.querySelectorAll<SVGGElement>('.bone').forEach((el) => {
    el.style.fill = ''
    el.style.stroke = ''
    el.style.strokeWidth = ''
    el.style.filter = ''
  })
  svgEl.value.style.transform = ''
}

function startAnimation(parte: string) {
  if (!svgEl.value) return

  stopAll()
  resetBones()

  const target = svgEl.value.querySelector<SVGGElement>(`[data-parte="${parte}"]`)
  if (!target) return

  rotAnim = animate(svgEl.value, {
    rotateY: [0, 360],
    duration: 14000,
    ease: 'linear',
    loop: true,
  })

  const start = performance.now()

  function pulse(now: number) {
    const t = ((now - start) % GLOW_CYCLE_MS) / GLOW_CYCLE_MS
    const intensity = 0.5 - 0.5 * Math.cos(t * 2 * Math.PI)

    const blur1 = 4 + 22 * intensity
    const blur2 = 2 + 12 * intensity
    const blur3 = 8 + 30 * intensity

    const r = Math.round(56 + 199 * intensity)
    const g = Math.round(189 + 66 * intensity)
    const b = 250
    const fillColor = `rgb(${r},${g},${b})`
    const strokeColor = `rgb(${Math.round(186 + 69 * intensity)},${Math.round(230 + 25 * intensity)},255)`

    target.style.fill = fillColor
    target.style.stroke = strokeColor
    target.style.strokeWidth = `${0.8 + 0.7 * intensity}`
    target.style.filter =
      `drop-shadow(0 0 ${blur1}px ${fillColor}) ` +
      `drop-shadow(0 0 ${blur2}px #7dd3fc) ` +
      `drop-shadow(0 0 ${blur3}px rgba(56,189,248,0.35))`

    glowFrame = requestAnimationFrame(pulse)
  }

  glowFrame = requestAnimationFrame(pulse)
}

function toggleAnimation() {
  if (!props.parte) return

  isAnimationPaused.value = !isAnimationPaused.value

  if (isAnimationPaused.value) {
    stopAll()
    resetBones()
    return
  }

  startAnimation(props.parte)
}

watch(
  () => props.parte,
  (val) => {
    if (val && !isAnimationPaused.value) {
      startAnimation(val)
    } else {
      stopAll()
      resetBones()
    }
  },
  { flush: 'post' },
)

onMounted(() => {
  if (props.parte && !isAnimationPaused.value) {
    startAnimation(props.parte)
  }
})

onBeforeUnmount(() => stopAll())
</script>

<style scoped>
.bone {
  fill: url(#boneGrad);
  stroke: #cbd5e1;
  stroke-width: 0.6;
}

.bone .cavity {
  fill: #0f172a;
  stroke: #475569;
  stroke-width: 1;
}

.bone .suture {
  stroke: #64748b;
  fill: none;
}

svg {
  transform-origin: center center;
  transform-style: preserve-3d;
}

.scanlines {
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(0, 200, 255, 0.04) 3px,
    rgba(0, 200, 255, 0.04) 4px
  );
}
</style>
