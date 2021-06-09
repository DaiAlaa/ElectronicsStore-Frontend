<template>
    <div class="productPage">
      <BuyProduct v-if="PurchaseModal"/>
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
    <button class="logout" v-if="GetStatus == 'success'">
        LOG OUT
    </button>
      <SuccessfulPurchase v-if="SuccessPurchase"/>
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
          <h5 class="arrtibute">Reviews :</h5>
          <span
            class="fa fa-star star"
            v-bind:class="{ checked: isActive1 }"
          ></span>
          <span
            class="fa fa-star star"
            v-bind:class="{ checked: isActive2 }"
          ></span>
          <span
            class="fa fa-star star"
            v-bind:class="{ checked: isActive3 }"
          ></span>
          <span
            class="fa fa-star star"
            v-bind:class="{ checked: isActive4 }"
          ></span>
          <span
            class="fa fa-star star"
            v-bind:class="{ checked: isActive5 }"
          ></span>
          <hr>
          <h5 class="arrtibute">Add your review :</h5>
          <div class="form-check-inline option1">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input option2"
                name="optradio"
                value="1"
                v-model="Rate"
              />
              1
            </label>
          </div>
          <div class="form-check-inline option1">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input option2"
                name="optradio"
                value="2"
                v-model="Rate"
              />
              2
            </label>
          </div>
          <div class="form-check-inline option1">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input option2"
                name="optradio"
                value="3"
                v-model="Rate"
              />
              3
            </label>
          </div>
          <div class="form-check-inline option1">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input option2"
                name="optradio"
                value="4"
                v-model="Rate"
              />
              4
            </label>
          </div>
          <div class="form-check-inline option1">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input option2"
                name="optradio"
                value="5"
                v-model="Rate"
              />
              5
            </label>
          </div>
          <button @click="setRate()" class="addButton">  Add </button>
          <hr />
          <button class="buy" @click="OpenPurchaseForm()">Buy Now</button>
        </div>
      </div>
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
  width: 8%;
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
.sign:hover, .log:hover {
  height: 6.5%;
}
.logout {
  border: none;
  border-radius: 20px;
  width: 8%;
  height: 6%;
  margin-top: 2%;
  margin-left: 30%;
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
  margin-left: 39%;
  position: absolute;
  background: #313030;
  color: white;
  text-decoration: none;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
}
.container {
  height: 100%;
  width: 100%;
  margin-top: 20%;
//   display: fixed;
  bottom: 0;
}
.row1{
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
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.productDes {
  font-size: 16px;
  color: white;
}
.productPrice{
  font-size: 18px;
  color: #fff44f;
}
.arrtibute{
  font-size: 17px;
  color: rgb(189, 189, 189);
}
.star {
  cursor: pointer;
  margin-right: 4px;
}
.checked {
  color:#fff44f;
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
.SuccessfulPurchase{
  position: absolute;
  top:0%;
  z-index: 1000;
}
.option1 {
  margin-bottom: 20px;
  color: #fff44f;
}
// .option2 {
//   margin-right: 10px;
// }
.addButton {
  border: none;
  color: #161516;
  background-color: #fff44f;
  width: 22%;
  height: 5%;
  margin-bottom: 5px;
  margin-left: 30px;
}
.me {
  font-size: 20px;
  color: white;
  margin-left: 2%;
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
import BuyProduct from "@/components/BuyProduct.vue";
import SuccessfulPurchase from "@/components/SuccessfulPurchase.vue";
export default {
    name: "Product",
    data: function() {
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
      Colors: [],
      Rate: ""
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
      var i = 0;
      for (const color in this.ProductColor) {
          this.Colors[i] = `${color}`;
          i = i + 1;
      }
      if(this.ProductRate == 1)
    { this.isActive1 = true;} 
    else if (this.ProductRate == 2)
    {
      this.isActive1 = true;
      this.isActive2 = true;
    }
    else if (this.ProductRate == 3)
    {
      this.isActive1 = true;
      this.isActive2 = true;
      this.isActive3 = true;
    }
    else if (this.ProductRate == 4)
    {
      this.isActive1 = true;
      this.isActive2 = true;
      this.isActive3 = true;
      this.isActive4 = true;
    }
    else if (this.ProductRate == 5)
    {
      this.isActive1 = true;
      this.isActive2 = true;
      this.isActive3 = true;
      this.isActive4 = true;
      this.isActive5 = true;
    }
    console.log("gggg " , this.ProductRate);
      }, 300); 
  },
    computed: {
    ...mapGetters({
      ProductName: "Products/ProductName",
      ProductId: "Products/ProductId",
      ProductPrice: "Products/ProductPrice",
      ProductDes: "Products/ProductDes",
      ProductImage: "Products/ProductImage",
      PurchaseModal:"Products/PurchaseModal",
      ProductColor:"Products/ProductColor",
      SuccessPurchase:"Products/SuccessPurchase",
      ProductRate: "Products/ProductRate",
      GetStatus: "Authorization/GetStatus",
      UserRole: "Authorization/UserRole",
      Username: "Authorization/Username",
    })
  },
  methods:{
    OpenPurchaseForm(){
      console.log("before SP",this.Successpurchase);
      this.$store.dispatch("Products/togglePurchaseForm");
      console.log("after",this.PurchaseModal);
    },
    setRate(){
      this.$store.dispatch("Products/setRate", this.ProductId + "&rate=" + this.Rate);
    }
  },
   components: {
     BuyProduct,
     SuccessfulPurchase
   },
   filters: {
    shorten: function (value) {
      if (value && value.length > 7) return value.substring(0, 7) + "..";
      else return value;
    },
  },
}
</script>