import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAKaUhhUIANTMux62xhNFyXdct8xdyzvfg",
  authDomain: "smartrechargebd-eed74.firebaseapp.com",
  projectId: "smartrechargebd-eed74",
  storageBucket: "smartrechargebd-eed74.firebasestorage.app",
  messagingSenderId: "1024026655834",
  appId: "1:1024026655834:web:c3d836eb5fc411cf77ec63"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc
};
