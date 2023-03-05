import axios from "axios";

const link = "http://localhost:4000/";

const postApi = () => {
  return {
    get() {
      return axios.get(link + "post/13");
    },
    post(body) {
      return axios.post(link + "post/123", body);
    },
    delete(body) {
      console.log("this.delete", body);
      return 6;
    },
  };
};

export default postApi;
