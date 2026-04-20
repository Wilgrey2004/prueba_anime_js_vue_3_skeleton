<template>
  <div class="relative flex items-center justify-center w-full h-full">
    <svg
      ref="svgEl"
      viewBox="0 0 200 460"
      xmlns="http://www.w3.org/2000/svg"
      class="h-full max-h-[480px] select-none"
    >
      <!-- Cráneo -->
      <g data-parte="cráneo" class="bone">
        <ellipse cx="100" cy="30" rx="28" ry="32" />
        <path d="M78 50 Q100 68 122 50 L118 62 Q100 74 82 62 Z" />
      </g>

      <!-- Columna vertebral -->
      <g data-parte="columna" class="bone">
        <rect x="95" y="80" width="10" height="10" rx="2" />
        <rect x="95" y="94" width="10" height="10" rx="2" />
        <rect x="95" y="108" width="10" height="10" rx="2" />
        <rect x="95" y="122" width="10" height="10" rx="2" />
        <rect x="95" y="136" width="10" height="10" rx="2" />
        <rect x="95" y="150" width="10" height="10" rx="2" />
        <rect x="95" y="164" width="10" height="10" rx="2" />
        <rect x="95" y="178" width="10" height="10" rx="2" />
        <rect x="95" y="192" width="10" height="10" rx="2" />
      </g>

      <!-- Clavículas -->
      <g data-parte="clavícula" class="bone">
        <line x1="100" y1="82" x2="60" y2="90" stroke-width="5" stroke-linecap="round" />
        <line x1="100" y1="82" x2="140" y2="90" stroke-width="5" stroke-linecap="round" />
      </g>

      <!-- Costillas -->
      <g data-parte="costillas" class="bone">
        <path d="M98 95 Q75 100 72 112 Q75 122 98 118" fill="none" stroke-width="4" stroke-linecap="round" />
        <path d="M102 95 Q125 100 128 112 Q125 122 102 118" fill="none" stroke-width="4" stroke-linecap="round" />
        <path d="M98 112 Q72 118 70 130 Q73 140 98 136" fill="none" stroke-width="4" stroke-linecap="round" />
        <path d="M102 112 Q128 118 130 130 Q127 140 102 136" fill="none" stroke-width="4" stroke-linecap="round" />
        <path d="M98 128 Q73 134 71 146 Q74 156 98 152" fill="none" stroke-width="4" stroke-linecap="round" />
        <path d="M102 128 Q127 134 129 146 Q126 156 102 152" fill="none" stroke-width="4" stroke-linecap="round" />
        <rect x="93" y="95" width="14" height="65" rx="4" />
      </g>

      <!-- Pelvis / Cadera -->
      <g data-parte="cadera" class="bone">
        <path d="M72 208 Q60 220 62 240 Q70 255 100 258 Q130 255 138 240 Q140 220 128 208 Z" />
        <ellipse cx="74" cy="248" rx="8" ry="8" />
        <ellipse cx="126" cy="248" rx="8" ry="8" />
      </g>

      <!-- Brazo superior -->
      <g data-parte="brazo" class="bone">
        <rect x="52" y="90" width="12" height="55" rx="6" />
        <rect x="136" y="90" width="12" height="55" rx="6" />
      </g>

      <!-- Antebrazo -->
      <g data-parte="antebrazo" class="bone">
        <rect x="50" y="148" width="6" height="52" rx="3" />
        <rect x="58" y="148" width="6" height="52" rx="3" />
        <rect x="136" y="148" width="6" height="52" rx="3" />
        <rect x="144" y="148" width="6" height="52" rx="3" />
      </g>

      <!-- Mano -->
      <g data-parte="mano" class="bone">
        <rect x="49" y="202" width="18" height="10" rx="4" />
        <rect x="48" y="214" width="5" height="14" rx="2" />
        <rect x="54" y="214" width="5" height="16" rx="2" />
        <rect x="60" y="214" width="5" height="15" rx="2" />
        <rect x="66" y="214" width="4" height="12" rx="2" />
        <rect x="43" y="208" width="4" height="10" rx="2" />
        <rect x="133" y="202" width="18" height="10" rx="4" />
        <rect x="132" y="214" width="4" height="12" rx="2" />
        <rect x="137" y="214" width="5" height="15" rx="2" />
        <rect x="143" y="214" width="5" height="16" rx="2" />
        <rect x="149" y="214" width="5" height="14" rx="2" />
        <rect x="153" y="208" width="4" height="10" rx="2" />
      </g>

      <!-- Muslo (fémur) -->
      <g data-parte="muslo" class="bone">
        <rect x="80" y="260" width="14" height="70" rx="7" />
        <rect x="106" y="260" width="14" height="70" rx="7" />
      </g>

      <!-- Rodilla -->
      <g data-parte="rodilla" class="bone">
        <rect x="79" y="332" width="16" height="16" rx="6" />
        <rect x="105" y="332" width="16" height="16" rx="6" />
      </g>

      <!-- Pierna (tibia/peroné) -->
      <g data-parte="pierna" class="bone">
        <rect x="80" y="350" width="8" height="65" rx="4" />
        <rect x="90" y="350" width="6" height="65" rx="3" />
        <rect x="106" y="350" width="8" height="65" rx="4" />
        <rect x="116" y="350" width="6" height="65" rx="3" />
      </g>

      <!-- Pie -->
      <g data-parte="pie" class="bone">
        <rect x="78" y="418" width="20" height="8" rx="3" />
        <rect x="68" y="428" width="30" height="10" rx="4" />
        <rect x="68" y="440" width="5" height="10" rx="2" />
        <rect x="74" y="440" width="5" height="11" rx="2" />
        <rect x="80" y="440" width="5" height="10" rx="2" />
        <rect x="86" y="440" width="4" height="9" rx="2" />
        <rect x="91" y="440" width="4" height="8" rx="2" />
        <rect x="102" y="418" width="20" height="8" rx="3" />
        <rect x="102" y="428" width="30" height="10" rx="4" />
        <rect x="105" y="440" width="4" height="8" rx="2" />
        <rect x="110" y="440" width="4" height="9" rx="2" />
        <rect x="115" y="440" width="5" height="10" rx="2" />
        <rect x="121" y="440" width="5" height="11" rx="2" />
        <rect x="127" y="440" width="5" height="10" rx="2" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { animate } from 'animejs'

