<script setup>
</script>

<template>
  <div>
    <v-container>
      <!-- Первый блок -->
      <v-row
          no-gutters
          style="height: auto;"
      >
        <v-col align-self="center" >
          <v-sheet class="pa-2 ma-2">
            <h3 class="fw-medium">{{ $t("carouselComponent.title")}}</h3>
            <h5 class="fw-light">{{ $t("carouselComponent.subtitle")}}</h5>
          </v-sheet>
        </v-col>
      </v-row>

      <!-- Второй блок -->
      <v-row
          no-gutters
          style="height: auto;"
      >
        <v-col align-self="center">
          <v-sheet class="pa-2 ma-2">
            <h3 class="fw-medium">{{ $t("carouselComponent1.title")}}</h3>
            <h5 class="fw-light">{{ $t("carouselComponent1.subtitle")}}</h5>
          </v-sheet>
        </v-col>
      </v-row>

      <!-- Третий блок -->
      <v-row
          no-gutters
          style="height: auto;"
      >
        <v-col align-self="center">
          <v-sheet class="pa-2 ma-2">
            <h3 class="fw-medium">{{ $t("carouselComponent2.title")}}</h3>
            <h5 class="fw-light">{{ $t("carouselComponent2.subtitle")}}</h5>
          </v-sheet>
        </v-col>
      </v-row>

      <!-- Четвертый блок -->
      <v-row
          no-gutters
          style="height: auto;"
      >
        <v-col align-self="center">
          <v-sheet class="pa-2 ma-2">
            <h3 class="fw-medium">{{ $t("carouselComponent3.title")}}</h3>
            <h5 class="fw-light">{{ $t("carouselComponent3.subtitle")}}</h5>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
/* Стили для мобильных устройств с помощью медиа-запроса */
@media only screen and (max-width: 600px) {
  /* Ваши стили для мобильных устройств */
  .fw-medium {
    font-size: 20px; /* Пример изменения размера шрифта для заголовков */
  }

  .fw-light {
    font-size: 16px; /* Пример изменения размера шрифта для подзаголовков */
  }
}
</style>


<style scoped>
</style>
