import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackConext";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.text}>From tracklist</Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "lime"
  }
});

export default TrackListScreen;
