<template>

  <div style="margin-left: 1100px">
    <div class="col-lg-10">

      <AlerError :message="errorResponse.message"/>

      <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
    <div class="col-lg-10">
      <input v-model="password" type="password" class="form-control" placeholder="Parool" aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="col-lg-6 row-cols-xl-1">
      <button v-on:click="login" type="button" class="btn btn-success">Logi sisse</button>
    </div>
    <div class="col-lg-6 row-cols-xl-1">
      <button v-on:click="$router.push('/chose')" type="button" class="btn btn-dark">Registreeru</button>
    </div>


  </div>
</template>
<script>

import AlerError from "@/components/AlertError";


export default {
  name: 'LoginWithButtonsComponent',
  components: {AlerError},
  data: function () {
    return {
      username: '',
      password: '',

      loginResponse: {
        userId: '',
        roleId: 0,
        roleType: 0,
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
    }


  },
  methods: {

    login: function () {
      this.errorResponse.message = ''
      if (this.username.length == 0 || this.password.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.sendLoginRequest();
      }
    },

    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad';
    },

    sendLoginRequest: function () {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        this.navigateToNextPage();
      }).catch(error => {
        this.errorResponse = error.response.data
      });
    },


    navigateToNextPage: function () {
      if (this.loginResponse.userId === 'oleg') {
        this.navigateToAdmin();
      } else {
        this.navigateToCustomer();
      }
    },

    navigateToAdmin: function () {
      sessionStorage.setItem('userId', this.loginResponse.userId);
      this.$router.push({
        name: 'DogWalkerProfileView'
      });
    },

    navigateToCustomer: function () {
      this.$router.push({
        name: 'DogOwnerProfileView', query: {
          userId: this.loginResponse.userId,
          roleType: this.loginResponse.roleType
        }
      })
    },



  }
}

</script>
