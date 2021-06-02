<template>
  <div class="conatiner product-details encor-ligh-theme px-0">
    <div class="row justify-content-center m-0">
      <div class="col-xl-4 col-lg-4 col-md-5 col-sm-8" align="center">
        <h2>Add your product's details</h2>

        <form>
          <p>product name</p>
          <input
            class="input_field"
            type="text"
            placeholder="Name"
            v-model="name"
            testid="name input"
            id="name"
          />
          <br />
          <p>product price</p>
          <input
            class="input_field"
            type="number"
            placeholder="Product Price"
            v-model="price"
            testid="price input"
            id="product_price"
          />
          <br />

          <p>discreption</p>
          <input
            class="input_field"
            type="text"
            placeholder="Discreption"
            v-model="discreption"
            testid="discreption input"
            id="discreption"
          />
          <br />
          <p>amount</p>
          <input
            class="input_field"
            type="number"
            placeholder="amount"
            v-model="amount"
            testid="amount input"
            id="amount"
          />
          <br />
          <p>product's photo</p>
          <input
            type="file"
            accept="image/*"
            ref="inputfile"
            @change="OnPhotoUpload"
            style="display: none"
            testid="photo input"
            id="photo"
          />
          <button
            class="uploadfile"
            @click="$refs.inputfile.click()"
            v-if="choosebutton == false"
          >
            Add product's photo
          </button>
          <!-- <button class="uploadbutton" @click="UploadPhoto()">
              Upload
            </button> -->

          <br />
          <button
            @click.prevent="AddProduct()"
            class="costum-btn justify-content-center"
            id="product-btn"
            type="submit"
            testid="add product button"
          >
            Add product
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- Sign Up form -->
</template>

<style lang="scss" scoped>
// @import "../css/global.css";
html,
body {
  margin: 0px;
  padding: 0px;
}
.product-details {
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  background-size: cover;
  // position: absolute;
  display: block;
}
h2 {
  margin-top: 5%;
}
form {
  height: calc(120vh);
}
input {
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: #1c1c1f;
  width: 100%;
  margin-bottom: 16px;
  // background-color: transparent;
}
.costum-btn {
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  margin-bottom: 14px;
  margin-top: 31px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  /* min-width: 160px; */
  text-transform: uppercase;
  white-space: normal;
  float: center;
}
.highlight {
  color: #0f1549;
  display: inline-block;
}
.highlight:hover {
  color: #0f1549;
  cursor: pointer;
}

#product-btn {
  background-color: #0f1549;
  max-width: 320px;
  width: 100%;
}
#product-btn:hover {
  background-color: #0f1549;
}
</style>
<script>
export default {
  name: "AddProduct",
  data: function () {
    return {
      choosebutton: false,
    };
  },
  setup() {},
};
</script>
