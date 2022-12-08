<template>
  <div>
    <table class="table table-success">
      <thead>
      <tr>
        <th scope="col">Pilt</th>
        <th scope="col">Jalutaja</th>
        <th scope="col">Lisainfo</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="walking in availableWalkings">
        <td>
          <div v-if="walking.userPhoto == 0 || walking.userPhoto == null">
            <img src="@/assets/img/deafult1.jpeg" style="height: 75px" alt="">
          </div>
          <div v-else>
            <img class="dog--circular--portrait ownerPic" :src="walking.userPhoto" alt="">
          </div>
        </td>
        <td>{{ walking.walkerName }}</td>
        <td>{{ walking.additionalInfo }}</td>
        <td>
          <button v-on:click=" registerWalkEvent(walking.walkingId)" type="button" class="btn btn-dark eachButton">Broneeri
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DogWalkersTable',
  props: {
    availableWalkings: {}
  },
  methods: {
    registerWalkEvent: function (walkingId) {
      this.$emit('registerWalkEvent', walkingId);

    }

  }
}
</script>