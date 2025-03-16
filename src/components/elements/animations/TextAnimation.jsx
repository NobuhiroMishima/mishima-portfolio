'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import useIntersectionObserver from '@/components/hooks/useIntersectionObserver';

const TextAnimation = ({ text }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const chars = elementRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { y: "-50%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
      setHasAnimated(true); // アニメーションを一度だけ実行
    }
  }, [isVisible, hasAnimated, elementRef]);

  // テキストを1文字ずつ分割してラップ
  if (!text || typeof text !== "string") return;

  const splitText = text.split("").map((char, index) => (
    <span key={index} className="char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div ref={elementRef} className="inline-block overflow-hidden">
      {splitText}
    </div>
  );
}

export default TextAnimation;