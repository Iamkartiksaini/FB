import axios from "axios";

const link = "http://localhost:4000/";

const postApi = () => {
  return {
    get() {
      return axios.get(link + "post/123");
    },
    post(body) {
      return axios.post(link + "post/123", body);
    },

    singleUserPost(body) {
      return axios.post(link + "post/getOneUserPosts", body);
    },
    delete(id) {
      const body = { id: id };
      return axios.post("http://localhost:4000/post/delete", body);
    },
  };
};

export default postApi;
