//import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";

const TrackCreateScreen = () => {
  const [err, Seterr] = useState("");

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          console.log(location);
        }
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      Seterr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TrackCreateScreen;
