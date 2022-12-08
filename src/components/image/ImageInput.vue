<template>
  <div class="custom-file">
    <input class="custom-file-input" type="file" @change="handleImage" id="inputGroupFile01" accept="image/x-png,image/jpeg">
<!--    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>-->
  </div>
</template>
<script>
export default {
  name: 'ImageInput',
  data: function () {
    return {
      pictureDataBase64: String
    }
  },
  methods: {
    handleImage: function (event) {
      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },
    createBase64Image: function (fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureDataBase64 = reader.result;
        this.$emit('pictureInputSuccess', this.pictureDataBase64)
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    }
  }
}
</script>