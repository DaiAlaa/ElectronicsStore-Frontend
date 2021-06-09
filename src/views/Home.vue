<template>
  <div class="homePage">
    <router-link to="/SignUp" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="sign">SIGN UP</button>
    </router-link>
    <router-link to="/Login" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="log">LOG IN</button>
    </router-link>
    <button class="userName" v-if="GetStatus == 'success'">
        {{ Username }}
        <i class="fa fa-user me"></i>
    </button>
    <router-link to="/AddProduct" v-if="UserRole == 'Admin' || UserRole == 'Employee'">
      <button class="add">
        Add Product
        <i class="fa fa-plus"></i>
      </button>
    </router-link>
    <router-link to="/OrdersDetails" v-if="UserRole == 'Admin' || UserRole == 'Employee'">
      <button class="orders">Orders' details</button>
    </router-link>
    <router-link to="/AdminPanel/ControlUsers" v-if="UserRole == 'Admin'">
      <button class="Admin">
        Admin Panel
        <i class="fa fa-user"></i>
      </button>
    </router-link>
    <!-- <p class="search">
        What's in your mind?
      </p> -->
    <button class="SearchButton" @click="search()">Search</button>
    <input
      class="searchInput"
      placeholder="Tap to search .."
      v-model="SearchValue"
      autocomplete="off"
      v-on:input="check(SearchValue)"
    />
    <div class="row justify-content-center" v-if="searchResults.length == 0 && !this.notFound">
      <CategoryCard
        v-for="category in Categories"
        :key="category._id"
        :name="category.name"
        :categoryId="category._id"
        :categoryDes="category.description"
        :imageId="category.imageId"
        :images="'http://localhost:7000/image/get?imageId=' +category.imageId"
      />
    </div>
    <div class="row searchRow" v-if="SearchValue != '' && searchResults.length != 0">
      <ProductCard
        v-for="Product in searchResults"
        :key="Product._id"
        :name="Product.name"
        :ProductId="Product._id"
        :ProductPrice="Product.price"
        :imageId="Product.imageId"
        :images="'http://localhost:7000/image/get?imageId=' + Product.imageId"
      />
    </div>
    <p class="notFound" v-if="SearchValue != '' && searchResults.length == 0 && this.notFound">Not Found</p>
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
.sign:hover,
.log:hover {
  height: 6.5%;
}
.userName {
  border: none;
  border-radius: 20px;
  width: 150px;
  height: 45px;
  margin-top: 2%;
  margin-left: 660px;
  position: absolute;
  background: #313030;
  color: white;
  text-decoration: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
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
  margin-bottom: 8%;
}
.search {
  margin-left: 28%;
  padding-top: 12%;
  width: 10%;
  height: 5%;
  font-size: 20px;
  color: white;
  position: absolute;
  font-family: cursive;
}
.SearchButton {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 5.5%;
  left: 32%;
  margin-top: 13%;
  position: absolute;
  background-color: #fff44f;
  color: black;
  text-decoration: none;
  outline: none;
}
.SearchButton:hover {
  background-color: #ffee07;
}
.add {
  border: none;
  border-radius: 20px;
  width: 11%;
  height: 6%;
  position: absolute;
  margin-top: 9%;
  margin-left: 49%;
  background-color: #fff44f;
  color: #161516;
}
.orders {
  border: none;
  border-radius: 20px;
  width: 11%;
  height: 6%;
  position: absolute;
  margin-top: 13%;
  margin-left: 49%;
  background-color: #fff44f;
  color: #161516;
}
.Admin {
  border: none;
  border-radius: 20px;
  width: 11%;
  height: 6%;
  position: absolute;
  margin-top: 17%;
  margin-left: 49%;
  background-color: #fff44f;
  color: #161516;
}
i {
  font-size: 20px;
  color: #161516;
  margin-left: 4%;
}
.row {
  // height: 100%;
  width: 100%;
  margin-bottom: 120px;
}
.notFound {
  text-align: center;
  font-size: 35px;
  color: gray;
  margin-top: 4%;
}
.searchRow {
  margin-bottom: 120px;
  padding-left: 4%;
}
.me {
  font-size: 20px;
  color: white;
  margin-left: 2%;
}
</style>

<script>
// @ is an alias to /src
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data: function () {
    return {
      SearchValue: "",
      notFound: false,
    };
  },
  components: {
    CategoryCard,
    ProductCard,
  },
  methods: {
    search() {
      if (this.SearchValue != "") {
        this.$store.dispatch("Products/searchProducts", this.SearchValue);
        setTimeout(() => {
        if (this.searchResults.length == 0){
          this.notFound = true;
        } 
        }, 200);
      }
    },
    check(SearchValue) {
      if (SearchValue == "")
      {
        this.searchResults.length = 0;
        this.notFound = false;
      }
    }
  },
  mounted() {
    this.$store.dispatch("Products/showUserCategories");
  },
  computed: {
    ...mapGetters({
      Categories: "Products/Categories",
      searchResults: "Products/searchResults",
      GetStatus: "Authorization/GetStatus",
      UserRole: "Authorization/UserRole",
      Username: "Authorization/Username",
    }),
  },
};
</script>
