import React, { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";
import Calculate from "./Calculate";
import Button from "./Button";

export default function TipCalculator() {
  const [billValue, setBillValue] = useState("");

  const [tip1, setTip1] = useState(0);

  const [tip2, setTip2] = useState(0);

  const averageTip = (Number(tip1) + Number(tip2)) / 2;
  const tip = (billValue * averageTip) / 100;

  const handleReset = () => {
    setBillValue("");
    setTip1(0);
    setTip2(0);
  };

  return (
    <div>
      <Bill bill={billValue} onChangeBill={setBillValue} />
      <Service tip={tip1} onChangeTip={setTip1}>
        <strong>How did you like the service?</strong>
      </Service>
      <Service tip={tip2} onChangeTip={setTip2}>
        <strong>How did your friend like the service?</strong>
      </Service>
      <Calculate billValue={billValue} tip={tip} />
      <Button onReset={handleReset} />
    </div>
  );
}
