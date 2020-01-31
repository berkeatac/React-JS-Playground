import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5824724607d2fad613cba2c83a8021f936843a005cb1c4979b647b52bfaafdda"
  }
});
