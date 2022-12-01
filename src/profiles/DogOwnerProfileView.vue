<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>




      <h1>Koera omaniku profiil {{userId}} </h1>



    <div class="col-lg-2">
      <div v-if="ownerResponse.userPhoto.length > 0">
        <h1>hello</h1>
        <img :src="ownerResponse.userPhoto" style="height: 200px">
      </div>
      <div v-else>
        <img class="test" style="height: 250px" src="../assets/deafult1.jpeg"/>
      </div>


        <ImageInput @pictureInputSuccess="setOwnerProfilePicture"/>
        <button v-on:click="addPicture" type="button" class="btn btn-success">Salvesta pilt</button>
    </div>


    <div  class="col-lg-4">
      <h2 > {{ ownerResponse.firstname }} {{ ownerResponse.lastname }}</h2>
      <h5>
        Siia alla tuleb lisainfo registratsioonist

      </h5>
    </div>
    <div class="col-lg-4">
      <DogTableComponent/>
    </div>
  </div>
</template>

<script>

import ImageInput from "@/components/image/ImageInput";
import DogTableComponent from "@/components/DogTableComponent";


export default {
  name: 'DogOwnerProfileView',
  components: {DogTableComponent, ImageInput},


  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),


      pictureRequest: {
        userId: 0,
        photoData: '',

      },
      pictureResponse: {
        userId: 0,
        photoData: null
      },
      ownerResponse: {
        firstname: '',
        lastname: '',
        additionalInformation: null,
        userPhoto: ''

      }
    }
  },
  methods: {

    getOwnerRegisteredInfo: function () {
      this.$http.get("/user/owner", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.ownerResponse = response.data

      }).catch(error => {
        console.log(error)
      })
    },

    // getOwnerRegisteredInfo: function () {
    //   this.$http.get("/user/owner")
    //       .then(response => {
    //         this.ownerRequest = response.data
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    // },


    setOwnerProfilePicture:function (picture){
      this.pictureRequest.photoData = picture;
    },

    addPicture: function () {
      this.pictureRequest.userId = this.userId
      this.$http.post("/user/photo", this.pictureRequest
      ).then(response => {
        this.getOwnerRegisteredInfo()
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },



  },
  beforeMount() {
    this.getOwnerRegisteredInfo()
  }

}
</script>

