import yelp from "../api/yelp";
import { useState, useEffect } from "react";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, SetErrorMessage] = useState("");

  const SearchRestaurants = () => {
    try {
      const response = yelp.get("/search", {
        params: { limit: 50, term: term, location: "seattle" },
      });
      console.log(response.data.businesses);
      setRestaurants(response.data.businesses);
    } catch (e) {
      SetErrorMessage("Can not find the searched food.");
    }
  };
  useEffect(() => {
    return () => SearchRestaurants();
  }, []);
  return [SearchRestaurants, restaurants, errMessage];
};
