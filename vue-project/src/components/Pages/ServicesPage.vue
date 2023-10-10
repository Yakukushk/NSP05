<script lang="js">
import {defineComponent, onMounted, readonly, ref} from "vue";
import HeaderComponent from "@/components/SiteComponent/HeaderComponent.vue";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import FooterComponent from "@/components/SiteComponent/FooterComponent.vue";
import ImageComponent from "@/components/SiteComponent/ImageComponent.vue";
import {useStorage} from "@/components/pinia/store";
import ScrollTop from "@/components/SiteComponent/ScrollTop.vue";
import MobileHeader from "@/components/SiteComponent/MobileComponent/MobileHeader.vue";
import imageComponent from "@/components/SiteComponent/ImageComponent.vue";

export default defineComponent({
  name: 'ServicesPage',
  computed: {
    imageComponent() {
      return imageComponent
    }
  },
  methods: {readonly},
  components: {MobileHeader, ScrollTop, ImageComponent, FooterComponent, ContactComponent, HeaderComponent},
  setup() {
    const store = useStorage();
    const lang = ref({
      service: "headerComponent.service",
      service1: "titleService",
      title: 'headerComponent.service'
    })
    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize))
    const services = ref(
        [
          'service.title',
          'service.title1',
          'service.title2',
          'service.title3',
          'service.title4',
          'service.title5',
          'service.title6',
          'service.title7',
          'service.title8'])
    const services1 = ref(
        [
          'service1.title',
          'service1.title1',
          'service1.title2',
          'service1.title3',
          'service1.title4',
          'service1.title5',
          'service1.title6',
          'service1.title7',
          'service1.title8',
          'service1.title9'])
    const isOpen = ref([0, 1]);
    onMounted(() => {
      store.loadingTimer()
    })
    return {
      lang, services, isOpen, services1, store, shouldRenderContent
    }
  }
})
</script>

<style scoped>
html, body {
  font-family: "Source Sans Pro";
}
@media only screen and (max-width: 600px) {

  .fw-bold {
    font-size: 20px;
  }

  .fw-medium {
    font-size: 16px;
  }
}
</style>
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
      <section style="position: relative; text-align: center;">

        <div>
          <image-component :title="$t(store.imageComponent.title.title1)" :subtitle="$t(store.imageComponent.subtitle.subtitle1)"
                           :img="store.imageComponent.img.img"/>
        </div>
      </section>
      <section>
        <div v-motion-fade-visible-once>
          <v-expansion-panels variant="popout" class="my-4" multiple v-model="isOpen">

            <v-expansion-panel class="fw-bold" :title="$t(lang.service)">
              <v-expansion-panel-text>
                <v-list v-for="service in services">
                  <v-list-item>
                    <p class="fw-medium">{{ $t(service) }}</p>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel class="fw-bold" :title="$t(lang.service1)" :readonly="isOpen">
              <v-expansion-panel-text>
                <v-list v-for="service in services1">
                  <v-list-item>
                    <p class="fw-medium">{{ $t(service) }}</p>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </section>
      <div v-motion-fade-visible-once>
        <section>
          <contact-component/>
        </section>
      </div>
      <section>
        <scroll-top/>
      </section>
      <footer>
        <footer-component/>
      </footer>
    </main>
  </div>
</template>
