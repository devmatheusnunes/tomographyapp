<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>


    <q-img src="~/assets/result/smiling.svg" style="min-width: 45vw" />
    <q-img src="~/assets/result/sad.svg" style="min-width: 45vw" />

    <q-card-section align="center" >
      <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="video-screen"/>
    </q-card-section>
  </q-page>
</template>

<script>
export default {
  name: 'CutResult',

  data() {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);

.q-img
  display: block;
  margin-top: 1.5vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 15%;
</style>