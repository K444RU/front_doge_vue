<template>
<div>
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png" >
    </div>
  <input type="file"  @change="onFileSelected">
  <button @click="onUpload" type="button" class="btn btn-success">LISA PILT</button>
  <h1>
    Koera omaniku profiil
  </h1>

</div>
</template>

<script>


import axios from "axios";

export default {
  data () {
    return {
      selectedFile: null
    }

  },
  name: 'DogOwnerProfileView',
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      axios.post('', )

    }

}
}
</script>


<style scoped>

</style>