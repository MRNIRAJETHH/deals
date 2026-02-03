import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdyUvmayvt6eO41sunk7xyDRn-PbVPnS8",
  authDomain: "ryuk-246a5.firebaseapp.com",
  projectId: "ryuk-246a5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
