import { useState } from "react";
import { addUserToQueue } from "../helpers/queue";
import { useParams } from "react-router-dom";

const CheckIn = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [tokenNumber, setTokenNumber] = useState(null);

  const { companyId } = useParams()
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { success } = await addUserToQueue(name, phone, companyId);
      //setTokenNumber(tokenNumber); // store token number
      setSuccess(success);
      setName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setError("Failed to check in. Please try again.");
    }

    setLoading(false);
  };


  return (
    <div className="form-container">
      {success ? (
      <div>
        <h2>Thank you for checking in!</h2>
        {/* <p>Your token number is <strong>{tokenNumber}</strong></p> */}
        <p>Please wait for your turn.</p>
      </div>
      ) : (
        <div>
          <h2>Quick Check-In</h2>
          <p>Just a few details to reserve your spot in the queue.</p>
          <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input name="name" type="text" className="input-box" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input name="phone" type="tel" className="input-box" onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <button type="submit" disabled={loading} className="btn-join"> {loading ? "Joining..." : "Join Queue"}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckIn;




