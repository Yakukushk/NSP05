<script lang="js">
import {defineComponent} from "vue";
import {useStorage} from "@/components/pinia/store";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "StepSection",
  setup() {
    const items = useStorage().stepSection;
    const router = useRouter();
    return {
      items, router
    }
  }
})

</script>

<template>
  <div>
    <section>
      <v-container>
        <v-row no-gutters>
          <v-col
              v-for="item in items "
              :key="item.id"
              cols="5"
              sm="4"
          >
            <div class="text-center mb-sm-2">
            <font-awesome-icon :icon="item.icon" class="align-center text-center"
                               style="color:#f2f2f2; width: 50px; height: 50px"/>
            </div>
          <h4 class="text-center" style="color: whitesmoke">
             {{ $t(item.text)}}
          </h4>

          </v-col>
        <v-btn class="mx-auto" @click.prevent="router.push('/contact')">{{$t('headerComponent.contact')}}</v-btn>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
section {
  background: #0C4A60;
}
</style>