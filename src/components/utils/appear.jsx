function generateAnimationClass(
  isVisible,
  baseClass = "",
  translateAxis = "y",
  translateValue = 10,
  direction = true
) {
  const translateDirection =
    direction
      ? translateAxis === "x" ? `translate-x-${translateValue}` : `translate-y-${translateValue}`
      : translateAxis === "x" ? `-translate-x-${translateValue}` : `-translate-y-${translateValue}`;

  return `${baseClass} transform transition-all duration-1000 ease-out ${
    isVisible ? "translate-x-0 translate-y-0 opacity-100" : `${translateDirection} opacity-0`
  }`;
}

function appearUp(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "y", 6, true);
}

function appearDown(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "y", 6, false);
}

function appearLeft(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "x", 10, true);
}

function appearRight(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "x", 10, false);
}

export {appearUp, appearDown, appearLeft, appearRight}
