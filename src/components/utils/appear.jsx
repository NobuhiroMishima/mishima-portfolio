function generateAnimationClass(
  isVisible,
  baseClass = "",
  translateAxis = "y",
  direction = true
) {
  const translateDirection = direction
    ? translateAxis === "x"
      ? "translate-x-6"
      : "translate-y-10"
    : translateAxis === "x"
    ? "-translate-x-6"
    : "-translate-y-10";

  return `${baseClass} transform transition-all duration-1000 ease-out ${
    isVisible
      ? "translate-x-0 translate-y-0 opacity-100"
      : `${translateDirection} opacity-0`
  }`;
}

function appearUp(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "y", true);
}

function appearDown(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "y", false);
}

function appearLeft(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "x", true);
}

function appearRight(isVisible, baseClass = "") {
  return generateAnimationClass(isVisible, baseClass, "x", false);
}

export { appearUp, appearDown, appearLeft, appearRight };
