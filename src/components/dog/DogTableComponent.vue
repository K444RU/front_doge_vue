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
      <tr v-for="dog in dogTableResponse">
        <th scope="row">{{ dog.sequenceNumber }}</th>
        <td>
          <div v-if="dog.dogPhoto == 0 || dog.dogPhoto == null">
            <img src="@/assets/img/dogdeafultavatar.png" style="height: 75px" alt="">
          </div>
          <div v-else>
            <img class="dog--circular--portrait" :src="dog.dogPhoto"  alt="">
          </div>

        </td>
        <td>{{ dog.dogName }}</td>
        <td>{{ dog.dogBreed }}</td>
        <td>{{ dog.dogAge }}</td>
        <td>{{ dog.dogSizeType }}</td>
        <td>{{ dog.dogAdditionalInformation }}</td>
        <td>
          <font-awesome-icon  v-on:click="deleteDog(dog.dogId, dog.status)" style="height: 35px" icon="fa-solid fa-trash"/>
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
    dogTableResponse: Array(),

  },


  data: function () {
    return {


    }
  },
  methods: {
    deleteDog: function (dogId) {
      this.$http.delete("/dog", {
            params: {
              dogId: dogId,
            }
          }
      ).then(() => {
        this.$emit('deleteDogEvent')
      }).catch(error => {
        console.log(error)
      })
    },


    // deleteDog: function (dogId, status) {
    //   this.$http.put("/dog", null, {
    //         params: {
    //           dogId: dogId,
    //           status: status
    //         }
    //       }
    //   ).then(response => {
    //     this.$emit('deleteDogEvent')
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },





  },

}
</script>