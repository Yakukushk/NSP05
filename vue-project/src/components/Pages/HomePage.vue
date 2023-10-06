<script>

import {defineComponent, onMounted, ref} from "vue";
import HeaderComponent from "@/components/SiteComponent/HeaderComponent.vue";
import CarouselComponent from "@/components/SiteComponent/CarouselComponent.vue";
import TabComponent from "@/components/SiteComponent/TabComponent.vue";
import StepSection from "@/components/SiteComponent/StepSection.vue";
import {useStorage} from "@/components/pinia/store";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import ServicesComponent from "@/components/SiteComponent/ServicesComponent.vue";
import FooterComponent from "@/components/SiteComponent/FooterComponent.vue";
import ScrollTop from "@/components/SiteComponent/ScrollTop.vue";
import MobileHeader from "@/components/SiteComponent/MobileComponent/MobileHeader.vue";
import MobileCarousel from "@/components/SiteComponent/MobileComponent/MobileCarousel.vue";


export default defineComponent({
  name: 'Home',
  components: {
    MobileHeader,
    ScrollTop,
    FooterComponent,
    ServicesComponent, ContactComponent, StepSection, TabComponent, CarouselComponent, HeaderComponent, MobileCarousel
  },
  setup() {
    const store = useStorage();
    const items = store.carouselComponent;
    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize));
    onMounted(() => {
      store.loadingTimer();
    })

    return {
      items, shouldRenderContent, store
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

      <section v-if="shouldRenderContent">
        <CarouselComponent/>
      </section>
      <section v-else>
        <mobile-carousel/>
      </section>
      <div v-motion-fade-visible-once>
        <section>
          <TabComponent/>
        </section>
      </div>
      <section v-if="shouldRenderContent">
        <StepSection/>
      </section>
      <div v-motion-fade-visible-once>
        <section>
          <ServicesComponent/>
        </section>
      </div>
      <div v-motion-fade-visible-once>
        <section>
          <section style="height: 150px; background: #0C4A60" class="mt-4" v-if="shouldRenderContent">
            <div class="col-sm">
              <div class="text-center mt-sm-4">
                <h2 class="fw-bold" style="color:whitesmoke">{{ $t('contactProjectText.txt1') }}</h2>
                <h4 class="fw-light" style="color: whitesmoke">{{ $t('contactProjectText.txt2') }}</h4>
              </div>
            </div>
          </section>
          <contact-component/>
        </section>
      </div>
    </main>
    <ScrollTop/>
    <footer>
      <FooterComponent/>
    </footer>

  </div>

</template>

<style scoped>
html, body {
  font-family: "Source Sans Pro";
}

</style>