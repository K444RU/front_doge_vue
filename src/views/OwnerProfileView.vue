<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png">
    </div>


    <h1 >Koera omaniku profiil {{ userId }} </h1>


    <div class="col-lg-5">
      <h2> {{ userInfoResponse.firstname }} {{ userInfoResponse.lastname }}</h2>
      <div v-if="userInfoResponse.userPhoto !== null && userInfoResponse.userPhoto.length > 0">
        <h1>hello</h1>
        <img :src="userInfoResponse.userPhoto" style="height: 325px" >
      </div>
      <div v-else>
        <img class="test" style="height: 250px; " src="@/assets/img/deafult1.jpeg"/>
      </div>


      <ImageInput @pictureInputSuccess="setUserProfilePicture"/>
      <button v-on:click="addUserPicture" type="button" class="btn btn-success col-lg-9">Salvesta pilt</button>
    </div>


    <div class="col-lg-5">

      <h5>
        {{ userInfoResponse.additionalInformation }}
      </h5>
      <!--      <input v-model="date" type="date" name="" id="">-->
      <br>
      <DogTableComponent :dog-table-response="dogTableResponse" @deleteDogEvent="getDogInfo"/>
    </div>
  </div>
</template>

<script>

import ImageInput from "@/components/image/ImageInput";
import DogTableComponent from "@/components/dog/DogTableComponent";


export default {
  name: 'DogOwnerProfileView',
  components: {DogTableComponent, ImageInput},


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

      },

      dogTableResponse: {
        dogId: 0,
        dogPhoto: '',
        dogName: '',
        dogBreed: '',
        dogAge: '',
        dogSizeType: '',
        dogAdditionalInformation: ''
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
    addSequenceNumbers: function () {
      let counter = 1
      this.dogTableResponse.forEach(location => {
        location.sequenceNumber = counter
        counter++
      });
    },

    // getDogInfo: function () {
    //
    //   this.$http.get("/dog/select")
    //       .then(response => {
    //         this.dogTableResponse = response.data
    //         this.addSequenceNumbers()
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    // },
    getDogInfo: function () {

      this.$http.get("/dog/info", {
            params: {
              userId: Number(sessionStorage.getItem('userId')),
            }
          }
      ).then(response => {

        this.dogTableResponse = response.data
        if (this.dogTableResponse [0].dogPhoto == null )
        this.addSequenceNumbers()


        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },


  },
  beforeMount() {
    this.getUserRegisteredInfo()
    this.getDogInfo()

  }

}
</script>

