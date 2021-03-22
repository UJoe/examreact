import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => setHotels(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      {hotels
        ? hotels.map((hot, index) => (
            <Hotel
              key={index}
              name={hot.name}
              stars={hot.stars}
              city={hot.city}
            />
          ))
        : "Sorry, Codecool's fetch API has been infected by a virus."}
    </div>
  );
};

export default App;
