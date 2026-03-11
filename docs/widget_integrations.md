# Accessibility Fold Widget Integrations

This document details the architecture of the Accessibility Fold platform, how the widget is integrated internally, and comprehensive installation guides for integrating the widget into external platforms.

---

## 🏗️ System Architecture

The Accessibility Fold platform is built on a modern, decoupled tech stack:

*   **Backend API (`backend` folder):** A robust **Laravel 11** application serving RESTful APIs, handling authentication (via Laravel Sanctum), business logic, and database operations (MySQL).
*   **Dashboard (`dashboard` folder):** A powerful **Nuxt 3** (Vue 3 framework) application providing the authenticated user interface for managing settings, analytics, and billing.
*   **Marketing Site (`www` folder):** A fast, lightweight **Vue 3** (Vite) Single Page Application (SPA) designed for marketing, documentation, and user onboarding.
*   **Widget (`widget` folder):** A standalone, vanilla JavaScript application built with Vite. It encapsulates its own UI and state, injecting styles via a Web Component `ShadowRoot` to prevent CSS conflicts with host websites.

### Internal Integration: Marketing Site (`www`)

To showcase the widget on our own marketing website (`www`), it was integrated as a local npm dependency:

1.  **Dependency Link:** The widget package was added to `www/package.json` pointing locally: `"accessibility-fold-widget": "file:../widget"`.
2.  **Initialization:** In the main entry file (`www/src/main.js`), the widget is imported and initialized immediately after the Vue application mounts:
    ```javascript
    import { init as initWidget } from 'accessibility-fold-widget';
    initWidget(); // Injects the Shadow DOM button into the layout
    ```
Because the widget handles its own styling internally via Shadow DOM, no global CSS imports were strictly necessary for it to function correctly on the Vue site.

---

## 🚀 External Platform Installation Guides

For external users, the widget will be served via our CDN (e.g., `https://cdn.accessibilityfold.com/widget.js`). The initialization script requires a License Key associated with the user's verified domain.

### 1. HTML / CSS / JS (Custom Websites)

This is the standard installation method for custom-coded websites or platforms without dedicated plugins.

**Steps:**
1. Log in to your Accessibility Fold Dashboard.
2. Navigate to **Widget Settings** and copy your unique installation `<script>` tag.
3. Open your website's main HTML file (or your global footer template).
4. Paste the script tag just before the closing `</body>` tag.

**Example Code snippet:**
```html
<!-- Accessibility Fold Widget -->
<script src="https://cdn.accessibilityfold.com/widget.js" data-license="YOUR_LICENSE_KEY" data-auto-init="true" defer></script>
```

---

### 2. WordPress Plugin

For WordPress users, we provide a dedicated plugin for seamless integration without touching code.

**Steps:**
1. Log in to your WordPress Admin Dashboard.
2. Navigate to **Plugins** > **Add New**.
3. Search for "Accessibility Fold" and click **Install Now**, then **Activate**.
4. In the left sidebar, click the new **Accessibility Fold** menu item.
5. Paste your **License Key** (found in your Accessibility Fold dashboard) into the settings page and click **Save Changes**.
6. The widget will now appear on your live site.

*(Note: The plugin automatically hooks into `wp_footer` to inject the necessary script tag securely).*

---

### 3. Webflow Component

Webflow allows custom code injection at the project or page level.

**Steps:**
1. Open your Webflow project in the Designer.
2. Navigate to **Project Settings** (the W icon in the top left -> Project Settings).
3. Go to the **Custom Code** tab.
4. Scroll down to the **Footer Code** section.
5. Paste your Accessibility Fold installation `<script>` tag (obtained from your dashboard).
6. Click **Save Changes** and then **Publish** your site.

---

### 4. PrestaShop Add-on (Module)

PrestaShop utilizes Modules (Add-ons) to extend store functionality.

**Steps:**
1. Download the Accessibility Fold `.zip` module file from your dashboard or the official Addons Marketplace.
2. Log in to your PrestaShop Back Office.
3. Navigate to **Modules** > **Module Manager**.
4. Click **Upload a module** and select the `.zip` file you downloaded.
5. Once installed, click **Configure**.
6. Paste your **License Key** and select **Save**. The module will automatically inject the script into your store's theme footer.

---

### 5. Shopify App

The easiest way to integrate with Shopify is via our dedicated Shopify App.

**Steps:**
1. Go to the Shopify App Store and search for "Accessibility Fold".
2. Click **Add App** and follow the prompts to install it on your store.
3. Once installed, the app will open within your Shopify Admin.
4. Connect your existing Accessibility Fold account or create a new one.
5. Enable the App embed block by going to your store's **Online Store** > **Themes** > **Customize** > **App Embeds**.
6. Toggle "Accessibility Fold" on, click **Save**, and the widget is live!

Alternatively, for manual installation without the App Store, you can paste the `<script>` tag in your Shopify admin under **Online Store** > **Themes** > **Edit code** > `theme.liquid`, just above `</body>`.
