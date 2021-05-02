<template>
    <div class="row">
        <div class="card rounded">
          <div class="card-horizontal">
            <img
            class="card-img rounded-circle"
            src="../assets/backGround.jpg"
            alt="Card image"
            id="cardimg"
            testid="category image"
            />
            <div class="card-body" id="cardbody" testid="category card body">
              <h4 class="card-title" id="cardtitle" testid="category name">
                Cameras
              </h4>
              <p class="card-text" id="carddescribtion">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            <!-- <p class="card-text" id="carddescribtion" v-if="type == 'user'">
                User
            </p> -->
              <router-link
                to="/"
                class="stretched-link"
                id="carglink"
                testid="category card link"
              ></router-link>
              <!-- <router-link
                v-if="type == 'user'"
                :to="{ path: '/HomeWebPlayer/UserProfile/' + artistId }"
                class="stretched-link"
                id="carglink"
                testid="artist card link"
              ></router-link> -->
            </div>
          </div>
        </div>
    </div>
</template>
<style scoped>
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
.card {
  background: rgba(243, 213, 239, 0.9);
  width: 28%;
  height: 129px;
  margin-left: 38%;
  margin-top: 15px;
  border: none;
}
.card:hover {
  background: rgb(243, 213, 239);
}
#cardimg {
  width: 105px;
  height: 105px;
  margin-top: 3%;
  margin-left: 3%;
}
h4 {
  font-size: 22px;
  font-weight: bold;
  color:rgb(15, 21, 73);
  /* margin-bottom: 4px; */
  margin-left: -130px;
  font-family: cursive;
}
p {
  font-size: 16px;
  color: rgb(61, 65, 90);
  margin-left: -13px;
  font-family: cursive;
}
</style>
<script>
/**
 * @displayName Categories
 * @example [none]
 */

export default {
  data: function() {
    return {
      hover: false
    };
  },
  name: "Categories",
//   props: {
//     images: {
//       type: String
//     },
//     name: {
//       type: String
//     },
//     artistId: {
//       type: String
//     },
//     type: {
//       type: String
//     }
//   },
};
</script>
