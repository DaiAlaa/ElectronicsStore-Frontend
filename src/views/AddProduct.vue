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
          <p>each color amount</p>
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
.uploadfile {
  // position: absolute;
  // top: 70%;
  // right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  // height: 15%;
  // width: 17%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  z-index: 10;
}
.uploadbutton {
  position: relative;
  // top: 70%;
  right: 0;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 20px;
  // height: 15%;
  // width: 17%;
  background: linear-gradient(to right, #f27914, #9c28d0);
  border-radius: 26px;
  border-color: transparent;
  color: #fff;
  font-size: 90%;
  font-weight: 700;
  outline: none;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  z-index: 0;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AddProduct",
  data: function () {
    return {
      choosebutton: false,
      name:"",
      price:"",
      image:"",
      description:"",
      colors:{
        "black":"5",
        "gray":"6",
        "white":"9"

      },
    };
  },
  setup() {},
  components: {},
  methods:{
    OnPhotoUpload(event) {
      this.selectedphoto = event.target.files[0];
      if (
        !this.selectedphoto ||
        this.selectedphoto.type.indexOf("image/") !== 0
      )
        return;
      this.image.size = this.selectedphoto.size;
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedphoto);
      reader.onload = evt => {
        let img = new Image();
        // img.onload = () => {
        //   this.image.width = img.width;
        //   this.image.height = img.height;
        // };
        img.src = evt.target.result;
      };
      this.persist(this.selectedphoto);
    },
    persist(image) {
      const data = new FormData();
      data.append("image", image);
      // Send the image to the API (e.g., with a Vuex action)
    },
    // Upload_Image() {
    //   let payload = {
    //     selphoto: this.selectedphoto,
    //     width: this.image.width,
    //     height: this.image.height,
    //     belongs_to: "artist",
    //     artist_id: this.Artist_ID
    //   };
    //   this.$store.dispatch("ArtistProperties/UploadPhoto", payload);
    // },
    Add_Product(){
      let ProductInfo={
        creatorId:this.userid,
        categoryId:this.categoryId,
        name:this.name,
        price:this.price,
        image:this.this.selectedphoto, //should be form data
        description:this.description,
        colors:this.colors
      }
      this.$store.dispatch("Products/Add_Product", ProductInfo);
    }
  },
  computed:{
     ...mapGetters({
      ProductId: "Products/ProductId",
      Categories:"Products/Categories",
      userid:"Authorization/userid",
      // imageID:""
    }),
  },

};
</script>
