<template>
  <button @click="scrollTop" class="scroll-to-top-button">
    <font-awesome-icon icon="fa-solid fa-arrow-up" />
  </button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ScrollTop",
  setup(){


    const scrollTop = () => {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })

    }
    return {
       scrollTop
    }
  }
}
</script>

<style scoped>
.scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0c4a60;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.scroll-to-top-button:hover {
  background-color: #a7acb1;
}
</style>