<template>
  <div class="col row justify-content-center">

    <div class="myApp"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"></div>
    <nav class="col col-lg-7">

      <router-link to="/owner-profile">
        <button type="button" class="btn btn-success">Minu Profiil</button>
      </router-link>
      <router-link to="/find/dogwalker">
        <button type="button" class="btn btn-dark">Otsi koerahoidjat</button>
      </router-link>
      <router-link to="/dog/register">
        <button type="button" class="btn btn-success">Lisa koer</button>
      </router-link>
      <router-link to="/">
        <button type="button" class="btn btn-success">Logi välja</button>
      </router-link>

    </nav>
    <router-view/>


    <div>
      <h1>Leidke ideaalne sobivus</h1>
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
        <input v-model="orderRequest.timeFrom" type="date" id="date">
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
        <input v-model="orderRequest.timeFrom" type="text" class="form-control" placeholder="kellaaeg"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Kuni</span>
        <input v-model="orderRequest.timeTo" type="text" class="form-control" placeholder="kellaaeg"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="col-lg-2">
      <h3>Aadress</h3>
      <input v-model="orderRequest.timeFrom" type="text" class="form-control" placeholder="kellaaeg"
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


      <div class="col-lg-2"><img src="../assets/img/labdog.png" style="height: 150px" alt=""></div>

      <br>
      <br>
    </div>


    <div class="col col-lg-2">
      <!--      <button v-on:click="$router.push('/found/service')" type="button" class="btn btn-success">Otsi</button>-->
      <font-awesome-icon v-on:click="addNewOrder" style="height: 75px; color: #1DB954;" icon="fa-solid fa-circle-plus"/>
    </div>


  </div>
</template>

<script>
export default {
  name: "FindDogWalkerPageView",

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



