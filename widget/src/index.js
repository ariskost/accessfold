import { StateManager } from './core/state.js';
import { A11yEngine } from './core/a11y-engine.js';
import { WidgetUI } from './ui/menu.js';

class AccessibilityFold {
    constructor(config = {}) {
        this.config = config;
        this.state = new StateManager();
        this.engine = new A11yEngine(this.state);
        this.ui = new WidgetUI(this.state);

        console.log('Accessibility Fold Widget Initialized');
    }

    destroy() {
        // cleanup logic
        this.state.reset();
    }
}

// Global initialization function
export const init = (config) => {
    return new AccessibilityFold(config);
};

// Auto-init if script tag has data-auto-init
if (document.currentScript && document.currentScript.dataset.autoInit) {
    init();
}
