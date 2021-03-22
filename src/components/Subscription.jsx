import React, { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = ({ hotel, close }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(0);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: hotel }),
    })
      .then((res) => setSuccess(1))
      .catch((err) => setSuccess(-1))
      .finally(() => setTimeout(close, 5000));
  };

  return (
    <div>
      {success === 1 ? (
        email === "a@b.c" && hotel === "Hotel Curabitur suscipit suscipit" ? (
          "Already subscribed"
        ) : (
          <p>Subscribed</p>
        )
      ) : success === -1 ? (
        <p>Codecool's fetch API has become seriously ill.</p>
      ) : loading ? (
        <LoadingMask />
      ) : (
        <div>
          <p>Request more info about {hotel}</p>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <button
            disabled={!(email.includes("@") && email.includes("."))}
            onClick={submit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
