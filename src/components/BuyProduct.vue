<template>
  <div class="boss">
    <!-- <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="PurchaseModal"
        @click="PurchaseModal = false"
      ></div>
    </transition> -->
    <transition name="slide" appear>
      <div class="modal" v-if="PurchaseModal">
        <form>
          <strong>personal info</strong>
          <p>Full Name</p>
          <input
            class="input_field"
            type="text"
            placeholder="Name"
            v-model="Name"
            testid="Name input"
            id="Name"
          />
          <br />
          <p>Mobile Number</p>
          <input
            class="input_field"
            type="text"
            placeholder="MobileNumber"
            v-model="MobileNumber"
            testid="Mobile input"
            id="Mobile"
          />
          <br />
          <p>City</p>
          <select v-model="city" class="City_select" testid="city input">
            <option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :disabled="city.disabled"
            >
              {{ city.text }}
            </option>
          </select>
          <br />
          <p>Address</p>
          <input
            class="input_field"
            type="text"
            placeholder="Address"
            v-model="StreetName"
            testid="Address input"
            id="Address"
          />
          <br />
          <!-- <p>Building Number</p>
          <input
            class="input_field"
            type="text"
            placeholder="BuildingNumber"
            v-model="BuildingNumber"
            testid="Building input"
            id="Building"
          />
          <br /> -->
          <!-- <p>Floor</p>
          <input
            class="input_field"
            type="text"
            placeholder="Floor"
            v-model="FloorNumber"
            testid="Floor input"
            id="Floor"
          />
          <br /> -->
          <p>Creidt Card</p>
          <input
            class="input_field"
            type="text"
            placeholder="CreditCard Number"
            v-model="CreditCard"
            testid="CreditCard input"
            id="CreditCard"
          />
          <br />
          <strong>product info</strong>
          <p>Product Color</p> 
         <select v-model="color" class="color_select" testid="color input">
            <option
              v-for="Color in Colors.slice(0,this.Counter)"
              :key="Color.text"
              :value="Color.text"
            >
              {{ Color.text }}
            </option>
          </select>  

          <button
            @click.prevent="Buy_Product(), changePurchaseModalState()"
            class="costum-btn justify-content-center"
            id="buy-btn"
            type="submit"
            testid="buy button"
          >
            Buy this product
          </button>
          <button class="customButton" @click="changePurchaseModalState()" >
            cancel
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 10;
  padding: 10;
  box-sizing: border-box;
  overflow: hidden;
}

