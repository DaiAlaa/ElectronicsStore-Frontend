import axios from "axios";
import store from "../store";
import router from "../router/index";
export default {
  namespaced: true,
  state: {
    status: "",
    upgraded: "",
    token: localStorage.getItem("Authorization") || "",
    resendtoken: localStorage.getItem("X-token") || "",
    User: {},
    Mail:"",
    emailConfirmed: Boolean,
    //short cicuit evaluation if the first argument return anything but null it will be stored if not token=''
  },
  mutations: {
    auth_faild(state) {
      state.status = "faild";
      state.token = "";
      state.User = {};
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
    Reset_Mail(state,Mail){
      state.Mail=Mail;
    }
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
          const token = response.data.access_token;
          localStorage.setItem("X-token", token);
          axios.defaults.headers.common["Authorization"] = token;
          store.dispatch("Authorization/get_user", true);
          console.log("Nerdeen", token);
          ///////////////
        })
        .catch((error) => {
          commit("auth_faild");
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
          const token = response.data.access_token;
          localStorage.setItem("Authorization", token);
          axios.defaults.headers.common["Authorization"] = token;
          console.log("login",token);
          store.dispatch("Authorization/get_user", true);
        })
        .catch((error) => {
          console.log(error);
          commit("auth_faild");
          localStorage.removeItem("Authorization");
        });
    },
    get_user({ commit }, flag) {
      const token = localStorage.getItem("Authorization");
      console.log("y :",token);
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_request");
      axios
        .get("http://localhost:7000/Admin/get-user")
        .then(response => {
          const user = response.data;
          console.log("user:",user);
          commit("auth_success", { token, user });
          console.log("status",status);
          // localStorage.setItem("is-admin", user.role);
          if (flag) router.replace("/");
        })
        .catch(error => {
          commit("auth_error", "user_err");
          localStorage.removeItem("Authorization");
          console.log(error);
        });
    },
    logout({ commit }) {
          localStorage.removeItem("Authorization");
          delete axios.defaults.headers.common["Authorization"];
          commit("logout");
    },
    reset({ commit }, Mail) {
          commit("logout");
          commit("Reset_Mail",Mail.email);
          console.log("in reset",Mail.email)
          router.replace("/ResetPassword");
    },
    reset_password({ commit }, payload) {
      console.log("au",payload)
      axios.defaults.headers.common["x-auth-token"] = payload.token;
      axios
        .put("http://localhost:7000/auth/forget-password", {
          email:payload.email,
          newPassword: payload.newPassword,
          newPasswordRepeat:payload.newPasswordRepeat
        })
        .then(() => {
          router.replace("/login");
        })
        .catch(error => {
          commit("logout");
          console.log(error);
          delete axios.defaults.headers.common["x-auth-token"];
        });
    },
  },
  getters: {
    Username: (state) => state.User.name,
    GetStatus: (state) => state.status,
    User: (state) => state.User,
    UserID: (state) => state.User._id,
    UserRole:(state)=>state.User.role,
    ResetMail:(state)=>state.Mail,
  },
};
