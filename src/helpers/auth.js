import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";

// Signup company
export const signupCompany = async (email, password, companyName) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "companies", res.user.uid), {
    name: companyName,
    email,
    createdAt: new Date(),
    plan: "free"
  });

  return res.user;
};


// Login
export const loginCompany = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutCompany = () => signOut(auth);
