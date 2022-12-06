<template>
  <div class="MainFlex testView">
    <div class="container d-flex col row justify-content-center ">



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
  </div>
</template>

<script>
export default {
  name: "testview",

  data: function () {
    return {}
  }
}
</script>

<style scoped>


</style>

