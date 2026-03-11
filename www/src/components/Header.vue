<template>
  <header class="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-brand-200/50 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center gap-2 group">
            <img src="/logo/AccessFold_Logo_Default.png" alt="AccessFold Logo" class="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </router-link>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-10">
          <router-link to="/features" class="text-brand-600 hover:text-brand-900 font-medium transition-colors text-[15px]">Features</router-link>
          <router-link to="/pricing" class="text-brand-600 hover:text-brand-900 font-medium transition-colors text-[15px]">Pricing</router-link>
          <router-link to="/docs" class="text-brand-600 hover:text-brand-900 font-medium transition-colors text-[15px]">Developers</router-link>
          <router-link to="/compliance" class="text-brand-600 hover:text-brand-900 font-medium transition-colors text-[15px]">Compliance</router-link>
        </nav>

        <!-- CTA -->
        <div class="hidden md:flex items-center space-x-6">
          <a href="http://localhost:3000/auth/login" class="text-brand-600 hover:text-brand-900 font-medium transition-colors text-[15px]">Log in</a>
          <a href="http://localhost:3000/auth/register" class="bg-brand-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-[15px]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
