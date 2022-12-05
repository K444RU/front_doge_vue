<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png">
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


    <div class="col-lg-2"><h3>
      Kellaaeg</h3>
      <p>
        <label for="time">Alates</label>
        <input type="time" id="time">
      </p>
      <p>
        <label for="time">Kuni</label>
        <input type="time" id="time">
      </p>
    </div>


    <div class="col-lg-4">
      <h3>Vali koera suurust</h3>
      <div class="input-group">
        <div v-for="option in sizes" class="col-lg-5">
          <input class="form-check-input" type="checkbox" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">{{ option.sizeType }}</label>
        </div>
        </div>



    </div>


    <div class="row-cols-4">
      <br>
      <br>
      <button type="button" class="btn btn-success">Otsi</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "AddWalkingServiceView",

  data: function () {
    return {
      cities:
          {
            cityId: '',
            cityName: ''
          },

      sizes:
          {
            sizeType: '',
            sizeId: '',
            sizePrice: ''
          },
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

    getDogSizesInfo: function () {
      console.log('olen siin 1')
      this.$http.get("/dog/size")
          .then(result => {
            this.sizes = result.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.citySelectInfo()
    this.getDogSizesInfo()
  }
}
</script>

