<template>
  <div>
    <div class="home">
      <button class="sign">
        SIGN UP
      </button>
      <button class="log">
        LOG IN
      </button>
      <p class="search">
        What's in your mind?
      </p>
      <input class="searchInput" placeholder="Tap to search .."/>
      <Categories />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  background-image: url("../assets/backGround.jpg");
  background-repeat: no-repeat;
  // background-size:100%;
  // background-position-x: 100%;
  height: calc(100vh);
}
.sign {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-left: 84%;
  margin-top: 2%;
  position: fixed;
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
  margin-left: 91%;
  position: fixed;
  background-color: rgb(15, 21, 73);
  color: white;
  font-weight: bold;
  text-decoration: none;
  outline: none;
}
.sign:hover, .log:hover {
  height: 6.5%;
}
.searchInput {
  margin-top: 10%;
  width: 22%;
  height: 5%;
  border-radius: 20px;
  margin-left: 40%;
  text-decoration: none;
  outline: none;
  border: none;
  padding-left: 1%;
  margin-bottom: 5%;
}
.search {
  margin-left: 30%;
  padding-top: 8%;
  width: 10%;
  height: 5%;
  font-size: 20px;
  color: rgb(46, 53, 114);
  position:absolute;
  font-family: cursive;
}
</style>

<script>
// @ is an alias to /src
import Categories from "@/components/Categories.vue";

export default {
  name: "Home",
  components: {
    Categories
  },
  computed: {
  heroImage() {
    return {
      backgroundImage: `url(${require('../assets/backGround.jpg')})`
    };
  }
}
};
</script>
