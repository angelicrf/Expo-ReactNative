import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import RestaurantsDetail from "./RestaurantsDetail";

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail result={item} />;
        }}
      />
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
