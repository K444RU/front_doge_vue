<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/img/doglogo.png">
    </div>


    <h1>Koerahoidja profiil {{ userId }} </h1>


    <div class="col-lg-2">
      <div v-if="userInfoResponse.userPhoto !== null && userInfoResponse.userPhoto.length > 0">
        <h1>hello</h1>
        <img :src="userInfoResponse.userPhoto" style="height: 200px">
      </div>
      <div v-else>
        <img class="test" style="height: 250px" src="@/assets/img/deafult1.jpeg"/>
      </div>


      <ImageInput @pictureInputSuccess="setUserProfilePicture"/>
      <button v-on:click="addUserPicture" type="button" class="btn btn-success">Salvesta pilt</button>
    </div>


    <div class="col-lg-4">
      <h2> {{ userInfoResponse.firstname }} {{ userInfoResponse.lastname }}</h2>
      <h5>
        {{ userInfoResponse.additionalInformation }}

      </h5>
      <!--      <input v-model="date" type="date" name="" id="">-->

    </div>

    <div class="col-lg-4">
      <button v-on:click="$router.push('/add/service')" type="button" class="btn btn-dark">Lisa oma teenus</button>
    </div>
  </div>
</template>

<script>

import ImageInput from "@/components/image/ImageInput";



export default {
  name: 'DogOwnerProfileView',
  components: { ImageInput},


  data: function () {
    return {
      // date: '',

      userId: Number(sessionStorage.getItem('userId')),


      userPhotoRequest: {
        userId: 0,
        photoData: '',

      },
      userPhotoResponse: {
        userId: 0,
        photoData: null
      },
      userInfoResponse: {
        firstname: '',
        lastname: '',
        additionalInformation: null,
        userPhoto: ''

      }
    }
  },
  methods: {

    getUserRegisteredInfo: function () {
      this.$http.get("/user/info", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.userInfoResponse = response.data

      }).catch(error => {
        console.log(error)
      })
    },


    setUserProfilePicture: function (picture) {
      this.userPhotoRequest.photoData = picture;
    },

    addUserPicture: function () {
      this.userPhotoRequest.date = this.date

      this.userPhotoRequest.userId = this.userId
      this.$http.post("/user/photo", this.userPhotoRequest
      ).then(response => {
        this.getUserRegisteredInfo()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


  },
  beforeMount() {
    this.getUserRegisteredInfo()
  }

}
</script>

