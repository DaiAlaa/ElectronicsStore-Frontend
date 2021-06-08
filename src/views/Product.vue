<template>
  <div class="productPage">
    <router-link to="/SignUp">
      <button class="sign">SIGN UP</button>
    </router-link>
    <router-link to="/Login">
      <button class="log">LOG IN</button>
    </router-link>
    <!-- <button class="userName">
        user name
      </button> -->
    <hr />
    <div class="container">
      <div class="row row1" v-if="this.show">
        <div class="col">
          <img
            class="productImage"
            :src="'http://localhost:7000/image/get?imageId='+ ProductImage"
            alt="Card image"
            id="cardimg"
          />
        </div>
        <div class="col info">
          <p class="productName">{{ this.name }}</p>
          <h5 class="arrtibute" v-if="ProductDes != undefined">Describtion :</h5>
          <p class="productDes">{{ this.des }}</p>
          <h5 class="arrtibute">Price :</h5>
          <p class="productPrice"> {{ this.price }} 
            <span class="productPrice"> $ </span>
          </p>
          <h5 class="arrtibute">Add review :</h5>
          <span
            @click="isActive1 = !isActive1"
            class="fa fa-star star"
            v-bind:class="{ checked: isActive1 }"
          ></span>
          <span
            @click="isActive2 = !isActive2"
            class="fa fa-star star"
            v-bind:class="{ checked: isActive2 }"
          ></span>
          <span
            @click="isActive3 = !isActive3"
            class="fa fa-star star"
            v-bind:class="{ checked: isActive3 }"
          ></span>
          <span
            @click="isActive4 = !isActive4"
            class="fa fa-star star"
            v-bind:class="{ checked: isActive4 }"
          ></span>
          <span
            @click="isActive5 = !isActive5"
            class="fa fa-star star"
            v-bind:class="{ checked: isActive5 }"
          ></span>
          <hr />
          <button class="buy">Buy Now</button>
        </div>
      </div>
      <!-- <div class="row row2">
          <div class="col">
            <img 
              class="shop"
              src="../assets/shop6.png"
            />
          </div>
          <div class="col lets">
            Let's go shopping!
          </div>
        </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.productPage {
  height: 100%;
}
.sign {
  border: none;
  border-radius: 20px;
  width: 6%;
  height: 6%;
  margin-left: 34%;
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
  margin-left: 42%;
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
  width: 8% auto;
  height: 5%;
  margin-top: 2%;
  margin-left: 52%;
  position: absolute;
  background: #313030;
  color: white;
  text-decoration: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
}
.container {
  height: 100%;
  width: 100%;
  margin-top: 20%;
  //   display: fixed;
  bottom: 0;
}
.row1 {
  height: 100%;
  width: 100%;
}
.info {
  text-align: left;
  margin-left: 10%;
}
.productImage {
  width: 550px;
  height: 450px;
  margin-left: 14%;
}
.productName {
  font-size: 33px;
  color: white;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.productDes {
  font-size: 18px;
  color: white;
}
.productPrice {
  font-size: 18px;
  color: #fff44f;
}
.arrtibute {
  font-size: 17px;
  color: rgb(189, 189, 189);
}
.star {
  cursor: pointer;
  margin-right: 4px;
}
.checked {
  color: #fff44f;
}
.buy {
  border: none;
  color: #161516;
  background-color: #fff44f;
  width: 22%;
  height: 5%;
  font-weight: bold;
}
.shop {
  width: 100%;
  height: 82.5%;
}
.lets {
  font-size: 60px;
  font-family: cursive;
  color: white;
  margin-top: 10%;
}
// .row2 {
//   width: 100%;
//   height: 60.2%;
//   margin-left: -20vw;
//   background: rgba(252, 249, 97, 0.8);
//   margin-top: -8%;
// }
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Product",
  data: function () {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      name: "",
      id: "",
      price: 0,
      des: "",
      image: "",
      show: false,
    };
  },
  mounted() {
    this.$store.dispatch("Products/showProduct", this.$route.params.ProductId);
    setTimeout(() => {
      this.name = this.ProductName;
      this.id = this.ProductId;
      this.price = this.ProductPrice;
      this.des = this.ProductDes;
      this.image = this.ProductImage;
      this.show = true;
      }, 300); 
  },
  computed: {
    ...mapGetters({
      ProductName: "Products/ProductName",
      ProductId: "Products/ProductId",
      ProductPrice: "Products/ProductPrice",
      ProductDes: "Products/ProductDes",
      ProductImage: "Products/ProductImage",
    }),
  },
};
</script>
