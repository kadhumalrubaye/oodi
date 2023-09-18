import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
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



createApp(App).use(vuetify).mount('#app')


import 'bootstrap/dist/js/bootstrap.js';

