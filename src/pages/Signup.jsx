import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupCompany } from "../helpers/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!companyName || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      await signupCompany(email, password, companyName);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already registered. Please login instead.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
