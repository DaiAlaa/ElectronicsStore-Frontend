<template>
  <div>
    <h1>Control Users:</h1>
    <div class="row mainRow justify-content-center border-bottom">
      t
      <div class="col">
        <h3 class="head1">USER NAME</h3>
      </div>
      <div class="col">
        <h3 class="head2">EMAIL</h3>
      </div>
      <div class="col">
        <h3 class="head3">ID</h3>
      </div>
      <div class="col">
        <h3 class="head4">DELETE USER</h3>
      </div>
    </div>
    <div
      class="row record border-bottom border-secondary"
      v-for="user in AllUsers"
      :key="user._id"
      :userRole="user.role"
      :userId="user._id"
      :userEmail="user.email"
      :userName="user.name"
      :userMobile="user.mobileNumber"
      :userAddress="user.address"
    >
      <div class="col">
        <h4 class="head1">{{ userName }}</h4>
      </div>
      <div class="col">
        <h4 class="head2">{{ userEmail }}</h4>
      </div>
      <div class="col">
        <h4 class="head3">{{ userId }}</h4>
      </div>
      <div class="col">
        <button class="delete" @click="deleteUser(userId)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 13%;
  color: white;
  // font-weight: bold;
  text-align: left;
  margin-left: 5%;
}
.mainRow {
  margin-top: 5%;
  width: 80%;
  height: 50px;
  background: #313030;
  margin-left: 10%;
  color: #313030;
  padding-top: 13px;
}
h3 {
  color: white;
  font-size: 20px;
}
.head1 {
  position: absolute;
  margin-left: 10%;
}
.head2 {
  position: absolute;
  margin-left: 15%;
}
.head3 {
  position: absolute;
  margin-left: 20%;
}
.head4 {
  position: absolute;
  margin-left: 30%;
}
.record {
  width: 80%;
  height: 50px;
  padding-top: 13px;
  background: white;
  margin-left: 10%;
  color: #313030;
}
h4 {
  font-size: 16px;
}
.delete {
  border: none;
  background: white;
  margin-left: 25%;
  color: red;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ControlUsers",
  mounted() {
    this.$store.dispatch("Users/showAllUsers");
  },
  computed: {
    ...mapGetters({
      AllUsers: "Users/AllUsers",
    }),
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("Users/DeleteUser", userId);
    },
  },
};
</script>
