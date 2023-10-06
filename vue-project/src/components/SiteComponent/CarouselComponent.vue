<script lang="js">
import {defineComponent, ref} from "vue";
import {useStorage} from "@/components/pinia/store";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "CarouselComponent",

  setup() {
    const store = useStorage()
    const slides = store.carouselComponent;
    const router = useRouter();
    const colors = ref(['#6C7A82', '#6C7A89', '#6C7A88'])
    const {t, locale} = useI18n({useScope: 'global'})

    return{
      slides, colors, t, router
    }
  }
})
</script>

<template>
  <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
  >
    <v-carousel-item
        v-for="slide in slides"
        :key="slide.id"
        :src="slide.img"
        style="opacity: 90%; filter: brightness(50%)"
        cover
        class="v-caro"

    >

      <v-card
          class="mt-sm-5 cardv"
          max-width="600"
          :color="colors[slide.id]"



      >
        <v-card-item>

            <h2 class="fw-medium" style="color:#f2f2f2; text-shadow: 2px 2px 2px black; opacity: 100%;">
              {{ $t(slide.title) }}
            </h2>
            <h4 class="fw-light" style="color: #f2f2f2; text-shadow: 2px 2px 2px black; opacity: 100%">
              {{$t(slide.subtitle)}}
            </h4>

        </v-card-item>

        <v-card-actions>
          <v-btn class="fw-medium" @click.prevent="router.push('/documents')">
            {{$t('seeMore')}}
          </v-btn>
        </v-card-actions>
      </v-card>




    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
html,body{
  font-family: "Source Sans Pro";
}
.cardv{
  opacity: 95%;
  margin-left: 100px;
}

</style>