import yelp from "../api/yelp";
import React, { useState, useEffect } from "react";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errMessage, SetErrorMessage] = useState("");

  const SearchRestaurants = async (searchTerm) => {
    console.log("hi there!");
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      SetErrorMessage("Can not find the searched food.");
    }
  };
  useEffect(() => {
    SearchRestaurants("pasta");
  }, []);
  return [SearchRestaurants, restaurants, errMessage];
};
