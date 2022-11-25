<template>
  <div>




    <div class="col-20">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>
    <div>
      <h1>
        Olete edukalt registreerunud !
      </h1>
    </div>
    <br>
    <br>
    <div class="row-cols-5">
      <button v-on:click="$router.push('/login')" type="button" class="btn btn-success">Logi sisse!</button>
    </div>
    <img src="@/assets/labdog.png" width="500" height="500">


  </div>

</template>

<script>
export default {
  name: "SuccesfulRegisterView",

}
</script>

<style scoped>
main{

}

</style>