<template xmlns:max-height="http://www.w3.org/1999/xhtml">

  <div>

    <div class="col-20">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png">
    </div>
    <div>
      <div class="col-lg-auto">
        <LoginWithButtonsComponent/>
      </div>
      <GreetingInfoComponent/>
    </div>
  </div>


</template>


<script>
import LoginWithButtonsComponent from "@/components/LoginWithButtonsComponent";
import GreetingInfoComponent from "@/components/GreetingInfoComponent";
import AboutView from "@/views/AboutView";

export default {
  components: {AboutView, GreetingInfoComponent, LoginWithButtonsComponent}
}
</script>






















