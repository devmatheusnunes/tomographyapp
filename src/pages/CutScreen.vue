<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>

    <q-card class="col q-ma-md q-pt-md" >
      <q-card >
        <div class="cardsRow">
          <div v-for="(item, index) in nodes" :key="index">
            <q-img :src="`${item.image}`" style="min-height: 30vh; min-width: 70vw" @click="updateImg(item); openDialog = !openDialog"/>
          </div>
        </div>
        <div>
          <div class="flex flex-center">
            <div class="q-mr-md">
              <q-btn color="amber-13" text-color="black" icon-right="crop" label="CORTAR" />
            </div>
            <div class="q-ml-md">
              <q-btn color="amber-13" text-color="black" icon-right="compare" label="ANALISAR" to="cut-result"/>
            </div>
          </div>
        </div>
      </q-card>
    </q-card>

    <q-dialog maximized v-model="openDialog">
      <q-card >
        <cropper
        :src="imgActual.image"
        ref="cropper"
        style="min-height: 90vh; min-width: 95vw"
        />
        <q-btn align="right" color="positive" label="OK" v-close-popup  @click="saveCoordinate()"/>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { uid } from 'quasar'
import { mapGetters } from 'vuex'
import { Cropper } from 'vue-advanced-cropper'

export default {
  name: 'CutScreen',

  data() {
    return {
      imgActual: {},
      openDialog: false,

      nodes: [
        {
          coordinates: {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          },
          image: require('assets/data/image/Capturar_2020_09_21_12_04_36_180.png'),
        },
        {
          
          coordinates: {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          },
          image: require('assets/data/image/Capturar_2020_09_21_12_04_51_18.png'),
        }
      ]
    }
  },
  computed: {
    ...mapGetters('store', ['getImages'])
  },
  watch:{

  },
  methods: {
    updateImg( image ) {
      this.imgActual = image
      console.log(image)
    },
    saveCoordinate() {
      this.imgActual.coordinates = this.$refs.cropper.getResult().coordinates
    }
  },
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);

.q-card
  background: linear-gradient(to top, #bdc3c7, #bdc3c7);

.q-img
  display: block;
  margin-top: 1.5vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 15%;
</style>