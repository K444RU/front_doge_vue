<template>
  <div class="row justify-content-center backgroundColor walkerProfileBackground">
    <div class="logo"><img alt="Vue logo" src="@/assets/img/doglogo.png"></div>
    <WalkerButtonComponent/>

    <div class="container">
      <div class="row" style="margin-top: 100px;">

        <div class="col-4">
          <h1 style="color: floralwhite; font-style: oblique" class="col-lg-4">
            Koerahoidja {{ userInfoResponse.firstname }}
            {{ userInfoResponse.lastname }}
          </h1>
          <div class="col-lg-8">
            <div v-if="userInfoResponse.userPhoto !== null && userInfoResponse.userPhoto.length > 0">
              <img class="circular--portrait img" :src="userInfoResponse.userPhoto" style="height: 300px">
            </div>
            <div v-else>
              <img class="test" style="height: 250px" src="@/assets/img/deafult1.jpeg"/>
            </div>
            <div class="row">
              <ImageInput class="col" @pictureInputSuccess="setUserProfilePicture"/>
              <button v-on:click="addUserPicture" type="button" class="btn btn-success col eachButton">Salvesta pilt
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div>
            <h2 style="font-style: oblique; color: floralwhite">
              Lisainfo minu kohta:
            </h2>
            <h4>
              {{ userInfoResponse.additionalInformation }}
            </h4>
          </div>
        </div>

        <div class="col">
          <h1 style="font-style: oblique">Minu kehtivad broneeringud</h1>
          <table class="table table-success tableShadow">
            <thead class="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kuupäev</th>
              <th scope="col">Aeg alates</th>
              <th scope="col">Aeg kuni</th>
              <th scope="col">Linn</th>
              <th scope="col">Aadress</th>
              <th scope="col">Koerad</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <tr v-for="order in walkerActiveOrderResponse">
              <th scope="row">{{ order.sequenceNumber }}</th>
              <td>{{ order.walkingDate }}</td>
              <td>{{ order.timeFrom }}</td>
              <td>{{ order.timeTo }}</td>
              <td>{{ order.cityName }}</td>
              <td>{{ order.address }}</td>
              <td>
                <div v-for="dog in order.dogs">
                  {{ dog.dogName }}
                </div>
              </td>
              <td>
                <button v-on:click="orderStatusUpdate(order.orderId)" type="button" class="btn btn-dark">Jalutatud!
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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

      },
      walkerActiveOrderResponse:
          [
            {
              orderId: 0,
              walkingDate: '',
              timeFrom: 0,
              timeTo: 0,
              cityName: '',
              address: '',
              dogs: [
                {
                  dogName: ''
                }
              ]
            }
          ]
    }
  },
  methods: {
    orderStatusUpdate: function (orderId) {
      this.$http.put("/order/update", {
            orderId: orderId,
            orderStatus: "I"
          }
      ).then(response => {
        this.$emit(this.getOrderRegisteredInfo())
      }).catch(error => {
        console.log(error)
      })
    },


    getOrderRegisteredInfo: function () {
      this.$http.get("/walking/order", {
            params: {
              userId: Number(sessionStorage.getItem('userId'))
            }
          }
      ).then(response => {
        this.walkerActiveOrderResponse = response.data
        this.addSequenceNumbers()
      }).catch(error => {
        console.log(error)
      })
    },


    addSequenceNumbers: function () {
      let counter = 1
      this.walkerActiveOrderResponse.forEach(value => {
        value.sequenceNumber = counter
        counter++
      });
    },

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
    this.getOrderRegisteredInfo()
  }
}
</script>

