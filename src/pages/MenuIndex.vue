<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 20vw"/>
    
    <div class="row q-pa-md q-mt-md" style="margin-top: 0vh">
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-light-green" style="min-width: 40vw; min-height: 30vh;" @click="$router.push('/introduction')" >
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/menu_index/play.svg" style="min-width: 14vw" />
            <div class="text-bold">COMEÇAR</div>
          </q-card-section>
        </q-card>
      </div>

      <q-card class="q-ma-sm flex flex-center bg-orange" style="min-width: 40vw;  min-height: 30vh;" @click="$router.push('/profile')" >
        <q-card-section class="q-ma-sm">
          <q-img src="~/assets/menu_index/profile.svg" style="min-width: 14vw" />
          <div class="text-bold">PERFIL</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row q-pa-md">
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-red" style="min-width: 39vw; min-height: 30vh;" @click="more = true" >
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/profile/add.svg" style="min-width: 14vw; align: center;" />
            <div class="text-bold"  style="text-align: center">SOBRE O NÓS</div>
          </q-card-section>
        </q-card>
      </div>

      <q-dialog v-model="more">
        <q-card>
          <q-card-section>
            <div class="text-h5 text-bold" style="text-align: center;">Sobre Nós</div>
          </q-card-section>

          <q-card-section class="q-pt-none" style="text-align: justify">
            Somos uma equipe de alunos que desenvolvemos esse APP com 
            intuito que você possa ter uma boa utilidade de uso para 
            planejamentos, simulações de exames, conferir procedimentos 
            como posicionamento anatômico, com isso venha agregar 
            conhecimento na sua vida profissional.<br>
            <br>
            Radiologistas:<br>
            > Alex Jean Moreira Silva<br>
            > Ricardo Elias Figueiredo<br>
            > Simônica Dias Pereira<br>
            <br>
            Programadores:<br>
            > Matheus de Oliveira Nunes<br>
            > Hiago Couto<br>
            <br>
            Orientador(a):<br>
            > Jayse da Silva Fagundes
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MenuIndex',

  data() {
    return {
      more: false,
    }
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
