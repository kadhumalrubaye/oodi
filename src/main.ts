import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.vue'
// import store from './store'
// Vuetify

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

import.meta.glob([
    '../images/**',
    '../fonts/**',
    '../img/**',
]);
const app =createApp(App)
// app.use(store)
app.use(vuetify)
app.mount('#app')







