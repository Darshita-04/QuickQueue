import { useParams } from "react-router-dom";

const ThankYou = () => {
  const { userId } = useParams();

  const queue = JSON.parse(localStorage.getItem("queue")) || [];
  const position = queue.findIndex(u => u.id === Number(userId));

  return (
    <div className="thankyou-screen">
      <h2>Thank You for Joining the Queue!</h2>
      {position !== -1 ? (
        <p>
          There are <strong>{position}</strong> user(s) ahead of you.
        </p>
      ) : (
        <p>Your position could not be found.</p>
      )}
    </div>
  );
};

export default ThankYou;
