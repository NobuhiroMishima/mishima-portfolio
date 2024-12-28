import { useEffect, useRef, useState, cloneElement } from "react";

function ScrollAnimation({ children, delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animatedChild = cloneElement(children, {
    ref: elementRef,
    className: `${
      children.props.className || ""
    } transform transition-all duration-[1000ms] ease-in-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
    style: { ...(children.props.style || {}), transitionDelay: `${delay}ms` },
  });

  return <>{animatedChild}</>;
}

export default ScrollAnimation;
