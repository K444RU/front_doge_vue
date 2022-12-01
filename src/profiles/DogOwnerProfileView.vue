<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>




      <h1>Koera omaniku profiil {{userId}} </h1>


    <div class="col-lg-2">
      <div v-if="pictureResponse.photoData === null">
        <img class="test" style="height: 250px" src="../assets/deafult1.jpeg"/>
      </div>
      <div v-else>
        <img :src="pictureResponse.photoData" style="height: 2px">
      </div>


        <ImageInput @pictureInputSuccess="setOwnerProfilePicture"/>
        <button v-on:click="addPicture" type="button" class="btn btn-success">Salvesta pilt</button>
    </div>


    <div  class="col-lg-4">
      <h2 > {{ firstname }} perekonnanimi</h2>
      <h5>
        Siia alla tuleb lisainfo registratsioonist

      </h5>
    </div>
    <div class="col-lg-4">
      <h2>Minu Koerad<button v-on:click="$router.push('/dog/register')" type="button" class="btn btn-success">Lisa koer</button></h2>
      <table class="table table-success table-striped">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Breed</th>
          <th scope="col">Age</th>
          <th scope="col">Size</th>
          <th scope="col">Additionalinfo</th>
          <th scope="col"></th>

        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import ProfileRegisterView from "@/Register/ProfileRegisterView";
import ImageInput from "@/components/image/ImageInput";


export default {
  name: 'DogOwnerProfileView',
  components: {ImageInput, ProfileRegisterView},


  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),


      pictureRequest: {
        userId: 0,
        photoData: ''
      },
      pictureResponse: {
        userId: 0,
        photoData: ''
      },
      ownerRequest: {
        userId: 0,
        firstname: '',
        lastname: '',
        additionalInformation: null,
        userPhoto: ''

      }
    }
  },
  methods: {

    // getOwnerRegisteredInfo: function () {
    //   this.$http.get("/user/owner", {
    //         params: {
    //           userId: this.userId,
    //           firstname: this.firstname,
    //           lastname: this.lastname,
    //           additionalInformation: this.additionalInformation,
    //           userPhoto: this.userPhoto
    //         }
    //       }
    //   ).then(response => {
    //     console.log(response.data)
    //
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },

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
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },



  },
  // mounted() {
  //   this.getOwnerRegisteredInfo()
  // }

}
</script>

