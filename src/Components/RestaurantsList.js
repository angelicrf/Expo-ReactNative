import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import RestaurantsDetail from "./RestaurantsDetail";
import { withNavigation } from "react-navigation";

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (restaurants.length == 0) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Restaurant", { id: item.id });
              }}
            >
              <RestaurantsDetail result={item} />
            </TouchableOpacity>
          );
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
export default withNavigation(RestaurantsList);
