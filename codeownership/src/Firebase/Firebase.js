import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyDNCuovdUwmYs62rprEubMoq7lER8aKvwk",
    authDomain: "codeownership-b4dff.firebaseapp.com",
    databaseURL: "https://codeownership-b4dff.firebaseio.com",
    projectId: "codeownership-b4dff",
    storageBucket: "codeownership-b4dff.appspot.com",
    messagingSenderId: "196104474612"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }

  export default Firebase;