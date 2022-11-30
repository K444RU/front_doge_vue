<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>


    <h1>Koera omaniku profiil {{userId}}</h1>

    <div class="col-lg-2">
      <h2></h2>
      <img class="test" style="height: 250px" src="../assets/deafult1.jpeg"/>
      <div class="row-cols-1">
        <button type="button" class="btn btn-success">Salvesta pilt</button>
      </div>
    </div>


    <div class="col-lg-4">
      <h2>Nimi Perekonnanimi</h2>
      <h5>
        Siia alla tuleb lisainfo registratsioonist

      </h5>
    </div>
    <div class="col-lg-4">
      <h2>Minu Koerad<button v-on:click="$router.push('/dog/register')" type="button" class="btn btn-success">Lisa koer</button></h2>
      <table class="table table-success table-striped">
        <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Breed</th>
          <th scope="col">Age</th>
          <th scope="col">Size</th>
          <th scope="col">Additionalinfo</th>
          <th scope="col"></th>

        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        <tr>
          <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><font-awesome-icon style="height: 35px" icon="fa-solid fa-trash" /></td>
        </tr>
        </tbody>
      </table>
    </div>



  </div>
</template>

<script>

import ProfileRegisterView from "@/Register/ProfileRegisterView";


export default {
  name: 'DogOwnerProfileView',
  components: {ProfileRegisterView},
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),


    }
  }
}
</script>

