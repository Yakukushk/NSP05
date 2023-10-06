import {defineStore} from "pinia";
import {ref, defineComponent, reactive, onMounted} from "vue";
import {useI18n} from "vue-i18n";

export const useStorage = defineStore('storage', () => {

    const imageComponent = reactive({
        img: {
            img: '/Images/image1.jpg',
            img1: '/Images/image2.jpg',
            img2: '/Images/image3.jpg',
            img3: '/Images/image4.jpg',
            imgMVD: '/Images/MVD.png'
        },
        title: {
            title1: "headerComponent.service",
            title2: "headerComponent.document",
            title3: "headerComponent.contact"
        },
        subtitle: {
            subtitle1: "carouselComponent2.subtitle",
            subtitle2: "carouselComponent.subtitle",
            subtitle3: "carouselComponent3.subtitle"
        }
    })
    const imageContent = ref([
        {
            id: 0,
            title: 'tabComponent.title',
            subtitle: 'tabComponent.subtitle'
        },
        {
            id: 1,
            title: 'tabComponent1.title',
            subtitle: 'tabComponent1.subtitle'
        },
        {
            id: 2,
            title: 'tabComponent2.title',
            subtitle: 'tabComponent2.subtitle'
        }
    ])
    const {t, locale} = useI18n();
    const headerComponent = ref(
        [{name: 'headerComponent.home', route: '/', icon: 'fa-solid fa-house'},
            {name: 'headerComponent.service', route: '/service', icon: 'fa-solid fa-clipboard'},
            {name: 'headerComponent.document', route: '/documents', icon: 'fa-solid fa-file'},
            {name: 'headerComponent.contact', route: '/contact', icon: 'fa-solid fa-id-badge'}])
    const carouselComponent = ref([
        {
            id: 0,
            title: "carouselComponent.title",
            subtitle: "carouselComponent.subtitle",
            img: '/Images/image1.jpg'
        },
        {
            id: 1,
            title: "carouselComponent1.title",
            subtitle: "carouselComponent1.subtitle",
            img: '/Images/image2.jpg'
        },
        {
            id: 2,
            title: "carouselComponent2.title",
            subtitle: "carouselComponent2.subtitle",
            img: '/Images/image3.jpg'
        }
    ])
    const tabComponent = ref([
        {
            id: 0,
            title: 'tabComponent.title',
            subtitle: 'tabComponent.subtitle',
            text: 'tabComponent.text',
            stepTitle: 'tabComponent.stepTitle',
            step: {
                text1 : 'tabComponent.step.title',
                text2: 'tabComponent.step.title1'
            },
            img: '/Images/Vytiag.png'
        },
        {
            id: 1,
            title: 'tabComponent1.title',
            subtitle: 'tabComponent1.subtitle',
            text: 'tabComponent1.text',
            stepTitle: 'tabComponent1.stepTitle',
            step: {
                text1 : 'tabComponent.step.title',
                text2: 'tabComponent.step.title1'
            },
            img: '/Images/apostil-na-svidetelstvo-o-rozhdenii.jpg'
        },
        {
            id: 2,
            title: 'tabComponent2.title',
            subtitle: 'tabComponent2.subtitle',
            text: 'tabComponent.text',
            stepTitle: 'tabComponent.stepTitle',
            step: {
                text1 : 'tabComponent.step.title',
                text2: 'tabComponent.step.title1'
            },
            img: '/Images/Dovidka_priklad.jpg'
        }
    ])
    const stepSection = ref([
        {
            id: 0,
            icon: 'fa-solid fa-comment-dots',
            text: 'stepText.stepText1'
        },
        {
            id: 1,
            icon: 'fa-solid fa-file-lines',
            text: 'stepText.stepText2'
        },
        {
            id: 2,
            icon: 'fa-solid fa-file-signature',
            text: 'stepText.stepText3'
        }])
    const loading = ref(true);
    function loadingTimer() {
        setTimeout(() => {
            loading.value = false;
        }, 1000)
    }

    return {
        headerComponent, carouselComponent, tabComponent, stepSection, imageComponent, loadingTimer, loading, imageContent
    }
})