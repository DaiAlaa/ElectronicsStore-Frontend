<template>
  <div class="card rounded col-lg-20%">
    <img
      class="card-img-top mx-auto d-block"
      :src="images"
      alt="Card image"
      id="cardimg"
    />
    <div class="card-body" id="cardbody">
      <h4 class="card-title" id="cardtitle">
        {{ name }}
      </h4>
      <h5>
        {{ ProductPrice + " $" }}
      </h5>
      <router-link :to="{ path: '/Product/' + ProductId }">
        <button class="viewProduct">view</button>
      </router-link>
      <!-- <router-link
            to="/Product"
            class="stretched-link"
            id="carglink"
        ></router-link> -->
    </div>
  </div>
</template>
<style scoped>
.card {
  background: #313030;
  width: 18.5%;
  height: 300px;
  margin-left: 17px;
  margin-top: 17px;
  margin-bottom: 30px;
  /* padding-bottom: 2%; */
}
#cardimg {
  width: 88%;
  height: 59%;
  margin-top: 18px;
}
h4 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 15px;
  /* margin-left: -62%; */
  text-align: left;
}
p {
  font-size: 15px;
  color: white;
  position: absolute;
  margin-left: 0%;
  text-align: left;
  margin-right: 15px;
}
h5 {
  font-size: 15px;
  color: #fff44f;
  position: absolute;
  /* margin-top: 10%; */
}
.viewProduct {
  color: black;
  background: #fff44f;
  border: none;
  border-radius: 20px;
  margin-left: 66%;
  width: 36%;
  height: 42%;
}
</style>
<script>
/**
 * @displayName Artists card
 * @example [none]
 */

export default {
  name: "CategoryCard",
  props: {
    name: {
      type: String,
    },
    ProductId: {
      type: String,
    },
    ProductPrice: {
      type: String,
    },
    imageId: {
      type: String,
    },
    images: {
      type: String,
    }
  },
  filters: {
    shorten: function (value) {
      if (value && value.length > 35) return value.substring(0, 35) + " ...";
      else return value;
    },
  },
};
</script>
