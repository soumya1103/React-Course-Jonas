import React from "react";

export default function AccordionItem({
  curOpen,
  onCurOpen,
  num,
  title,
  children,
}) {
  const isOpen = num === curOpen;
  const handleClick = () => {
    onCurOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}
