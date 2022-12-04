<template>
  <div class="row">
    <div class="col-20">
      <img style="margin-right: 1201px" src="@/assets/img/doglogo.png">
    </div>
    <h1>
      Lisa Koer
    </h1>
    <div class="row-cols-lg-8">
      <ImageInput @pictureInputSuccess="setPicture"/>
    </div>
    <!--    <div class="row-cols-4">-->
    <!--      <button v-on:click="addPicture" type="button" class="btn btn-success">Salvesta pilt</button>-->
    <!--    </div>-->
    <div>
      <div v-if="dogRequest.dogPhoto === null">
        <img src="../../assets/img/deafult1.jpeg">
      </div>
      <div v-else>
        <img :src="dogRequest.dogPhoto" style="height: 200px">
      </div>
    </div>

    <br>
    <div>
      <div class="col-lg-8">
        <h4>
          Koera Tõug
        </h4>
        <!--        <BreedsDropDown v-model="dogRequest.breedId"/>-->

        <div style="margin-left: 300px" class="col-lg-6">
          <select v-model="dogRequest.breedId" class="form-select" aria-label="Default select example">
            <option selected disabled value="0">--Koera tõug--</option>
            <option v-for="breed in breeds" :value="breed.breedId">{{ breed.breedName }}</option>
          </select>
        </div>


      </div>
      <div class="col-lg-8">
        <h4>
          Koera nimi
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="dogRequest.dogName" type="text" class="form-control" placeholder="Nimi" aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>


      </div>
      <div class="col-lg-8">
        <h4>
          Koera vanus
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <input v-model="dogRequest.dogAge" type="number" class="form-control" placeholder="Vanus"
                 aria-label="Username"
                 aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="col-lg-8">
        <h4>
          Koera suurus
        </h4>
        <div class="col-6" style="margin-left: 330px">
          <select v-model="dogRequest.sizeId" class="form-select row-cols-5" aria-label="Default select example">
            <option selected disabled value="0">--koera suurus--</option>
            <option v-for="size in sizes" :value="size.sizeId">{{ size.sizeType }}</option>
          </select>
        </div>
      </div>

      <div class="row col-lg-9">
        <h4>
          Lisainfo, mida koera hoidja peaks teadma
        </h4>
        <div style="margin-left: 330px" class="col-lg-6">
          <textarea v-model="dogRequest.dogAdditionalInformation" class="form-control"
                    aria-label="With textarea"></textarea>
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
      <img src="@/assets/img/curious-dog.png">
    </div>

  </div>
</template>

<script>
import BreedsDropDown from "@/components/dog/BreedsDropDown";
import ImageInput from "@/components/image/ImageInput";

export default {
  name: 'DogRegisterView',
  components: {ImageInput},

  // components: {BreedsDropDown},
  data: function () {
    return {

      dogRequest: {
        userId: Number(sessionStorage.getItem('userId')),
        dogName: '',
        sizeId: '',
        dogAge: '',
        dogAdditionalInformation: '',
        dogPhoto: ''
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
      },
      pictureRequest: {
        userId: 0,
        pictureData: ''
      },
      pictureResponse: {
        userId: 0,
        pictureData: ''
      },


    }
  },
  methods: {




    setPicture: function (picture) {
      this.dogRequest.dogPhoto = picture;

    },


    getBreedsSelectInfo: function () {
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
        this.dogRequest.dogAge = Number(this.dogRequest.dogAge)

        this.$http.post("/dog/registration", this.dogRequest
        ).then(response => {
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

