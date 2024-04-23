import { createApp } from 'vue'
import App from './App.vue'
import Navmenu from "./components/Navmenu.vue";

//importação de global o NavMenu para ser usado em mais de um local
const app = createApp(App);
app.component('Navmenu', Navmenu);
app.mount('#app');
