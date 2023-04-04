import { instance } from "./axiosConfig";
// const link = "http://localhost:4000/";

const postApi = () => {
  return {
    get() {
      return instance.get("post/123");
    },
    post(body) {
      return instance.post("post/123", body);
    },

    singleUserPost(body) {
      return instance.post("post/getOneUserPosts", body);
    },
    delete(id) {
      const body = { id: id };
      return instance.post("http://localhost:4000/post/delete", body);
    },
  };
};

export default postApi;
