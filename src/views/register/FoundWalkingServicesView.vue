<template>
<div class="col row justify-content-center">
  <div class="home">
    <img style="margin-right: 1201px" alt="Vue logo" src="@/assets/img/doglogo.png">
  </div>

  <h1>Koerte hoidjate nimekiri</h1>


  <div class="col-lg-8">
    <div class="">
    <table class="table table-success" >
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orderResponse">
        <th scope="row">1</th>
        <td>{{ order.walkerName }}</td>
        <td>{{ order.walkingDate }}</td>
        <td>{{ order.timeFrom }}</td>
        <td>{{ order.timeTo }}</td>
      </tr>

      </tbody>
    </table>
  </div>
</div>







</div>
</template>

<script>
export default {
  name: "FoundWalkingServicesRoute",

  data: function () {
    return{

      orderResponse: {
        walkingId: 0,
        walkerName: '',
        walkingDate: '',
        timeFrom: 0,
        timeTo: 0
      }


    }

  },
  methods: {

  }
}
</script>

