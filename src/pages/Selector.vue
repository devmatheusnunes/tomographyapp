<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>

    <div class="row q-pa-md q-mt-md">
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-light-green" style="min-width: 39vw; min-height: 30vh;" bordered @click="$router.push('/cutscreen')">
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/selector/skull.svg" style="min-width: 14vw; align: center;"/>
            <div class="text-bold" style="text-align: center">CABEÇA</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',

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