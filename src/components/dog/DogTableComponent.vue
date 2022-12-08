<template>
  <div class="col">

    <h2 style="color: black; font-style: oblique">Minu Koerad
    </h2>

    <table class="table table-success table-striped tableShadow">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Photo</th>
        <th scope="col">Name</th>
        <th scope="col">Breed</th>
        <th scope="col">Age</th>
        <th scope="col">Size</th>
        <th scope="col">Additionalinfo</th>
        <th scope="col">Actions</th>
        <td></td>

      </tr>
      </thead>
      <tbody>
      <tr v-for="dog in dogTableResponse">
        <th scope="row">{{ dog.sequenceNumber }}</th>
        <td>
          <div v-if="dog.dogPhoto == null || dog.dogPhoto == 0">
            <img src="@/assets/img/dogdeafultavatar.png" style="height: 75px" alt="">
          </div>
          <div v-else>
            <img class="dog--circular--portrait"
                 :src="dog.dogPhoto" alt="">
          </div>

        </td>
        <td> {{ dog.dogName }}</td>
        <td>{{ dog.dogBreed }}</td>
        <td>{{ dog.dogAge }}</td>
        <td>{{ dog.dogSizeType }}</td>
        <td>{{ dog.dogAdditionalInformation }}</td>
        <!--        <td>-->
        <!--          <font-awesome-icon v-on:click="deleteDog(dog.dogId)" style="height: 35px" icon="fa-solid fa-trash"/>-->
        <!--        </td>-->
        <td>
          <button v-on:click="dogWalkerInfo(dog.dogId)" type="button" class="btn btn-primary">
            <font-awesome-icon icon="fa-solid fa-eye"/>
          </button>
          <button v-on:click="deleteDog" type="button" class="btn btn-danger">
            <font-awesome-icon icon="fa-solid fa-trash-can"/>
          </button>
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
    dogTableResponse: {}
  },


  data: function () {
    return {
      dogWalkerInfoResponse: [
        {
          dogId: 0,
          dogName: '',
          orders: [
            {
              orderId: 0,
              walkerFirstname: '',
              walkerLastname: '',
              walkerAdditionalInformation: '',
              walkerPhoto: '',
              walkingDate: '',
              timeFrom: 0,
              timeTo: 0,
              cityName: '',
              address: '',
              orderStatus: true
            }
          ]
        }
      ]
    }
  },
  methods: {

    dogWalkerInfo: function (dogId) {
      this.$http.get("/dog/ordered", {
            params: {
              dogId: dogId
            }
          }
      ).then(response => {
        this.dogWalkerInfoResponse = response.data
        this.$router.push('/dogwalker/info')
      }).catch(error => {
        console.log(error)
      })
    },


    deleteDog: function (dogId) {
      this.$http.put('/dog/update', {
            dogId: dogId,
            dogStatus: "I"
          }
      ).then(() => {
        this.$emit('deleteDogEvent')
      }).catch(error => {
        console.log(error)
      })
    },

  },

}
</script>

<style>
/*table {*/
/*  overflow-y:scroll;*/
/*  height:500px;*/
/*  display:block;*/
/*}*/

</style>