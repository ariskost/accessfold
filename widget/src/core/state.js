/**
 * Accessibility Fold State Manager
 * Handles persistence and reactivity for widget settings.
 */

const STORAGE_KEY = 'accessibility-fold-settings';

const DEFAULT_STATE = {
    // Text
    fontSize: 100, // percentage
    lineHeight: 100, // percentage
    letterSpacing: 0, // px
    wordSpacing: 0, // px
    textAlign: 'left', // left | justify | center | right
    fontFamily: 'default', // default | dyslexia | readable

    // Color
    contrast: 'normal', // normal | light-contrast | dark-contrast | high-contrast | invert | grayscale
    saturation: 100, // percentage
    titleColor: '', // hex
    textColor: '', // hex
    backgroundColor: '', // hex
    profile: 'none', // none | protanopia | deuteranopia | tritanopia

    // Navigation
    cursorSize: 'normal', // normal | big
    cursorGuide: false, // boolean
    highlightLinks: false, // boolean
    highlightHeadings: false, // boolean

    // Motion
    stopAnimations: false, // boolean

    // Metadata
    activeProfile: 'none', // Tracks bundle state
};

export class StateManager {
    constructor() {
        this.state = { ...DEFAULT_STATE };
        this.listeners = [];
        this.load();
    }

    load() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                this.state = { ...DEFAULT_STATE, ...JSON.parse(stored) };
            }
        } catch (e) {
            console.warn('Accessibility Fold: Failed to load settings', e);
        }
    }

    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.warn('Accessibility Fold: Failed to save settings', e);
        }
    }

    get(key) {
        return this.state[key];
    }

    set(key, value) {
        if (this.state[key] !== value) {
            this.state[key] = value;
            this.save();
            this.notify(key, value);
        }
    }

    reset() {
        this.state = { ...DEFAULT_STATE };
        this.save();
        this.notify('all', this.state);
    }

    // NEW: Apply a specific profile preset
    applyProfile(profileId) {
        // If clicking the same profile, toggle it off
        if (this.state.activeProfile === profileId) {
            this.reset();
            return;
        }

        // First reset everything to default before applying the specific profile overrides
        // We only reset state memory internally, don't trigger mass updates yet
        this.state = { ...DEFAULT_STATE, activeProfile: profileId };

        // Apply specific overrides based on the selected profile
        switch (profileId) {
            case 'seizure-safe':
                this.state.stopAnimations = true;
                // Optional: we can add lower saturation for seizure safety
                // this.state.saturation = 80; 
                break;
            case 'vision-impaired':
                this.state.contrast = 'high-contrast';
                this.state.fontSize = 110;
                break;
            case 'adhd-friendly':
                this.state.stopAnimations = true;
                this.state.highlightLinks = true;
                break;
            case 'dyslexia-friendly':
                this.state.fontFamily = 'dyslexia';
                this.state.letterSpacing = 25;
                this.state.lineHeight = 150;
                this.state.textAlign = 'left';
                this.state.highlightHeadings = true;
                break;
            case 'motor-keyboard':
                // Primarily handled by native keyboard accessible UI & focus rings
                this.state.cursorSize = 'big';
                break;
            case 'blind-screenreader':
                // Primarily handled by native ARIA & screen reader tools
                this.state.stopAnimations = true;
                break;
            default:
                break;
        }

        this.save();
        this.notify('all', this.state); // Trigger full UI/A11yEngine re-sync
    }

    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(cb => cb !== callback);
        };
    }

    notify(key, value) {
        this.listeners.forEach(cb => cb(this.state, key, value));
    }
}
