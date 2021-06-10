<template>
  <div class="navBar">
    <router-link to="/AdminPanel/ControlUsers">
      <button class="users" v-bind:class="{ users2: route1 }">
        Control Users
      </button>
    </router-link>
    <!-- <router-link to="/AdminPanel/Statistics">
      <button class="Statistics" v-bind:class="{ Statistics2: route2 }" @click="ShowStats()">
        Statistics
      </button>
    </router-link> -->
    <router-link to="/AdminPanel/AddNewAdmin">
      <button class="newAdmin" v-bind:class="{ newAdmin2: route3 }">
        Add new admin
      </button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.users {
  border: none;
  border-radius: 20px;
  width: 10%;
  height: 6%;
  margin-left: -10%;
  margin-top: 2%;
  position: absolute;
  background-color: #161516;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.users2 {
  border: none;
  border-radius: 20px;
  width: 10%;
  height: 6%;
  margin-left: -10%;
  margin-top: 2%;
  position: absolute;
  background-color: white;
  color: #161516;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.Statistics {
  border: none;
  border-radius: 20px;
  width: 7%;
  height: 6%;
  margin-top: 2%;
  margin-left: 0%;
  position: absolute;
  background-color: #161516;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.Statistics2 {
  border: none;
  border-radius: 20px;
  width: 7%;
  height: 6%;
  margin-top: 2%;
  margin-left: 0%;
  position: absolute;
  background-color: white;
  color: #161516;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.newAdmin {
  border: none;
  border-radius: 20px;
  width: 11%;
  height: 6%;
  margin-top: 2%;
  margin-left: 0%;
  position: absolute;
  background-color: #161516;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.newAdmin2 {
  border: none;
  border-radius: 20px;
  width: 11%;
  height: 6%;
  margin-top: 2%;
  margin-left: 0%;
  position: absolute;
  background-color: white;
  color: #161516;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.Statistics:focus,
.users:focus,
.newAdmin:focus {
  background-color: white;
  color: #161516;
}
</style>

<script>
export default {
  data: function () {
    return {
      route1: false,
      route2: false,
      route3: false,
    };
  },
  name: "AdminNavBar",
  watch: {
    $route: function () {
      if (this.$router.currentRoute.path == "/AdminPanel/ControlUsers") {
        this.route1 = true;
      } else {
        this.route1 = false;
      }
      if (this.$router.currentRoute.path == "/AdminPanel/Statistics") {
        this.route2 = true;
      } else {
        this.route2 = false;
      }
      if (this.$router.currentRoute.path == "/AdminPanel/AddNewAdmin") {
        this.route3 = true;
      } else {
        this.route3 = false;
      }
    },
  },
  mounted() {
    if (this.$router.currentRoute.path == "/AdminPanel/ControlUsers") {
      this.route1 = true;
    } else {
      this.route1 = false;
    }
    if (this.$router.currentRoute.path == "/AdminPanel/Statistics") {
      this.route2 = true;
    } else {
      this.route2 = false;
    }
    if (this.$router.currentRoute.path == "/AdminPanel/AddNewAdmin") {
      this.route3 = true;
    } else {
      this.route3 = false;
    }
  },
  methods:{
    ShowStats(){
      this.$store.dispatch("Products/ShowStats");
    }
  }
};
</script>
