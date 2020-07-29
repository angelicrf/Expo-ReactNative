import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "Add_Error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };

    default:
      return state;
  }
};
const signup = dispatch => async (email, password) => {
  try {
    const response = await tracker.post("/signup", { email, password });
    console.log(response.data);
    await AsyncStorage.setItem(response.data.token);
    //await AsyncStorage.getItem("token");
    dispatch({ type: "signup", payload: response.data.token });
    navigate("mainFlow");
  } catch (e) {
    dispatch({
      type: "Add_Error",
      payload: "Something is wrong with signup"
    });
  }
};
const signin = dispatch => {
  return () => {};
};
const signout = dispatch => {
  return ({ email, password }) => {};
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
