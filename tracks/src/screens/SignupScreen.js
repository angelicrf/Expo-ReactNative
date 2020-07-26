import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>SignupScreen</Text>
      <Button
        title="Go Sign in"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go MainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default SignupScreen;
