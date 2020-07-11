import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageName="Forest"
        imageTitle="Happy"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        imageName="Beach"
        imageTitle="Life"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        imageName="Mountain"
        imageTitle="Enjoy"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "purple",
    fontSize: 25,
    marginVertical: 50,
  },
});
export default ImageScreen;
