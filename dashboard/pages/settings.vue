<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Widget Configuration</h2>
    
    <div class="bg-white rounded-lg shadow-sm border border-slate-200">
      <div class="p-6 border-b border-slate-200">
         <h3 class="text-lg font-medium text-slate-900">General Settings</h3>
         <p class="text-sm text-slate-500">Customize how the widget appears on your site.</p>
      </div>
      
      <div class="p-6 space-y-6">
         <!-- Position -->
         <div>
            <label class="block text-sm font-medium text-slate-700">Widget Position</label>
            <div class="mt-2 flex gap-4">
               <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="position" value="bottom-right" class="text-indigo-600 focus:ring-indigo-500" checked>
                  <span class="text-sm text-slate-900">Bottom Right</span>
               </label>
               <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="position" value="bottom-left" class="text-indigo-600 focus:ring-indigo-500">
                  <span class="text-sm text-slate-900">Bottom Left</span>
               </label>
               <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="position" value="top-right" class="text-indigo-600 focus:ring-indigo-500">
                  <span class="text-sm text-slate-900">Top Right</span>
               </label>
            </div>
         </div>

         <!-- Color -->
         <div>
            <label class="block text-sm font-medium text-slate-700">Brand Color</label>
            <div class="mt-2 flex gap-2">
               <input type="color" value="#4f46e5" class="h-10 w-20 p-1 border border-slate-300 rounded">
               <span class="text-sm text-slate-500 self-center">Hex Code</span>
            </div>
         </div>

         <!-- Icon -->
         <div>
            <label class="block text-sm font-medium text-slate-700">Trigger Icon</label>
            <div class="mt-2 grid grid-cols-4 gap-4 w-64">
               <div class="border-2 border-indigo-500 rounded p-2 flex justify-center text-indigo-600 bg-indigo-50">
                  <!-- Eye Icon -->
                   <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
               </div>
               <div class="border border-slate-200 rounded p-2 flex justify-center text-slate-400 hover:border-slate-300">
                  <!-- Person Icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               </div>
            </div>
         </div>
      </div>
      
      <div class="p-6 border-t border-slate-200 bg-slate-50 rounded-b-lg flex justify-end">
         <button class="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-indigo-700">Save Changes</button>
      </div>
    </div>
    
    <!-- Feature Toggles -->
    <div class="mt-8 bg-white rounded-lg shadow-sm border border-slate-200">
       <div class="p-6 border-b border-slate-200">
          <h3 class="text-lg font-medium text-slate-900">Enabled Features</h3>
          <p class="text-sm text-slate-500">Control which tools are available to your users.</p>
       </div>
       <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
             <span class="text-sm font-medium text-slate-900">Screen Reader</span>
             <input type="checkbox" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded">
          </label>
          <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
             <span class="text-sm font-medium text-slate-900">Contrast Modes</span>
             <input type="checkbox" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded">
          </label>
          <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
             <span class="text-sm font-medium text-slate-900">Text Resizing</span>
             <input type="checkbox" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded">
          </label>
          <label class="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
             <span class="text-sm font-medium text-slate-900">Dyslexia Font</span>
             <input type="checkbox" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded">
          </label>
       </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
