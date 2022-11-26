<template>
<div>
    <div class="home">
      <img style="margin-right: 1201px" alt="Vue logo" src="../assets/doglogo.png" >
    </div>
  <h1>
    Koera omaniku profiil
  </h1>

</div>
</template>

<script>




export default {
  name: 'DogOwnerProfileView',
  data: function () {
    return {
      ownerId: sessionStorage.getItem('userId'),
    }
  }
}
</script>

