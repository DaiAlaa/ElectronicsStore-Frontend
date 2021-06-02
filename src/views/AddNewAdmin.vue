<template>
    <div>
        <h1>Add new admin or employee: </h1>
        <div class="mainDiv">
            <h3>Email</h3>
            <input
            class="input_field"
            type="email"
            placeholder="type user email"
            v-model="Email"
            />
            <h3>Password</h3>
            <input
            class="input_field"
            type="password"
            placeholder="type user password"
            v-model="Password"
            />
            <h3>Name</h3>
            <input
            class="input_field"
            type="text"
            placeholder="type user name"
            v-model="Name"
            />
            <h3>Credit Card</h3>
            <input
            class="input_field"
            type="text"
            placeholder="type credit card number"
            v-model="Credit"
            />
            <h3>Mobile Number</h3>
            <input
            class="input_field"
            type="text"
            placeholder="type mobile number"
            v-model="Mobile"
            />
            <h3>Adress</h3>
            <input
            class="input_field"
            type="text"
            placeholder="type user address'"
            v-model="Address"
            />
            <h3>Role</h3>
            <!-- <input
            class="input_field"
            type="text"
            placeholder="type 'Admin' or 'Employee'"
            v-model="Role"
            /> -->
            <div class="form-check-inline option1">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio" value="Admin" v-model="Role">
                    Admin
                </label>
            </div>
            <div class="form-check-inline option2">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio" value="Employee" v-model="Role">
                    Employee
                </label>
            </div>
            <p class="success" v-if="Status == 'success'">Done Successfully</p>
            <p class="failed" v-if="Status == 'failed'"> Failed</p>
            <button class="add" @click="addUser()">
                ADD
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h1 {
    text-align: left;
    margin-top: 12%;
    color: white;
    margin-left: 4%;
    margin-bottom: 5%;
}
.mainDiv {
  width: 50%;
  height: 100%;
  background: whitesmoke;
  margin-left: 6%;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 50px;
}
h3 {
  text-align: left;
  color: #161516;
  margin-bottom: 15px;
  font-size: 20px;
}
.input_field {
  width: 90%;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 25px;
  margin-right: 40%;
}
.add {
  border: none;
  color: #161516;
  background-color: #fff44f;
  width: 14%;
  height: 40px;
  border-radius: 20px;
  margin-top: 3%;
}
.add:hover {
  background-color: #ffee07;
}
.option1 {
    // margin-right: 30px;
    margin-bottom: 20px;
}
.option2 {
    margin-right: 70%;
    margin-bottom: 20px;
}
.success {
    color:rgb(138, 230, 0);
    text-align: left;
    font-size: 18px;
    font-weight: bold;
}
.failed {
    color:red;
    text-align: left;
    font-size: 18px;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AddNewAdmin",
  data: function() {
    return {
      Email:"",
      Password: "",
      Name: "",
      Role: "",
      Credit: "",
      Mobile: "",
      Address: "",
      submit: false,
    };
  },
  methods: {
    cannotSubmit() {
      this.submit = false;
    },
    canSubmit() {
      this.submit = this.submit && true;
    },
    reqEmail() {
        var to_check = this.Email;
        if (
          this.Email == "" ||
          to_check.indexOf("@") == -1 ||
            to_check.indexOf("@") == to_check.length - 1 ||
            to_check.indexOf(".com") == -1 ||
            to_check.indexOf(".com") + 4 != to_check.length
        ) {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqPassword() {
        if (this.Password == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqUsername() {
        if (this.Name == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqRole() {
         if (this.Role == ""){
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqCredit() {
        if (this.Credit == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqMobile() {
        if (this.Mobile.length != 11 || this.Mobile[0] != "0" || this.Mobile[1] != "1") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    reqAddress() {
       if (this.Address == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
    },
    addUser() {
      this.submit = true;
      this.reqEmail();
      this.reqPassword();
      this.reqUsername();
      this.reqRole();
      this.reqCredit();
      this.reqMobile();
      this.reqAddress();
      setTimeout(() => {
        if (this.submit) {
          let newuser = {
            email: this.Email,
            password: this.Password,
            name: this.Name,
            role: this.Role,
            creditCardNumber: this.Credit,
            mobileNumber: this.Mobile,
            address: this.Address,
          };
          this.$store.dispatch("Users/CreateAdminEmplyee", newuser);
        } else return;
      }, 200);
    },
  },
  computed: {
    ...mapGetters({
      Status: "Users/Status",
    })
  }
}
</script>