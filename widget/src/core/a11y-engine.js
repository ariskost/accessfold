import injectStyles from '../styles/inject.css?inline';

export class A11yEngine {
    constructor(stateManager) {
        this.state = stateManager;
        this.styleId = 'accessibility-fold-injected-styles';
        this.init();
    }

    init() {
        this.injectGlobalStyles();
        this.applyAll();

        // Subscribe to state changes
        this.state.subscribe((newState, key, value) => {
            if (key === 'all') {
                this.applyAll();
            } else {
                this.applyFeature(key, value);
            }
        });
    }

    injectGlobalStyles() {
        if (!document.getElementById(this.styleId)) {
            const style = document.createElement('style');
            style.id = this.styleId;
            style.textContent = injectStyles;
            document.head.appendChild(style);
        }
    }

    applyAll() {
        const s = this.state.state;
        Object.keys(s).forEach(key => this.applyFeature(key, s[key]));
    }

    applyFeature(key, value) {
        const html = document.documentElement;

        switch (key) {
            // VISUAL
            case 'fontSize':
                // We zoom the text by adjusting the root em or using a transform scale on body?
                // A safer way for compatibility is setting a zoom class or variable
                html.style.fontSize = value === 100 ? '' : `${value}%`;
                break;

            case 'lineHeight':
                // Allows for direct mappings (e.g. 150 = 1.5x, 200 = 2.0x)
                if (value === 100) {
                    html.style.lineHeight = '';
                } else if (value > 100) {
                    html.style.lineHeight = (value / 100).toString();
                } else {
                    html.style.lineHeight = value;
                }
                break;

            case 'letterSpacing':
                // Treat > 0 as percentages applied to ems (e.g. 10 -> 0.1em, 25 -> 0.25em)
                html.style.letterSpacing = value === 0 ? '' : `${value / 100}em`;
                break;

            case 'textAlign':
                if (value === 'left') html.style.textAlign = '';
                else html.style.textAlign = value;
                break;

            case 'fontFamily':
                html.classList.remove('af-font-dyslexia', 'af-font-readable');
                if (value !== 'default') {
                    html.classList.add(`af-font-${value}`);
                }
                break;

            // COLOR
            case 'titleColor':
                // We define a CSS variable on the HTML root
                if (value) {
                    html.style.setProperty('--af-title-override', value);
                } else {
                    html.style.removeProperty('--af-title-override');
                }
                break;

            case 'textColor':
                if (value) {
                    html.style.setProperty('--af-text-override', value);
                } else {
                    html.style.removeProperty('--af-text-override');
                }
                break;

            case 'backgroundColor':
                if (value) {
                    html.style.setProperty('--af-bg-override', value);
                } else {
                    html.style.removeProperty('--af-bg-override');
                }
                break;

            case 'contrast':
                html.classList.remove('af-augment-high-contrast', 'af-augment-invert', 'af-augment-grayscale', 'af-augment-light-contrast', 'af-augment-dark-contrast');
                if (value !== 'normal') {
                    html.classList.add(`af-augment-${value}`);
                }
                break;

            case 'saturation':
                html.style.filter = value === 100 ? '' : `saturate(${value}%)`;
                break;

            // NAVIGATION
            case 'cursorSize':
                html.classList.toggle('af-cursor-big', value === 'big');
                break;

            case 'highlightLinks':
                html.classList.toggle('af-highlight-links', value);
                break;

            case 'highlightHeadings':
                html.classList.toggle('af-highlight-headings', value);
                break;

            // MOTION
            case 'stopAnimations':
                html.classList.toggle('af-stop-animations', value);
                break;
        }
    }
}
