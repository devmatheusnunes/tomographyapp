<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>
    
    <div class="row q-pa-md q-mt-md">
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-light-green" style="min-width: 40vw; min-height: 30vh;" @click="$router.push('/introduction')" >
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/menu_index/play.svg" style="min-width: 14vw" />
            <div class="text-bold">COMEÇAR</div>
          </q-card-section>
        </q-card>
      </div>

      <q-card class="q-ma-sm flex flex-center bg-red" style="min-width: 40vw; min-height: 30vh;" @click="$router.push('/history')" >
        <q-card-section class="q-ma-sm">
          <q-img src="~/assets/menu_index/history.svg" style="min-width: 14vw" />
          <div class="text-bold">HISTÓRICO</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row q-pa-md">
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-orange" style="min-width: 40vw;  min-height: 30vh;" @click="$router.push('/profile')" >
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/menu_index/profile.svg" style="min-width: 14vw" />
            <div class="text-bold">PERFIL</div>
          </q-card-section>
        </q-card>
      </div>

      <q-card class="q-ma-sm flex flex-center bg-purple" style="min-width: 40vw;  min-height: 30vh;" @click="$router.push('/evaluate')" >
        <q-card-section class="q-ma-sm">
          <q-img src="~/assets/menu_index/medal.svg" style="min-width: 14vw" />
          <div class="text-bold">AVALIAR</div>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'MenuIndex',

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
