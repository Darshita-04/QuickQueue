import { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user , loading }}>
       {!loading && children}
    </AuthContext.Provider>
  );
};
