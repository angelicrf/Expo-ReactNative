import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { startRecording, stopRecording, addLocation } = useContext(
    LocationContext
  );
  const [err] = useLocation(location => addLocation(location));

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
