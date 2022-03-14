<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>

    <q-card class="col q-pt-md q-ml-md q-mr-md q-mt-xs q-mb-lg">
      <q-card >
        <div class="cardsRow">
          <div v-for="video in getVideos" :key="video.id">
            <q-video
              :src="video.video" 
              style="
                margin-top: -1.5vh;
                margin-left: 1vw;
                margin-right: 1vw;
                min-height: 50vh; 
                min-width: 10vw;
                height: 65vh;
              "
            />
          </div>
        </div>
        <div>
          <div class="flex flex-center q-mt-sm">
            <div class="q-mt-xl">
              <q-btn align="center" color="amber-13" text-color="black" icon-right="compare" label="Gerar Imagens" to="video-result"/>
            </div>
          </div>
        </div>
      </q-card>
    </q-card>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VideoScreen',

  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters('store', ['getVideos'])
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
