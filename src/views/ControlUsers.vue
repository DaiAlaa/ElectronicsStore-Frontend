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
        <div class="col">
          <h3 class="head4">ADMIN</h3>
        </div>
        <div class="col">
          <h3 class="head5">EMPLOYEE</h3>
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
          <button class="delete"> Delete </button>
        </div>
        <div class="col">
          <button class="adminUpgrade"> Upgrade </button>
        </div>
        <!-- <div class="col">
          <h5 class="Upgraded1"> Upgraded </h5>
        </div> -->
        <div class="col">
          <button class="empUpgrade"> Upgrade </button>
        </div>
        <!-- <div class="col">
          <h5 class="Upgraded2"> Upgraded </h5>
        </div> -->
      </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 13%;
  color: white;
  // font-weight: bold;
  text-align: left;
  margin-left: 5%;
}
.mainRow {
  margin-top: 5%;
  width: 80%;
  height: 50px;
  background: #313030;
  margin-left: 10%;
  color: #313030;
  padding-top: 13px;
}
h3 {
  color:white;
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
  margin-left: 30%;
  width: 90%;
}
.head4{
  position: absolute;
  margin-left: 55%;
}
.head5 {
  position: absolute;
  margin-left: 26%;
}
.record {
  width: 80%;
  height: 50px;
  padding-top: 13px;
  background: white;
  margin-left: 10%;
  color: #313030;
}
h4 {
  font-size: 16px;
}
.delete {
  border: none;
  background: white;
  margin-left: 75%;
  color: red;
}
.adminUpgrade {
  border: none;
  background: white;
  margin-left: 63%;
  color: #1b2588;
  font-weight: bold;
}
.empUpgrade {
  border: none;
  background: white;
  margin-left: 29%;
  color: #1b2588;
  font-weight: bold;
}
.Upgraded1 {
  font-size: 16px;
  font-weight: bold;
  margin-left: 63%;
  color: rgb(154, 218, 59);
}
.Upgraded2 {
  font-size: 16px;
  font-weight: bold;
  margin-left: 29%;
  color: rgb(154, 218, 59);
}
</style>

<script>
export default {
    name: "ControlUsers"
}
</script>