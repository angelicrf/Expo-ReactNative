import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>AccountScreen</Text>
      <Button
        title="Go Track Create"
        onPress={() => navigation.navigate("TrackCreate")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default AccountScreen;
