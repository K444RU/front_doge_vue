<template>
  <div>
    <h2><font-awesome-icon v-on:click="$router.push('about')" icon="fa-solid fa-paw" />Anna käppa on platvorm neile, kes vajavad teenust oma armastatud lemmiklooma jalutamiseks, hooldamiseks või
      vaatamiseks</h2><br>
    <h2 style="color: #1DB954"><font-awesome-icon v-on:click="$router.push('about')" class="homePageIconSize" icon="fa-solid fa-magnifying-glass" />Siin Veebilehes saate Tutvuda kohalike koerahoidjatega, kes kohtlevad teie
      lemmikloomi nagu perekonda</h2><br>
    <h2><font-awesome-icon v-on:click="$router.push('about')" class="homePageIconSize" icon="fa-solid fa-dog" />Igat tõugu ja suurust koeradele jalutamis teenused</h2>
  </div>
</template>
<script>
export default {
  name: 'StarPageInfo'
}
</script>