hov-vue3-ui-lib
A modern, lightweight, and customizable UI component library for Vue 3. hov-vue3-ui-lib is designed to provide developers with a simple and elegant set of ready-to-use components, focusing on speed and a great developer experience.

✨ Key Features
Vue 3 Composition API: Built from the ground up to take full advantage of the Vue 3 Composition API for better performance and reusability.

Lightweight & Fast: Minimal bundle size with no unnecessary dependencies.

Customizable: Easily extend and style components to match your project's design system.

Responsive: Components are designed to look and work great on all devices, from mobile to desktop.

TypeScript Support: Fully typed to provide a seamless development experience.

🚀 Installation
To get started, install the package from npm. Make sure you are in a Vue 3 project.

npm i hov-vue3-ui-lib

🧑‍💻 Usage
You can import and use any component directly in your Vue 3 application. The components are tree-shakeable, meaning you only bundle the parts of the library you actually use.

Example
Import and use a component in your .vue file:

<template>
  <div class="app-container">
    <h1>My Vue App</h1>
    <p>Using npm i hov-vue3-ui-lib components.</p>
    
    <!-- Example of a component from your library -->
    <h-pill size="md" color="blue">
      New
    </h-pill>
    
    <!-- An example button to control a modal -->
    <button @click="showModal = true">Show Modal</button>

    <!-- Example of a modal component -->
    <h-modal v-model="showModal" size="sm">
      <template #default>
        <h2>Hello from the Modal!</h2>
        <p>This is a simple modal component.</p>
      </template>
    </h-modal>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { HPill, HModal } from 'hov-vue3-ui-lib';

const showModal = ref(false);
</script>

<style scoped>
.app-container {
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
}
</style>

🛠️ Local Development
If you want to contribute to the project or run the source code locally, follow these steps:

Clone the repository:

git clone https://github.com/Hov96/hov-vue3-ui-lib.git

Navigate to the project directory:

cd hov-vue3-ui-lib

Install dependencies:

npm install

Run the development server:

npm run dev

This will start a local server, usually at http://localhost:5173, so you can test your changes.

🤝 Contributing
Contributions are always welcome! Feel free to open an issue or submit a pull request

💖 Credits
Developed and maintained by @Hov96 (https://github.com/Hov96).
