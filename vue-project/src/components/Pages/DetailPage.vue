<script>
import {computed, defineComponent, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref} from "vue";
import HeaderComponent from "@/components/SiteComponent/HeaderComponent.vue";
import MobileHeader from "@/components/SiteComponent/MobileComponent/MobileHeader.vue";
import {useStorage} from "@/components/pinia/store";
import ImageComponent from "@/components/SiteComponent/ImageComponent.vue";
import {useRoute} from "vue-router";
import tabComponent from "@/components/SiteComponent/TabComponent.vue";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import FooterComponent from "@/components/SiteComponent/FooterComponent.vue";

export default defineComponent({
  name: "DetailPage",
  computed: {
    tabComponent() {
      return tabComponent
    }
  },
  components: {FooterComponent, ContactComponent, ImageComponent, MobileHeader, HeaderComponent},
  setup() {
    const store = useStorage()
    const route = useRoute();
    const uid = Number(route.params.id);

    const detailContent = computed(() => {
      return store.imageContent.filter((doc) => doc.id === uid)
    })
    const tabContent = computed(() => {
      return store.tabComponent.filter((doc) => doc.id === uid)
    })
    const questionSection = reactive({
      title: 'questionSection.title',
      title1: 'questionSection.title1',
      title2: 'questionSection.title2'
    })
    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize));
    onMounted(() => {store.loadingTimer()})

    return {
      shouldRenderContent, store, detailContent, tabContent, questionSection, route, uid
    }
  }
})

</script>

<template>
  <div class="text-center position-absolute top-50 start-50 translate-middle" v-if="store.loading">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else>
    <header>
      <section v-if="shouldRenderContent">
        <header-component/>
      </section>
      <section v-else>
        <mobile-header/>
      </section>
    </header>
    <main>
      <section v-for="item in detailContent" :key="item.id">
        <image-component :title="$t(item.title)" :img="store.imageComponent.img.img3"/>
      </section>
      <section v-for="item in tabContent" :key="item.id" >
        <v-container>
        <v-row>
          <v-col align-self="auto">
          <v-img :src="item.img" width="500" height="500" aspect-ratio="16/9"></v-img>

          </v-col>
          <v-col cols="5" align-self="auto">
            <h3 class="text-sm-h4 fw-medium">{{$t(item.title)}}</h3>
            <hr/>
            <p class="text-sm-h6 fw-medium">{{$t(item.subtitle)}}.</p>
            <p class="text-sm-h6 fw-medium">{{$t(item.text)}}</p>
          </v-col>
        </v-row>
        </v-container>

        <div >
        <h3 class="text-h4 fw-medium text-center mb-sm-4">{{$t(item.stepTitle)}}</h3>
          <div v-if="uid === 1">
            <v-container>
              <h5 class="text-h5 text-center"><a href="https://apostille.minjust.gov.ua/">https://apostille.minjust.gov.ua/</a></h5>
            </v-container>
          </div>
          <div v-if="uid === 2">
            <v-container>
              <h5 class="text-h5 text-center"><a href="https://wanted.mvs.gov.ua/test">https://wanted.mvs.gov.ua/test</a></h5>
            </v-container>
          </div>
        <section style="background: #0c4a60" v-if="uid === 0">
         <v-container>
           <v-row no-gutters>
             <v-col>
               <span class="fw-medium" style="color: whitesmoke;">1. {{$t(item.step.text1)}} </span>
               <v-img :src="item.img" height="350" width="500" aspect-ratio="16/9"></v-img>
             </v-col>
             <v-col>
               <span class="fw-medium" style="color: whitesmoke;">1. {{$t(item.step.text2)}} <a href="https://vytiah.mvs.gov.ua/app/checkStatus">https://vytiah.mvs.gov.ua/app/checkStatus</a></span>
               <v-img :src="store.imageComponent.img.imgMVD" height="350" width="500" aspect-ratio="16/9"></v-img>
             </v-col>
           </v-row>>
         </v-container>
        </section>
        </div>
      </section>
<section>
  <section class="mt-sm-4">
    <div v-motion-fade-visible-once>
      <h2 class="text-center fw-medium" style="color: black">
        {{ $t('questionService') }}
      </h2>
      <v-expansion-panels variant="popout" class="my-4" multiple>
        <v-expansion-panel class="fw-medium" :title="$t(questionSection.title)">
          <v-expansion-panel-text>
            {{ $t('answerSection.txt') }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel class="fw-medium" :title="$t(questionSection.title1)" :readonly="isOpen">
          <v-expansion-panel-text>
            {{ $t('answerSection.txt1') }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel class="fw-medium" :title="$t(questionSection.title2)" :readonly="isOpen">
          <v-expansion-panel-text>
            {{ $t('answerSection.txt2') }}
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>
  </section>

</section>
      <v-spacer class="mt-sm-4"></v-spacer>
<section>
  <contact-component/>
</section>
    </main>
    <footer>
      <footer-component/>
    </footer>
  </div>
</template>

<style scoped>
html, body {
  font-family: "Source Sans Pro";
}
@media only screen and (max-width: 344px) {
  body,html {
    font-size: 10px;
    padding: 10px;
    position: relative;
    display: flex;
  }
  }
</style>