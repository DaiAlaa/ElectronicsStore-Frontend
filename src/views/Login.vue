<template>

  <div class="conatiner login-form encor-ligh-theme px-0">
    <buy-product></buy-product>
    <div class="row justify-content-center m-0">
      <div class="col-xl-4 col-lg-4 col-md-5 col-sm-8" align="center">
        
        <form>
          <h2>Login with your Email</h2>
          <input
            class="input_field"
            type="email"
            placeholder="Email"
            v-model="email"
            testid="email input"
            id="email"
          />
          <br />
          <p
            v-if="req_email == true"
            class="invalid"
            testid="email required error"
            id="req_email"
          >
            Please enter your email.
          </p>
          <p
            v-if="invalid_email == true"
            testid="email invalid error"
            class="invalid"
            id="invalid_email"
          >
            The email address you supplied is invalid.
          </p>
          <input
            class="input_field"
            type="password"
            placeholder="Password"
            v-model="password"
            testid="password input"
            id="password"
          />
          <br />
          <p
            v-if="req_password"
            class="invalid"
            testid="password required error"
            id="req_password"
          >
            Enter a password to continue.
          </p>
          <p
            v-if="short_password == true"
            class="invalid"
            testid="password short error"
            id="short_password"
          >
            Your password is too short.
          </p>
          <button
            @click.prevent="login()"
            class="costum-btn justify-content-center"
            id="login-btn"
            type="submit"
            testid="login button"
          >
            Login
          </button>
          <div id="forget_pass">
            <router-link class="highlight" to="/ForgetPassword" tag="p">
              Forget your password?
            </router-link>
          </div>
          <h2>Don't have an account?</h2>
          <router-link
            class="costum-btn"
            id="signup_btn"
            to="/SignUp"
            tag="button"
          >
            SIGN up for Electro Shop
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
html,
body {
  margin: 0px;
  padding: 0px;
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
h2{
  margin-top:5%;
}
#email {
  margin-top: 15%;
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
  background-color: #0f1549;
}
.highlight {
  color: #0f1549;
  display: inline-block;
}
.highlight:hover {
  color: #0f1549;
  cursor: pointer;
}
.invalid {
  color: #bd3200;
  text-align: left;
}

#login-btn {
  background-color: #0f1549;
  max-width: 320px;
  width: 100%;
}
#login-btn:hover {
  background-color: #0f1549;
}
.login-form {
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  background-size: cover;
  // position: absolute;
  display: block;
}
form {
  height: calc(120vh);
}
</style>
<script>
import BuyProduct from "@/components/BuyProduct.vue";
// import { mapGetters } from "vuex";
export default {
   name: "Login",
  components: {
    BuyProduct
  },
   data: function() {
    return {
      //User's data that will be passed from the v-model
      email: "",
      password: "",
      //required for validation
      trigger_validation: false,
      can_submit: true
    };

  },
   methods: {
    /**
     * login function to open user's account
     * @public This is a public method
     * @param {String} email email which the spotify account is created with
     * @param {String} password user's account password
     */
    login() {
      this.trigger_validation = true;
      this.can_submit = true;
      this.req_email;
      this.req_password;
      setTimeout(() => {
        if (this.can_submit) {
          let user = {
            email: this.email,
            password: this.password
          };
          this.$store.dispatch("Authorization/login", user);
        }
      }, 200);
    },
    /**
     * this function used to determine the state of account if there is any error with the login operation or the account is not existed
     * @public This is a public method
     */
    cannotSubmit() {
      this.can_submit = false;
    },
    /**
     * this function used to determine the state of account if it is existed and can let the user in
     * @public This is a public method
     */
    canSubmit() {
      this.can_submit = this.can_submit && true;
    },
    /**
     * this function used to login with facebook account
     * @public This is a public method
     */
  },
  computed: {
    // ...mapGetters({
    //   isLoggedIn: "Authorization/GetStatus"
    // }),
    req_email: function() {
      if (this.trigger_validation) {
        if (this.email == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    },
    req_password: function() {
      if (this.trigger_validation) {
        if (this.password == "") {
          this.cannotSubmit();
          return true;
        } else {
          this.canSubmit();
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
</script>
