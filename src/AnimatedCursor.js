import React from "react";
import { AnimatedBlock, useMouseMove, useAnimatedValue } from "react-uicomp";

const boxStyle = {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#39F",
  pointerEvents: "none",
  position: "absolute",
};
const AnimatedCursor = () => {
  const { mouseX, mouseY } = useMouseMove();
  const animatedMouseX = useAnimatedValue(mouseX - 15);
  const animatedMouseY = useAnimatedValue(mouseY - 15);

  return (
    <AnimatedBlock
      style={{
        ...boxStyle,
        left: animatedMouseX.value,
        top: animatedMouseY.value,
      }}
    ></AnimatedBlock>
  );
};

export default AnimatedCursor;
