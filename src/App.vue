<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
export default {
    beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("Authorization");
    if (token) {
      this.$store.dispatch("Authorization/get_user", false);
      setTimeout(() => {
        var status = this.isLoggedIn;
        if (status == "error") {
          //token is expired
          this.$store.dispatch("Authorization/logout");
          this.$router.replace("/login");
        }
      }, 500);
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);

    window.localStorage.isMySessionActive = "true";
  },
  data: function() {
    return {
      loading: true,
      componentKey: 0
    };
  }
};
</script>
