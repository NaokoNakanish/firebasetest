import Vue from "nativescript-vue";

import Home from "./components/Home";

// Nativescript/firebase setting ver NativeScript 7+
var firebase = require("@nativescript/firebase").firebase;

// set up for Cloud Firestore https://firebase.google.com/docs/firestore/quickstart#initialize
// これやると、'Package subpath './package.json' is not defined by "exports" in /Users/nn/firebasetest/node_modules/firebase-admin/package.json'と出て、シミュレータ動かなくなるのなんでだ　https://github.com/xerroxcopy/news-native/issues/208#issuecomment-961689726
// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.firestore();

// Nativescript/firebase setting
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
