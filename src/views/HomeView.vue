<template id="login-form">
  <div class="home">
    <div class="justify-content-start col-2">
      <img src="@/assets/doglogo.png">
    </div>
    <div class="row">
    </div>
    <br>
    <div class="col justify-content-right col-10">
      <div class="col-lg-5">
        <StarPageInfo/>
      </div>
      <div class="col-lg-6">
        <div class="col-10">
          <loginComponent/>
        </div>
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
