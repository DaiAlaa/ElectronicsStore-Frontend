import axios from "axios";
import store from "../store";
var urlRequest = "https://electronic-store-back-end.herokuapp.com/";
export default {
  namespaced: true,
  state: {
    AllUsers: [],
    userRespons: 0,
    status: "",
    msg: ""
  },
  mutations: {
    setAllUsers(state, Users) {
      state.AllUsers = Users;
    },
    isAdded(state, msg) {
      state.status = msg;
    },
    setA(state, msg){
      state.msg = msg
    }
  },
  actions: {
    showAllUsers({ commit }) {
      axios
        .get(urlRequest + "Admin/get-all-users")
        .then((response) => {
          let Users = response.data;
          if (response.status != 200) {
            Users = [];
          }
          commit("setAllUsers", Users);
          console.log(response);
        })
        .catch((error) => {
          let Users = [];
          commit("setAllUsers", Users);
          console.log(error);
        });
    },
    DeleteUser({commit}, userId) {
      axios
        .delete(urlRequest + "Admin/delete-user?userId=" + userId)
        .then(() => {
          commit("setA", "a");
          store.dispatch("Users/showAllUsers"); 
        })
        .catch((error) => {
          console.log(error);
        });
    },
    CreateAdminEmplyee({ commit, state }, user) {
      console.log("yarab");
      axios
        .post(urlRequest + "Admin/create-user", {
          email: user.email,
          password: user.password,
          name: user.name,
          role: user.role,
          creditCardNumber: user.creditCardNumber,
          mobileNumber: user.mobileNumber,
          address: user.address,
        })
        .then((response) => {
          console.log("wsl");
          state.userRespons = response.data;
          commit("isAdded", "success");
          console.log("status : ", state.status);
        })
        .catch((error) => {
          console.log("wsllll");
          commit("isAdded", "failed");
          console.log(error);
          console.log("status : ", state.status);
        });
    },
  },
  getters: {
    AllUsers: (state) => state.AllUsers,
    Status: (state) => state.status,
  },
};
