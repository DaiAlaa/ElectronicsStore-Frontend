<template>
    <div class="home">
      <img class="logo"
        src="../assets/elctroShop1.jpeg"
        alt="logo"
      />
      <router-view class="child"></router-view>
    </div>
</template>
<style lang="scss" scoped>
.home {
  // background-image: url("../assets/wall3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #161516;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow-y: scroll;
}
.logo {
  width: 16%;
  height: 20%;
  position: absolute;
  margin-left: -47%;
  border-radius: 50%;
  margin-top: 2%;
}
</style>
<script>
export default {
   name: "Main"
}
</script>