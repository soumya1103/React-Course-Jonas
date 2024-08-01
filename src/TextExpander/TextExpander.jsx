import React, { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cdx`",
  expanded = false,
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    cursor: "pointer",
    color: buttonColor,
    background: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const handleExpand = () => {
    setIsExpanded((exp) => !exp);
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={handleExpand}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
