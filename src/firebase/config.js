import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBaHNy9e2YB45aSIl3IkgDghOvaWEf8B58",
authDomain: "exam-tiklagelsin.firebaseapp.com",
databaseURL: "https://exam-tiklagelsin-default-rtdb.firebaseio.com",
projectId: "exam-tiklagelsin",
storageBucket: "exam-tiklagelsin.appspot.com",
messagingSenderId: "1094321286045",
appId: "1:1094321286045:web:2b0f91afd6ce71cc8fdd74"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
