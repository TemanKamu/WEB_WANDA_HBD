import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
// importing AOS css style globally
import 'aos/dist/aos.css'
import './style.css'
import router from './router'
AOS.init({
// Konfigurasi global AOS
duration: 800,  // durasi animasi dalam ms
offset: 100,    // offset (dalam px) dari titik trigger original
once: false,    // animasi hanya sekali atau setiap scroll
easing: 'ease', // fungsi easing default
delay: 0,       // nilai delay default dalam ms
})
createApp(App).use(router).mount('#app')
