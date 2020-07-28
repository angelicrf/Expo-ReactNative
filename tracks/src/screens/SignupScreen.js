import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const { state, signup } = useContext(Context);
  console.log(state);
  return (
    <View style={styles.view}>
      <Spacer>
        <Text style={styles.text} h3>
          Signup for Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={SetPassword}
      />
      <Button title="Sign Up" onPress={() => signup(email, password)} />
      {state.errorMessage ? (
        <Text style={styles.error}> {state.errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title="Go MainFlow"
        onPress={() => navigation.navigate("mainFlow")}
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: 5
  }
});

export default SignupScreen;
