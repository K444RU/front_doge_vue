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
      <br>
      <br>
      <p>
        <label class="fw-bold" for="date">Kuni</label>
        <input type="date" id="date">
      </p>
    </div>


    <div class="col-lg-2"><h3>
      Kellaaeg</h3>
      <p>
        <label for="time">Alates</label>
        <input type="time" id="time">
      </p>
      <br>
      <br>
      <p>
        <label for="time">Kuni</label>
        <input type="time" id="time">
      </p>
    </div>


    <div class="col-lg-2">
      <h3>Vali koera</h3>
      <select class="form-select" aria-label="Default select example">
        <option  selected disabled value="0">--Valige koera--</option>
        <option  v-for="dogs in dogRequest" :value="dogs.dogId">{{ dogs.dogName }}</option>

      </select>


      <div class="col-lg-2"><img src="../assets/img/labdog.png" style="height: 150px" alt=""></div>

      <br>
      <br>
    </div>


    <div class="row-cols-4">
      <button type="button" class="btn btn-success">Otsi</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "FindDogWalkerPageView",

  data: function () {
    return {


      cities:
          {
            cityId: '',
            cityName: ''
          },

      dogRequest: {
        dogName: '',
        dogId: 0
      }





    }
  },
  methods: {
    citySelectInfo: function () {
      this.$http.get("/walking/city")
          .then(response => {
            this.cities = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },

    getDogbyUserId: function () {
      this.$http.get("/dog/select")
          .then(response => {
            this.dogRequest = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.citySelectInfo()
    this.getDogbyUserId()
  }
}
</script>

