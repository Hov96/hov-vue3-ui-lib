# hov-vue3-ui-lib

A modern, lightweight, and customizable **UI component library** for **Vue 3**.  
Designed to provide developers with a simple and elegant set of ready-to-use components, focusing on **speed**, **flexibility**, and a **great developer experience**.

---

## ✨ Features

-   ⚡ **Vue 3 Composition API** – built from the ground up for performance and reusability.
-   📦 **Lightweight & Fast** – minimal bundle size, no unnecessary dependencies.
-   🎨 **Customizable** – easily extend and style components to match your design system.
-   📱 **Responsive** – works beautifully on mobile and desktop.
-   🧑‍💻 **TypeScript Support** – fully typed for a seamless development experience.

---

## 🚀 Installation

Make sure you are in a Vue 3 project, then install via **npm**:

```bash
npm i hov-vue3-ui-lib
```

---

## 🧑‍💻 Usage

All components are **tree-shakeable**, so you only bundle what you use.

Example usage in a `.vue` file:

```vue
<template>
    <div class="app-container">
        <h1>My Vue App</h1>
        <p>Using components from <code>hov-vue3-ui-lib</code>.</p>

        <!-- Example Pill Component -->
        <h-pill size="md" color="blue">New</h-pill>

        <!-- Example Button to control a modal -->
        <button @click="showModal = true">Show Modal</button>

        <!-- Example Modal Component -->
        <h-modal v-model="showModal" size="sm">
            <template #default>
                <h2>Hello from the Modal!</h2>
                <p>This is a simple modal component.</p>
            </template>
        </h-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { HPill, HModal } from 'hov-vue3-ui-lib'

const showModal = ref(false)
</script>

<style scoped>
.app-container {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
}
</style>
```

---

## 🛠️ Local Development

If you want to contribute or run the project locally:

```bash
# Clone the repository
git clone https://github.com/Hov96/hov-vue3-ui-lib.git

# Navigate to the project
cd hov-vue3-ui-lib

# Install dependencies
npm install

# Start local development server
npm run dev
```

The project will run at [http://localhost:5173](http://localhost:5173).

---

## 🤝 Contributing

Contributions are always welcome! 🎉  
Feel free to open an **issue** or submit a **pull request**.

---

## 💖 Credits

Developed and maintained by [**@Hov96**](https://github.com/Hov96).
