<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">AI Accessibility Tools</h2>
    
    <div class="grid md:grid-cols-2 gap-6">
      
      <!-- Alt Text Generator -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 class="font-bold text-lg mb-4">Auto Alt-Text</h3>
        <div class="space-y-4">
          <input v-model="imageUrl" type="text" placeholder="Image URL..." class="w-full px-3 py-2 border rounded">
          <button @click="aiStore.generateAltText(imageUrl)" :disabled="aiStore.loading" class="bg-indigo-600 text-white px-4 py-2 rounded disable:opacity-50">
            {{ aiStore.loading ? 'Generating...' : 'Generate' }}
          </button>
          <div v-if="aiStore.generatedAltText" class="p-3 bg-slate-50 border rounded text-sm mt-2">
            <strong>Result:</strong> {{ aiStore.generatedAltText }}
          </div>
        </div>
      </div>

      <!-- Content Simplifier -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 class="font-bold text-lg mb-4">Content Simplifier</h3>
        <div class="space-y-4">
          <textarea v-model="content" placeholder="Paste complex text here..." class="w-full px-3 py-2 border rounded h-24"></textarea>
          <button @click="aiStore.simplifyContent(content)" :disabled="aiStore.loading" class="bg-indigo-600 text-white px-4 py-2 rounded disable:opacity-50">
            {{ aiStore.loading ? 'Simplifying...' : 'Simplify' }}
          </button>
          <div v-if="aiStore.simplifiedContent" class="p-3 bg-slate-50 border rounded text-sm mt-2">
             {{ aiStore.simplifiedContent }}
          </div>
        </div>
      </div>

       <!-- Fix Suggester -->
      <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200 md:col-span-2">
        <h3 class="font-bold text-lg mb-4">Code Remediation</h3>
        <div class="grid grid-cols-2 gap-4">
             <textarea v-model="snippet" placeholder="Paste broken HTML..." class="w-full px-3 py-2 border rounded h-32 font-mono text-xs"></textarea>
             <div class="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-auto h-32">
                <pre>{{ aiStore.suggestedFix || '// AI Fix will appear here' }}</pre>
             </div>
        </div>
        <button @click="aiStore.getFixSuggestion('contrast', snippet)" :disabled="aiStore.loading" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
           Fix Code
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useAiStore } from '~/stores/ai';

const aiStore = useAiStore();
const imageUrl = ref('https://via.placeholder.com/150');
const content = ref('The utilization of complex terminology necessitates clarification.');
const snippet = ref('<button style="color:red; background:darkred">Click me</button>');
</script>
