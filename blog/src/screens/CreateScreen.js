import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");
  const id = navigation.getParam("id");

  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Enter Title</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={title}
        onChangeText={txt => SetTitle(txt)}
      />
      <Text style={styles.lable}>{title}</Text>
      <Text>Enter Content</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={content}
        onChangeText={txt => SetContent(txt)}
      />
      <Text style={styles.lable}>{content}</Text>
      <Button
        title="Add content"
        onPress={() => {
          addBlogPost(id, title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  lable: {
    margin: 15,
    fontWeight: "bold"
  },
  input: {
    height: 50,
    width: 350,
    borderColor: "black",
    borderWidth: 1
  }
});
export default CreateScreen;
