<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/img/doglogo.png">
    </div>


    <h1 class="fw-bolder">Koerahoidja Profiil {{ userId }}</h1>

    <div class="col-lg-5 row-cols-9">
      <h2></h2>
      <img class="test" style="height: 250px" src="../assets/img/deafult1.jpeg"/>
      <div class="row-cols-1">
        <button type="button" class="btn btn-success">Salvesta pilt</button>
      </div>
    </div>







    <div  class="col-lg-4">
      <h2 > {{ walkerResponse.firstname }} {{ walkerResponse.lastname }}</h2>
      <h5>
        {{ walkerResponse.additionalInformation }}

      </h5>
    </div>

  </div>


</template>

<script>


import ImageInput from "@/components/image/ImageInput";


export default {
  name: 'DogWalkerProfileView',
  components: {ImageInput},

  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      pictureRequest: {
        userId: 0,
        photoData: '',

      },
      pictureResponse: {
        userId: 0,
        photoData: null
      },
      walkerResponse: {
        firstname: '',
        lastname: '',
        additionalInformation: null,
        userPhoto: ''

      }

    }


  },
  methods: {
    getWalkerRegisteredInfo: function () {
      this.$http.get("/user/owner", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.walkerResponse = response.data

      }).catch(error => {
        console.log(error)
      })
    },
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
    this.getWalkerRegisteredInfo()
  }

}
</script>

<style>

</style>