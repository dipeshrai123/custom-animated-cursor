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
  const { mouseX, mouseY } = useMouseMove(); // GETS MOUSE MOVEMENT X AND Y
  const animatedMouseX = useAnimatedValue(0);
  const animatedMouseY = useAnimatedValue(0);
  
  useEffect(() => {
	  animatedMouseX.value = mouseX - 15;
	  animatedMouseY.value = mouseY - 15;
  }, [mouseX, mouseY, animatedMouseX, animatedMouseY]);

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
