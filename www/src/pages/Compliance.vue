<template>
  <div class="pt-24 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 mb-8">Compliance Standards</h1>
      <div class="grid md:grid-cols-2 gap-12">
         
         <!-- WCAG 2.1 -->
         <div class="bg-white p-8 rounded-2xl border border-brand-200/60 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              WCAG 2.1 AA
            </h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              The Web Content Accessibility Guidelines (WCAG) are the global standard. We help you meet Level AA success criteria automatically through AI-driven structural enhancements.
            </p>
            <ul class="space-y-3">
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600">Text alternatives for non-text content</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600">Content can be presented in different adaptable ways</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600">Keyboard navigability across all DOM elements</span>
               </li>
            </ul>
         </div>

         <!-- WCAG 2.2 (New) -->
         <div class="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">New Standard</div>
            <h2 class="text-2xl font-display font-bold text-brand-900 mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              WCAG 2.2 AA
            </h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              The newest integration of WCAG. The Accessibility Fold widget itself is meticulously engineered to pass strict 2.2 AA compliance standards.
            </p>
            <ul class="space-y-3">
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600"><strong>Focus Appearance (SC 2.4.11):</strong> Highly visible, offset focus indicators for keyboard navigation.</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600"><strong>Target Size (SC 2.5.8):</strong> Enlarged touch targets and expanded CSS cursors.</span>
               </li>
               <li class="flex items-start gap-3">
                 <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2"></div>
                 <span class="text-slate-600"><strong>Consistent ARIA feedback</strong> for Screen Readers.</span>
               </li>
            </ul>
         </div>

         <!-- ADA Title III -->
         <div class="bg-white p-8 rounded-2xl border border-brand-200/60 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              ADA Title III
            </h2>
            <p class="text-slate-600 leading-relaxed">
              The Americans with Disabilities Act dictates businesses must be accessible to people with disabilities. Courts have legally established that websites and digital assets qualify as "places of public accommodation."
            </p>
         </div>

         <!-- Section 508 (USA) & ACA (Canada) -->
         <div class="bg-white p-8 rounded-2xl border border-brand-200/60 shadow-sm hover:shadow-md transition-shadow">
            <h2 class="text-2xl font-display font-bold text-brand-900 mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
              Section 508 & ACA
            </h2>
            <p class="text-slate-600 leading-relaxed mb-4">
              <strong>Section 508 (US):</strong> Requires precise standards for Federal agencies to make their electronic technology accessible. 
            </p>
            <p class="text-slate-600 leading-relaxed">
              <strong>ACA & AODA (Canada):</strong> Our readability augmentations and motor-impairment bypass mechanics map directly to the Accessible Canada Act regulations.
            </p>
         </div>

      </div>
    </div>
  </div>
</template>
