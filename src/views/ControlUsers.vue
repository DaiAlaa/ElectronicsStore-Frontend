<template>
  <div>
    <h1>Control Users:</h1>
    <div class="row mainRow justify-content-center border-bottom">
      t
      <div class="col">
        <h3 class="head1">USER NAME</h3>
      </div>
      <div class="col">
        <h3 class="head2">ID</h3>
      </div>
      <div class="col">
        <h3 class="head3">DELETE USER</h3>
      </div>
    </div>
    <div class="row record border-bottom border-secondary">
      <div class="col">
        <h4 class="head1">Dai Alaa</h4>
      </div>
      <div class="col">
        <h4 class="head2">5e7648a37966e84270c96b48</h4>
      </div>
      <div class="col">
        <button class="delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 18%;
  color: white;
  font-weight: bold;
  text-align: left;
  margin-left: 5%;
}
.mainRow {
  margin-top: 5%;
  width: 60%;
  height: 50px;
  background: #313030;
  margin-left: 20%;
  color: #313030;
  padding-top: 13px;
}
h3 {
  color: white;
  font-size: 20px;
}
.head1 {
  position: absolute;
  margin-left: 10%;
}
.head2 {
  position: absolute;
  margin-left: 15%;
}
.head3 {
  position: absolute;
  margin-left: 25%;
}
.record {
  width: 60%;
  height: 50px;
  padding-top: 13px;
  background: white;
  margin-left: 20%;
  color: #313030;
}
h4 {
  font-size: 18px;
}
.delete {
  border: none;
  background: white;
  margin-left: 20%;
  color: red;
}
</style>

<script>
export default {
  name: "ControlUsers",
};
</script>
