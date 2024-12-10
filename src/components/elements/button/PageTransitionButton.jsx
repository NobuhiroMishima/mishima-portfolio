import React from "react";

function PageTransitionButton({ textcolor, bgcolor, text }) {
  return (
    <button
      style={{
        backgroundColor: bgcolor,
        color: textcolor,
      }}
      className="px-5 py-2 border-2 border-black drop-shadow-2xl text-sm transition-colors hover:bg-current hover:text-current"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = textcolor;
        e.currentTarget.style.color = bgcolor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgcolor;
        e.currentTarget.style.color = textcolor;
      }}
    >
      {text}
    </button>
  );
}

export default PageTransitionButton;
