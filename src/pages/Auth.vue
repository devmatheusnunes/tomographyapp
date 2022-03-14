<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.svg" style="max-width: 65vw" />
    <q-input class="q-mt-md q-px-md" v-model="login.email" filled type="email" hint="Email" />
    <q-input class="q-mt-md q-px-md" v-model="login.password" filled :type="isPwd ? 'password' : 'text'" hint="Senha">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn class="q-mt-md" color="white" text-color="black" label="ENTRAR" style="width: 30vh" @click="submit"/>
    <div style="text-align: center" @click="$router.push('/register')" >Crie sua conta</div> 
  </q-page>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: 'Auth',

  data() {
    return {
      isPwd: true,

      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions('store', ['loginAPP']),
    submit() {
      this.loginAPP(this.login)
    }
  }
}
</script>

<style lang="sass" scoped>
.q-page
  background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)

.q-img
  display: block
  margin-top: 8vh
  margin-bottom: 3vh
  margin-left: auto
  margin-right: auto
  max-width: 80%

.q-btn
  display: block
  margin-top: 6vh
  margin-left: auto
  margin-right: auto
  max-width: 80%
</style>
