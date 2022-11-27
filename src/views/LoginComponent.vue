<template>
  <div>

    <AlertErrorMessage :message="errorResponse.message"/>
    <div>
      <div>

        <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Kasutajanimi"
               aria-describedby="basic-addon1">
      </div>
      <div >
        <input v-model="password" type="password" class="form-control" placeholder="Username" aria-label="Parool"
               aria-describedby="basic-addon1">
      </div>
      <br>
      <div class="row-cols-1">
        <button v-on:click="login" type="button" class="btn btn-success">Logi sisse</button>
      </div>
      <div class="row-cols-1">
        <button v-on:click="$router.push('/register')" type="button" class="btn btn-dark">Registreeru</button>
      </div>
    </div>
  </div>
</template>
<script>

import AlertErrorMessage from "@/components/AlertErrorMessage";

export default {
  name: 'loginComponent',
  components: {AlertErrorMessage},
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
      }
    }
  },
  methods: {
    login: function () {
      this.errorResponse.message = ''
      if (this.username.length == 0 || this.password.length == 0) {
        this.errorResponse.message = 'Täida kõik väljed'
      } else {
        this.$http.get("/login", {
              params: {
                username: this.username,
                password: this.password
              }
            }
        ).then(response => {
          this.loginResponse = response.data
          if (this.loginResponse.roleType === 'walker') {
            sessionStorage.setItem('userId', this.loginResponse.userId)
            this.$router.push({
              name: 'DogWalkerProfileView'
            })
          } else {
            this.$router.push({
              name: 'DogOwnerProfileView', query: {
                userId: this.loginResponse.userId,
                roleName: this.loginResponse.roleType

              }
            })
          }

        }).catch(error => {
          this.errorResponse = error.response.data
        });

      }

    },

  }
}

</script>