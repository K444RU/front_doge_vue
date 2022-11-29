<template>
  <div>
    <div class="col-20">
      <img style="margin-right: 1201px" src="@/assets/doglogo.png">
    </div>
    <h1>
      Lisa Koer
    </h1>
    <div>
      <div>
        <h4 style="margin-right: 650px">
          Koera Tõug
        </h4>
        <!--        <BreedsDropDown v-model="dogRequest.breedId"/>-->

        <div class="col-6" style="margin-left: 330px">
          <select v-model="dogRequest.breedId" class="form-select row-cols-5" aria-label="Default select example">
            <option selected disabled value="0">--Koera tõug--</option>
            <option v-for="breed in breeds" :value="breed.breedId">{{ breed.breedName }}</option>
          </select>
        </div>


      </div>
      <div>
        <h4 style="margin-right: 660px">
          Koera nimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="dogRequest.dogName" type="text" class="form-control" placeholder="Nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>


      </div>
      <div>
        <h4 style="margin-right: 650px">
          Koera vanus
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="dogRequest.dogAge" type="text" class="form-control" placeholder="Vanus" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div>
        <h4 style="margin-right: 645px">
          Koera suurus
        </h4>
        <div class="col-6" style="margin-left: 330px">
          <select v-model="dogRequest.dogSize" class="form-select row-cols-5" aria-label="Default select example">
            <option selected disabled value="0">--koera suurus--</option>
            <option v-for="size in sizes" :value="size.sizeId">{{ size.sizeType }}</option>
          </select>
        </div>
      </div>

      <div>
        <h4 style="margin-right: 335px">
          Lisainfo, mida koera hoidja peaks teadma
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <textarea v-model="dogRequest.dogAdditionalInfo" class="form-control" aria-label="With textarea"></textarea>
        </div>
        <br>
        <br>
        <div class="row-cols-5">
          <button v-on:click="registerNewDog" type="button" class="btn btn-success">Registreeru</button>
        </div>
        <br>
        <br>
      </div>
    </div>
    <div>
      <img src="@/assets/curious-dog.png">
    </div>

  </div>
</template>

<script>
import BreedsDropDown from "@/components/BreedsDropDown";

export default {
  name: 'DogRegisterView',
  // components: {BreedsDropDown},
  data: function () {
    return {
      dogRequest: {

        dogName: '',
        dogAge: 0,
        dogSize: '',
        dogAdditionalInfo: '',

      },

      errorResponse: {
        message: '',
        errorCode: 0
      },
      breeds:
          {
            breedId: '',
            breedName: 0
          },

      sizes:
          {
            sizeType: '',
            sizeId: '',
            sizePrice: ''
          },
      userResponse: {
        userId: 0,
        roleId: 0,
        roleType: ''
      }

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

    getDogSizesInfo: function () {
      console.log('olen siin 1')
      this.$http.get("/dog/size")
          .then(result => {
            this.sizes = result.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    registerNewDog: function () {
      this.errorResponse.message = ''
      if (this.dogRequest.dogName === 0 || this.dogRequest.dogAge === 0) {
        this.errorResponse.message = 'Täida kõik väljed'
      } else {
        this.$http.post("/dog/registration", this.dogRequest
        ).then(response => {
          this.dogRequest = response.data
          this.$router.push({
            name: 'DogOwnerProfileView'
          })
        })
            .catch(error => {
              console.log(error)
            })
      }

    },
  },
  beforeMount() {
    this.getDogSizesInfo()
    this.getBreedsSelectInfo()

  }
}
</script>

