import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Search = ({ name }) => {
  return (
    <View style={styles.viewCompon}>
      <Text>Search Component </Text>

      <Text>Searched name is: {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 30,
  },
});
export default Search;
