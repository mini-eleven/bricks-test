import { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const plugins = {
    install: (app: App) => {
        app.config.globalProperties.$echo = () => {
            console.log('a plugin')
        };
        app.component('hello-world', HelloWorld)
    }
}

export default plugins