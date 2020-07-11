import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorComponent = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.viewCompon}>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 30,
  },
});
export default ColorComponent;
