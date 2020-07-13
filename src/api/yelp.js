import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer njCTv2iBGQJOg6LU4HcV5dKV8widHT569XUcPZ1cFVe9gUPVSZ0ytgWLI7u0kfIDtyqrBEwAEM4eyZ_7O-gDj_edDm2jOGEWYsQCYrk4hK59jKUMzpyote0K788MX3Yx",
  },
});
