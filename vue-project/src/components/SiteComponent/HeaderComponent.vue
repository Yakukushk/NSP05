<script lang="js">
import {defineComponent, ref, watchEffect} from "vue";
import {useRouter} from "vue-router";
import {useStorage} from "@/components/pinia/store";
import {useI18n} from "vue-i18n";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    // connect plugins
    const router = useRouter();
    const store = useStorage();
    const {t, locale, fallbackLocale} = useI18n({useScope: 'global'})

    const items = store.headerComponent;
    const tab = "headerComponent.home";

    const routerArr = ref([
      {name: 'Home', route: '/'},
      {name: 'Our Service', route: '/service'},
      {name: 'Document from Ukraine', route: '/documents'},
      {name: 'Contact', route: '/contact'}
    ])
    const selectedLanguage = ref(locale);
    const defaultLang = ref(fallbackLocale)
    watchEffect(() => {
      console.log('Selected language:', selectedLanguage.value);
    });

    const switchLang = (newLang) => {
      selectedLanguage.value = newLang;
      defaultLang.value = newLang;
    };

    return {
      tab, items, routerArr, router, t, selectedLanguage, switchLang, locale
    }
  }
})

</script>

<template>
  <v-spacer></v-spacer>

  <v-card color="#0C4A60">


    <v-col cols="3">
      <select class="form-select form-select-sm" v-model="selectedLanguage" @change="switchLang(locale)"
              style="width: 120px">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="ua">Українська</option>
      </select>
    </v-col>


    <v-card-title class="text-sm-center justify-sm-center">

      <h3 class="font-weight-bold text-h2">
        TRANSLATIONS AND LEGALIZATION
      </h3>
    </v-card-title>

    <v-tabs
        grow
        height="50"
        v-model="tab"
    >
      <v-tab
          v-for="item in items"
          :key="item"
          @click.prevent="router.push(item.route)"
      >
        <font-awesome-icon :icon="item.icon" class="mb-sm-3 me-sm-2"/>
        <p>{{ $t(item.name) }}</p>
      </v-tab>
    </v-tabs>

    <v-window>
      <v-window-item
          v-for="item in items"
          :key="item"

      >


      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>
.bg-basil {
  background-color: #0C4A60 !important;
}

.text-basil {
  color: whitesmoke !important;

}

html, body {
  font-family: "Source Sans Pro"
}
</style>