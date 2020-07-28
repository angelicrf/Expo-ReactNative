import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "Add_Error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
const signup = dispatch => {
  return async (email, password) => {
    try {
      const response = await tracker.post("/signup", { email, password });
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: "Add_Error",
        payload: "Something is wrong with signup"
      });
    }
  };
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
  { isSignedIn: false, errorMessage: "" }
);
