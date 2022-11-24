<template>
<div>
  <div class="home">
    <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png" >
  </div>
  <h4>
    Valige roll, mida soovite registreerida
  </h4>
  <br>
  <br>

  <div class="row-cols-3">
    <button v-on:click="$router.push('/walker')" type="button" class="btn btn-success">KOERAHOIDJA</button>
    <button v-on:click="$router.push('/owner')" type="button" class="btn btn-dark">KOERA OMANIK</button>
  </div>
</div>
</template>

<script>
export default {
  name: "ChooseRoleView"
}
</script>

<style scoped>

</style>