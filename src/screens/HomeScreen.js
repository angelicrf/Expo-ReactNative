import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Angelique Expo Screen Initial</Text>;
};

const styles = StyleSheet.create({
  text: {
        fontSize: 30,
        backgroundColor: "blue",       
  }
});

export default HomeScreen;