import { defineStore } from 'pinia';

export const useAiStore = defineStore('ai', {
    state: () => ({
        loading: false,
        error: null,
        generatedAltText: null,
        simplifiedContent: null,
        suggestedFix: null,
    }),
    actions: {
        async generateAltText(imageUrl) {
            this.loading = true;
            this.error = null;
            try {
                // In a real app, use fetch with auth headers
                // For now we mock the successful response or call the mock backend if running
                // const { data } = await useFetch('/api/ai/alt-text', { ... });

                await new Promise(r => setTimeout(r, 1000)); // Simulate net lag
                this.generatedAltText = `AI Description for ${imageUrl}`;
            } catch (e) {
                this.error = e.message;
            } finally {
                this.loading = false;
            }
        },

        async simplifyContent(text) {
            this.loading = true;
            try {
                await new Promise(r => setTimeout(r, 1000));
                this.simplifiedContent = `[Simplified] ${text.substring(0, 20)}...`;
            } catch (e) {
                this.error = e.message;
            } finally {
                this.loading = false;
            }
        },

        async getFixSuggestion(violation, snippet) {
            this.loading = true;
            try {
                await new Promise(r => setTimeout(r, 1000));
                this.suggestedFix = `<!-- Fixed ${violation} -->\n${snippet.replace('red', 'blue')}`;
            } catch (e) {
                this.error = e.message;
            } finally {
                this.loading = false;
            }
        }
    }
});
