import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = ({ imageName, imageSource, imageTitle }) => {
  console.log(imageSource);

  return (
    <View>
      <Image source={imageSource} />
      <Text>
        {imageName} - {imageTitle}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: "red",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 50,
  },
});
export default ImageDetail;
