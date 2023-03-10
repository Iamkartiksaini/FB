import axios from "axios";

const link = "http://localhost:4000/";

const UserApi = () => {
  return {
    get() {
      return axios.get(link + "getAllUser");
    },
    createUser(body) {
      return axios.post(link + "Create_Account", body);
    },
    addPost(body) {
      return axios.put(link + "CURD_Post", body);
    },
  };
};

export default UserApi;
