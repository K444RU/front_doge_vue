<template>
  <div class="col row justify-content-center findWalkerBackground">

    <div class="logo"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"></div>

    <OwnerButtonComponent/>

    <div>
      <h1 style="margin-left: 30px; color: black; font-style: oblique">Leidke ideaalne sobivus</h1>
      <br>
      <br>
    </div>


    <div class="col-lg-2 ">
      <h3>Linn</h3>
      <select v-model="walkerSearchRequest.cityId" class="form-select" aria-label="Default select example">
        <option selected disabled value="0">--Valige Linn--</option>
        <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>
      </select>
    </div>
    <br>


    <div class="col-lg-2">
      <h3>Kuupäev</h3>
      <p>
        <label class="fw-bold" for="date"></label>
        <input v-model="walkerSearchRequest.date" type="date" id="date">
      </p>
    </div>
    <div style="color: floralwhite" class="col-lg-2">
      <h3>Kellaaeg</h3>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Alates</span>
        <input v-model="walkerSearchRequest.timeFrom" type="number" class="form-control"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Kuni</span>
        <input v-model="walkerSearchRequest.timeTo" type="number" class="form-control"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>

    <div class="col-lg-2">
      <h3 style="color: floralwhite">Aadress</h3>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Aadres</span>
        <input v-model="walkerSearchRequest.aadress" type="text" class="form-control" placeholder="Aadress"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>

    <div class="col-lg-2">
      <h3 style="color: floralwhite">Vali koera</h3>
      <div v-for="dog in walkerSearchRequest.dogInfos">
        <input v-model="dog.isSelected" class="form-check-input" type="checkbox" id="flexCheckDefault">
        <label style="color: floralwhite" class="form-check-label" for="flexCheckDefault">
          {{ dog.dogName }}
        </label>
      </div>


    </div>


    <div class="col col-lg-1">
      <font-awesome-icon   v-on:click="findWallkers" style="height: 75px;  color: floralwhite;" icon="fa-solid fa-circle-plus"/>
    </div>
    <h1 style="color: floralwhite; font-style: oblique">Koerte hoidjate nimekiri</h1>
    <div class="col-lg-8">
      <DogWalkersTable :available-walkings="availableWalkings" @registerWalkEvent="registerWalk"/>
    </div>


  </div>
</template>

<script>

import OwnerButtonComponent from "@/components/OwnerButtonComponent";
import DogWalkersTable from "@/views/DogWalkersTable";

export default {
  name: "FindDogWalkerPageView",
  components: {DogWalkersTable, OwnerButtonComponent},

  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),


      cities:
          {
            cityId: '',
            cityName: ''
          },

      dogRequest: {
        dogName: '',
        dogId: 0
      },

      walkerSearchRequest: {
        cityId: 0,
        date: '',
        aadress: '',
        timeFrom: 0,
        timeTo: 0,
        dogInfos: [
          {
            dogId: 0,
            dogName: '',
            isSelected: false
          }
        ]
      },
      availableWalkings: [
        {
          walkingId: 0,
          walkerName: '',
          additionalInfo: '',
          userPhoto: '',
          date: '',
          timeFrom: 0,
          timeTo: 0
        }
      ],

      orderRequest:
          {
            walkingId: 0,
            walkingDate: '',
            timeFrom: 0,
            timeTo: 0,
            address: '',
            dogs: [
              {
                dogId: 0,
                isSelected: true
              }
            ]
          }


    }
  },
  methods: {

    findWallkers: function () {
      this.$http.post("/walking", this.walkerSearchRequest
      ).then(response => {
        this.availableWalkings = response.data
      }).catch(error => {
        console.log(error)
      })
    },


    citySelectInfo: function () {
      this.$http.get("/walking/city")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    getDogNameByUserId: function () {
      this.$http.get("/dog/select", {
            params: {
              userId: Number(sessionStorage.getItem('userId')),
            }
          }
      ).then(response => {
        this.walkerSearchRequest.dogInfos = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    registerWalk: function (walkingId) {
      this.orderRequest.walkingId = walkingId;
      this.orderRequest.walkingDate = this.walkerSearchRequest.date;
      this.orderRequest.timeFrom = this.walkerSearchRequest.timeFrom;
      this.orderRequest.timeTo = this.walkerSearchRequest.timeTo;
      this.orderRequest.dogs = this.walkerSearchRequest.dogInfos;
      this.orderRequest.address = "Address from some input box"



      this.$http.post("/walking/order", this.orderRequest
      ).then(response => {
        alert("Juhuuu! Success")
        // push to some othet page
      }).catch(error => {
        console.log(error)
      })
    },


  },
  beforeMount() {
    this.availableWalkings = []
    this.citySelectInfo()
    this.getDogNameByUserId()
  }
}
</script>



