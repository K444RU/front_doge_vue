<template>
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png">
    </div>


    <h1>Minu poolt avalikustatud teenused</h1>
    <!--    <h1> {{walkerInfoResponse.firstname}} , siin on sinu aktiivsed teenused </h1>-->


    <div class="col-lg-8">
      <div class="">
        <table class="table table-success table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Linn</th>
            <th scope="col">Kuupäev alates</th>
            <th scope="col">Kuupäev kuni</th>
            <th scope="col">Kellaaeg alates</th>
            <th scope="col">Kellaaeg kuni</th>
            <th scope="col">Koera suurus</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="walker in walkerTableInfoResponse">
            <th scope="row">{{ walker.addSequenceNumbers }}</th>
            <td>{{ walker.cityName }}</td>
            <td>{{ walker.dateFrom }}</td>
            <td>{{ walker.dateTo }}</td>
            <td>{{ walker.timeFrom }}</td>
            <td>{{ walker.timeTo }}</td>
            <td>{{ walker.sizeType }}</td>
            <td>
              <font-awesome-icon style="height: 35px" icon="fa-solid fa-trash"/>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "WalkerActiveServicesRoute",

  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),


      walkerTableInfoResponse: {
        walkingId: 0,
        cityName: '',
        dateFrom: '',
        dateTo: '',
        timeFrom: 0,
        timeTo: 0,
        sizeType: [
          {
            sizeType: ''
          }
        ]
      }
    }
  },
  methods: {
    getWalkerRegisteredServiceInfo: function () {

      this.$http.get("/walking", {
            params: {
              userId: Number(sessionStorage.getItem('userId')),
            }
          }
      ).then(response => {
        this.walkerTableInfoResponse = response.data
        this.addSequenceNumbers()


        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    addSequenceNumbers: function () {
      let counter = 1
      this.walkerTableInfoResponse.forEach(location => {
        location.sequenceNumber = counter
        counter++
      });
    },


  },
  beforeMount() {
    this.getWalkerRegisteredServiceInfo()
  }
}
</script>

<style>

</style>