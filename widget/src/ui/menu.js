import widgetStyles from '../styles/widget.css?inline';


export class WidgetUI {
  constructor(stateManager) {
    this.state = stateManager;
    this.root = null;
    this.panel = null;
    this.isOpen = false;
    this.render();
  }

  render() {
    // container
    const container = document.createElement('div');
    container.id = 'accessibility-fold-widget';
    document.body.appendChild(container);

    // shadow root
    const shadow = container.attachShadow({ mode: 'open' });
    this.root = shadow;

    // styles
    const style = document.createElement('style');
    style.textContent = widgetStyles;
    shadow.appendChild(style);

    // trigger button
    const trigger = document.createElement('button');
    trigger.className = 'af-trigger';
    trigger.id = 'af-trigger-btn';
    trigger.setAttribute('aria-label', 'Accessibility Options');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'af-panel');
    trigger.innerHTML = `<img src="https://accessfold.unionfold.com/logo/AccessFold_Logo_Light.png" alt="Accessibility Options" style="width: 28px; height: 28px; object-fit: contain; pointer-events: none;" />`; // Person Standing Icon
    trigger.onclick = () => this.togglePanel();
    shadow.appendChild(trigger);

    // panel
    this.panel = document.createElement('div');
    this.panel.className = 'af-panel';
    this.panel.id = 'af-panel';
    // Accessibility for panel
    this.panel.setAttribute('role', 'dialog');
    this.panel.setAttribute('aria-modal', 'true');
    this.panel.setAttribute('aria-label', 'Accessibility Adjustments');

