import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  console.log(state);

  return (
    <View style={styles.view}>
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Signin"
        onSubmit={(email, password) => signin(email, password)}
      />
      <NavLink
        routeName="Signup"
        messageDisplay="Don't have an account? Sign up instead"
      />
    </View>
  );
};
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
