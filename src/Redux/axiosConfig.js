import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:4000/",
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// Also add/ configure interceptors && all the other cool stuff
const getFileLink = "http://localhost:4000/assets/";
const saveFileLink = "http://localhost:8000/upload";

export { instance, getFileLink, saveFileLink };