const props = defineProps<{ parte: string | null }>()

const svgEl = ref<SVGSVGElement | null>(null)

type AnimeReturn = ReturnType<typeof animate>
let glowAnim: AnimeReturn | null = null
let rotAnim: AnimeReturn | null = null
let glowFrame = 0

function stopAll() {
  if (glowAnim) { glowAnim.pause(); glowAnim = null }
  if (rotAnim) { rotAnim.pause(); rotAnim = null }
  cancelAnimationFrame(glowFrame)
}

function resetBones() {
  if (!svgEl.value) return
  svgEl.value.querySelectorAll<SVGGElement>('.bone').forEach(el => {
    el.style.fill = ''
    el.style.stroke = ''
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

  // Rotation of entire skeleton via animejs
  rotAnim = animate(svgEl.value, {
    rotateY: [0, 360],
    duration: 3000,
    ease: 'linear',
    loop: true,
  })

  // Manual glow pulse via rAF for maximum browser compatibility
  const t0 = target
  const start = performance.now()
  function pulse(now: number) {
    const t = ((now - start) % 900) / 900
    const intensity = 0.5 - 0.5 * Math.cos(t * 2 * Math.PI) // 0..1
    const blur1 = 6 + 18 * intensity
    const blur2 = 3 + 10 * intensity
    const r = Math.round(56 + 186 * intensity)
    const g = Math.round(189 + 66 * intensity)
    const b = 250
    const color = `rgb(${r},${g},${b})`
    t0.style.fill = color
    t0.style.stroke = '#bae6fd'
    t0.style.filter = `drop-shadow(0 0 ${blur1}px ${color}) drop-shadow(0 0 ${blur2}px #7dd3fc)`
    glowFrame = requestAnimationFrame(pulse)
  }
  glowFrame = requestAnimationFrame(pulse)
}

watch(
  () => props.parte,
  (val) => {
    if (val) {
      startAnimation(val)
    } else {
      stopAll()
      resetBones()
    }
  },
  { flush: 'post' }
)

onMounted(() => {
  if (props.parte) startAnimation(props.parte)
})

onBeforeUnmount(() => stopAll())
</script>

<style scoped>
.bone {
  fill: #94a3b8;
  stroke: #cbd5e1;
  stroke-width: 0.5;
}
svg {
  transform-origin: center center;
  transform-style: preserve-3d;
}
</style>
