<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 18vw"/>

    <q-card class="q-mx-md">
      <q-card-section class="q-pt-none q-mt-md">
          <q-select filled v-model="select" :options="patientOptions" label="SELECIONE O PACIENTE" stack-label />

          <q-card-section class="q-pt-none">
            <div class="q-py-xs text-bold text-blue">NOME:</div>
            <div class="q-py-xs">{{selected.name}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="q-py-xs text-bold text-blue">DATA DE NASCIMENTO:</div>
            <div class="q-py-xs">{{selected.date}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="q-py-xs text-bold text-blue">SEXO:</div>
            <div class="q-py-xs">{{selected.sex}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="q-py-xs text-bold text-blue">ALTURA:</div>
            <div class="q-py-xs">{{selected.height}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="q-py-xs text-bold text-blue">PESO:</div>
            <div class="q-py-xs">{{selected.weight}}</div>
          </q-card-section>

          <q-card-section align="center" >
            <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="Selector"/>
          </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Form',

  data() {
    return {
      select: '',

      selected: {},

      patientOptions: []
    }
  },
  computed: {
    ...mapGetters('store', ['getPatients'])
  },
  mounted() {
    this.getPatients.forEach(patients => {
      this.patientOptions.push(patients.name)
    })
  },
  watch: {
    select: function (val) {
      this.getPatients.findIndex(x => x.name == val )
      this.selected = this.getPatients[this.getPatients.findIndex(x => x.name == val )]
      console.log(this.selected)
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
