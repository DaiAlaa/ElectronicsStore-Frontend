import axios from "axios";
import store from "../store";
export default {
  namespaced: true,
  state: {
    AllUsers: [],
  },
  mutations: {
    setAllUsers(state, Users) {
      state.AllUsers = Users;
    },

  },
  actions: {
    showAllUsers({ commit}) {
      axios
        .get("http://localhost:7000/Admin/get-all-users")
        .then(response => {
          let Users = response.data;
          if (response.status != 200) {
            Users = [];
          }
          commit("setAllUsers", Users);
          console.log(response);
        })
        .catch(error => {
          let Users = [];
          commit("setAllUsers", Users);
          console.log(error);
        });
    },
    DeleteUser(userId) {
        axios
        .delete("http://localhost:7000/Admin/delete-user/" + userId)
        .then(() => {
            store.dispatch("Users/showAllUsers");
        })
        .catch(error => {
            console.log(error);
        });
      },
  },
  getters: {
    AllUsers: state => state.AllUsers,
  }
};
