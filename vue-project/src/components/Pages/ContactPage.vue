<script>
import {defineComponent, onMounted, reactive, ref} from "vue";
import {useStorage} from "@/components/pinia/store";
import HeaderComponent from "@/components/SiteComponent/HeaderComponent.vue";
import ImageComponent from "@/components/SiteComponent/ImageComponent.vue";
import ContactComponent from "@/components/SiteComponent/ContactComponent.vue";
import FooterComponent from "@/components/SiteComponent/FooterComponent.vue";
import MobileHeader from "@/components/SiteComponent/MobileComponent/MobileHeader.vue";

export default defineComponent({
  name: 'ContactPage',
  components: {MobileHeader, FooterComponent, ContactComponent, ImageComponent, HeaderComponent},
  setup() {
    const store = useStorage();

    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize))
    onMounted(() => store.loadingTimer())
    return {
      shouldRenderContent, store
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
      <section style="position: relative; text-align: center">
        <div>
          <image-component :title="$t(store.imageComponent.title.title3)"
                           :subtitle="$t(store.imageComponent.subtitle.subtitle3)"
                           :img="store.imageComponent.img.img2"/>
        </div>
      </section>
      <section>


        <div>
          <contact-component/>
        </div>


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
</style>