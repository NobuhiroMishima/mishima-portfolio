import React from "react";

function PageTransitionButton({ textcolor, bgcolor, text }) {
  return (
    <button
      className={`bg-${bgcolor} text-${textcolor} px-5 py-2 border-2 border-${textcolor} hover:bg-${textcolor} hover:text-${bgcolor} drop-shadow-2xl text-sm transition-colors`}
    >
      {text}
    </button>
  );
}

export default PageTransitionButton;
