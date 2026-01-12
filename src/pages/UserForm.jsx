import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const queue = JSON.parse(localStorage.getItem("queue")) || [];
    const user = { ...form, id: Date.now() };

    // Add user to queue
    queue.push(user);
    localStorage.setItem("queue", JSON.stringify(queue));

    // Send user ID to thank you page
    navigate(`/thankyou/${user.id}`);
  };

  return (
    <div className="form-container">
      <h2>Quick Check-In</h2>
      <p>Just a few details to reserve your spot in the queue.</p>
      <form onSubmit={handleSubmit}>
        <input name="name" className="input-box" placeholder="Name" onChange={handleChange} required />
        <input name="phone" className="input-box" placeholder="Phone" onChange={handleChange} required />
        <button className="btn-join">Join Queue</button>
      </form>
    </div>
  );
};

export default UserForm;
