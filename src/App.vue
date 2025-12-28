<template>
    <div id="app">
        <nav class="app-nav">
            <router-link to="/" class="app-nav__link">Главная</router-link>
            <router-link to="/contact" class="app-nav__link">Контактная форма</router-link>
            <router-link to="/registration" class="app-nav__link">Регистрация</router-link>
            <router-link to="/survey" class="app-nav__link">Опрос</router-link>
        </nav>

        <main class="app-main">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    console.log('Form Generator App loaded');
});
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Inter', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #f8f9fa;
}

.app-nav {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;

    &__link {
        margin-right: 1.5rem;
        text-decoration: none;
        color: #333;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: #f0f0f0;
        }

        &.router-link-active {
            color: #0d6efd;
            background-color: rgba(13, 110, 253, 0.1);
        }
    }
}

.app-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}
</style>
