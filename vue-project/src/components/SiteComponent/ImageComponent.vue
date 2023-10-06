<script>
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "ImageComponent",
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  setup(){
    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize))
    return{
      shouldRenderContent
    }
  }

})
</script>

<template>
  <section style="position: relative; text-align: center;">

    <div>
      <v-img
          cover
          :src="img"
          max-height="500"
          style="opacity: 90%; filter: brightness(50%);"
      ></v-img>

      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <h2 v-if="shouldRenderContent" class="text-h2 fw-bold" style="color: whitesmoke;">{{title}} </h2>
        <h4 v-else class="fw-bold" style="color: whitesmoke; text-align: center">{{title}} </h4>
        <p v-if="shouldRenderContent" class="text-h6 fw-light" style="color: whitesmoke;">{{subtitle}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>