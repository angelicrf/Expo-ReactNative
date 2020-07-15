import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantShow from "./src/screens/RestaurantShow";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Restaurant: RestaurantShow,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
