<script setup>
import {useStorage} from "@/components/pinia/store";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {ref, watchEffect} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const router = useRouter();
const store = useStorage();
const {t, locale, fallbackLocale} = useI18n({useScope: 'global'})
const drawer = ref(false);
const selectedLanguage = ref(locale);
const defaultLang = ref(fallbackLocale)
watchEffect(() => {
  console.log('Selected language:', selectedLanguage.value);
});

const switchLang = (newLang) => {
  selectedLanguage.value = newLang;
  defaultLang.value = newLang;
};


</script>

<template>
  <v-card style="z-index: auto">
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="#0C4A60" prominent>
        <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title style="font-size: 15px">TRANSLATIONS AND LEGALIZATION</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-col cols="3">
          <select class="form-select form-select-sm" v-model="selectedLanguage" @change="switchLang(locale)"
                  style="width: 120px">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ua">Українська</option>
          </select>
        </v-col>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list v-for="item in store.headerComponent" :key="item">
            <a class="ma-4 link-underline link-underline-opacity-0 link-dark" @click.prevent="router.push(item.route)">{{$t(item.name)}}</a>

        </v-list>
      </v-navigation-drawer>

    </v-layout>
  </v-card>
</template>

<style scoped>
html,body {
  z-index: 1000;
}
</style>