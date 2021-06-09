<template>
  <body>

    <div class="conatiner reset_body px-0" >
      <div class="row justify-content-center m-0">
        <div class="col-5" align="center">
          <h1>Password Reset</h1>
          <p>
            Enter the <b> new  password</b> 
          </p>
          <div id="email_label">
            <label>Password</label>
          </div>
          <br />
<input
            class="input_field"
            type="password"
            placeholder="Password"
            v-model="newPassword"
            testid="password input"
            id="password"
          />
          <input
            class="input_field"
            type="password"
            placeholder="RepeatPassword"
            v-model="newPasswordRepeat"
            testid="password input"
            id="password"
          />
          <p
            class="invalid"
            id="req_error"
            v-if="error"
            testid="email required error"
          >
            This field is required
          </p>
          <button
            class="costum-btn"
            id="send-btn"
            @click.prevent="Reset_Password()"
            testid="forget password button"
          >
            send
          </button>
        </div>
      </div>
    </div>

    <div class="conatiner px-0">
      <div class="row footer m-0"></div>
    </div>
  </body>
</template>
<style lang="scss" scoped>
@import "../css/global.css";
body {
  height: 100vh;
  margin: 0;
  background-color:whitesmoke;
  #email_label {
    display: flex;
    margin: 0%;
    width: 80%;
    margin-bottom: -20px;
    label {
      float: left;
      font-size: 12px;
      font-weight: 700;
    }
  }
  input {
    margin-top: -35px;
    width: 80%;
    height: 45px;
    padding: 0px 11.25px;
    margin-bottom: 16px;
  }
  .footer {
    background-color: whitesmoke;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 15%;
  }
  #send-btn {
    background-color:  #0f1549;
  }
  #send-btn:hover {
    background-color:  #0f1549;
  }
  #req_error {
    width: 80%;
  }
}
.header {
  background-color: black;
  margin: 0px;
  padding: 0px 15px;
  height: 90px;
  display: block;
  justify-content: space-between;
  box-sizing: border-box;
}
img {
  width: 120px;
  margin-top: 20px;
  margin-left: 10%;
  /* display: inline-block; */
}
h1 {
  font-weight: 700;
}
.reset_body {
  font-size: 16px;
  line-height: 1.5;
  padding: 60px 0px;
  display: block;
}
.reset_body {
  font-size: 16px;
  line-height: 1.5;
  display: block;
}
</style>
<script>
import { mapGetters } from 'vuex';
/**
 * Update password if user forget it
 * @displayName Update Password
 * @example [none]
 */
export default {
  data: function() {
    return {
      newPassword:"",
      newPasswordRepeat: "",
    };
  },
  methods: {
    Reset_Password() {
 
        let ResetInfo={
            email:this.ResetMail,
            newPassword:this.newPassword,
            newPasswordRepeat:this.newPasswordRepeat
        }
        this.$store.dispatch("Authorization/reset_password", ResetInfo);

    }
  },
  computed: {
 ...mapGetters({
     ResetMail:"Authorization/ResetMail"
 })
  }
};
</script>
