<template>
  <div>
    <h2>
      Registreeru AnnaKäppa koerahoidjaks
    </h2>
    <div>
      <div class="col-20">
        <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
      </div>

      
      <div>
        <h4 style="margin-right: 720px">
          Nimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 610px">
          Perekonnanimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 610px">
          E-posti aadress
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 725px">
          Linn
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 630px">Kasutajanimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 700px">
          Parool
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 630px">
          Korda parool
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input type="text" class="form-control" placeholder="nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 560px">
          Lisainfo enda kohta
        </h4 >
        <div style="margin-left: 330px" class="col-lg-6">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br>
        <br>
        <div class="row-cols-5">
        <button v-on:click="$router.push('/succes')" type="button" class="btn btn-success">Registreeru</button>
        </div>
        <br>
        <br>
      </div>
    </div>
    <img src="@/assets/curious-dog.png">
  </div>
</template>

<script>
export default {
  name: "DogWalkerRegisterView"
}
</script>

<style scoped>
main {


}

</style>