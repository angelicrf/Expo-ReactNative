import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "Add_Error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_Error_Message":
      return { ...state, errorMessage: "" };
    case "sinout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};
const tryLocalSignin = dispatch => () => {
  const token = AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "signin",
      payload: token
    });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};
const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_Error_Message" });
};
const signup = dispatch => async (email, password) => {
  try {
    const response = await tracker.post("/signup", { email, password });
    console.log(response.data);

    AsyncStorage.setItem(response.data.token);
    //AsyncStorage.getItem("token");

    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (e) {
    dispatch({
      type: "Add_Error",
      payload: "Something is wrong with signup"
    });
  }
};
const signin = dispatch => async (email, password) => {
  try {
    const response = await tracker.post("/signin", { email, password });
    console.log(response.data);

    AsyncStorage.setItem(response.data.token);
    //AsyncStorage.getItem("token");

    dispatch({ type: "signin", payload: response.data.token });
    navigate("mainFlow");
  } catch (e) {
    dispatch({
      type: "Add_Error",
      payload: "Something is wrong with signin"
    });
  }
};
const signout = dispatch => () => {
  AsyncStorage.removeItem("token");
  dispatch({
    type: "signout"
  });
  navigate("loginFlow");
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
