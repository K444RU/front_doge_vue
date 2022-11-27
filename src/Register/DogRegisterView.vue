<template>
  <div>
    <div class="col-20">
      <img style="margin-right: 1201px" src="@/assets/doglogo.png">
    </div>
    <h1>
      Lisa Koer
    </h1>
    <div>
      <div>
        <h4 style="margin-right: 650px">
          Koera Tõug
        </h4>
        <div class="col-6" style="margin-left: 330px">
          <select v-on:change="clickSelectDogBreed()" v-model="selectDogBreed" class="form-select row-cols-5"
                  aria-label="Default select example">
            <option selected disabled value="0">--Koera tõug--</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>
      <div>
        <h4 style="margin-right: 660px">
          Koera nimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 650px">
          Koera vanus
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 645px">
          Koera suurus
        </h4>
        <div class="col-6" style="margin-left: 330px">
          <select class="form-select row-cols-5" aria-label="Default select example">
            <option selected disabled value="0">--Koera suurus--</option>
            <option value="1">One</option>
          </select>
        </div>
      </div>

      <div>
        <h4 style="margin-right: 335px">
          Lisainfo, mida koera hoidja peaks teadma
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br>
        <br>
        <div class="row-cols-5">
          <button v-on:click="$router.push('/owner-profile')" type="button" class="btn btn-success">Registreeru</button>
        </div>
        <br>
        <br>
      </div>
    </div>
    <div>
      <img src="@/assets/curious-dog.png">
    </div>

  </div>
</template>

<script>
export default {
  name: 'DogRegisterView',
  data: function () {
    return {


      selectDogBreed: 0,

      methods: {
        clickSelectDogBreed: function () {
          this.$emit('clickSelectDogBreed', this.selectDogBreed)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>