import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

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
      <Button
        title="Go Sign in"
        onPress={() => navigation.navigate("Signin")}
      />
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
  }
});

export default SignupScreen;
