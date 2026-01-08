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
    <div style={{ padding: 30 }}>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <br /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <br /><br />
        <button>Join Queue</button>
      </form>
    </div>
  );
};

export default UserForm;