html,
body {
  font-family: "montserrat", sans-serif;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

div {
  position: fixed;
  display: block;
  // // right :10%;
  // left: 25%;
  // justify-content: center;
  // align-items: center;
  // width: 50vw;
  // height: 120vh;
  // overflow-y: scroll;
  // background-color: rgba(0, 0, 0, 0.5);
  // z-index: 20;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  // background-color: transparent;
}
/* .modal-overlay {
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: none;
//   top: 0;
//   left: 20%;
//   right: 20%;
//   bottom: 0;
//   z-index: 20;
//   width: 50vw;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0);
//   overflow: hidden;
 }*/

.modal {
  position: relative;
  z-index: 80;
  top: 0;
  left: 25%;
  width: 50vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  // background-color:transparent;
  transition: opacity 0.3s ease;
  // overflow-y: scroll;
}
p {
  position: relative;
  display: flex;
  font-weight: bold;
  color: white;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 0%;
}
input {
  position: relative;
  display: inline-block;
  width: 80%;
  height: 2.5em;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border-color: whitesmoke;
  font-size: 1em;
  line-height: 10vh;
  outline: none;
  font-weight: bold;
  margin-top: 2vh;
  z-index: 80;
}
select {
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: white;
  font-size: 0.9375em;
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 80%;
  background: url("../assets/arrow.png") 90% / 5% no-repeat;
  background-color: rgba(0, 0, 0, 0.8);
}
button {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  margin: 2em;
  font-size: 1em;
  font-weight: 700;
  height: 2.5em;
  border-radius: 500px;
  padding: 0.5em;
  cursor: pointer;
  transition-duration: 0.3s;
  border-width: 0;
  background-color:#fff44f;
  color:black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
  overflow: hidden;
}

// @media screen and (max-width: 700px) {
//   .customButton {
//     height: 10%;
//     width: 43%;
//     border-radius: 500px;
//     font-size: 10px;
//   }
// }

.highlight {
  color: #777009;
  display: inline-block;
}
.highlight:hover {
  color: #777009;
  cursor: pointer;
}

button:hover {
  background-color: #777009;
}

h2 {
  margin-top: 5%;
}
strong{
  color:#fff;
  font-size:20px;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BuyProduct",
  data: function () {
    return {
      // showModal: true,
      Name:"",
      MobileNumber:"",
      city: "0",
      cities: [
        { text: "Choose a country", value: "0", disabled: true },
        { text: "Alexandria", value: "Alex", disabled: false },
        { text: "Aswan", value: "Aswan", disabled: false },
        { text: "Asyut", value: "Asyut", disabled: false },
        { text: "Beheira", value: "Beheira", disabled: false },
        { text: "BeniSuef", value: "BeniSuef", disabled: false },
        { text: "Cairo", value: "Cairo", disabled: false },
        { text: "Dakahlia", value: "Dakahlia", disabled: false },
        { text: "Damietta", value: "Damietta", disabled: false },
        { text: "Faiyum", value: "Faiyum", disabled: false },
        { text: "Gharbia", value: "Gharbia", disabled: false },
        { text: "Giza", value: "Giza", disabled: false },
        { text: "Ismailia", value: "Ismailia", disabled: false },
        { text: "Kafr ElSheikh", value: "Kafr ElSheikh", disabled: false },
        { text: "Luxor", value: "Luxor", disabled: false },
        { text: "Matruh", value: "Matruh", disabled: false },
        { text: "Minya", value: "Minya", disabled: false },
        { text: "Monufia", value: "Monufia", disabled: false },
        { text: "New Valley", value: "New Valley", disabled: false },
        { text: "North Sinai", value: "North Sinai", disabled: false },
        { text: "Port Said", value: "Port Said", disabled: false },
        { text: "Qalyubia", value: "Qalyubia", disabled: false },
        { text: "Qena", value: "Qena", disabled: false },
        { text: "Red Sea", value: "Red Sea", disabled: false },
        { text: "Sharqia", value: "Sharqia", disabled: false },
        { text: "Sohag", value: "Sohag", disabled: false },
        { text: "South Sinai", value: "South Sinai", disabled: false },
        { text: "Suez", value: "Suez", disabled: false },
      ],
      color:"",
      StreetName:"0",
      BuildingNumber:"0",
      FloorNumber:"",
      CreditCard:"",
      Colors: [
        { text: "Choose a color", value: "0", disabled: true },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "",  disabled: false },
        { text: "", disabled: false },
      ],
      Counter:0,
    };
  },
  components: {},
  methods:{

    Buy_Product(){
      console.log("in popup",this.color);
      let Address=this.StreetName+this.city;
      console.log("in popup",this.ProductId);
      let ProductInfo={
        productId:this.ProductId,
        color:this.color,
        address:Address,
        phone:this.MobileNumber,
        creditCard:this.CreditCard

      }
      console.log(ProductInfo);
      this.$store.dispatch("Products/Buy_Product", ProductInfo);
    },
    changePurchaseModalState(){
     console.log("in buyproduct",this.PurchaseModal);

      this.$store.dispatch("Products/togglePurchaseForm");
     console.log(" buyproduct",this.PurchaseModal);

    }
  },
  computed:{
     ...mapGetters({
      ProductId: "Products/ProductId",
      ProductColor:"Products/ProductColor",
      PurchaseModal:"Products/PurchaseModal",
    }),
  },
  mounted(){
      for (const color in this.ProductColor) {
          this.Colors[this.Counter].text = `${color}`;
          this.Counter = this.Counter + 1;
      }
      console.log("colors",this.Colors);
  }
};
</script>
