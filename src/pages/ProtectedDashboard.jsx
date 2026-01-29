import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import Dashboard from "./Dashboard";
import LoginAdmin from "./LoginAdmin";

const ProtectedDashboard = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribeAuthListener  = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuthListener ();
  }, []);

  if (user === undefined) return <p>Loading...</p>;

  return user ? <Dashboard /> : <LoginAdmin />;
};

export default ProtectedDashboard;
