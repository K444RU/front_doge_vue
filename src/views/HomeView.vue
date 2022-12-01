<template id="login-form">
  <div class="col row justify-content-center">
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>

    <div class="row">

      <div class="col-8" >
        <StarPageInfo/>
      </div>

      <div class="col-3" >
        <h3 style="color: #1DB954">Jätkamiseks Logige sisse</h3>
          <loginComponent/>
      </div>
      </div>


  </div>


</template>


<script>


import LoginComponent from "@/views/LoginComponent";
import StarPageInfo from "@/views/StarPageInfo";

export default {
  components: {StarPageInfo, LoginComponent},
  data: function () {
    return {
      name: 'HomeView',
      components: {}

    }
  }
}


</script>
