import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(navigation);
  return (
    <View>
      <Button title="Click me" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: "blue",
  },
});

export default HomeScreen;
