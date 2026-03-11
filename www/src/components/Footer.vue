<template>
  <footer class="bg-white border-t border-brand-200/60">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div class="col-span-2 md:col-span-1">
           <div class="flex items-center gap-2 mb-4">
             <div class="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center text-white">
                <img src="/logo/AccessFold_Logo_Default.png" alt="AccessFold Logo" class="h-9 w-auto object-contain" />
              </div>
              AccessFold
          </div>
          <p class="text-brand-500 text-[15px] leading-relaxed">
            Making the web accessible for everyone,<br>one line of code at a time.
          </p>
        </div>
        
        <div>
          <h3 class="font-display text-sm font-bold text-brand-900 tracking-wider uppercase mb-5">Product</h3>
          <ul class="space-y-4">
            <li><router-link to="/features" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Features</router-link></li>
            <li><router-link to="/pricing" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Pricing</router-link></li>
            <li><router-link to="/integrations" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Integrations</router-link></li>
            <li><router-link to="/widget" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Widget Demo</router-link></li>
          </ul>
        </div>

        <div>
           <h3 class="font-display text-sm font-bold text-brand-900 tracking-wider uppercase mb-5">Resources</h3>
           <ul class="space-y-4">
             <li><router-link to="/docs" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Documentation</router-link></li>
             <li><router-link to="/compliance" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Compliance Guide</router-link></li>
             <li><router-link to="/blog" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Blog</router-link></li>
           </ul>
        </div>
        
        <div>
           <h3 class="font-display text-sm font-bold text-brand-900 tracking-wider uppercase mb-5">Company</h3>
           <ul class="space-y-4">
             <li><router-link to="/about" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">About</router-link></li>
             <li><router-link to="/contact" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Contact</router-link></li>
             <li><a href="#" class="text-[15px] text-brand-500 hover:text-brand-800 transition-colors">Legal</a></li>
           </ul>
        </div>
      </div>
      <div class="mt-16 border-t border-brand-200/60 pt-8 flex justify-between items-center">
        <p class="text-brand-400 text-sm">&copy; 2026 Accessibility Fold. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
