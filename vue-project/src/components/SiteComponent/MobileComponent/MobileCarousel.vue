<script lang="js">
import {defineComponent, ref} from "vue";
import { useStorage } from "@/components/pinia/store";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "CarouselComponent",
  setup() {
    const store = useStorage();
    const slides = store.carouselComponent;
    const { t, locale } = useI18n({ useScope: 'global' });
    const colors = ref(['#6C7A82', '#6C7A89', '#6C7A88'])

    return {
      slides,
      t,
      colors
    };
  },
});
</script>

<template>

  <v-carousel cycle hide-delimiter-background :show-arrows="false">
    <v-carousel-item
        v-for="slide in slides"
        :key="slide.id"
        :src="slide.img"
        style="opacity: 90%; filter: brightness(50%);"
        cover
        class="v-caro"
    >
      <v-card :color="colors[slide.id]" max-height="300" class="mt-sm-5 cardv" style="opacity: 90%">
        <v-card-item>
          <h2 class="fw-medium" style="color: #f2f2f2; font-size: 20px">
            {{ $t(slide.title) }}
          </h2>
          <h4 class="fw-light" style="color: #f2f2f2; font-size: 15px">
            {{ $t(slide.subtitle) }}
          </h4>
        </v-card-item>

        <v-card-actions>
          <v-btn class="fw-medium">{{$t('seeMore')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
html, body {
  font-family: "Source Sans Pro";
}
.cardv{
  align-items: center;
  margin-top: 60px;
}

</style>
