<template>
  <div>

    <h2>Minu Koerad
      <button v-on:click="$router.push('/dog/register')" type="button" class="btn btn-success">Lisa koer</button>
    </h2>
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
        <td>
          <font-awesome-icon style="height: 35px" icon="fa-solid fa-trash"/>
        </td>
      </tr>
      <tr>
        <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>
          <font-awesome-icon style="height: 35px" icon="fa-solid fa-trash"/>
        </td>
      </tr>
      <tr>
        <th scope="row"><img style="height: 100px" src="../assets/dogavatry.jpeg"></th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>@twitter</td>
        <td>
          <font-awesome-icon style="height: 35px" icon="fa-solid fa-trash"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
export default {
  name: 'DogTableComponent',
  dogTableResponse: {

  }
}
</script>