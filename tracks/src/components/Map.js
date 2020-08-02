import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);
  //console.log(state);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={styles.activity} />;
  }
  //let points = [];
  //for (var i = 0; i < 20; i++) {
  //  points.push({
  //    latitude: 37.33233 + i * 0.001,
  //    longitude: -122.03121 + i * 0.001
  //  });
  //}
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300
  },
  activity: {
    marginTop: 200
  }
});
export default Map;
