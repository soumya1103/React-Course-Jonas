import React from "react";
import { useEffect, useState } from "react";

export default function Advice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);
  async function getAdvise() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvise();
  }, []);
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvise}>Get advise</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return <p>You have read {props.count} pieces of advice.</p>;
}
