<script lang="js" xmlns="http://www.w3.org/1999/html">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "FooterComponent",
  setup() {
    const icons = ref([
      {img : 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100002171511050&mibextid=LQQJ4d'},
      {img : 'mdi-google', link: 'mailto:elenashvidanenko@gmail.com?subject=Повідомлення&body=Доброго дня!'},
      {img : 'mdi-telegram', link: 'https://t.me/+34642651104'},
      {img : 'mdi-instagram', link: 'https://instagram.com/elenashvidanenko?igshid=OGQ5ZDc2ODk2ZA=='}
    ])
    const shouldRenderContent = ref(window.innerWidth > 758);
    const updateWindowSize = () => {
      shouldRenderContent.value = window.innerWidth > 758;
    };
    onMounted(() => window.addEventListener("resize", updateWindowSize))
    return {
      icons, shouldRenderContent
    }
  }
})

</script>

<template>
  <footer class="text-center d-flex flex-column">


    <div class="pt-0 fw-medium" style="color: whitesmoke">
      <v-container
          class="mb-6"
      >
        <v-row
            align="start"
            no-gutters
            style="height: 590px;"
        >
          <v-col class="mt-sm-4">
            <div v-if="!shouldRenderContent">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.677063356868!2d30.523823!3d50.465737999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f6e0df7ef%3A0xf57a41c6bf30acb0!2z0YPQuy4g0JjQu9GM0LjQvdGB0LrQsNGPLCAyMCwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1696324868105!5m2!1sru!2spl"
                  width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div v-else>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.677063356868!2d30.523823!3d50.465737999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce3f6e0df7ef%3A0xf57a41c6bf30acb0!2z0YPQuy4g0JjQu9GM0LjQvdGB0LrQsNGPLCAyMCwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1696324868105!5m2!1sru!2spl"
                  width="650" height="550" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


          </v-col>
          <v-col style="background: #0c4a60" align-self="start">
            <div class="col-md-15 col-lg-15 col-xl-15 mx-auto mb-4">
              <!-- Links -->
              <v-container>
                <h4 class="text-uppercase fw-bold mb-4">{{ $t('footer.companyName') }}</h4>
                <!--                <h5 class="fw-medium text-start">{{ $t('footer.contact') }}</h5>-->
                <p class="fw-medium text-start">
                  <strong>{{ $t('formContact.userEmail') }}</strong> : <a
                    href="mailto:example2@hotmail.com?subject=Повідомлення&body=Доброго дня!"
                    class="fw-medium link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">example1@hotmail.com</a>

                </p>
                <p class="fw-medium text-start">
                  <strong>{{ $t('formContact.userPhone') }}</strong> : +380 97 169 37 37
                </p>
                <p class="fw-medium text-start">
                  <strong>{{ $t('formContact.userPhoneES') }}</strong> : +34 642 651 104
                </p>
                <p class="fw-medium text-start">
                  <strong>{{ $t('footer.address') }}</strong> : {{ $t('footer.addressMain') }}
                </p>
                <p class="fw-medium text-start">
                  <strong>{{ $t('footer.timetable') }}</strong> : {{ $t('footer.daytable') }} 10:00–17:00 (UTC+02:00)
                </p>
                <div>
                  <v-btn
                      v-for="icon in icons"
                      :key="icon.img"
                      class="mx-3"
                      style="color: whitesmoke"
                      :icon="icon.img"
                      variant="text"
                      :href="icon.link"
                  ></v-btn>
                </div>
              </v-container>

            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
    <div style="color: whitesmoke;" class="mx-auto" >
      @{{ new Date().getFullYear() }} — <strong>https://olenashidanenko.web.app</strong>
    </div>



  </footer>
</template>

<style scoped>
html, body {
  font-family: "Source Sans Pro";

}

p, span, h6 {
  color: whitesmoke;
}

footer {
  background: #0c4a60;
}
</style>