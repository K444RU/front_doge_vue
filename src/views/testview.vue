<template>

  <div class="col row justify-content-center">

    <div class="home"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"> </div>
    <nav class="col col-lg-7" >

        <router-link to="/owner-profile"><button type="button" class="btn btn-success">Minu Profiil</button></router-link>
        <router-link to="/find/dogwalker"><button type="button" class="btn btn-dark">Otsi koerahoidjat</button></router-link>
        <router-link to="/dog/register"><button type="button" class="btn btn-success">Lisa koer</button></router-link>
      <router-link to="/"><button v-on:click="askToLogOut" type="button" class="btn btn-success">Logi välja</button></router-link>

    </nav>
      <router-view/>





      <h1>TEST VIEW</h1>

      <div class="col-lg-4">
        <input type="file" @change="handleImage" accept="image/x-png,image/jpeg">
        <button type="button" class="btn btn-success">lisa koera pilt</button>
        <h3 class="col-lg-4">Koera Tõug</h3>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <h3 class="col-lg-4">Koera nimi </h3>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>


        <div>
          <p>
            <label class="fw-bold" for="date">Pick a date</label>
            <input type="date" id="date">
          </p>
        </div>


      </div>

    </div>

</template>

<script>
export default {
  name: "testview",

  data: function () {
    return {}
  },
  methods:{

  }


}
</script>

<style scoped>


</style>

