<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/img/doglogo.png">
    </div>


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
        <label class="fw-bold" for="date">Alates</label>
        <input type="date" id="date">
      </p>

      <p>
        <label class="fw-bold" for="date">Kuni</label>
        <input type="date" id="date">
      </p>
    </div>


    <div class="col-lg-2">
      <h3>Kellaaeg</h3>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Alates</span>
        <input type="text" class="form-control" placeholder="kellaaeg"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Kuni</span>
        <input type="text" class="form-control" placeholder="kellaaeg"
               aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>


    <div class="col-lg-2">
      <h3>Vali koera</h3>
      <div v-for="dogs in dogRequest">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault">
        <label :value="dogRequest.dogId" class="form-check-label" for="flexCheckDefault">
          {{ dogs.dogName }}
        </label>
      </div>


      <div class="col-lg-2"><img src="../assets/img/labdog.png" style="height: 150px" alt=""></div>

      <br>
      <br>
    </div>


    <div class="row-cols-4">
      <button v-on:click="$router.push('/found/service')" type="button" class="btn btn-success">Otsi</button>
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



