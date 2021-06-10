<template>
  <div class="main">
    <h1>Orders Details:</h1>
    <div class="row record border-bottom" 
      v-for="(order, index) in Orders1"
      :key="index"
      :class="{ record2: index % 2 == 1 }"
    >
      <div class="col">
        <img
          class="productImage"
          :src="'https://electronic-store-back-end.herokuapp.com/image/get?imageId=' + order.product.imageId"
          alt="Card image"
          id="cardimg"
        />
      </div>
      <div class="col info">
        <h3>{{order.customer.name + " bought " + order.product.name}}</h3>
        <h4>{{"Price: " + order.product.price + "$"}}</h4>
        <h4>{{"At: " + order.updatedAt.slice(0, 10)}}</h4>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  padding-bottom: 50px;
}
h1 {
  margin-top: 13%;
  color: white;
  text-align: left;
  margin-left: 5%;
  margin-bottom: 5%;
}
.record {
  width: 50%;
  height: 120px;
  padding-top: 6px;
  // background: #313030;
  background: linear-gradient(
    to right ,
    #313030,
    #bebebe
  );
  margin-left: 25%;
  color: white;
}
.record2 {
  width: 50%;
  height: 120px;
  padding-top: 6px;
  // background: #313030;
  background: linear-gradient(
    to left ,
    #313030,
    #bebebe
  );
  margin-left: 25%;
  color: white;
}
.col {
  text-align: left;
}
.productImage {
  width: 110px;
  height: 95%;
  border-radius: 50%;
}
.info {
  margin-left: -50%;
}
h3 {
  font-size: 22px;
  margin-top: 10px;
  color: black;
}
h4 {
  font-size: 17px;
  // color: rgb(177, 177, 177);
  color: black;
  
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "OrdersDetails",
  mounted() {
    this.$store.dispatch("Products/showOrders");
  },
  computed: {
    ...mapGetters({
      Orders1: "Products/Orders",
    }),
  },
};
</script>
