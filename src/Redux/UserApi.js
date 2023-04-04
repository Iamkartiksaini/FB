import { instance } from "./axiosConfig";

const UserApi = () => {
  return {
    get() {
      return instance.get("getAllUser");
    },
    getSingleUser(body) {
      return instance.post("auth", body, {
        headers: {
          Authorization: `fb ${"Authorization"}`,
        },
      });
    },
    getPeopleList(body) {
      return instance.post("peopleList", body);
    },
    addFriend(body) {
      return instance.post("addFriend", body);
    },
    createUser(body) {
      return instance.post("Create_Account", body);
    },
    addPost(body) {
      return instance.put("CURD_Post", body);
    },
  };
};

export default UserApi;
