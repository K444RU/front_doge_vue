<template>
  <div class="col row justify-content-center backgroundColor" >

    <div class="logo"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"></div>

    <WalkerButtonComponent/>


<div class="col-lg-5">
  <h1 class="col-lg-3">Koerahoidja {{ userInfoResponse.firstname }} {{ userInfoResponse.lastname }} </h1>

  <div class="col-lg-2">
    <div v-if="userInfoResponse.userPhoto !== null && userInfoResponse.userPhoto.length > 0">
      <img class="circular--portrait img" :src="userInfoResponse.userPhoto" style="height: 300px">
    </div>
    <div v-else>
      <img class="test" style="height: 250px" src="@/assets/img/deafult1.jpeg"/>
    </div>
    <ImageInput @pictureInputSuccess="setUserProfilePicture"/>
    <button v-on:click="addUserPicture" type="button" class="btn btn-success eachButton">Salvesta pilt</button>
  </div>
</div>



    <div class="col-lg-4">

      <div>
        <h4>
          {{ userInfoResponse.additionalInformation }}
        </h4>
      </div>

      <!--      <input v-model="date" type="date" name="" id="">-->

    </div>
  </div>
</template>

<script>

import ImageInput from "@/components/image/ImageInput";
import WalkerButtonComponent from "@/components/WalkerButtonComponent";


export default {
  name: 'DogOwnerProfileView',
  components: {WalkerButtonComponent, ImageInput},


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

    clearSessionStorage: function () {
      this.$confirm("Are you sure?.").then(response => {
        this.$router.push("/");
      }).then(response => {
        sessionStorage.clear();

      })
    },
  },
  beforeMount() {
    this.getUserRegisteredInfo()
  }
}
</script>

