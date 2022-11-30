<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>


    <h1 class="fw-bolder">Koerahoidja Profiil</h1>

    <div class="col-lg-5 row-cols-9">
      <h2></h2>
      <img class="test" style="height: 250px" src="../assets/deafult1.jpeg"/>
      <div class="row-cols-1">
        <button type="button" class="btn btn-success">Salvesta pilt</button>
      </div>
    </div>


    <div class="col-lg-6">
      <h2>Nimi Perekonnanimi</h2>
      <h5>
        Siia alla tuleb lisainfo registratsioonist

      </h5>
    </div>

    </div>



  </div>
</template>

<script>

export default {
  name: 'DogWalkerProfileView',
  data: function () {
    return {
      walker: sessionStorage.getItem('userId'),

    }


  }
}
</script>

<style>

</style>