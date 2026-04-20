<template>
  <div class="relative flex items-center justify-center w-full h-full">
    <svg
      ref="svgEl"
      viewBox="0 0 200 470"
      xmlns="http://www.w3.org/2000/svg"
      class="h-full max-h-[480px] select-none"
    >
      <!-- Cráneo -->
      <g data-parte="cráneo" class="bone">
        <!-- Bóveda craneal -->
        <ellipse cx="100" cy="28" rx="30" ry="34" />
        <!-- Maxilar inferior -->
        <path d="M76 52 Q100 72 124 52 L120 64 Q100 78 80 64 Z" />
        <!-- Órbitas oculares -->
        <ellipse cx="88" cy="28" rx="7" ry="6" fill="#1e293b" stroke="none"/>
        <ellipse cx="112" cy="28" rx="7" ry="6" fill="#1e293b" stroke="none"/>
        <!-- Sutura sagital -->
        <path d="M100 0 Q101 14 100 28" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
      </g>

      <!-- Columna vertebral -->
      <g data-parte="columna" class="bone">
        <!-- Vértebras con apófisis espinosas -->
        <rect x="93" y="80"  width="14" height="12" rx="3" />
        <path d="M100 78 L104 74 L96 74 Z" />
        <rect x="93" y="96"  width="14" height="12" rx="3" />
        <path d="M100 94 L104 90 L96 90 Z" />
        <rect x="93" y="112" width="14" height="12" rx="3" />
        <path d="M100 110 L104 106 L96 106 Z" />
        <rect x="93" y="128" width="14" height="12" rx="3" />
        <path d="M100 126 L104 122 L96 122 Z" />
        <rect x="93" y="144" width="14" height="12" rx="3" />
        <path d="M100 142 L104 138 L96 138 Z" />
        <rect x="93" y="160" width="14" height="12" rx="3" />
        <path d="M100 158 L104 154 L96 154 Z" />
        <rect x="93" y="176" width="14" height="12" rx="3" />
        <path d="M100 174 L104 170 L96 170 Z" />
        <rect x="93" y="192" width="14" height="12" rx="3" />
        <path d="M100 190 L104 186 L96 186 Z" />
      </g>

      <!-- Clavículas -->
      <g data-parte="clavícula" class="bone">
        <!-- Clavícula izquierda con forma en S suave -->
        <path d="M97 82 Q80 84 68 90 Q62 93 60 92" fill="none" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="60" cy="92" rx="4" ry="4"/>
        <!-- Clavícula derecha -->
        <path d="M103 82 Q120 84 132 90 Q138 93 140 92" fill="none" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="140" cy="92" rx="4" ry="4"/>
      </g>

      <!-- Costillas -->
      <g data-parte="costillas" class="bone">
        <!-- Esternón -->
        <rect x="94" y="92" width="12" height="70" rx="5" />
        <!-- Par 1 -->
        <path d="M94 98  Q72 102 68 114 Q70 124 94 120" fill="none" stroke-width="4" stroke-linecap="round"/>
        <path d="M106 98  Q128 102 132 114 Q130 124 106 120" fill="none" stroke-width="4" stroke-linecap="round"/>
        <!-- Par 2 -->
        <path d="M94 114 Q70 119 66 131 Q68 141 94 137" fill="none" stroke-width="4" stroke-linecap="round"/>
        <path d="M106 114 Q130 119 134 131 Q132 141 106 137" fill="none" stroke-width="4" stroke-linecap="round"/>
        <!-- Par 3 -->
        <path d="M94 130 Q71 136 68 148 Q70 158 94 154" fill="none" stroke-width="4" stroke-linecap="round"/>
        <path d="M106 130 Q129 136 132 148 Q130 158 106 154" fill="none" stroke-width="4" stroke-linecap="round"/>
        <!-- Par flotante -->
        <path d="M94 148 Q76 155 74 163" fill="none" stroke-width="3" stroke-linecap="round"/>
        <path d="M106 148 Q124 155 126 163" fill="none" stroke-width="3" stroke-linecap="round"/>
      </g>

      <!-- Pelvis / Cadera -->
      <g data-parte="cadera" class="bone">
        <!-- Ilion (alas) -->
        <path d="M70 210 Q52 218 54 244 Q62 260 100 262 Q138 260 146 244 Q148 218 130 210 Q118 205 100 204 Q82 205 70 210 Z" />
        <!-- Acetábulos (cavidades articulares de la cadera) -->
        <circle cx="74" cy="252" r="9" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="126" cy="252" r="9" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Sínfisis púbica -->
        <rect x="94" y="258" width="12" height="8" rx="3"/>
      </g>

      <!-- Brazo superior (húmero) -->
      <g data-parte="brazo" class="bone">
        <!-- Húmero izquierdo con cabeza y cóndilo -->
        <ellipse cx="58" cy="92" rx="7" ry="7"/>
        <path d="M53 96 Q50 118 51 144 Q52 148 58 148 Q64 148 65 144 Q66 118 63 96 Z"/>
        <ellipse cx="58" cy="148" rx="7" ry="5"/>
        <!-- Húmero derecho -->
        <ellipse cx="142" cy="92" rx="7" ry="7"/>
        <path d="M137 96 Q134 118 135 144 Q136 148 142 148 Q148 148 149 144 Q150 118 147 96 Z"/>
        <ellipse cx="142" cy="148" rx="7" ry="5"/>
      </g>

      <!-- Antebrazo (radio y cúbito) -->
      <g data-parte="antebrazo" class="bone">
        <!-- Cúbito izquierdo -->
        <path d="M54 150 Q52 172 53 198 Q54 202 57 202 Q60 202 61 198 Q62 172 60 150 Z"/>
        <!-- Radio izquierdo -->
        <path d="M62 152 Q64 174 65 200 Q65 204 68 204 Q71 204 71 200 Q71 174 69 152 Z"/>
        <!-- Cúbito derecho -->
        <path d="M139 150 Q137 172 138 198 Q139 202 142 202 Q145 202 146 198 Q147 172 145 150 Z"/>
        <!-- Radio derecho -->
        <path d="M148 152 Q150 174 131 200 Q130 204 133 204 Q136 204 137 200 Q148 174 155 152 Z"/>
      </g>

      <!-- Mano -->
      <g data-parte="mano" class="bone">
        <!-- Carpo izquierdo -->
        <rect x="49" y="204" width="20" height="11" rx="4" />
        <!-- Metacarpianos -->
        <rect x="49" y="217" width="4" height="14" rx="2" />
        <rect x="54" y="217" width="4" height="16" rx="2" />
        <rect x="59" y="217" width="4" height="15" rx="2" />
        <rect x="64" y="217" width="4" height="13" rx="2" />
        <!-- Pulgar -->
        <rect x="43" y="210" width="4" height="11" rx="2" />
        <rect x="43" y="223" width="4" height="8" rx="2" />
        <!-- Falanges medias y distales (simplificadas) -->
        <rect x="49" y="233" width="4" height="8" rx="2" />
        <rect x="54" y="233" width="4" height="9" rx="2" />
        <rect x="59" y="233" width="4" height="8" rx="2" />
        <rect x="64" y="233" width="4" height="7" rx="2" />

        <!-- Carpo derecho -->
        <rect x="131" y="204" width="20" height="11" rx="4" />
        <!-- Metacarpianos -->
        <rect x="131" y="217" width="4" height="13" rx="2" />
        <rect x="136" y="217" width="4" height="15" rx="2" />
        <rect x="141" y="217" width="4" height="16" rx="2" />
        <rect x="146" y="217" width="4" height="14" rx="2" />
        <!-- Pulgar -->
        <rect x="153" y="210" width="4" height="11" rx="2" />
        <rect x="153" y="223" width="4" height="8" rx="2" />
        <!-- Falanges medias y distales -->
        <rect x="131" y="233" width="4" height="7" rx="2" />
        <rect x="136" y="233" width="4" height="8" rx="2" />
        <rect x="141" y="233" width="4" height="9" rx="2" />
        <rect x="146" y="233" width="4" height="8" rx="2" />
      </g>

      <!-- Muslo (fémur) -->
      <g data-parte="muslo" class="bone">
        <!-- Fémur izquierdo: cabeza, cuello y diáfisis -->
        <circle cx="82" cy="258" r="9"/>
        <path d="M76 264 Q74 290 76 330 Q77 336 87 336 Q97 336 98 330 Q99 290 95 264 Q90 256 84 256 Z"/>
        <ellipse cx="87" cy="336" rx="11" ry="7"/>
        <!-- Fémur derecho -->
        <circle cx="118" cy="258" r="9"/>
        <path d="M104 264 Q101 290 102 330 Q103 336 113 336 Q123 336 124 330 Q126 290 126 264 Q122 256 116 256 Z"/>
        <ellipse cx="113" cy="336" rx="11" ry="7"/>
      </g>

      <!-- Rodilla (rótula) -->
      <g data-parte="rodilla" class="bone">
        <ellipse cx="87" cy="340" rx="9" ry="7"/>
        <ellipse cx="113" cy="340" rx="9" ry="7"/>
      </g>

      <!-- Pierna (tibia y peroné) -->
      <g data-parte="pierna" class="bone">
        <!-- Tibia izquierda -->
        <path d="M81 346 Q79 380 80 408 Q81 414 87 414 Q93 414 94 408 Q95 380 93 346 Z"/>
        <!-- Peroné izquierdo -->
        <path d="M96 350 Q98 378 97 410 Q97 413 99 413 Q101 413 101 410 Q102 378 100 350 Z"/>
        <!-- Tibia derecha -->
        <path d="M107 346 Q105 380 106 408 Q107 414 113 414 Q119 414 120 408 Q121 380 119 346 Z"/>
        <!-- Peroné derecho -->
        <path d="M100 350 Q102 378 101 410 Q101 413 103 413 Q105 413 105 410 Q106 378 104 350 Z"/>
      </g>

      <!-- Pie -->
      <g data-parte="pie" class="bone">
        <!-- Tobillo / tarso izquierdo -->
        <ellipse cx="87" cy="418" rx="10" ry="6"/>
        <!-- Calcáneo -->
        <ellipse cx="80" cy="426" rx="8" ry="5"/>
        <!-- Metatarsianos -->
        <rect x="74" y="432" width="28" height="8" rx="4" />
        <!-- Falanges del pie -->
        <rect x="74" y="442" width="5" height="9" rx="2" />
        <rect x="80" y="442" width="5" height="10" rx="2" />
        <rect x="86" y="442" width="5" height="9" rx="2" />
        <rect x="92" y="442" width="4" height="8" rx="2" />
        <rect x="97" y="442" width="4" height="7" rx="2" />

        <!-- Tobillo / tarso derecho -->
        <ellipse cx="113" cy="418" rx="10" ry="6"/>
        <!-- Calcáneo -->
        <ellipse cx="120" cy="426" rx="8" ry="5"/>
        <!-- Metatarsianos -->
        <rect x="98" y="432" width="28" height="8" rx="4" />
        <!-- Falanges del pie -->
        <rect x="99" y="442" width="4" height="7" rx="2" />
        <rect x="104" y="442" width="4" height="8" rx="2" />
        <rect x="109" y="442" width="5" height="9" rx="2" />
        <rect x="115" y="442" width="5" height="10" rx="2" />
        <rect x="121" y="442" width="5" height="9" rx="2" />
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
    duration: 10000,
    ease: 'linear',
    loop: true,
  })

  // Manual glow pulse via rAF for maximum browser compatibility
  const t0 = target
  const start = performance.now()
  function pulse(now: number) {
    const t = ((now - start) % 1400) / 1400
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
