import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackConext";
import { Context as LocationContext } from "../context/LocationContext";

export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name }
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTracks(name, locations);
    //reset();
    navigate("TrackList");
  };
  return [saveTrack];
};
