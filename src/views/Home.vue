<template>
  <div>
    <div class="home">
      <router-link to="/SignUp">
        <button class="sign" to="">SIGN UP</button>
      </router-link>
      <router-link to="/Login">
        <button class="log">LOG IN</button>
      </router-link>
      <p class="search">What's in your mind?</p>
      <input class="searchInput" placeholder="Tap to search .." />
      <!-- <Categories /> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  background-image: url("../assets/backGround.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: calc(100vh);
  width: 100%;
}
.sign {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-left: 48%;
  margin-top: 2%;
  position: absolute;
  background-color: white;
  color: rgb(15, 21, 73);
  font-weight: bold;
  text-decoration: none;
  outline: none;
}
.log {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-top: 2%;
  margin-left: 55%;
  position: absolute;
  background-color: rgb(15, 21, 73);
  color: white;
  font-weight: bold;
  text-decoration: none;
  outline: none;
}
.sign:hover,
.log:hover {
  height: 6.5%;
}
.searchInput {
  margin-top: 11%;
  width: 22%;
  height: 5%;
  border-radius: 20px;
  margin-left: 5%;
  text-decoration: none;
  outline: none;
  border: none;
  padding-left: 1%;
  margin-bottom: 5%;
}
.search {
  margin-left: 30%;
  padding-top: 10%;
  width: 10%;
  height: 5%;
  font-size: 20px;
  color: rgb(46, 53, 114);
  position: absolute;
  font-family: cursive;
}
</style>

<script>
// @ is an alias to /src
// import Categories from "@/components/Categories.vue";
export default {
  name: "Home",
  // components: {
  //   Categories
  // },
};
</script>
