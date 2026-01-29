import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db, auth } from "../../firebase-config";

/**
 * Add a user to the queue for the logged-in company
 * @param {string} name
 * @param {string} phone
 * @param {string} locationId
 * @returns {object} { success: true }
 */
export const addUserToQueue = async (name, phone, locationId = "default") => {
  const user = auth.currentUser; // get logged-in company
  if (!user) throw new Error("Not authenticated");

  await addDoc(collection(db, "queues"), {
    companyId: user.uid,
    name: name.trim(),
    phone: phone.trim(),
    locationId,
    status: "waiting",
    createdAt: serverTimestamp(),
    notified: false,
    servedAt: null
  });

  return { success: true };
};