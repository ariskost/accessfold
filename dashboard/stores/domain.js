import { defineStore } from 'pinia';

export const useDomainStore = defineStore('domain', {
    state: () => ({
        domains: [
            { id: 1, name: 'example.com', status: 'active', score: 85, issues: 12 },
            { id: 2, name: 'myshop.com', status: 'pending', score: 0, issues: 0 },
        ],
        currentDomain: null,
        loading: false
    }),
    actions: {
        async fetchDomains() {
            this.loading = true;
            // Mock fetch
            await new Promise(r => setTimeout(r, 500));
            this.loading = false;
        },
        async addDomain(url) {
            this.loading = true;
            // Mock add
            await new Promise(r => setTimeout(r, 500));
            const newDomain = {
                id: Date.now(),
                name: url,
                status: 'pending',
                score: 0,
                issues: 0
            };
            this.domains.push(newDomain);
            this.loading = false;
            return newDomain;
        },
        getDomain(id) {
            return this.domains.find(d => d.id === Number(id));
        }
    }
});
