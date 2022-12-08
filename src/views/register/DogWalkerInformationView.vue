<template>
  <div class="col row justify-content-center ">
    <div class="logo"><img alt="Vue logo" src="@/assets/img/doglogo.png"></div>
    <OwnerButtonComponent/>


    <div class="container" style="text-align: center">
      <div class="row">
        <div class="col">
          <h1>Koerahoidja Info</h1>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Eesnimi</th>
              <th scope="col">Perekonnanimi</th>
              <th scope="col">Info</th>
              <th scope="col">Pilt</th>
              <th scope="col">Kuupäev</th>
              <th scope="col">Kellaaeg alates</th>
              <th scope="col">Kellaaeg kuni</th>
              <th scope="col">Linn</th>
              <th scope="col">Aadress</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="order in dogWalkerInfoResponse[0].orders">
              <td></td>
              <td>{{ order.walkerFirstname }}</td>
              <td>{{ order.walkerLastname }}</td>
              <td>{{ order.walkerAdditionalInformation }}</td>
              <td>
                <div v-if="order.walkerPhoto == null || order.walkerPhoto == 0">
                  <img src="@/assets/img/deafult1.jpeg" style="height: 75px" alt="">
                </div>
                <div v-else>
                  <img class="dog--circular--portrait"
                       :src="order.walkerPhoto" alt="">
                </div>

              </td>
              <td>{{ order.walkingDate }}</td>
              <td>{{ order.timeFrom }}</td>
              <td>{{ order.timeTo }}</td>
              <td>{{ order.cityName }}</td>
              <td>{{ order.address }}</td>
            </tr>
            </tbody>
          </table>
        </div>


        <div class="col" style="text-align: center">
          One of three columns
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import OwnerButtonComponent from "@/components/OwnerButtonComponent";

export default {
  name: "DogWalkerInformationView",
  components: {OwnerButtonComponent},
  props: {
    dogId: ''
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
  beforeMount() {
    this.$http.get("/dog/ordered", {
          params: {
            dogId: this.dogId
          }
        }
    ).then(response => {
      this.dogWalkerInfoResponse = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
</style>