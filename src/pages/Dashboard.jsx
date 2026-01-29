import { useEffect, useState } from "react";
import { listenQueue, markServed } from "../helpers/dashboard";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";



const Dashboard = () => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const unsubscribe = listenQueue((data) => {
      setQueue(data);
    });
    return () => unsubscribe();
  }, []);

  const currentUser = queue.find(q => q.status === "waiting");


  return (
    <div>
      <h2>Queue Dashboard</h2>
      
      <button onClick={() => signOut(auth)}>Logout</button>
          {queue.map(q => (
        <div
          key={q.id}
          style={{
            padding: "10px",
            margin: "6px 0",
            borderRadius: "6px",
            background:
              q.id === currentUser?.id
                ? "#d1e7ff"
                : q.status === "served"
                ? "#eee"
                : "#fff",
            opacity: q.status === "served" ? 0.5 : 1
          }}
        >
          <b>{q.name}</b> - {q.phone}  
          <span> ({q.status})</span>

          {q.status === "waiting" && (
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => markServed(q.id)}
            >
              Mark Served
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;


