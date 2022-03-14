<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { auth } from "boot/firebase";
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('store', ['bindRegions', 'bindPatients', 'bindCuts', 'bindVideos', 'bindSoftparts', 'bindImages', 'bindConfigs'])
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      if(user) {
        this.$router.replace("/")
      }
      else {
        this.$router.replace('/auth').catch(err => {})
      }
    })
    this.bindRegions(),
    this.bindPatients(),
    this.bindCuts(),
    this.bindVideos(),
    this.bindSoftparts(),
    this.bindImages(),
    this.bindConfigs()
  },
}
</script>
