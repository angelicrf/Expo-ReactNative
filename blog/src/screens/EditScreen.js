import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, EditBlogPost } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Screen Angelique - {navigation.getParam("id")}</Text>
      <Text style={styles.lable}>Enter Title</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <Text>{title}</Text>
      <Text style={styles.lable}>Enter Content</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={content}
        onChangeText={txt => setContent(txt)}
      />
      <Text>{content}</Text>
      <Button
        style={styles.button}
        title="Edit post"
        onPress={() => EditBlogPost(id, title, content)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  lable: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  input: {
    height: 50,
    width: 350,
    borderColor: "black",
    borderWidth: 1,
    margin: 10
  },
  button: {
    marginTop: 15
  }
});
export default EditScreen;
