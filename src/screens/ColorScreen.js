import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorComponent from "../Components/ColorComponent";

const COLOR_INCREMENT = 1;

const ColorScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red);
  console.log(blue);
  console.log(green);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red - change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue - change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green - change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };
  return (
    <View style={styles.viewStyle}>
      <ColorComponent
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorComponent
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <ColorComponent
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 100,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          margin: 50,
        }}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    //flex: 1,
  },
});

export default ColorScreen;
