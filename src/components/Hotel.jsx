import React, { useState } from "react";
import Subscription from "./Subscription";

const Hotel = ({ name, stars, city }) => {
  const [detailshow, setDetailshow] = useState(false);
  const [formshow, setFormshow] = useState(false);

  return (
    <div className="hoteldiv">
      <p className="name">{name}</p>
      {detailshow ? (
        <button onClick={() => setDetailshow(false)}>Show less</button>
      ) : (
        <button onClick={() => setDetailshow(true)}>Show more</button>
      )}
      {detailshow && (
        <div>
          <p>
            {city} ({stars})
          </p>
          <button onClick={() => setFormshow(true)}>Request more info</button>
          {formshow && (
            <Subscription hotel={name} close={() => setFormshow(false)} />
          )}
        </div>
      )}
    </div>
  );
};

//<Subscription hotel={name} close={() => setFormshow(false)} />

export default Hotel;
