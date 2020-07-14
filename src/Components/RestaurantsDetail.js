import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const RestaurantsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.nameRestaurant}>{result.name}</Text>
      <Text>{result.review_count} reviews</Text>
      <Text>{result.rating} stars</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginLeft: 10,
  },
  nameRestaurant: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
});
export default RestaurantsDetail;
