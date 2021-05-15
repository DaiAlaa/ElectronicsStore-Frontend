<template>
  <div>
    <div class="home">
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
      <img class="logo"
            src="../assets/elctroShop1.jpeg"
            alt="logo"
      />
      <p class="search">
        What's in your mind?
      </p>
      <input class="searchInput" placeholder="Tap to search .."/>
      <h3> Cameras : </h3>
      <ProductCard />
    </div>
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
  margin-top: 7%;
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
  padding-top: 6%;
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
.logo {
  width: 16%;
  height: 20%;
  position: absolute;
  // background: transparent;
  margin-left: -35%;
  border-radius: 50%;
  margin-top: 2%;
}
h3 {
  font-size: 35px;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-left: 3%;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-bottom: 3%;
  margin-top: 4%;
}
</style>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard
  },
};
</script>