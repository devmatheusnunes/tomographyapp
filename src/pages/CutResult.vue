<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 20vw"/>

    <q-card class="q-ma-md bg-blue-1">
      <q-list>
        <q-item-label header>
          <q-img :src="faceImage" style="min-width: 25vw" />
        </q-item-label>
        <q-item clickable v-ripple v-for="(item, index) in results">

          <template v-if="item.result">
            <q-item-section>
              <q-item-label >Corte correto</q-item-label>
              <q-item-label caption>100% de acerto</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-icon name="done" color="green" />
            </q-item-section>
          </template>

          <template v-else>
            <q-item-section>
              <q-item-label >Corte incorreto</q-item-label>
              <q-item-label caption>30% de acerto</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-icon name="close" color="red" />
            </q-item-section>
          </template>
        </q-item>

        <q-separator spaced inset />
      </q-list>
    </q-card>

<!-- <q-img src="~/assets/result/sad.svg" style="min-width: 45vw" /> -->

    <q-card-section align="center" >
      <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="video-screen"/>
    </q-card-section>
  </q-page>
</template>

<script>
import { calculate } from '../services/measuresCalculation.js'
import { mapGetters } from 'vuex'
export default {
  name: 'CutResult',

  data() {
    return {
      faceImage: require('assets/result/smiling.svg'),
      results: []
    }
  },

  computed: {
    ...mapGetters('store', ['getActualImageCuts']),
    ...mapGetters('store', ['getImages']),
    ...mapGetters('store', ['getConfigs'])
  },

  created () {
    this.results = this.getActualImageCuts.map(cut => {
      let source = this.getImages.find(image => image.id == cut.id)
      return calculate(cut.coordinates, source.coordinates, this.getConfigs[0].errorRate)
    })

    let checkFail = this.results.find(result => result.result === false).result
    if (checkFail === false) {
      this.faceImage = require('assets/result/sad.svg')
    }
    console.log(this.results)
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
