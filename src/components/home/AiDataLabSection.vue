<template>
  <section class="ailab-section" id="ai-lab">
    <div class="ailab-container">

      <!-- Encabezado de Sección -->
      <div class="ailab-header" v-reveal-group="{ step: 150 }">
        <div>
          <span class="ailab-kicker">// Interactive Architecture Sandbox</span>
          <h2 class="ailab-title">
            AI & Data <span class="text-marca-rojo">Lab.</span>
          </h2>
        </div>
        <p class="ailab-subtitle">
          Inspecciona cómo estructuro soluciones reales: desde prototipos con modelos generativos hasta consultas columnares en DuckDB y controladores escalables en Laravel.
        </p>
      </div>

      <!-- Grid Principal del Laboratorio -->
      <div class="ailab-grid">

        <!-- Columna Izquierda: Selector de Módulos (Mobile-First Tabs) -->
        <div class="ailab-sidebar" role="tablist" aria-label="Módulos de arquitectura" v-reveal-group="{ step: 120, variant: 'left' }">
          <button
            v-for="(mod, index) in labModules"
            :key="mod.id"
            @click="selectModule(index)"
            :class="['ailab-tab-card', activeIndex === index ? 'ailab-tab-active' : 'ailab-tab-inactive']"
            role="tab"
            :aria-selected="activeIndex === index"
          >
            <div class="flex items-center justify-between w-full mb-2">
              <span class="ailab-tab-badge">{{ mod.badge }}</span>
              <span class="font-mono text-xs opacity-60">0{{ index + 1 }}</span>
            </div>

            <h3 class="ailab-tab-title">{{ mod.title }}</h3>
            <p class="ailab-tab-desc">{{ mod.summary }}</p>

            <div class="ailab-tab-metrics">
              <span
                v-for="tag in mod.tags"
                :key="tag"
                class="ailab-mini-tag"
              >
                {{ tag }}
              </span>
            </div>
          </button>
        </div>

        <!-- Columna Derecha: Ventana de Terminal / Editor Interactivo -->
        <div class="ailab-terminal-wrapper" v-reveal="{ variant: 'right', delay: 150 }">
          <div class="ailab-terminal">

            <!-- Barra Superior de la Ventana -->
            <div class="terminal-topbar">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span class="ml-2 font-mono text-xs text-gray-300 truncate">
                  {{ currentModule.filename }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <button
                  @click="copySnippet"
                  class="terminal-action-btn"
                  title="Copiar código"
                >
                  <span>{{ copied ? '✓ Copiado' : 'Copiar' }}</span>
                </button>
                <button
                  @click="runSimulation"
                  class="terminal-run-btn"
                  :disabled="isRunning"
                >
                  <span v-if="!isRunning">▶ Ejecutar</span>
                  <span v-else>Procesando...</span>
                </button>
              </div>
            </div>

            <!-- Cuerpo de Código -->
            <div class="terminal-code-area">
              <Transition name="code-swap" mode="out-in">
                <pre :key="currentModule.id" class="font-mono text-xs sm:text-sm leading-relaxed text-gray-200 overflow-x-auto"><code>{{ currentModule.code }}</code></pre>
              </Transition>
            </div>

            <!-- Consola de Salida (Output Console) -->
            <div class="terminal-output-area">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-[11px] uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Output Terminal // {{ currentModule.runtime }}
                </span>
                <span class="font-mono text-[11px] text-gray-400">
                  Latencia: {{ currentModule.latency }}
                </span>
              </div>

              <div class="terminal-output-box">
                <p v-if="isRunning" class="font-mono text-xs text-amber-300 animate-pulse">
                  [SYSTEM] Ejecutando pipeline y validando esquema de datos...
                </p>
                <pre v-else class="font-mono text-xs text-emerald-300 whitespace-pre-wrap">{{ currentModule.output }}</pre>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref(0)
const isRunning = ref(false)
const copied = ref(false)

const labModules = [
  {
    id: 'genai',
    badge: 'GenAI & LLMs',
    title: 'Prototipado con Gemini API',
    summary: 'Extracción estructurada y análisis automatizado con modelos generativos y validación JSON.',
    tags: ['Python', 'Gemini API', 'Google AI Studio', 'JSON Schema'],
    filename: 'ai_prototype_engine.py',
    runtime: 'Python 3.11 + Google GenAI SDK',
    latency: '320ms',
    code: `import google.generativeai as genai
import json

# Configuración de prototipo inteligente para clasificación técnica
genai.configure(api_key="AI_STUDIO_PROTOTYPE_KEY")
model = genai.GenerativeModel("gemini-2.5-flash")

def analyze_institutional_request(raw_ticket: str) -> dict:
    prompt = f"""
    Analiza la solicitud institucional y devuelve un JSON estricto con:
    prioridad (ALTA|MEDIA|BAJA), area_destino, y accion_sugerida.
    Solicitud: {raw_ticket}
    """
    response = model.generate_content(
        prompt,
        generation_config={"response_mime_type": "application/json"}
    )
    return json.loads(response.text)`,
    output: `{
  "status": "200 OK",
  "model": "gemini-2.5-flash",
  "structured_output": {
    "prioridad": "ALTA",
    "area_destino": "Sistemas & Adquisiciones (SIPA)",
    "accion_sugerida": "Indexar orden por idEstudio y autorizar lote"
  }
}`
  },
  {
    id: 'datascience',
    badge: 'Data Science & SQL',
    title: 'Motor Analítico con DuckDB & Pandas',
    summary: 'Procesamiento columnar de alto rendimiento para el proyecto Radar de Fichajes (StatsBomb).',
    tags: ['DuckDB', 'Python', 'Pandas', 'StatsBomb', 'SQL'],
    filename: 'scouting_radar_pipeline.py',
    runtime: 'DuckDB In-Memory OLAP',
    latency: '14ms',
    code: `import duckdb
import pandas as pd

# Consulta analítica de alta velocidad sobre eventos de partidos
query = """
SELECT 
    player_name,
    team_name,
    COUNT(*) FILTER (WHERE type = 'Pass' AND pass_progressive = true) AS prog_passes,
    ROUND(SUM(shot_statsbomb_xg), 2) AS total_xg_generated
FROM read_parquet('statsbomb_events_2026.parquet')
WHERE minutes_played >= 900
GROUP BY player_name, team_name
HAVING total_xg_generated > 4.5
ORDER BY prog_passes DESC
LIMIT 3;
"""
df_scouting = duckdb.sql(query).df()`,
    output: `┌──────────────────┬───────────────┬─────────────┬────────────────────┐
│ player_name      │ team_name     │ prog_passes │ total_xg_generated │
├──────────────────┼───────────────┼─────────────┼────────────────────┤
│ A. Fidalgo       │ Club América  │ 148         │ 6.42               │
│ H. Martín        │ Club América  │ 64          │ 11.85              │
│ J. Quiñones      │ Selección MX  │ 92          │ 8.10               │
└──────────────────┴───────────────┴─────────────┴────────────────────┘
[INFO] 18,420 registros escaneados en 0.014 segundos.`
  },
  {
    id: 'fullstack',
    badge: 'Full-Stack Architecture',
    title: 'Optimización Institucional (Laravel + Vue)',
    summary: 'Filtrado indexado por idEstudio y categorización dinámica para el sistema de adquisiciones.',
    tags: ['Laravel', 'PHP 8', 'Vue.js', 'SQL Indexing'],
    filename: 'AdquisicionesController.php',
    runtime: 'Laravel 11 + Eloquent ORM',
    latency: '28ms',
    code: `namespace App\\Http\\Controllers\\Sipa;

use App\\Models\\Requisicion;
use Illuminate\\Http\\Request;

class AdquisicionesController extends Controller
{
    public function indexByEstudio(Request $request)
    {
        $idEstudio = $request->validated('idEstudio');

        return Requisicion::query()
            ->with(['categoria:id,nombre', 'articulos'])
            ->where('idEstudio', $idEstudio)
            ->where('estatus', 'ACTIVO')
            ->orderByDesc('fecha_registro')
            ->paginate(25);
    }
}`,
    output: `{
  "system": "SIPA - Universidad Mundo Maya",
  "filter_applied": "idEstudio = 104",
  "query_time_ms": 28.4,
  "records_returned": 25,
  "cache_status": "HIT_INDEXED"
}`
  }
]

const currentModule = computed(() => labModules[activeIndex.value])

const selectModule = (index) => {
  activeIndex.value = index
  copied.value = false
}

const runSimulation = () => {
  isRunning.value = true
  setTimeout(() => {
    isRunning.value = false
  }, 450)
}

const copySnippet = async () => {
  try {
    await navigator.clipboard.writeText(currentModule.value.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (e) {
    copied.value = false
  }
}
</script>

<style scoped src="@/assets/css/ailab.css"></style>
