<template>
  <div class="col-6" style="margin-left: 330px">
    <select  class="form-select row-cols-5" aria-label="Default select example">
      <option selected disabled value="0">--Koera tõug--</option>
      <option v-for="breed in breeds" :value="breed.breedId">{{ breed.breedName }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'BreedsDropDown',
  data: function () {
    return {
      // // dogRequest: {
      // //   breedSelect: 0
      // },
      breeds: [
        {
          breedId: '',
          breedName: 0
        }
      ]
    }
  },
  methods: {
    getBreedsSelectInfo: function () {
      console.log('olen siin')
      this.$http.get("/dog/bread")
          .then(result => {
            this.breeds = result.data
          })
          .catch(error => {
            console.log(error)
          });
    },
  },
  beforeMount() {
    this.getBreedsSelectInfo()
  }
}
</script>