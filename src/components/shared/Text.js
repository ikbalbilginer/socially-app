import React from "react";
import { Text } from "react-native";

export default (props) => {
  const style = {
    ...props.style,
    fontSize: props.style?.fontSize || 16,
    fontFamily: !props.weight
      ? "Poppins-Regular"
      : props.weight === "bold"
      ? "Poppins-Bold"
      : "Poppins-SemiBold",
  };
  return (
    <Text {...props} style={style}>
      {props.children}
    </Text>
  );
};
