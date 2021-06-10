<template>
  <div class="categoryPage">
    <router-link to="/SignUp" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="sign">SIGN UP</button>
    </router-link>
    <router-link to="/Login" v-if="GetStatus == '' || GetStatus == 'faild'">
      <button class="log">LOG IN</button>
    </router-link>
    <button class="userName" v-if="GetStatus == 'success'">
        {{ Username | shorten}}
        <i class="fa fa-user me"></i>
    </button>
    <button class="logout" v-if="GetStatus == 'success'" @click="logout()">
        LOG OUT
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
    <button class="SearchButton" @click="search()">Search</button>
    <input class="searchInput" placeholder="Tap to search .." 
      v-model="SearchValue"
      autocomplete="off"
      v-on:input="check(SearchValue)"
    />
    <h3 v-if="searchResults.length == 0 && !this.notFound"> 
      {{this.categoryName}} 
    </h3>
    <div class="row" v-if="searchResults.length == 0 && !this.notFound && this.show">
      <ProductCard
        v-for="Product in this.products"
        :key="Product._id"
        :name="Product.name"
        :ProductId="Product._id"
        :ProductPrice="Product.price"
        :imageId="Product.imageId"
        :images="'https://electronic-store-back-end.herokuapp.com/image/get?imageId=' + Product.imageId"
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
        :images="'https://electronic-store-back-end.herokuapp.com/image/get?imageId=' + Product.imageId"
      />
    </div>
    <p class="notFound" v-if="SearchValue != '' && searchResults.length == 0 && this.notFound">Not Found</p>
  </div>
</template>
<style lang="scss" scoped>
.categoryPage {
  height: 100%;
}
.sign {
  border: none;
  border-radius: 20px;
  width: 8%;
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
.logout {
  border: none;
  border-radius: 20px;
  width: 8%;
  height: 6%;
  margin-top: 2%;
  margin-left: 41%;
  position: absolute;
  background-color: white;
  color: #161516;
  text-decoration: none;
  outline: none;
  font-weight: bold;
}
.userName {
  border: none;
  border-radius: 20px;
  width: 125px;
  height: 40px;
  margin-top: 2%;
  margin-left:50%;
  position: absolute;
  background: #313030;
  color: white;
  text-decoration: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
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
  padding-top: 10%;
  width: 10%;
  height: 5%;
  font-size: 20px;
  color: white;
  position: absolute;
  font-family: cursive;
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
h3 {
  font-size: 35px;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-left: 3%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 3%;
  margin-top: 1%;
}
.row {
  // height: 100%;
  width: 100%;
  padding-left: 4%;
  /* padding-right: 2%; */
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
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  name: "Category",
  data: function () {
    return {
      SearchValue: "",
      notFound: false,
      categoryName: "",
      products: [],
      show: false,
    };
  },
  components: {
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
    },
        logout(){
       this.$store.dispatch("Authorization/logout");
    }
  },
  mounted() {
    this.$store.dispatch(
      "Products/showUserProducts", this.$route.params.categoryId);
    if (this.$route.params.categoryId == "60bef33e55fac81818313490"){
      this.categoryName = "Laptops:"
    }
    else if (this.$route.params.categoryId == "60bef36555fac81818313491"){
      this.categoryName = "Tablets:"
    }
    else if (this.$route.params.categoryId == "60bef3a955fac81818313492"){
      this.categoryName = "Mobile Phones:"
    }
    else if (this.$route.params.categoryId == "60bef41a55fac81818313493"){
      this.categoryName = "TVs:"
    }
    else if (this.$route.params.categoryId == "60bef46c55fac81818313494"){
      this.categoryName = "Cameras:"
    }
    setTimeout(() => {
      this.products = this.userProducts;
      this.show = true;
      }, 300); 
  },
  computed: {
    ...mapGetters({
      // userProducts: "Products/Products1",
      searchResults: "Products/searchResults",
      GetStatus: "Authorization/GetStatus",
      UserRole: "Authorization/UserRole",
      Username: "Authorization/Username",
    }),
    ...mapState({
       userProducts: state => state.Products.userProducts,
    })
  },
  filters: {
    shorten: function (value) {
      if (value && value.length > 7) return value.substring(0, 7) + "..";
      else return value;
    },
  },
};
</script>
