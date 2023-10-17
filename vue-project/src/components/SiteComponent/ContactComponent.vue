<script lang="js">
import {defineComponent, reactive} from "vue";
import {Email} from "@/smtp/smtp";
import Swal from "sweetalert2";
import {required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


export default defineComponent({
  name: 'ContactComponent',
  setup() {

    const formValues = reactive({
      userName: '',
      userPhone: '',
      userEmail: '',
      userSubject: '',
      userSelectItem: ['contactForm.arr.orderDocument', 'contactForm.arr.conDocument', 'contactForm.arr.helpDocument', 'contactForm.arr.feedback'],
      userSelect: 'Choice Option',
      textArea: ''
    })
    const clearData = () => {
      formValues.textArea = "";
      formValues.userPhone = "";
      formValues.textArea = "";
      formValues.userName = "";
      formValues.userEmail = "";
      formValues.userSelect = "";
      formValues.userSubject = "";

    }
    const rules = {
      userName : {required},
      userPhone: {required},
      userEmail: {required},
      userSubject: {required},
      userSelectItem: {required},
      textArea: {required}
    }
    const v$ = useVuelidate(rules, formValues)
    const sendMessage = async() => {
      try {
        const result = await v$.value.$validate();
        if(result){
          const message = Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,
            Username: "example.23A@outlook.com",
            Password: "867163176BBBD20573C08067EBA9EE61CDC7",
            To: "example.23A@outlook.com",
            From: 'example.23A@outlook.com',
            Name: formValues.userName,
            Subject: formValues.userSubject,
            Surname: formValues.userName,
            Body: "<strong>Name : </strong>" + formValues.userName + '<br/> ' +
                "<strong>Email : </strong>" + formValues.userEmail + '<br/> ' +
                "<strong>Phone : </strong>" + formValues.userPhone + '<br/> ' +
                "<strong>Selected : </strong>" + formValues.userSelect + '<br/> ' +
                "<strong>Subject : </strong>" + formValues.userSubject + '<br/> ' +
                "<strong>Message : </strong>" + formValues.textArea + '<br/> ',
          });

          Swal.fire(
              'Message was sent!',
              '',
              'success'
          )
          clearData();
        } else  {
          Swal.fire(
              'Message was not sent!',
              '',
              'error'
          )
        }

      } catch (error) {
        console.error("Error sending message:");
        Swal.fire(
            'Error! sending message',
            '',
            'warning'
        )

      }

    };
    return {
      formValues, clearData, sendMessage, v$
    }
  }
})

</script>

<template>
  <section>
    <v-container>
      <v-row>
        <v-col
            cols="12"
            sm="5"
            align-self="auto"
            order="2"
        >
          <h1 class="fw-bold">{{ $t('headerComponent.contact') }}</h1>
          <h3 class="fw-medium">{{ $t('carouselComponent3.subtitle') }}</h3>
          <h3 class="fw-medium">{{ $t('formContact.userEmail') }} - <a
              href="mailto:example2@hotmail.com?subject=Повідомлення&body=Доброго дня!"
              class="fw-medium link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">example1@hotmail.com</a>
          </h3>
          <h3 class="fw-medium">{{ $t('formContact.userPhone') }} +380 97 169 37 37</h3>
        </v-col>
        <v-col>
          <v-container class="container-fluid">
            <form @submit.prevent="sendMessage">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-medium">{{
                    $t('formContact.userName')
                  }}</label>
                <input v-model="formValues.userName" type="name" class="form-control" id="exampleFormControlInput1"
                       placeholder=''>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1"
                       class="form-label fw-medium">{{ $t('formContact.userPhone') }}</label>
                <input v-model="formValues.userPhone" type="number" class="form-control" id="exampleFormControlInput1"
                       placeholder='+380'>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1"
                       class="form-label fw-medium">{{ $t('formContact.userEmail') }}</label>
                <input v-model="formValues.userEmail" type="email" class="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fw-medium">{{
                    $t('formContact.userSelect')
                  }}</label>
                <select class="form-select mb-sm-4" v-model="formValues.userSelect">
                  <option class="" v-for="item in formValues.userSelectItem">{{ $t(item) }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fw-medium">{{
                    $t('formContact.userSubject')
                  }}</label>
                <input v-model="formValues.userSubject" class="form-control" id="exampleFormControlTextarea1" rows="3"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fw-medium">{{
                    $t('formContact.userMessage')
                  }}</label>
                <textarea v-model="formValues.textArea" class="form-control" id="exampleFormControlTextarea1"
                          rows="3"></textarea>
              </div>


              <button
                  class="me-4 btn btn-primary fw-medium"
                  type="submit"
              >
                {{ $t('send') }}
              </button>

              <button type="reset" class="btn btn-secondary fw-medium" @click="clearData">
                {{ $t('clear') }}
              </button>
            </form>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
html, body {
  font-family: "Source Sans Pro";
}
@media only screen and (max-width: 600px) {
  .fw-bold {
   font-size: 20px;
  }

  .fw-medium {
    font-size: 20px;
  }


}
</style>