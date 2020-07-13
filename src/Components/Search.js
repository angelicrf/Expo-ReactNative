import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = ({ term, onNameChange, OnTermSubmit }) => {
  return (
    <View style={styles.viewStylet}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(someName) => onNameChange(someName)}
        onEndEditing={() => OnTermSubmit()}
      >
        Searching
      </TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStylet: {
    marginHorizontal: 15,
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
export default Search;
