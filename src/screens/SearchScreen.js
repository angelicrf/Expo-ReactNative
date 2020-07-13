import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Search from "../Components/Search";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, SetErrorMessage] = useState("");

  const SearchRestaurants = async () => {
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: term, location: "san jose" },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      SetErrorMessage("Can not find the searched food.");
    }
  };
  return (
    <View style={styles.viewCompon}>
      <Search
        name={term}
        onNameChange={setTerm}
        OnTermSubmit={SearchRestaurants}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text> We found many {restaurants.length}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewCompon: {
    margin: 30,
  },
});
export default SearchScreen;
