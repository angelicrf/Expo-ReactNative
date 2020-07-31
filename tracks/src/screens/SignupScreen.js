import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(Context);
  console.log(state);

  return (
    <View style={styles.view}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="SignUp"
        onSubmit={(email, password) => signup(email, password)}
      />
      <NavLink
        routeName="Signin"
        messageDisplay="Already have an account? Sign in"
      />
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    header: () => null
  };
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignupScreen;
