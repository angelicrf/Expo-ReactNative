import { NavigationActions } from "react-navigation";
let navigator;

export const setNavigator = nav => {
  return (navigator = nav);
};
export const navigate = (routeName, params) => {
  console.log("I am here2");
  return navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
  console.log("I am here");
};
