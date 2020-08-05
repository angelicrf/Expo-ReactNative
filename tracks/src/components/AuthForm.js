import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text style={styles.text} h3>
          {headerText}
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
        title={submitButtonText}
        onPress={() => onSubmit(email, password)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  error: {
    color: "brown",
    fontWeight: "bold",
    marginTop: 5
  }
});
export default AuthForm;
