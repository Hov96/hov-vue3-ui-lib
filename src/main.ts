/**
 * @IMPORTANT
 * ----------------------------
 * This file is used **only for local development and components demonstration**.
 * It will NOT be included in the final library bundle.
 *
 * Purpose:
 * - Provides a running Vue app for previewing and testing components locally.
 * - Helps me verify UI behavior and styles during development.
 *
 * How it works:
 * - When you run `npm run dev`, this file mounts the app and shows examples of components.
 * - When you build the library (`npm run build`), this file is excluded from the output.
 *
 * Why exclude from build?
 * - The goal is to ship **only reusable components, their types, and styles** in the final package.
 * - `main.ts` is not part of the distributed code — it’s for internal development ONLY.
 */

import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

createApp(App).mount('#app')
