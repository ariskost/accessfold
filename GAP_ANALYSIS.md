# Accessibility Fold — Gap Analysis

This document compares the current system implementation against the requirements defined in `GENERAL_ANALYSIS.md` and `TECHNICAL_ANALYSIS.md`.

## 📊 Executive Summary
*   **Architecture**: ✅ **90% Match**. The core technical stack (Vanilla JS Widget, Laravel API, Nuxt Dashboard) aligns perfectly with the `TECHNICAL_ANALYSIS.md`.
*   **Core Logic**: ✅ **80% Match**. State management, DOM isolation, and data flow are implemented correctly.
*   **Feature Set**: ⚠️ **40% Match**. We have the "MVP" features, but are missing the extensive list of profiles and advanced tools listed in `GENERAL_ANALYSIS.md`.

---

## 1. Widget Feature Gaps (`GENERAL_ANALYSIS.md`)

| Feature Category | Implemented ✅ | Missing / To Do ❌ |
| :--- | :--- | :--- |
| **Text & Visual** | Text Size, Contrast, Dyslexia Font, Highlight Links | Text Spacing, Line Height, Text Align, Hide Images |
| **Navigation** | Stop Animations, Cursor | Screen Reader Controls (Speed/Modes), Page Structure Outline, Dictionary |
| **Advanced Tools** | *None* | **Reading Mask**, **Magnifier**, Audio Feedback |
| **Profiles** | *None* (Individual toggles only) | **Motor Impaired**, **Blind**, **ADHD**, **Cognitive**, **Seizure Safe**, **Vision Impaired** |
| **AI Tools** | *None* (Backend Hooks Ready) | Frontend integration for Auto-Alt Text & Simplifier (Simulated) |

> **Critical Gap**: The "Profiles" system (grouping settings into presets) is completely missing from the Widget UI.

---

## 2. Technical Architecture Gaps (`TECHNICAL_ANALYSIS.md`)

| Layer | Status | Gap Details |
| :--- | :--- | :--- |
| **Widget (Client)** | 🟢 Good | Needs to support "profiles" state, not just individual settings. |
| **SaaS Control** | 🟡 Partial | Database has settings, but Widget doesn't dynamically lock features based on "Plan" yet. |
| **Compliance** | 🔴 Early | `Audits` table exists, but no automated scanning engine (Puppeteer/Axe) is connected. Snapshot generation is missing. |
| **Analytics** | 🟡 Basic | `FeatureUsageLog` exists, but privacy-safe "session hashing" and aggregation logic needs hardening. |
| **Integrations** | 🔴 Missing | No WordPress plugin or GTM template created yet. |

---

## 3. Recommended Next Steps

### Immediate Actions (v1.1)
1.  **Implement Profiles**: Add the logic to `state.js` to apply groups of settings (e.g., "ADHD Profile" = Stop Animation + Reading Mask).
2.  **Add Advanced Tools**: Build the `Reading Mask` and `Magnifier` features in the Widget.
3.  **Expand Visual Controls**: Add Line Height, Spacing, and Align tools.

### Secondary Actions (v1.2)
1.  **Integration Packages**: Build the WordPress Plugin wrapper.
2.  **Compliance Engine**: Connect a real scanning library to the Audit API.
