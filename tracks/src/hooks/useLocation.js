import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (ShouldTrack, callback) => {
  const [err, Seterr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      setSubscriber(sub);
    } catch (e) {
      Seterr(e);
    }
  };

  useEffect(
    () => {
      if (ShouldTrack) {
        startWatching();
      } else {
        subscriber.remove();
        setSubscriber(null);
      }
    },
    [ShouldTrack]
  );

  return [err];
};
