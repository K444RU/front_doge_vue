<template>
  <div>

    <h2>Minu Koerad
      <button v-on:click="$router.push('/dog/register')" type="button" class="btn btn-success">Lisa koer</button>
      <button v-on:click="$router.push('/find/dogwalker')" type="button" class="btn btn-dark">Otsi koerahoidjat</button>
    </h2>
    <table class="table table-success table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Photo</th>
        <th scope="col">Name</th>
        <th scope="col">Breed</th>
        <th scope="col">Age</th>
        <th scope="col">Size</th>
        <th scope="col">Additionalinfo</th>
        <td></td>

      </tr>
      </thead>
      <tbody>
      <tr v-for="dogs in dogTableResponse">
        <th scope="row">{{ dogs.sequenceNumber }}</th>
        <td>
          <div v-if="dogs.dogPhoto == null">
            <img src="@/assets/img/deafult1.jpeg" style="height: 75px">
          </div>
          <div v-else>
            <img :src="dogs.dogPhoto" style="height: 75px" alt="">
          </div>
          <!--          {{ dogs.dogPhoto }}-->

        </td>
        <td>{{ dogs.dogName }}</td>
        <td>{{ dogs.dogBreed }}</td>
        <td>{{ dogs.dogAge }}</td>
        <td>{{ dogs.dogSizeType }}</td>
        <td>{{ dogs.dogAdditionalInformation }}</td>
        <td>
          <font-awesome-icon style="height: 35px" icon="fa-solid fa-trash"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>

import ImageInput from "@/components/image/ImageInput";

export default {
  name: 'DogTableComponent',
  components: {ImageInput},
  props: {
    dogTableResponse: Array()
  },


  data: function () {
    return {}
  },
  methods: {},

}
</script>