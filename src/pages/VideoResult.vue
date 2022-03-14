<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 20vw"/>

    <q-card class="q-ma-md q-pt-md" >
      <div>
          <div class="flex flex-center">
            <div class="q-ml-md">
              <q-btn color="amber-13" text-color="black" icon-right="home" label="Início" @click="$router.push('/')"/>
            </div>
          </div>
        </div>
      <q-card >
        <div class="row q-ma-sm q-pa-sm">
          <div class="q-ma-xs" v-for="item in getSoftparts" :key="item.softID">
            <q-img :src="item.image" style="min-width: 24vw" @click="updateImg(item); openDialog = !openDialog"/>
          </div>
        </div>
      </q-card>
    </q-card>

    <q-dialog v-model="openDialog">
      <q-card>
        <q-img
          :src="imgActual.image"
          style="min-width: 80vw"
        />
        <div class="row reverse">
          <q-btn class="q-ma-sm" color="positive" label="OK" v-close-popup  @click="saveCoordinate()"/>
        </div>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { uid } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'VideoResult',
  
  data() {
    return {
      imgActual: {},
      openDialog: false,
    }
  },
  computed: {
    ...mapGetters('store', ['getSoftparts'])
  },
  methods: {
    updateImg (image) {
      this.imgActual = image
    },
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)

.q-img
  display: block
  margin-top: 1.5vh
  margin-bottom: 3vh
  margin-left: auto
  margin-right: auto
  max-width: 15%
</style>
