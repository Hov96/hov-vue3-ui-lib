<template>
    <div class="app">
        <h1 class="title">Demonstration for components</h1>
        <Button />

        <Input v-model="test" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'

const test = ref<string>('test value')
</script>

<style scoped>
.app {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.title {
    color: var(--color-primary);
}
</style>
