<template>
  <div class="buttonGroup">
    <nav>
      <router-link to="/walker-profile">
        <button type="button" class="btn btn-success eachButton">Minu Profiil</button>
      </router-link>
      <router-link to="/add/service">
        <button type="button" class="btn btn-dark eachButton">Lisa oma teenus</button>
      </router-link>
      <router-link to="/active/service">
        <button type="button" class="btn btn-success eachButton">Minu teenused</button>
      </router-link>
<!--      <router-link to="/about">-->
<!--        <button type="button" class="btn btn-dark eachButton">Kehtivad broneeringud</button>-->
<!--      </router-link>-->
      <button v-on:click="clearSessionStorage" type="button" class="btn btn-dark eachButton">Logi välja</button>

    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'WalkerButtonComponent',

  methods: {
    clearSessionStorage: function () {
      this.$confirm("Are you sure?.").then(response => {
        this.$router.push("/");
      }).then(response => {
        sessionStorage.clear();

      })
    },
  }
}
</script>