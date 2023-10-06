import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
// vuetify && bootstrap
import 'vuetify/styles'
import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// firebase
import {getStorage} from "firebase/storage"
import {initializeApp} from "firebase/app"
import {firebaseConfig} from "@/firebase/firebaseConfig"
import {initializeAppCheck, ReCaptchaV3Provider} from 'firebase/app-check'
// sweetalert
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from "@/router";

//i18n
import {createI18n, useI18n} from 'vue-i18n'
import {lang} from "@/i18n";
import {defaultLocale} from "@/i18n";

//motion
import {MotionPlugin} from '@vueuse/motion'

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faHouse, faClipboard, faFile, faIdBadge, faCommentDots, faFileLines, faFileSignature, faArrowRight, faArrowDown, faArrowUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faFacebook, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";

//icon-flag
import VueFlags from "@growthbunker/vueflags";

library.add(faUserSecret, faHouse, faClipboard, faFile, faIdBadge, faCommentDots, faFileLines, faFileSignature, faArrowRight, faArrowDown, faInstagram, faFacebook, faTelegram, faGoogle, faArrowUp, faMagnifyingGlass )

const vuetify = createVuetify({
    components,
    directives,
})
const messages = Object.assign(lang)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: ['en', 'ua', 'es'],
    messages
})
const app = createApp(App, {
    setup(){
        const {t} = useI18n();
        return t;
    }
})
const pinia = createPinia();
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
pinia.use(() => ({storage}))
const appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider('test'),

})
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(i18n)
app.use(appCheck)
app.use(VueFlags)
app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
