import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import Search from "../Components/Search";

const ComponentScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(someText) => setName(someText)}
      />
      <Search name={name} />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default ComponentScreen;
