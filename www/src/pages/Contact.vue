<template>
  <div class="pt-24 pb-16">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>
      
      <form class="bg-white p-8 rounded-xl shadow-lg border border-slate-200" @submit.prevent>
         <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
               <label class="block text-sm font-medium text-slate-700 mb-2">Name</label>
               <input type="text" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
            </div>
            <div>
               <label class="block text-sm font-medium text-slate-700 mb-2">Email</label>
               <input type="email" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
            </div>
         </div>
         
         <div class="mb-6">
            <label class="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea rows="4" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"></textarea>
         </div>
         
         <button class="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
            Send Message
         </button>
      </form>
    </div>
  </div>
</template>
