import { instance } from "./axiosConfig";

const UserApi = () => {
  return {
    get() {
      return instance.get("getAllUser");
    },
    getFriendsModel(body) {
      return instance.post("getFriendsModel", body);
    },
    getSingleUser(body) {
      return instance.post("auth", body, {
        headers: {
          Authorization: `fb ${"Authorization"}`,
        },
      });
    },
    search(body) {
      return instance.post("search", body);
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
    likedCommentOperation(body) {
      return instance.put("CURD_Post/reaction", body);
    },
  };
};

export default UserApi;
