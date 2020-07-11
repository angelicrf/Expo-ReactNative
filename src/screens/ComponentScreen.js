import React, { useState } from "react";
import { Text, StyleSheet, FlatList, TextInput, View } from "react-native";

const ComponentScreen = () => {
  const [name, setName] = useState("");
  const friends = [
    { name: "Adam", id: "1" },
    { name: "Anna", id: "2" },
    { name: "Brian", id: "3" },
    { name: "Kile", id: "4" },
    { name: "Jack", id: "5" },
  ];

  return (
    <View>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(someText) => setName(someText)}
      />
      <Text>The text entered is: {name} </Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "red",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 50,
  },
  textInput: {
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default ComponentScreen;
