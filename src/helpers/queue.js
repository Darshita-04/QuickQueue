import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../../firebase-config";

/**
 * Add a user to the queue for the logged-in company
 * @param {string} name
 * @param {string} phone
 * @param {string} locationId
 * @returns {object} { success: true }
 */
export const addUserToQueue = async (name, phone, companyId, locationId = "default") => {
  await addDoc(collection(db, "queues"), {
    companyId, // it will come from QR
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