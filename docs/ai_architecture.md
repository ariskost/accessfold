# AI Readiness Layer Architecture

This document outlines the architecture for integrating Generative AI features into Accessibility Fold.

## 1. Overview
The AI layer is designed as a set of **Interfaces (Contracts)** that decouple the application logic from specific AI providers (OpenAI, Anthropic, etc.). Currently, a `MockAiService` is bound to these interfaces for development.

## 2. Backend Architecture (Laravel)

### Contracts (`app/Contracts/Ai/`)
*   **`AltTextGenerator`**: Generates descriptive alt text for images.
*   **`ContentSimplifier`**: Simplifies complex text to improving readability.
*   **`AuditSuggester`**: Suggests code fixes for accessibility violations.
*   **`PdfRemediator`**: Analyzes and remediates PDF documents.

### Service Providers
*   **`AiServiceProvider`**: Binds the contracts to implementations. 
    *   *Current*: Binds to `MockAiService`.
    *   *Future*: Can bind to `OpenAiService`, `AnthropicService`, etc. based on `.env` config.

### API Endpoints
*   `POST /api/ai/alt-text`: Generates alt text.
*   `POST /api/ai/simplify`: Simplifies content.
*   `POST /api/ai/fix`: Suggests code fixes.

## 3. Frontend Architecture (Nuxt)

### Store (`stores/ai.js`)
*   Manages loading states and API calls to the backend AI endpoints.
*   Exposes actions: `generateAltText`, `simplifyContent`, `getFixSuggestion`.

### UI Components
*   **`pages/ai-tools.vue`**: A playground/utility page for users to access these tools directly.
*   **Future Integration**: These actions should be embedded into the "Audit Results" page (e.g., "Fix this issue" button).

## 4. Extension Points
To add a real AI provider (e.g., OpenAI):

1.  Create `app/Services/Ai/OpenAiService.php`.
2.  Implement the interfaces (`AltTextGenerator`, etc.) using the OpenAI API.
3.  Update `app/Providers/AiServiceProvider.php`:
    ```php
    $this->app->singleton(AltTextGenerator::class, OpenAiService::class);
    ```
4.  Add `OPENAI_API_KEY` to `.env`.
