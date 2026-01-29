// import { useState } from "react";
// import { adminLogin } from "../helpers/auth";

// const LoginAdmin = ({ onSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await adminLogin(email, password);
//       onSuccess();
//     } catch {
//       setError("Invalid login");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       {error && <p>{error}</p>}
//       <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
//       <button>Login</button>
//     </form>
//   );
// };

// export default LoginAdmin;
