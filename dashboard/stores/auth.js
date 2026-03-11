import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        loading: false,
        error: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login(email, password) {
            this.loading = true;
            this.error = null;
            try {
                // API call
                const { data } = await useFetch('/api/login', {
                    method: 'POST',
                    body: { email, password }
                });

                if (data.value) {
                    this.token = data.value.access_token;
                    this.user = data.value.user;
                    // Persist token (simplified)
                    localStorage.setItem('auth_token', this.token);
                    navigateTo('/');
                }
            } catch (err) {
                this.error = err.message || 'Login failed';
            } finally {
                this.loading = false;
            }
        },
        async register(name, email, password) {
            this.loading = true;
            try {
                const { data } = await useFetch('/api/auth/register', {
                    method: 'POST',
                    body: { name, email, password }
                });
                if (data.value) {
                    this.token = data.value.token;
                    this.user = data.value.user;
                    localStorage.setItem('auth_token', this.token);
                    navigateTo('/');
                }
            } catch (err) {
                this.error = 'Registration failed';
            } finally {
                this.loading = false;
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('auth_token');
            navigateTo('/auth/login');
        },
        async init() {
            const token = localStorage.getItem('auth_token');
            if (token) {
                this.token = token;
                try {
                    const { data, error } = await useFetch('/api/user', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if (data.value) {
                        this.user = data.value;
                    } else if (error.value) {
                        this.logout();
                    }
                } catch (e) {
                    this.logout();
                }
            }
        }
    }
});
