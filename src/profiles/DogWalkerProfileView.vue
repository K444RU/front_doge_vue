<template>
  <div>
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png" >
    </div>
    <h1>
      Koerahoidja profiil
    </h1>

  </div>
</template>

<script>
export default {
  name: 'DogWalkerProfileView',
  data: function () {
    return {
      userId: this.$route.query.userId
    }


  }
}
</script>

<style>

</style>