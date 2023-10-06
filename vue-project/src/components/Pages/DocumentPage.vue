<script>
import {defineComponent, onMounted, reactive, ref} from "vue";
import HeaderComponent from "@/components/SiteComponent/HeaderComponent.vue";
import ImageComponent from "@/components/SiteComponent/ImageComponent.vue";
import TabComponent from "@/components/SiteComponent/TabComponent.vue";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import FooterComponent from "@/components/SiteComponent/FooterComponent.vue";
import {useStorage} from "@/components/pinia/store";
import ScrollTop from "@/components/SiteComponent/ScrollTop.vue";
import MobileHeader from "@/components/SiteComponent/MobileComponent/MobileHeader.vue";
import {useRouter, useRoute} from "vue-router";


export default defineComponent({
  name: "DocumentPage",
  components: {
    MobileHeader,
    ScrollTop,
    FooterComponent,
    ContactComponent,
    TabComponent,
    ImageComponent,
    HeaderComponent
  },
  setup() {
    const store = useStorage();
    const router = useRouter();
    const route = useRoute();

    const questionSection = reactive({
      title: 'questionSection.title',
      title1: 'questionSection.title1',
      title2: 'questionSection.title2'
    })
    const isOpen = ref([0, 1, 2]);


    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize))
    onMounted(() => {store.loadingTimer()})
    return {
      questionSection, isOpen, shouldRenderContent, store
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
      <section>
        <image-component :title="$t(store.imageComponent.title.title2)" :subtitle="$t(store.imageComponent.subtitle.subtitle2)" :img="store.imageComponent.img.img1"/>
      </section>
      <section>
        <tab-component/>
      </section>


      <hr/>

      <section>
        <div v-motion-fade-visible-once>
          <h2 class="text-center fw-bold" style="color: black">
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
      <hr/>
      <section>
        <contact-component/>
      </section>
    </main>
    <scroll-top/>
    <footer>
      <FooterComponent/>
    </footer>

  </div>
</template>

<style scoped>

</style>