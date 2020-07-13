import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Search from "../Components/Search";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.viewCompon}>
      <Text>Search Component </Text>
      <Search
        name={term}
        onNameChange={(textChange) => setTerm(textChange)}
        OnTermSubmit={() => console.log("Search submitted...")}
      />
      <Text>{term}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 30,
  },
});
export default SearchScreen;
