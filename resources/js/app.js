require('./bootstrap');

import Vue from 'vue'
import { createApp } from 'vue'

import App from './vue/app'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faPlusSquare)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// ----------> Vue 2 ------------
// const app = new Vue({
//     el: '#app',
//     components: { App }
// })

/// >>>>>>>> C1 Vue 3 >>>>>>>>>>>>
// createApp({
//     el: '#app',
//     components: { App }
// }).mount('#app')

// import component FontAwesomeIcon
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon,App)
    .use(VueSweetalert2)
    .mount('#app')
