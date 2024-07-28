import React from "react";
import Order from "./Order";

export default function Footer() {
  const hours = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(isOpen);

  return (
    <div className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </div>
  );
}
