<template>
    <h1>组件库</h1>
    <ul>
        <li>特点1</li>
        <li>特点2</li>
        <li>特点3</li>
        <li>特点4</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue';

export interface ITest {
    name: string
}

export default defineComponent({
    name: 'App',
    setup() {
        onMounted(() => {
            getCurrentInstance()?.appContext.config.globalProperties.$echo()
        })
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
