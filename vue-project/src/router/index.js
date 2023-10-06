import {createWebHashHistory, createRouter} from "vue-router";
import {defineComponent} from "vue";
import HomePage from "@/components/Pages/HomePage.vue";
import ServicesPage from "@/components/Pages/ServicesPage.vue";
import DocumentPage from "@/components/Pages/DocumentPage.vue";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import ContactPage from "@/components/Pages/ContactPage.vue";
import DetailPage from "@/components/Pages/DetailPage.vue";




export default defineComponent(createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            alias: '/'
        },
        {
            path: '/service',
            name: "Service",
            component: ServicesPage
        },
        {
            path: '/documents',
            name: "Document",
            component: DocumentPage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: DetailPage
        }

    ]
}))