'
<template>
  <div class="buttonGroup">
    <nav>
      <router-link to="/owner-profile">
        <button type="button" class="btn btn-success eachButton">Minu Profiil</button>
      </router-link>
      <router-link to="/find/dogwalker">
        <button type="button" class="btn btn-dark eachButton">Otsi koerahoidjat</button>
      </router-link>
      <router-link to="/dog/register">
        <button type="button" class="btn btn-success eachButton">Lisa koer</button>
      </router-link>
      <button v-on:click="clearSessionStorage" type="button" class="btn btn-success eachButton">Logi välja</button>

    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'OwnerButtonComponent',


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