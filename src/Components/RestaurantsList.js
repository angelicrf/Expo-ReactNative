import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const RestaurantsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default RestaurantsList;
