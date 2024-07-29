import React from "react";
import "./travelList.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function TravelList() {
  return (
    <div className="travel">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
