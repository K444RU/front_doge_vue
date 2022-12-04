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
        <option selected>--Valige Linn--</option>
        <option value="1">Tallinn</option>
        <option value="2">Tartu</option>
        <option value="3">Pärnu</option>
      </select>
    </div>


    <div class="col-lg-2">
      <h3>Kuupäev</h3>
      <p1><label class="fw-bold" for="date">Alates</label>
        <input type="date" id="date"></p1>
      <br>
      <br>
      <p1><label class="fw-bold" for="date">Kuni</label>
        <input type="date" id="date"></p1>
    </div>


    <div class="col-lg-2"><h3>
      Kellaaeg</h3>
      <p1>
        <label for="time">Alates</label>
        <input type="time" id="time">
      </p1>
      <br>
      <br>
      <p1>
        <label for="time">Kuni</label>
        <input type="time" id="time">
      </p1>
    </div>


    <div class="col-lg-2">
      <h3>Vali koera</h3>
      <select class="form-select" aria-label="Default select example">
        <option selected>--Valige koera--</option>
        <option value="1">Pica</option>
        <option value="2">Chuu</option>
        <option value="3">Slowpoke</option>
      </select>


      <div class="col-lg-2"><img src="../assets/img/labdog.png" style="height: 150px"></div>

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
  name: "FindDogWalkerPageView"
}
</script>

