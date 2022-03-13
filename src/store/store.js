import { LocalStorage, Loading,  QSpinnerGears, uid, Dialog } from 'quasar'
import { auth, db, storage } from 'boot/firebase'
// import * as firebase from 'firebase/app'
import { firestoreAction } from 'vuexfire'
import { registerVersion } from 'firebase'

const state = {
  regions: {},
  patients: {},
  images: {},
  videos: {},
  cuts: {},
}

const mutations = {
  
}

const actions = {
  
  bindRegions: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('regions', db.collection('regions'))
  }),

  bindPatients: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('patients', db.collection('patients'))
  }),

  bindImages: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('images', db.collection('images'))
  }),

  bindVideos: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('videos', db.collection('videos'))
  }),

  bindCuts: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('cuts', db.collection('cuts'))
  }),

  loginAPP({}, payload) {
    auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      this.$router.push('/').catch(err => {})
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },

  registerAPP({}, payload) {
    auth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      db.collection('users').add({
        userID: response.user.uid,
        userName: payload.name,
      })
      this.$router.push('/auth').catch(err => {})
    })
    .catch(error => {
      console.log(error)
    })
  },

  logoutAPP() {
    auth.signOut()
    this.$router.push('/auth').catch(err => {})
  }
}

const getters = {
  getRegions: (state) => {
    return state.regions
  },
  getPatients: (state) => {
    return state.patients
  },
  getImages: (state) => {
    return state.images
  },
  getVideos: (state) => {
    return state.videos
  },
  getCuts: (state) => {
    return state.cuts
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
