<template>
  <q-page class="flex column">
    <q-img src="~/assets/ctapp_logo.png" style="max-width: 20vw"/>

    <div class="row q-pa-md q-mt-md" style="padding-top: 1vh" >
      <div class="q-pr-sm">
        <q-card class="q-ma-sm flex flex-center bg-light-green" style="min-width: 39vw; min-height: 30vh;" @click="password = true">
          <q-card-section class="q-ma-sm">
            <q-img src="~/assets/profile/edit.svg" style="min-width: 14vw; align: center;"/>
            <div class="text-bold" style="text-align: center">MUDAR SENHA</div>
          </q-card-section>
        </q-card>
      </div>

      <q-card class="q-ma-sm flex flex-center bg-orange" style="min-width: 39vw;  min-height: 30vh;" @click="logout" >
        <q-card-section class="q-ma-sm">
          <q-img src="~/assets/profile/on_off.svg" style="min-width: 14vw; align: center;" />
          <div class="text-bold" style="text-align: center">SAIR</div>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="password">
      <q-card>
        <q-card-section>
          <div class="text-h5 text-bold" style="text-align: center;">TROCAR A SENHA</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="q-mt-md q-px-md" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Ditite uma nova senha">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input class="q-mt-md q-px-md" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Repita a nova senha">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="negative" label="Cancelar" v-close-popup />
          <q-btn color="positive" label="Salvar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="more">
      <q-card>
        <q-card-section>
          <div class="text-h5 text-bold" style="text-align: center;">Sobre Nós</div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="text-align: justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',

  data() {
    return {
      password: false,
      isPwd: true,
      more: false,
    }
  },
  methods: {
    ...mapActions('store', ['logoutAPP']),
     logout() {
       this.logoutAPP()
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
