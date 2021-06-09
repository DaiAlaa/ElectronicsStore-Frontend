<template>
  <div class="conatiner product-details encor-ligh-theme px-0">
     <SuccessfulProductAddition v-if="SuccessProductAddition" />
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

          <p>Category</p>
           <select v-model="categoryId" class="City_select" testid="category input">
            <option
              v-for="category in Categories"
              :key="category._id"
              :name="category.name"
              :value="category._id"
              :categoryId="category._id"
            >
              {{ category.name }}
            </option>
          </select>
                  
          <br />
            <p>Description</p>
          <input
            class="input_field"
            type="text"
            placeholder="Description"
            v-model="description"
            testid="description input"
            id="description"
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
            class="uploadfile costum-btn"
            @click="$refs.inputfile.click()"
          >
            Add product's photo
          </button>
          <!-- <button class="uploadbutton" @click="UploadPhoto()">
              Upload
            </button> -->

          <br />
          <button
            @click="Add_Product()"
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
  background-color: #161516;
  height: 100%;
  width: 100%;
  background-size: cover;
  // position: absolute;
  display: block;
}
h2 {
  margin-top: 5%;
  color:whitesmoke;
}
form {
  height: calc(120vh);
}
p{
  color:whitesmoke;
  font-size:30px;
}
input {
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: whitesmoke;
  width: 100%;
  margin-bottom: 16px;
  background-color: transparent;
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
  color: black;
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
  background-color: #fff44f;
  max-width: 320px;
  width: 100%;
}
#product-btn:hover {
  background-color: #fff44f;
}
.uploadfile {
  background: #fff44f;
}

select {
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: black;
  font-size: 0.9375em;
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  background: url("../assets/arrow.png") 90% / 5% no-repeat;
  background-color: transparent;
}
.SuccessfulProductAddition{
  position: fixed;
  top:0%;
  z-index: 1000;
}
</style>
<script>
import { mapGetters } from "vuex";
import SuccessfulProductAddition from "@/components/SuccessfulProductAddition.vue";
export default {
  name: "AddProduct",
  data: function () {
    return {
      choosebutton: false,
      name:"",
      price:"",
      //    image: {
      //   size: "",
      //   height: "",
      //   width: ""
      // },
      description:"",
      colors:{
        "black":"5",
        "gray":"6",
        "white":"9"

      },
      amount:"",
      selectedphoto:null,
      data:{},
      categoryId:"60bef33e55fac81818313490",
    };
  },
  setup() {},
  components: {
    SuccessfulProductAddition,
  },
  methods:{
     OnPhotoUpload(event) 
{
      this.selectedphoto = event.target.files[0];
      if (
        !this.selectedphoto ||
        this.selectedphoto.type.indexOf("image/") !== 0
      )
        return;
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedphoto);
      let img = new Image();
      reader.onload = evt => {
        img.src = evt.target.result;
      };
    },
    Add_Product(){
      console.log("p1 vue",this.categoryId);
      let ProductInfo={
        creatorId:this.UserID,
        categoryId:this.categoryId,
        name:this.name,
        price:this.price,
        file:this.selectedphoto, //should be form data
        description:this.description,
        colors:this.colors
      }
      console.log("p vue",ProductInfo);
      this.$store.dispatch("Products/Add_Product", ProductInfo);
    }
  },
  computed:{
     ...mapGetters({
      ProductId: "Products/ProductId",
      Categories:"Products/Categories",
      UserID:"Authorization/UserID",
      SuccessProductAddition:"Products/SuccessProductAddition",

      // imageID:""
    }),
  },

};
</script>
