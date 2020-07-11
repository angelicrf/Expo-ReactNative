import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorComponent from "../Components/ColorComponent";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    case "green":
      return (state.green + action.amount > 255) |
        (state.green + action.amount < 0)
        ? state
        : { ...state, green: state.green + action.amount };
    default:
      state;
  }
};
const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //const [red, setRed] = useState(0);
  //const [blue, setBlue] = useState(0);
  //const [green, setGreen] = useState(0);

  console.log(red);
  console.log(blue);
  console.log(green);

  //const setColor = (color, change) => {
  //  switch (color) {
  //    case "red":
  //      red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //      return;
  //    case "blue":
  //      blue + change > 255 || blue + change < 0
  //        ? null
  //        : setBlue(blue + change);
  //      return;
  //    case "green":
  //      green + change > 255 || green + change < 0
  //        ? null
  //        : setGreen(green + change);
  //      return;
  //    default:
  //      return;
  //  }
  //};
  return (
    <View style={styles.viewStyle}>
      <ColorComponent
        onIncrease={() =>
          dispatch({
            colorToChange: "red",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "red",
            amount: -1 * COLOR_INCREMENT,
          })
        }
        color="Red"
      />
      <ColorComponent
        color="Blue"
        onIncrease={() =>
          dispatch({
            colorToChange: "blue",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "blue",
            amount: -1 * COLOR_INCREMENT,
          })
        }
      />
      <ColorComponent
        color="Green"
        onIncrease={() =>
          dispatch({
            colorToChange: "green",
            amount: COLOR_INCREMENT,
          })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "green",
            amount: -1 * COLOR_INCREMENT,
          })
        }
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
