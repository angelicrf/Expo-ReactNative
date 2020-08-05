import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackConext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTracks } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTracks(name, locations);
    reset();
    navigate("TrackList");
  };
  return [saveTrack];
};
