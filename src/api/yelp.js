import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IiPK9QoyA6Zi-JmSliDbE1Wj0ubYvRXwuUw3k2S6JOglAHYM1Uur_EMOKA4IlFw8kjJCA4zq9A9m1tC_HeocRhgcaa5dwAJ_XO4Z5DgV9NZ5-UF0pfF3xddG2FcNX3Yx",
  },
});
