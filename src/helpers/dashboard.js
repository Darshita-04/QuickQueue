import { collection, query, orderBy, onSnapshot, doc, where, updateDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase-config";

export const listenQueue = (callback) => {

    const user = auth.currentUser;
  if (!user) throw new Error("Not authenticated");

  const q = query(collection(db, "queues"), where("companyId", "==", user.uid), orderBy("createdAt"));

  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(data);
  });
};


export const markServed = async (id) => {
  const ref = doc(db, "queues", id);
  await updateDoc(ref, {
    status: "served",
    servedAt: serverTimestamp()
  });
};


