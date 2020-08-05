import React, { useContext } from "react";
import { Context as TrackConetxt } from "../context/TrackConext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTracks } = useContext(TrackConetxt);
  const {
    state: { locations, name }
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTracks(name, locations);
  };
  return [saveTrack];
};
