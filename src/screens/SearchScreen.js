import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Search from "../Components/Search";
import useResults from "../hooks/useResults";
import RestaurantsList from "../Components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [SearchRestaurants, restaurants, errMessage] = useResults();

  //console.log(restaurants);
  const filterRestaurantbyPrice = (price) => {
    return restaurants.filter((filter) => {
      return filter.price === price;
    });
  };
  return (
    <View style={styles.viewCompon}>
      <Search
        name={term}
        onNameChange={(newText) => setTerm(newText)}
        OnTermSubmit={() => SearchRestaurants(term)}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text> We found {restaurants.length}</Text>
      <RestaurantsList
        restaurants={filterRestaurantbyPrice("$")}
        title="Cost Effective"
      />
      <RestaurantsList
        restaurants={filterRestaurantbyPrice("$$")}
        title="Bit Pricier"
      />
      <RestaurantsList
        restaurants={filterRestaurantbyPrice("$$$")}
        title="Expensive"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 15,
  },
});
export default SearchScreen;
