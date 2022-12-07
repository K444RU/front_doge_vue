<template id="login-form">
  <div class>
    <div class="logo">
      <img alt="Vue logo" src="../assets/img/doglogo.png">
    </div>

    <div class="row">

      <div class="col-8" >
        <StarPageInfo/>
      </div>

      <div style="margin-top: 40px" class="col-3" >
        <h3 style="color: #1DB954">Jätkamiseks Logige sisse</h3>
          <loginComponent/>
      </div>
      </div>

    <div style="margin-left: 500px">
      <img src="@/assets/img/HOMEBACK.png">
    </div>
  </div>


</template>


<script>


import LoginComponent from "@/components/LoginComponent";
import StarPageInfo from "@/components/HomePageInfo";

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


