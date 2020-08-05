import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (ShouldTrack, callback) => {
  const [err, Seterr] = useState(null);

  useEffect(
    () => {
      let subscriber;
      const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          subscriber = await watchPositionAsync(
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
        } catch (e) {
          Seterr(e);
        }
      };

      if (ShouldTrack) {
        startWatching();
      } else {
        if (subscriber) {
          subscriber.remove();
        }
        subscriber = null;
      }
      return () => {
        if (subscriber) {
          subscriber.remove();
        }
      };
    },
    [ShouldTrack, callback]
  );

  return [err];
};
