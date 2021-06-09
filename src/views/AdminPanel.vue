<template>
  <div>
    <AdminNavBar />
    <hr />
    <router-view class="child"></router-view>
  </div>
</template>
<style lang="scss" scoped>
.child{
  padding-bottom: 50px;
}
</style>
<script>
import AdminNavBar from "@/components/AdminNavBar.vue";
export default {
  name: "AdminPanel",
  components: {
    AdminNavBar,
  },
};
</script>
