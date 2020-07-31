import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, Text, StyleSheet } from "react-native";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return <Text style={styles.text}>from ResolveScreen</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "lime"
  }
});
export default ResolveAuthScreen;
