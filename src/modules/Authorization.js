import axios from "axios";
import store from "../store";
//import router from "../router/index";
export default {
  namespaced: true,
  state: {
    status: "",
    upgraded: "",
    token: localStorage.getItem("x-auth-token") || "",
    resendtoken: localStorage.getItem("X-token") || "",
    User: {},
    emailConfirmed: Boolean,
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, { token, user }) {
      state.status = "success";
      state.token = token;
      state.User = user;
    },
    auth_error(state, err_msg) {
      state.status = err_msg;
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.User = {};
    },
  },
  actions: {
    signUp({ commit }, user) {
      commit("auth_request");
      axios
        .post("http://localhost:7000/auth/sign-up", {
          email: user.email,
          password: user.password,
          name: user.username,
          role: "Customer",
          gender: user.gender,
          country: user.country,
          birthday: user.birthday,
        })
        .then((response) => {
          ///////////////////
          const token = response.data.token;
          localStorage.setItem("X-token", token);
          console.log("Nerdeen", token);
          ///////////////
        })
        .catch((error) => {
          commit("auth_error", "signup_err");
          localStorage.removeItem("X-token");
          console.log(error);
        });
    },
    login({ commit }, user) {
      commit("auth_request");
      axios
        .post("http://localhost:7000/auth/login", {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("x-auth-token", token);
          axios.defaults.headers.common["x-auth-token"] = token;
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          console.log(error);
          commit("auth_error", "login_err");
          localStorage.removeItem("x-auth-token");
        });
    },
  },
  getters: {
    Username: (state) => state.User.displayName,
    GetStatus: (state) => state.status,
    user: (state) => state.User,
    userid: (state) => state.User._id,
  },
};
