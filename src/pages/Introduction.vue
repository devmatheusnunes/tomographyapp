<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 15vw"/>
      
    <q-card class="q-ma-md" style="min-height: 80vh; margin-top: -2vh" >
      <q-card-section >
        <div class="text-bold flex flex-center" style="font-size: 7vw">INTRODUÇÃO</div>
        
        <div style="font-size: 5vw; text-align: justify;">
          <br>Este é um aplicativo com o intuito de simular uma máquina de Tomografia Computadorizada, todos os dados 
          usados são ficticios e as imagens usadas foram sedidas mediante autorização.
        </div>
        
        <div style="font-size: 5vw; text-align: justify;">
          Etapas do exame:<br>
          > Formulário;<br>
          > Escolha da região à examizar;<br>
          > Corte da imagem;<br>
          > Resultado da Análise;<br>
          > Video representativo sobre partes moles<br>
          > Imagens sobre partes moles
        </div>
      </q-card-section>

      <q-card-section align="center" >
        <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="Form"/>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'Introduction',

  data() {
    return {
      
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