    this.panel.innerHTML = `
      <div class="af-header">
        <img src="https://accessfold.unionfold.com/logo/AccessFold_Logo_Default.png" alt="Accessibility Fold" style="height: 32px; width: auto; object-fit: contain;" />
        <h2 class="af-title">
          AccessFold
        </h2>
        <button class="af-reset-btn" id="af-reset">Reset All</button>
      </div>
      <div class="af-body">
        
        <!-- PROFILES -->
        <div class="af-section">
          <div class="af-section-title">Accessibility Profiles</div>
          <p style="font-size: 11px; color: #64748b; margin-top: 0; margin-bottom: 12px;">Choose the right profile for you</p>
          <div class="af-profiles-grid">
            ${this.renderProfile('motor-keyboard', 'Keyboard Navigation (Motor)', 'This profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements.', 'NOTE: This profile prompts automatically for keyboard users.', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8h.01" /><path d="M12 12h.01" /><path d="M14 8h.01" /><path d="M16 12h.01" /><path d="M18 8h.01" /><path d="M6 8h.01" /><path d="M7 16h10" /><path d="M8 12h.01" /><rect width="20" height="16" x="2" y="4" rx="2" /></svg>`)}
            
            ${this.renderProfile('blind-screenreader', 'Blind Users (Screen Reader)', 'This profile adjust the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is software that is installed on the blind user’s computer and smartphone, and websites should ensure compatibility with it.', 'NOTE: This profile prompts automatically to screen-readers.', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" /><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" /></svg>`)}
            
            ${this.renderProfile('seizure-safe', 'Seizure Safe Profile', 'This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations.', '', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" /><path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" /><path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" /><path d="m2 2 20 20" /></svg>`)}
            
            ${this.renderProfile('vision-impaired', 'Vision Impaired Profile', 'This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.', '', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>`)}
            
            ${this.renderProfile('adhd-friendly', 'ADHD Friendly Profile', 'This profile significantly reduces distractions, to help people with ADHD and Neurodevelopmental disorders browse, read, and focus on the essential elements of the website more easily.', '', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /></svg>`)}
            
            ${this.renderProfile('dyslexia-friendly', 'Dyslexia Friendly Profile', 'This profile significantly enhances the reading experience for users with Dyslexia by employing specialized fonts, expanding letter spacing, increasing line heights, and providing clear structural highlights.', '', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>`)}
          </div>
        </div>

        <!-- TEXT -->
        <div class="af-section">
          <div class="af-section-title" style="display: flex; align-items: center; gap: 8px;">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16" /><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /><path d="M9 20h6" /></svg>
             Readable Experience
          </div>
          <div class="af-grid">
             ${this.renderBtn('fontSize', 110, 'Bigger Text', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 11 4-4 4 4" /><path d="M18 16V7" /><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" /><path d="M3.304 13h6.392" /></svg>')}
             ${this.renderBtn('fontSize', 100, 'Normal Text', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16" /><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /><path d="M9 20h6" /></svg>')}
             ${this.renderCycleBtn('fontFamily', ['default', 'dyslexia', 'readable'], ['Dyslexia Friendly', 'Dyslexia Font', 'Readable Font'], '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16" /><path d="m6 16 6-12 6 12" /><path d="M8 12h8" /></svg>')}
             ${this.renderToggle('highlightLinks', true, 'Highlight Links', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>')}
             ${this.renderToggle('highlightHeadings', true, 'Highlight Titles', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h12" /><path d="M6 20V4" /><path d="M18 20V4" /></svg>')}
             ${this.renderCycleBtn('textAlign', ['left', 'center', 'right'], ['Align Left', 'Align Center', 'Align Right'], '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 5H3" /><path d="M15 12H3" /><path d="M17 19H3" /></svg>')}
             ${this.renderCycleBtn('letterSpacing', [0, 10, 25, 50], ['Letter Spacing', 'Spacing 10%', 'Spacing 25%', 'Spacing 50%'], '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 8 4 4-4 4" /><path d="M2 12h20" /><path d="m6 8-4 4 4 4" /></svg>')}
             ${this.renderCycleBtn('lineHeight', [100, 150, 175, 200], ['Line Height', 'Height 1.5x', 'Height 1.75x', 'Height 2x'], '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20" /><path d="m8 18 4 4 4-4" /><path d="m8 6 4-4 4 4" /></svg>')}
          </div>
        </div>

        <!-- COLOR -->
        <div class="af-section">
          <div class="af-section-title" style="display: flex; align-items: center; gap: 8px;">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></svg>
             Visuals
          </div>
          <div class="af-grid">
            ${this.renderToggle('contrast', 'light-contrast', 'Light Contrast', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>')}
            ${this.renderToggle('contrast', 'dark-contrast', 'Dark Contrast', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg>')}
            ${this.renderToggle('contrast', 'high-contrast', 'High Contrast', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12v12z" /></svg>')}
            ${this.renderToggle('contrast', 'invert', 'Invert Colors', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></svg>')}
            ${this.renderToggle('saturation', 50, 'Low Saturation', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>')}
            ${this.renderToggle('saturation', 200, 'High Saturation', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>')}
            ${this.renderToggle('saturation', 0, 'Grayscale', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /><path d="m2 2 20 20" /></svg>')}
            ${this.renderColorPickerBtn('titleColor', ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7', ''], 'Title Colors', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11-6 6v3h9l3-3" /><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" /></svg>')}
            ${this.renderColorPickerBtn('textColor', ['#000000', '#ffffff', '#1e40af', '#166534', '#991b1b', '#374151', ''], 'Text Colors', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16" /><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /><path d="M9 20h6" /></svg>')}
            ${this.renderColorPickerBtn('backgroundColor', ['#ffffff', '#000000', '#fef08a', '#dcfce7', '#dbeafe', '#f3e8ff', ''], 'Backgrounds', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="6" x="2" y="2" rx="2" /><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect width="4" height="6" x="8" y="16" rx="1" /></svg>')}
            ${this.renderToggle('stopAnimations', true, 'Pause Animations', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>')}
          </div>
        </div>

      </div>
      <div class="af-footer">
        Powered by AccessFold
      </div>
    `;

    shadow.appendChild(this.panel);

    // Bind events
    this.bindEvents(shadow);
  }

  renderBtn(key, value, label, icon) {
    return `<button class="af-feature-btn" role="button" aria-pressed="false" data-key="${key}" data-val="${value}">
      <span class="af-icon">${icon}</span>
      <span class="af-feature-label">${label}</span>
      </button>`;
  }

  renderToggle(key, value, label, icon) {
    // A toggle needs to check if current state matches value
    return `<button class="af-feature-btn" role="switch" aria-checked="false" data-key="${key}" data-val="${value}" data-toggle="true">
      <span class="af-icon">${icon}</span>
      <span class="af-feature-label">${label}</span>
      </button>`;
  }

  renderCycleBtn(key, valuesArray, labelsArray, icon) {
    // Embed the arrays as JSON strings
    return `<button class="af-feature-btn" role="button" aria-pressed="false" data-key="${key}" data-cycle='${JSON.stringify(valuesArray)}' data-labels='${JSON.stringify(labelsArray)}'>
      <span class="af-icon">${icon}</span>
      <span class="af-feature-label" data-label-target="true">${labelsArray[0]}</span>
      </button>`;
  }

  renderColorPickerBtn(key, colorsArray, label, icon) {
    const swatchesHtml = colorsArray.map(hex =>
      `<div class="af-color-swatch" data-key="${key}" data-color="${hex}" style="background-color: ${hex || 'transparent'}" title="${hex || 'Reset'}"></div>`
    ).join('');

    return `
      <div class="af-color-picker-container" data-key="${key}">
        <button class="af-color-picker-trigger" aria-haspopup="true" aria-expanded="false">
          <span class="af-icon">${icon}</span>
          <span class="af-feature-label">${label}</span>
        </button>
        <div class="af-color-picker-grid" role="group" aria-label="${label} Palette">
          ${swatchesHtml}
        </div>
      </div>
    `;
  }

  renderProfile(id, title, desc, note, icon) {
    return `
        <div class="af-profile-card" data-profile="${id}">
          <div class="af-profile-header">
            <div class="af-profile-icon">${icon}</div>
            <div class="af-profile-title-text">${title}</div>
          </div>
          <p class="af-profile-desc">${desc}</p>
          ${note ? `<p class="af-profile-note">${note}</p>` : ''}
        </div>`;
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
    this.panel.classList.toggle('open', this.isOpen);

    const triggerBtn = this.root.getElementById('af-trigger-btn');
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', this.isOpen.toString());
    }

    // Force focus into panel for keyboard users when opened
    if (this.isOpen) {
      setTimeout(() => {
        const firstFocusable = this.root.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) firstFocusable.focus();
      }, 50);
    }

    this.updateUI(); // refresh active states
  }

  bindEvents(shadow) {
    // Reset
    const resetBtn = shadow.getElementById('af-reset');
    if (resetBtn) {
      resetBtn.onclick = () => {
        this.state.reset();
      };
    }

    // Color Pickers
    const pickerContainers = shadow.querySelectorAll('.af-color-picker-container');
    pickerContainers.forEach(container => {
      const trigger = container.querySelector('.af-color-picker-trigger');
      trigger.onclick = () => {
        // Toggle attribute for screen readers
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', (!isExpanded).toString());

        // Close others, toggle this one
        pickerContainers.forEach(c => c !== container && c.classList.remove('open'));
        container.classList.toggle('open');
      };

      const swatches = container.querySelectorAll('.af-color-swatch');
      swatches.forEach(swatch => {
        swatch.onclick = (e) => {
          e.stopPropagation();
          const key = swatch.dataset.key;
          const color = swatch.dataset.color;
          this.state.set(key, color);
          // Auto close on selection to save space
          container.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        };
      });
    });

    // Buttons
    const buttons = shadow.querySelectorAll('.af-feature-btn');
    buttons.forEach(btn => {
      btn.onclick = () => {
        const key = btn.dataset.key;

        // Cycle Button Logic
        if (btn.hasAttribute('data-cycle')) {
          const values = JSON.parse(btn.dataset.cycle);
          const current = this.state.get(key);

          let currentIndex = values.indexOf(current);
          // Provide fallback if current state isn't precisely found
          if (currentIndex === -1) currentIndex = 0;

          const nextIndex = (currentIndex + 1) % values.length;
          this.state.set(key, values[nextIndex]);
          return;
        }

        let val = btn.dataset.val;
        const isToggle = btn.dataset.toggle === 'true';

        // Type coercion
        if (val === 'true') val = true;
        if (val === 'false') val = false;
        if (val !== '' && !isNaN(Number(val))) val = Number(val);

        // Toggle logic
        const current = this.state.get(key);

        if (isToggle) {
          // For boolean toggles
          if (typeof current === 'boolean') {
            val = !current;
          }
          // For string/number toggles (e.g. contrast: 'high-contrast' -> 'normal')
          else if (current === val) {
            if (key === 'contrast') val = 'normal';
            if (key === 'fontFamily') val = 'default';
            if (key === 'saturation') val = 100;
            if (key === 'textAlign') val = 'left';
          }
        }

        this.state.set(key, val);
      };
    });

    // Profiles
    const profiles = shadow.querySelectorAll('.af-profile-card');
    profiles.forEach(card => {
      // Profiles are technically clickable divs, but need to act like buttons for keyboard
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      const applyProfileEvent = () => {
        const id = card.dataset.profile;
        this.state.applyProfile(id); // Use the new preset handler
      };

      card.onclick = applyProfileEvent;
      card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyProfileEvent();
        }
      };
    });

    // Global Keydown (Escape to close widget)
    shadow.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.togglePanel();
        const triggerBtn = this.root.getElementById('af-trigger-btn');
        if (triggerBtn) triggerBtn.focus(); // return focus to trigger
      }
    });

    // Subscribe to state changes to update UI
    this.state.subscribe(() => this.updateUI());
  }

  updateUI() {
    if (!this.root) return;

    const buttons = this.root.querySelectorAll('.af-feature-btn');
    buttons.forEach(btn => {
      const key = btn.dataset.key;
      const currentVal = this.state.get(key);
      let isActive = false;

      if (btn.hasAttribute('data-cycle')) {
        const values = JSON.parse(btn.dataset.cycle);
        const labels = JSON.parse(btn.dataset.labels);
        const labelEl = btn.querySelector('[data-label-target]');

        let currentIndex = values.indexOf(currentVal);
        if (currentIndex === -1) currentIndex = 0;

        // Update dynamic label text
        if (labelEl && labels[currentIndex]) {
          labelEl.textContent = labels[currentIndex];
        }

        // It's considered "active" if it's not the first default value (index 0)
        isActive = currentIndex > 0;
      } else {
        const targetVal = btn.dataset.val;

        // Boolean check
        if (typeof currentVal === 'boolean') {
          isActive = currentVal;
        }
        // String/Number check
        else {
          // We enter loose equality hell here, so be careful
          isActive = String(currentVal) === String(targetVal);
        }
      }

      if (isActive) {
        btn.classList.add('active');
        // Update ARIA dynamically
        if (btn.hasAttribute('aria-pressed')) btn.setAttribute('aria-pressed', 'true');
        if (btn.hasAttribute('aria-checked')) btn.setAttribute('aria-checked', 'true');
      } else {
        btn.classList.remove('active');
        if (btn.hasAttribute('aria-pressed')) btn.setAttribute('aria-pressed', 'false');
        if (btn.hasAttribute('aria-checked')) btn.setAttribute('aria-checked', 'false');
      }
    });

    // Update Swatch Active States
    const swatches = this.root.querySelectorAll('.af-color-swatch');
    swatches.forEach(swatch => {
      const key = swatch.dataset.key;
      const targetColor = swatch.dataset.color;
      const currentColor = this.state.get(key);

      if (currentColor === targetColor) {
        swatch.classList.add('active');
      } else {
        swatch.classList.remove('active');
      }
    });

    // Update Profile Cards Active States
    const profiles = this.root.querySelectorAll('.af-profile-card');
    const activeProfile = this.state.get('activeProfile');
    profiles.forEach(card => {
      if (card.dataset.profile === activeProfile) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
}
