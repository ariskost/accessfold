import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

// Import Pages (We'll create these next)
import Home from '@/pages/Home.vue'
import Features from '@/pages/Features.vue'
import Pricing from '@/pages/Pricing.vue'
import Docs from '@/pages/Docs.vue'
// We will create these next
import Compliance from '@/pages/Compliance.vue'
import Integrations from '@/pages/Integrations.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/features', component: Features },
        { path: '/pricing', component: Pricing },
        { path: '/docs', component: Docs },
        { path: '/compliance', component: Compliance },
        { path: '/integrations', component: Integrations },
        { path: '/contact', component: Contact },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')

// Initialize Accessibility Widget
import { init as initWidget } from 'accessibility-fold-widget'
initWidget()
