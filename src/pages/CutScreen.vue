<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>

    <q-card class="col q-ma-md q-pt-md" >
      <q-card >
        <div class="cardsRow">
          <div v-for="item in getImages" :key="item.imageID">
            <q-img :src="item.image" style="min-height: 30vh; min-width: 70vw" @click="updateImg(item); openDialog = !openDialog"/>
          </div>
        </div>
        <div>
          <div class="flex flex-center">
            <div class="q-ml-md">
              <q-btn color="amber-13" text-color="black" icon-right="compare" label="Analisar" @click="saveCuts()"/>
            </div>
          </div>
        </div>
      </q-card>
    </q-card>

    <q-dialog v-model="openDialog">
      <q-card>
        <cropper
          :src="imgActual.image"
          ref="cropper"
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
import { Cropper } from 'vue-advanced-cropper'

export default {
  name: 'CutScreen',

  data() {
    return {
      imgActual: {},
      openDialog: false,
      cuts: [],
    }
  },

  computed: {
    ...mapGetters('store', ['getImages']),
    ...mapGetters('store', ['getUser'])
  },

  methods: {
    updateImg (image) {
      this.imgActual = image
    },

    saveCoordinate () {
      const existingIndex = this.cuts.findIndex(cut => cut.id == this.imgActual.imageID)

      if (existingIndex >= 0) {
        this.cuts[existingIndex].coordinates = this.$refs.cropper.getResult().coordinates
      } else {
        this.cuts.push({
          user: this.getUser.uid,
          id: this.imgActual.imageID,
          coordinates: this.$refs.cropper.getResult().coordinates
        })
      }
    },

    saveCuts () {
      this.$store.commit('store/updateactualImageCuts', this.cuts)
      this.$router.push('/cut-result')
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)

.q-card
  background: linear-gradient(to top, #bdc3c7, #bdc3c7)

.q-img
  display: block
  margin-top: 1.5vh
  margin-bottom: 3vh
  margin-left: auto
  margin-right: auto
  max-width: 15%
</style>
