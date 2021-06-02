<template>
  <div class="card rounded col-lg-30%">
    <img
      class="card-img-top mx-auto d-block"
      src="../assets/wall1.jpg"
      alt="Card image"
      id="cardimg"
    />
    <div class="card-body" id="cardbody">
      <h4 class="card-title" id="cardtitle">Cameras</h4>
      <p class="card-text">Shop now</p>
      <router-link
        to="Category"
        class="stretched-link"
        id="carglink"
      ></router-link>
    </div>
  </div>
</template>
<style scoped>
.card {
  background: #313030;
  width: 24%;
  height: 52%;
  margin-left: 17px;
  margin-top: 17px;
  margin-bottom: 17px;
}
#cardimg {
  width: 88%;
  height: 70%;
  margin-top: 18px;
}
h4 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
  margin-left: -66%;
}
p {
  font-size: 15px;
  color: #fff44f;
  position: absolute;
  margin-left: 2%;
}
</style>
<script>
/**
 * @displayName Artists card
 * @example [none]
 */

export default {
  name: "CategoryCard",
};
</script>
