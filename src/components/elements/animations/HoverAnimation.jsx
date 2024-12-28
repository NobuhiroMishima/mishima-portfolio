import { cloneElement } from "react";

function HoverAnimation({ children, hoverClass = "", transitionDuration = "300ms" }) {
  // childrenにクラス名とスタイルを注入
  const animatedChild = cloneElement(children, {
    className: `${
      children.props.className || ""
    } transition-all duration-${transitionDuration} ease-in-out ${hoverClass}`,
    style: { ...(children.props.style || {}) },
  });

  return <>{animatedChild}</>;
}

export default HoverAnimation;
