import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Search from "../Components/Search";
import useResults from "../hooks/useResults";
import RestaurantsList from "../Components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchRestaurants, restaurants, errMessage] = useResults();
  return (
    <View style={styles.viewCompon}>
      <Search
        name={term}
        onNameChange={setTerm}
        OnTermSubmit={SearchRestaurants(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text> We found many {restaurants.length}</Text>
      <RestaurantsList title="Cost Effective" />
      <RestaurantsList title="Bit Pricier" />
      <RestaurantsList title="So Expensive" />
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 30,
  },
});
export default SearchScreen;
