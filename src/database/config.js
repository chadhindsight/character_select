import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCWp7gfBr4iIs42-SJH1-qAjYYtJP_TguI",
    authDomain: "character-select.firebaseapp.com",
    databaseURL: "https://character-select.firebaseio.com",
    projectId: "character-select",
    storageBucket: "character-select.appspot.com",
    messagingSenderId: "988929929407"
};

firebase.initializeApp(config);
// Might not work
const authenticate = firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    console.log(error.message);
});

const database = firebase.database()

export {database, authenticate};