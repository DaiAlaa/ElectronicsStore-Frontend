<template>
    <div class="homePage">
      <router-link to="/SignUp">
        <button class="sign">
          SIGN UP
        </button>
      </router-link>
      <router-link to="/">
        <button class="log">
          LOG IN
        </button>
      </router-link>
      <button class="add"> 
        Add Product
        <i class="fa fa-plus"></i>
      </button>
      <!-- <button class="add">
        Admin Panel
        <i class="fa fa-user"></i>
      </button> -->
      <p class="search">
        What's in your mind?
      </p>
      <input class="searchInput" placeholder="Tap to search .."/>
      <div class="row justify-content-center">
        <CategoryCard />
      </div>
    </div>
</template>
<style lang="scss" scoped>
.homePage {
    height: 100%;
}
.sign {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-left: 46%;
  margin-top: 2%;
  position: absolute;
  background-color: #161516;
  color: white;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.log {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-top: 2%;
  margin-left: 54%;
  position: absolute;
  background-color: white;
  color: #161516;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.sign:hover, .log:hover {
  height: 6.5%;
}
.searchInput {
  margin-top: 13%;
  width: 23%;
  height: 5.5%;
  border-radius: 20px;
  margin-left: 1%;
  text-decoration: none;
  outline: none;
  border: none;
  padding-left: 1%;
  margin-bottom: 5%;
}
.search {
  margin-left: 28%;
  padding-top: 12%;
  width: 10%;
  height: 5%;
  font-size: 20px;
  color: white;
  position:absolute;
  font-family: cursive;
}
.add {
  border: none;
  border-radius: 20px;
  width: 10%;
  height: 6%;
  position:absolute;
  margin-top: 9%;
  margin-left: 50%;
  background-color: #fff44f;
  color: #161516;
}
i {
  font-size: 20px;
  color: #161516;
  margin-left: 4%;
}
.row{
    height: 100%;
    width: 100%;
    margin-bottom: 120px;
}
</style>

<script>
// @ is an alias to /src
import CategoryCard from "@/components/CategoryCard.vue";
export default {
  name: "Home",
  components: {
    CategoryCard
  },
};
</script>