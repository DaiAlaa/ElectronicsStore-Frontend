<template>
  <div class="home">
    <router-link to="/">
      <img class="logo" src="../assets/newlogo2.png" alt="logo" />
    </router-link>
    <router-view class="child"></router-view>
  </div>
</template>
<style lang="scss" scoped>
.home {
  // background-image: url("../assets/wall3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #161516;
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow-y: scroll;
}
.logo {
  width: 20%;
  height:27%;
  position: absolute;
  margin-left: -52%;
  border-radius: 50%;
  // margin-top: 2%;
}
</style>
<script>
export default {
  name: "Main",
};
</script>