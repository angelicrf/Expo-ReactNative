import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, messageDisplay, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.signin}>{messageDisplay}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};
const styles = StyleSheet.create({
  signin: {
    color: "blue"
  }
});
export default withNavigation(NavLink);
