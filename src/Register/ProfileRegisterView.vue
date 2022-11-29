<template>
  <form>

    <div class="col-20">
      <img style="margin-right: 1201px" src="@/assets/doglogo.png">
    </div>

    <div>
      <h1>
        Registreeru Annakäppa kasutajaks
      </h1>
    </div>
    <div>
      <div>
        <h4 style="margin-right: 720px">
          Nimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.firstname" type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 610px">
          Perekonnanimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.lastname" type="text" class="form-control" placeholder="perekonnanimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 610px">
          E-posti aadress
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.email" type="text" class="form-control" placeholder="e-mail" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 725px">
          Linn
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.city" type="text" class="form-control" placeholder="linn" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 630px">Kasutajanimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.username" type="text" class="form-control" placeholder="username" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>

      <div>
        <h4 style="margin-right: 700px">
          Parool
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.password" type="password" class="form-control" placeholder="parool" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 630px">
          Korda parool
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="userRequest.passwordRepeat" type="password" class="form-control" placeholder="korda parool" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
        <div style="margin-left: 330px" class="col-lg-6">
          <AlertErrorMessage :message="errorResponse.message"/>

        </div>
        <div>
          <h4 style="margin-right: 350px">
            Valige roll, mida soovite registreeruda
          </h4>
          <div class="col-6" style="margin-left: 330px">
            <select v-model="userRequest.type" class="form-select" aria-label="Default select example">
              <option selected disabled value="0">--Roll--</option>
              <option v-for="chooseTheType in types" :value="chooseTheType.roleId">{{ chooseTheType.roleType }}</option>
            </select>
          </div>

        </div>
        <br>

      </div>
      <div></div>
      <div>
        <h4 style="margin-right: 560px">
          Lisainfo enda kohta
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <textarea v-model="userRequest.additionalInformation" class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br>
        <br>
        <div class="row-cols-5">
          <button v-on:click="registerNewUser" type="button" class="btn btn-success">Registreeru</button>
        </div>
        <br>
        <br>
      </div>
    </div>
    <div>
      <img src="@/assets/curious-dog.png">
    </div>


  </form>

</template>

<script>
import AlertErrorMessage from "@/components/AlertErrorMessage";

export default {
  name: 'ProfileRegisterView',
  components: {AlertErrorMessage},
  data: function () {
    return {
      types: [
        {
          roleId: '',
          roleType: ''
        }
      ],
      errorResponse: {
        message: '',
        errorCode: 0
      },
      userRequest: {
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        username: '',
        password: '',
        passwordRepeat: '',
        type: '',
        additionalInformation: ''
      },
      userResponse: {
        userId: 0,
        roleId: 0,
        roleType: ''
      }
      


    }

  },
  methods: {
    roleTypeSelect: function () {
      this.$http.get("/register/role")
          .then(result => {
            this.types = result.data
          })
          .catch(error => {
            console.log(error)
          })
    },


    navigateToWalkerPage: function () {
      sessionStorage.setItem('userId', this.userResponse.userId)
      this.$router.push({
        name: 'DogWalkerProfileRoute'
      })
    },

    navigateToOwnerPage: function () {
      this.$router.push({
        name: 'DogOwnerProfileView', query: {
          userId: this.userResponse.userId,
          roleName: this.userResponse.roleType

        }
      })
    },

    navigateToSelectedRolePage: function () {
      if (this.userResponse.roleId === 1) {
        this.navigateToWalkerPage();
      } else {
        this.navigateToOwnerPage();
      }
    },

    registerNewUser: function () {
      this.errorResponse.message = ''
      if (this.userRequest.password !== this.userRequest.passwordRepeat) {
        this.errorResponse.message = 'Parool ei klappi'
      } else {
        this.$http.post("/register",this.userRequest
        ).then(response => {
          this.userResponse = response.data
          this.navigateToSelectedRolePage();

        }).catch(error => {
          console.log(error)
        })


      }
    }
  },
  beforeMount() {
    this.roleTypeSelect()

  }

}
</script>

