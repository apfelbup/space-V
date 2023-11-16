import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import components from "@/UI"

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
});

app.use(createPinia()).use(router).mount('#app')