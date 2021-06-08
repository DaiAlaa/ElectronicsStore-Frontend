<template>
  <div>
    <h1>Orders Details:</h1>
    <div class="row record border-bottom" 
      v-for="order in Orders1"
      :key="order._id"
      :productName="order.product.name"
      :productPrice="order.product.price"
      :productImage="order.product.imageId"
      :customerName="order.customer.name"
      :date="order.updatedAt"
    >
      <div class="col">
        <img
          class="productImage"
          :src="'http://localhost:7000/image/get?imageId=' + productImage"
          alt="Card image"
          id="cardimg"
        />
      </div>
      <div class="col info">
        <h3>{{customerName + " bought " + productName}}</h3>
        <h4>{{"Price: " + productPrice + "$"}}</h4>
        <h4>{{"At: " + date.slice(23, 14) }}</h4>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
    #F0F2F0
  );
  margin-left: 25%;
  color: white;
}
.col {
  text-align: left;
}
.productImage {
  width: 26%;
  height: 96%;
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
