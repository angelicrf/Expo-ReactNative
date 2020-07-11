import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorComponent from "../Components/ColorComponent";

const ColorScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red);
  console.log(blue);
  console.log(green);

  return (
    <View style={styles.viewStyle}>
      <ColorComponent
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorComponent
        color="Blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
      />
      <ColorComponent
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
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
