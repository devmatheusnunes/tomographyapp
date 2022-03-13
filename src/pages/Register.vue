<template>
  <q-page class="flex column">
    <q-img src="~/assets/quasar-logo-full.svg"/>
    <div class="text-bold text-white" style="font-size: 5vh; text-align: center">CADASTRO</div>
    <q-input class="q-mt-md q-px-md" v-model="register.name" filled hint="Nome" />
    <q-input class="q-mt-md q-px-md" v-model="register.email" filled type="email" hint="Email" />
    <q-input class="q-mt-md q-px-md" v-model="register.password" filled :type="isPwd ? 'password' : 'text'" hint="Senha">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn color="white" text-color="black" label="CADASTRAR" @click="submit"/> 
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',

  data() {
    return {
      isPwd: true,

      register: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('store', ['registerAPP']),
    submit() {
      this.registerAPP(this.register)
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4);

.q-img
  display: block;
  margin-top: 4vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;

.q-btn
  display: block;
  margin-top: 6vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
</style>