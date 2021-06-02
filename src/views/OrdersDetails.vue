<template>
  <div>
    <h1>Orders Details:</h1>
    <div class="row record border-bottom">
      <div class="col">
        <img
          class="productImage"
          src="../assets/wall1.jpg"
          alt="Card image"
          id="cardimg"
        />
      </div>
      <div class="col info">
        <h3>user name bought product name</h3>
        <h4>Paied : 50$</h4>
        <h4>at : 10:50 AM</h4>
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
  width: 40%;
  height: 100px;
  padding-top: 6px;
  background: #313030;
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
  font-size: 20px;
}
h4 {
  font-size: 16px;
  color: rgb(177, 177, 177);
}
</style>
<script>
export default {
  name: "OrdersDetails",
};
</script>
