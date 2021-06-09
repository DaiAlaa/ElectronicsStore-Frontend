import axios from "axios";

export default {
  namespaced: true,
  state: {
    userCategories: [],
    ProductName: "",
    ProductId: "",
    ProductPrice: 0,
    ProductDes: "",
    ProductImage: "",
    colors: [],
    searchResults: [],
    PurchaseModal:false,
    BuyProduct:false,
    SuccessPurchase:false,
    SuccessProductAddition:true,
    Orders: [],
    GetStats:[],
  },
  mutations: {
    setUserCategories(state, Categories) {
      state.userCategories = Categories;
    },
    setUserProducts(state, Products) {
      state.userProducts = Products;
    },
    setProductName(state, name) {
      state.ProductName = name;
    },
    setProductId(state, id) {
      state.ProductId = id;
    },
    setProductPrice(state, price) {
      state.ProductPrice = price;
    },
    setProductDes(state, des) {
      state.ProductDes = des;
    },
    setProductImage(state, imageid) {
      state.ProductImage = imageid;
    },
    setSearchProducts(state, searchProducts) {
      state.searchResults = searchProducts;
    },
    togglePurchaseForm(state){
      state.PurchaseModal=!state.PurchaseModal;
    },
    setSuccessPurchase(state){
      state.SuccessPurchase=!state.SuccessPurchase;
    },
    setSuccessAddition(state){
      state.SuccessProductAddition=!state.SuccessProductAddition;
    },
    setProductColors(state,ProductColor){
      state.colors=ProductColor;
    },
    setOrders(state, Orders) {
      state.Orders = Orders;
    },
    setStats(state,Stats){
      state.GetStats=Stats;
    }
  },
  actions: {
    showUserCategories({ commit }) {
      axios
        .get("http://localhost:7000/category/get")
        .then((response) => {
          let Categories = response.data;
          if (response.status != 200) {
            Categories = [];
          }
          commit("setUserCategories", Categories);
        })
        .catch((error) => {
          let Categories = [];
          commit("setUserCategories", Categories);
          console.log(error);
        });
    },
    showUserProducts({ commit }, categoryId) {
      axios
        .get("http://localhost:7000/product/get?categoryId=" + categoryId + "&pageNumber=1&pageSize=25") // pageNumber
        .then((response) => {
          console.log("categoryId" , categoryId);
          let Products = response.data;
          // if (response.status != 200) {
          //   Products = [];
          // }
          commit("setUserProducts", Products);
        })
        .catch((error) => {
          let Products = [];
          commit("setUserProducts", Products);
          console.log(error);
        });
    },
    showProduct({ commit }, productId) {
      axios
        .get("http://localhost:7000/product/getOne?productId=" + productId)
        .then((response) => {
          let Product = response.data;
          commit("setProductName", Product.name);
          commit("setProductId", Product._id);
          commit("setProductPrice", Product.price);
          commit("setProductDes", Product.description);
          commit("setProductImage", Product.imageId);
          commit("setProductColors",Product.colors);
          console.log(Product.colors.red)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchProducts({ commit }, searchValue) {
      axios
        .get(
          "http://localhost:7000/product/search?q=" +
            searchValue +
            "&pageNumber=1&pageSize=23"
        )
        .then((response) => {
          let searchProducts = response.data;
          if (response.status != 200) {
            searchProducts = [];
          }
          console.log("searchValue : ", searchValue);
          commit("setSearchProducts", searchProducts);
        })
        .catch((error) => {
          let searchProducts = [];
          commit("setSearchProducts", searchProducts);
          console.log(error);
        });
      // .catch(() => {
      //   commit("settopres", []);
      // });
    },
    Buy_Product({commit},PurchaseInfo){
      console.log("in js",PurchaseInfo.productId);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem("Authorization");
      axios.
      post("http://localhost:7000/order/create"
        ,{
        productId:PurchaseInfo.productId,
        color:PurchaseInfo.color,
        address:PurchaseInfo.address,
        phone:PurchaseInfo.MobileNumber,
        creditCard:PurchaseInfo.CreditCard
      })
      
      .then((response) => {
        commit("setSuccessPurchase");
        console.log("Nerdeen", response);
      })
      .catch((error) => {
        console.log("in js error",PurchaseInfo.productId);
        console.log(error);
      });
    },
    Add_Product({commit},ProductInfo){
      console.log("p js",ProductInfo);
      const file = new FormData();
      file.append("file", ProductInfo.file);
      console.log("p3 js",{
        creatorId:ProductInfo.creatorId,
        categoryId:"60bef33e55fac81818313490",
        name:ProductInfo.name,
        price:ProductInfo.price,
        file:file,
        description:ProductInfo.description,
        colors:JSON.stringify( ProductInfo.colors)
        });
      axios({
        method:"post",
        url:"http://localhost:7000/product/create?creatorId="+ProductInfo.creatorId+"&categoryId="+ProductInfo.categoryId+"&name="+ProductInfo.name+"&price="+ProductInfo.price+"&description="+ProductInfo.description+"&colors="+JSON.stringify( ProductInfo.colors),
        data:file
      })
      .then((response) => {
        commit("setSuccessAddition",true);
        console.log("Nerdeen", response);
      })
      .catch((error) => {
        console.log("Nerdeen", error);
        console.log(error);
      });
    },
    togglePurchaseForm({commit}){
      commit("togglePurchaseForm");
    },
    toggleSuccessfulPurchaseForm({commit}){
      commit("setSuccessPurchase");
    },
    toggleSuccessfulAddition({commit}){
      commit("setSuccessAddition");
    },
    showOrders({ commit }) {
      axios
        .get("http://localhost:7000/order/get?pageNumber=1&pageSize=10")
        .then((response) => {
          let Orders = response.data;
          if (response.status != 200) {
            Orders = [];
          }
          commit("setUserCategories", Orders);
        })
        .catch((error) => {
          let Orders = [];
          commit("setUserCategories", Orders);
          console.log(error);
        });
    },
    ShowStats({commit}){
      axios
        .get("http://localhost:7000/order/getStats")
        .then((response) => {
          let Stats = response.data;
          if (response.status != 200) {
            Stats = [];
          }
          console.log("in p",Stats);
          commit("setStats", Stats);
        })
        .catch((error) => {
          let Stats = [];
          commit("setStats", Stats);
          console.log(error);
        });
    }
    // Upload_Photo({commit}){

    // }
   },
  getters: {
    Categories: state => state.userCategories,
    Products1: state => state.userProducts,
    ProductName: state => state.ProductName,
    ProductId: state => state.ProductId,
    ProductPrice: state => state.ProductPrice,
    ProductDes: state => state.ProductDes,
    ProductImage: state => state.ProductImage,
    searchResults: state => state.searchResults,
    Orders: state => state.Orders, 
    ProductColor:state=>state.colors,
    PurchaseModal:state=>state.PurchaseModal,
    SuccessPurchase:state=>state.SuccessPurchase,
    BuyProduct:state=>state.BuyProduct,
    SuccessProductAddition:state=>state.SuccessProductAddition, 
    GetStats:state=>state.GetStats,
  }
};
