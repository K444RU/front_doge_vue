<template>
  <div class="col row justify-content-center">

    <div class="home"><img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png"> </div>
    <nav class="col col-lg-7" >

      <router-link to="/walker-profile"><button type="button" class="btn btn-success">Minu Profiil</button></router-link>
      <router-link to="/add/service"><button type="button" class="btn btn-dark">Lisa oma teenus</button></router-link>
      <router-link to="/active/service"><button type="button" class="btn btn-success">Minu teenused</button></router-link>
      <router-link to="/about"><button type="button" class="btn btn-dark">Kehtivad broneeringud</button></router-link>
      <router-link to="/"><button type="button" class="btn btn-success">Logi välja</button></router-link>

    </nav>
    <router-view/>



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
            <th scope="row">{{ walker.sequenceNumber }}</th>
            <td>{{ walker.cityName }}</td>
            <td>{{ walker.dateFrom }}</td>
            <td>{{ walker.dateTo }}</td>
            <td>{{ walker.timeFrom }}</td>
            <td>{{ walker.timeTo }}</td>
            <td><div v-for="sizeType in walker.sizeTypes">
              {{ sizeType.sizeType }}
            </div></td>
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


      walkerTableInfoResponse: [
        {
          sequenceNumber: 0,
          walkingId: 0,
          cityName: '',
          dateFrom: '',
          dateTo: '',
          timeFrom: 0,
          timeTo: 0,
          sizeTypes: [
            {
              sizeType: ''
            }
          ]
        }
      ]
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
      this.walkerTableInfoResponse.forEach(value => {
        value.sequenceNumber = counter
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