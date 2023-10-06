<script lang="js">
import {computed, defineComponent, ref} from "vue";
import {useStorage} from "@/components/pinia/store";
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: 'TabComponent',

  setup() {
    const tab = ref(null)
    const {t, locale} = useI18n();
    const route = useRoute();
    const router = useRouter();
    const items = ref(useStorage().tabComponent);
    const searchQuery = ref('');
    const searchComponent = computed(() => {
      return items.value.filter((item) => {

        const itemText = t(item.title);

        return itemText.includes(searchQuery.value);
      });
    });
    const routing = (id) => {
      router.push(`/detail/${id}`)
    }
    return {tab, items, searchQuery, searchComponent, router, route, routing}
  }
})

</script>

<template>
  <div>
    <section v-if="route.name === 'Document'">
      <v-col cols="5" class="mx-auto">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
        <input v-model="searchQuery" type="text" class="form-control" :placeholder="$t('searchString')" :aria-label="$t('searchString')" aria-describedby="basic-addon1">
      </div>
      </v-col>
<!--      <v-col cols="5" class="mx-auto">-->
<!--        <v-text-field class="fw-medium" style="font-size: 20px" v-model="searchQuery"-->
<!--                      :label="$t('searchString')"></v-text-field>-->
<!--      </v-col>-->
    </section>
    <v-container>
      <v-row align="center" justify="center">
        <v-col
            v-for="(variant, i) in searchComponent"
            :key="i"
            cols="auto"
        >
          <v-card
              class="mx-sm-auto"
              max-width="350"
              max-height="700"


          >
            <v-card-item>
              <div>
                <div class="align-center justify-center">
                  <v-img :src="variant.img" style="width: 300px; height: 300px"></v-img>
                </div>
                <div class="mb-1 fw-medium">
                  {{ $t(variant.title) }}
                </div>

                <div class="text-caption fw-light">
                  {{ $t(variant.subtitle) }}
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn @click.prevent="routing(variant.id)">
                {{ $t('seeMore') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-tab {
  max-width: 100% !important;
}

html, body {
  font-family: "Source Sans Pro";
}
</style>