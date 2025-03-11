'use client'

import Link from "next/link";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function PageTransitionButton({ page, textcolor, bgcolor, text }) {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <Link ref={elementRef} className={appearUp(isVisible)} href={`/${page}`}>
      <div
        style={{
          backgroundColor: bgcolor,
          color: textcolor,
        }}
        className="px-5 py-2 border-2 border-black drop-shadow-2xl text-sm transition-colors duration-300 ease-in-out hover:bg-current hover:text-current"
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
      </div>
    </Link>
  );
}

export default PageTransitionButton;
