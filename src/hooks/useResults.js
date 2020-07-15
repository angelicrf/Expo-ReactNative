import yelp from "../api/yelp";
import { useState, useEffect } from "react";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, SetErrorMessage] = useState("");

  const SearchRestaurants = async (searchTerm) => {
    try {
      //console.log("there");

      const { data } = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "seattle" },
      });
      //console.log(data.businesses);
      setRestaurants(data.businesses);
    } catch (e) {
      SetErrorMessage("Can not find the searched food.");
      setRestaurants([]);
    }
  };
  useEffect(() => {
    SearchRestaurants("pasta");
  }, []);
  return [SearchRestaurants, restaurants, errMessage];
};
