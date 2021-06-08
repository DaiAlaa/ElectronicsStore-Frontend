<template>
  <div class="card rounded col-lg-30%">
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
      <hr />
      <p class="card-text">
        {{ categoryDes }}
      </p>
      <router-link
        :to="{ path: '/Category/' + categoryId }"
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
  height: 400px;
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
  /* margin-left: -60%; */
  position: absolute;
}
p {
  font-size: 15px;
  color: #fff44f;
  position: absolute;
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
    categoryDes: {
      type: String,
    },
    categoryId: {
      type: String,
    },
    images: {
      type: String,
    }
  },
  // computed: {
  //   ...mapGetters({
  //     Username: "Authorization/Username",
  //     likedplaylist: "Playlist/likeplaylist"
  //   })
  // },
};
</script>
