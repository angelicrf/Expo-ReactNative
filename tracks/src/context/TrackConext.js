import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTracks = dispatch => async (name, locations) => {
  await tracker.post("/tracks", { name, locations });
  //console.log(response.data);
  //dispatch({
  //    type: "create_track",
  //    name,
  //    locations
  //})
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTracks },
  []
);
