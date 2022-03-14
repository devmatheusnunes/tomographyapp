// import { LocalStorage, Loading,  QSpinnerGears, uid, Dialog } from 'quasar'
import { auth, db } from 'boot/firebase'
// import * as firebase from 'firebase/app'
import { firestoreAction } from 'vuexfire'

const state = {
  regions: {},
  patients: {},
  images: {},
  softparts: {},
  videos: {},
  cuts: {},
  history: {},
  configs: {},
  actualImageCuts: []
}

const mutations = {
  updateactualImageCuts: (state, cuts) => {
    state.actualImageCuts = cuts
  }
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

  bindSoftparts: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('softparts', db.collection('softparts'))
  }),

  bindVideos: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('videos', db.collection('videos'))
  }),

  bindCuts: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('cuts', db.collection('cuts'))
  }),

  bindConfigs: firestoreAction(({ bindFirestoreRef }) => {
    // return the promise returned by bindFirestoreRef
    return bindFirestoreRef('configs', db.collection('configs'))
  }),

  loginAPP({}, payload) {
    auth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      this.$router.push('/')
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
      this.$router.push('/auth')
    })
    .catch(error => {
      console.log(error)
    })
  },

  logoutAPP() {
    auth.signOut()
    this.$router.push('/auth').catch(err => {console.log(err)})
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
  getSoftparts: (state) => {
    return state.softparts
  },
  getVideos: (state) => {
    return state.videos
  },
  getCuts: (state) => {
    return state.cuts
  },
  getUser: () => {
    return auth.currentUser
  },
  getActualImageCuts: (state) => {
    return state.actualImageCuts
  },
  getConfigs: (state) => {
    return state.configs
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
