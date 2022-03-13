import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

firebase.initializeApp ({
  apiKey: "AIzaSyAx9X7ct8Ni7Eq6nfDPtf7pGXHuCW0pUmM",
  authDomain: "tomografia-abd89.firebaseapp.com",
  databaseURL: "https://tomografia-abd89.firebaseio.com",
  projectId: "tomografia-abd89",
  storageBucket: "tomografia-abd89.appspot.com",
  messagingSenderId: "267808439485",
  appId: "1:267808439485:web:ac2f286426a109a55bcbd4",
  measurementId: "G-7XG1SR3LBY"
  });

export const db = firebase.firestore()

export const auth = firebase.auth()

export const storage = firebase.storage()