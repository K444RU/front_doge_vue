<template>
  <div  class="col row justify-content-center">

    <div class="logo"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"></div>

    <OwnerButtonComponent/>

    <div>
      <h1 style="margin-left: 30px">Leidke ideaalne sobivus</h1>
      <br>
      <br>
    </div>



    <div class="col-lg-2">
      <h3>Linn</h3>
      <select class="form-select" aria-label="Default select example">
        <option selected disabled value="0">--Valige Linn--</option>
        <option v-for="city in cities" :value="city.cityId">{{ city.cityName }}</option>

      </select>
    </div>


    <div class="col-lg-2">
      <h3>Kuupäev</h3>
      <p>
        <label class="fw-bold" for="date"></label>
        <input v-model="orderRequest.walkingDate" type="date" id="date">
      </p>

      <!--      <p>-->
      <!--        <label class="fw-bold" for="date">Kuni</label>-->
      <!--        <input v-model="orderRequest.timeTo" type="date" id="date">-->
      <!--      </p>-->
    </div>


    <div class="col-lg-2">
      <h3>Kellaaeg</h3>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Alates</span>
        <input v-model="orderRequest.timeFrom" type="text" class="form-control"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Kuni</span>
        <input v-model="orderRequest.timeTo" type="text" class="form-control"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col-lg-2">
      <h3>Aadress</h3>
      <input v-model="orderRequest.address" type="text" class="form-control" placeholder="aadress"
             aria-label="Username" aria-describedby="basic-addon1">
    </div>


    <div class="col-lg-2">
      <h3>Vali koera</h3>
      <div v-for="dog in dogRequest">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <label v-model="dog.dogId" class="form-check-label" for="flexCheckDefault">
          {{ dog.dogName }}
        </label>
      </div>



    </div>


    <div class="col col-lg-1">
      <font-awesome-icon v-on:click="addNewOrder" style="height: 75px;  color: #1DB954;" icon="fa-solid fa-circle-plus"/>
      <div class="col-lg-2"><img src="../assets/img/labdog.png" style="height: 150px" alt=""></div>

    </div>


  </div>
</template>

<script>

import OwnerButtonComponent from "@/components/OwnerButtonComponent";
export default {
  name: "FindDogWalkerPageView",
  components: {OwnerButtonComponent},

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

      orderRequest: {
        walkingId: 0,
        walkingDate: '',
        timeFrom: 0,
        timeTo: 0,
        address: '',
        dog: [
          {
            dogId: 0,
            isSelected: true
          }
        ]
      }


    }
  },
  methods: {

    addNewOrder: function () {
      this.$http.post("/walking/order", this.orderRequest
      ).then(response => {
        this.$router.push({
          name: ('')
        })
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
        this.dogRequest = response.data
      }).catch(error => {
        console.log(error)
      })
    },


  },
  beforeMount() {
    this.citySelectInfo()
    this.getDogNameByUserId()
  }
}
</script>



