import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const RestaurantShow = ({ navigation }) => {
  const [showDetail, setShowDetail] = useState(null);
  const id = navigation.getParam("id");

  //console.log("There is the id");
  //console.log(showDetail);

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setShowDetail(response.data);
  };
  useEffect(() => {
    getBusiness(id);
  }, []);
  if (!showDetail) {
    return null;
  }
  return (
    <View>
      <Text>{showDetail.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={showDetail.photos}
        keyExtractor={(rest) => rest}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    padding: 10,
  },
});
export default RestaurantShow;
