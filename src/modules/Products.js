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
    Orders: [],
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
    setOrders(state, Orders) {
      state.Orders = Orders;
    },
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
  },
  getters: {
    Categories: (state) => state.userCategories,
    Products1: (state) => state.userProducts,
    ProductName: (state) => state.ProductName,
    ProductId: (state) => state.ProductId,
    ProductPrice: (state) => state.ProductPrice,
    ProductDes: (state) => state.ProductDes,
    ProductImage: (state) => state.ProductImage,
    searchResults: (state) => state.searchResults,
    Orders: (state) => state.Orders, 
  },
};
