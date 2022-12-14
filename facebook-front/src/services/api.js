import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export default {
  getPosts: function () {
    return instance.get("/posts");
  },
  getComments: function () {
    return instance.get("/comments");
  },
  postComment: function (query) {
    return instance.post("/comments", query);
  },
};
