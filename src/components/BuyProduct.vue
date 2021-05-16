<template>
   <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <!-- <button class="cancel" @click="changeModalState()">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </button> -->

        <form>
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
          <p
            v-if="isLoggedIn == 'signup_err'"
            testid="email not unique error"
            class="invalid"
          >
            This email address is already in use.
          </p>
          <input
            class="input_field"
            type="email"
            placeholder="Confirm email"
            v-model="email_confirmation"
            testid="confirm email input"
            id="confirm_email"
          />
          <br />
          <p
            v-if="req_confirm_email == true"
            testid="confirm email required error"
            class="invalid"
            id="confirm_email_req"
          >
            Please enter your email.
          </p>
          <p
            v-if="invalid_confirm_email == true"
            testid="confirm email invalid error"
            class="invalid"
          >
            The email address you supplied is invalid.
          </p>
          <p
            v-if="
              invalid_email == false &&
              invalid_confirm_email == false &&
              req_email == false &&
              req_confirm_email == false &&
              matched_email == true
            "
            class="invalid"
            testid="emails not matched error"
            id="mistched_emails"
          >
            Email address doesn't match.
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
          <input
            class="input_field"
            type="text"
            placeholder="What should we call you?"
            v-model="username"
            testid="username input"
            id="username"
            required
          />
          <p
            v-if="req_username == true"
            class="invalid"
            testid="username required error"
            id="req_username"
          >
            What should we call you?
          </p>
          <br />
          <!-- country -->
          <select
            v-model="country"
            class="country_select"
            testid="country input"
          >
            <option
              v-for="country in countries"
              :key="country.value"
              :value="country.value"
              :disabled="country.disabled"
            >
              {{ country.text }}
            </option>
          </select>
          <p
            v-if="req_country == true"
            class="invalid"
            testid="country required error"
            id="req_country"
          >
            Please enter your country.
          </p>
          <!-- country -->
          <!-- take the date of birth -->
          <div id="birthdate" class="input_field">
            <label>Date of birth</label>
            <input
              type="text"
              placeholder="Day"
              v-model="day"
              testid="day of birth input"
              id="day"
            />
            <select
              v-model="month"
              class="month_select"
              testid="month of birth input"
              id="month"
            >
              <option
                v-for="month in Months"
                :key="month.value"
                :value="month.value"
                :disabled="month.disabled"
              >
                {{ month.text }}
              </option>
            </select>

            <input
              type="text"
              placeholder="Year"
              testid="year of birth input"
              v-model="year"
              id="year"
            />
          </div>

          <p
            v-if="valid_day == true"
            class="invalid"
            testid="day of birth error"
            id="req_day"
          >
            Please enter a valid day of the month.
          </p>
          <p
            v-if="valid_month == true"
            class="invalid"
            testid="month of birth error"
            id="req_month"
          >
            Please enter your birth month.
          </p>
          <p
            v-if="valid_year == true"
            class="invalid"
            testid="year of birth error"
            id="req_year"
          >
            Please enter a valid year.
          </p>
          <p
            v-if="valid_age == true"
            class="invalid"
            id="invalid_age"
            testid="year of birth error"
          >
            Sorry, but you don't meet Spotify's age requirements.
          </p>
          <!-- take the date of birth -->

          <!-- Gender -->
          <div id="gender" class="input_field">
            <input
              type="radio"
              id="female_gender"
              class="gender_field gender-radio"
              value="m"
              v-model="gender"
              testid="gender male radio button"
            />
            <label for="Male" class="gender_field gender-radio">Male</label>
            <input
              type="radio"
              class="gender_field gender-radio"
              value="f"
              v-model="gender"
              testid="gender female radio button"
            />
            <label for="Female" class="gender_field gender-label">Female</label>
          </div>
          <!-- Gender -->
          <br />

          <p
            v-if="req_gender == true"
            class="invalid"
            testid="gender required error"
            id="req_gender"
          >
            Please indicate your gender.
          </p>
          <button
            @click.prevent="signUp()"
            class="costum-btn justify-content-center"
            id="signup-btn"
            type="submit"
            testid="sign up button"
          >
            Sign Up
          </button>
          <div>
            Aleady have an account?
            <router-link
              class="highlight"
              to="/Login"
              tag="p"
              testid="log in link"
            >
              Log in
            </router-link>
          </div>
        </form>

        <!-- <h1 class="title">Create New Playlist</h1>

        <div class="child">
          <div class="grandchild">
            <h4 class="playlist_name">Playlist Name</h4>
            <input
              class="name_input"
              type="text"
              placeholder="New Playlist"
              v-model="playlistname"
              @keyup.enter="CreatePlaylist(), changeModalState()"
            />
          </div>
        </div>
        <div class="myrow">
          <div class="buttonWrapper">
            <button
              class="customButton cancel_button"
              @click="changeModalState()"
            >
              cancel
            </button>
          </div>
          <div class="buttonWrapper">
            <button
              class="customButton creat_button"
              testid="confirm_create"
              @click.prevent="CreatePlaylist()"
              @click="changeModalState()"
            >
              create
            </button> -->
          <!-- </div>
        </div> -->
      </div>
    </transition>       
    </div> 
</template>
<style lang="scss" scoped>

*{
  margin: 10;
  padding: 10;
  box-sizing: border-box;
  overflow: hidden;
}

body {
  font-family: "montserrat", sans-serif;
  overflow-y: hidden;
}

div {
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.myrow {
  display: block;
  width: 100vw;
  height: 200px;
  position: fixed;
  top: 70%;
}
.customButton {
  position: absolute;
  appearance: none;
  outline: none;
  cursor: pointer;
  height: 10%;
  width: 30%;
  border-radius: 500px;
  border-color: transparent;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  overflow-y: hidden;
  overflow-x: hidden;
  line-height: 18px;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  display: inline-block;
  text-align: center;
  z-index: 40;
  background: none;
}
.creat_button {
  border: none;
  background-color: #1ed760;
  transition: 0.4s ease-out;
  border: 2px solid transparent;
}
.cancel_button {
  border-color: #fff;
  transition: all 33ms cubic-bezier(0.3, 0, 0, 1);
  border: 2px solid;
  margin-left: 30%;
}
.buttonWrapper {
  width: 50%;
  height: 500px;
  display: inline-block;
  padding: 3% 10% 3% 10%;
}

.modal-overlay {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}

.modal {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
  overflow: hidden;
}
input {
  width: 100%;
  height: 10%;
  align-items: center;
  background-color: transparent;
  color: #fff;
  border-color: transparent;
  padding: 32px 0px;
  font-size: 48px;
  line-height: 50px;
  color: #fff;
  text-transform: none;
  outline: none;
  font-weight: bold;
  overflow-y: hidden;
  z-index: 60;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
  overflow: hidden;
}
.cancel {
  position: absolute;
  left: 50%;
  top: 20%;
  display: inline-block;
  background-color: transparent;
  color: #fff;
  border: none;
  overflow: hidden;
  z-index: 40;
}
.title {
  position: absolute;
  top: 25%;
  display: block;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.005em;
  color: #fff;
  text-transform: none;
  text-align: center;
  margin: 16px 0;
  width: 100%;
  overflow: hidden;
  z-index: 60;
}
.grandchild {
  position: fixed;
  align-items: center;
  width: 70%;
  height: 30%;
  left: 15%;
  padding: 32px 0px;
  overflow: hidden;
  z-index: 60;
}
.child {
  position: fixed;
  height: 30%;
  top: 40%;
  bottom: 50%;
  background-color: #424242;
  overflow: hidden;
  z-index: 60;
}
.playlist_name {
  color: #fff;
  overflow: hidden;
  z-index: 60;
}
.column {
  position: absolute;
  top: 70%;
  max-width: 160px;
  max-height: 50px;
  z-index: 40;
}
@media screen and (max-width: 700px) {
  .customButton {
    height: 10%;
    width: 43%;
    border-radius: 500px;
    font-size: 10px;
  }
  .cancel_button {
    margin-left: 43%;
  }
  .buttonWrapper {
    width: 50%;
    height: 500px;
    display: inline-block;
    padding: 3% 5% 3% 5%;
  }
  h4 {
    font-size: 18px;
  }
  .name_input {
    font-size: 33px;
  }
  .title {
    font-size: 38px;
    line-height: 40px;
  }
}
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
}

select {
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #dfe0e6;
  color: #88898c;
  font-size: 0.9375em;
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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

#signup-btn {
  background-color: #0f1549;
  max-width: 320px;
  width: 100%;
}
#signup-btn:hover {
  background-color: #0f1549;
}
#birthdate {
  label {
    color: #88898c;
    font-size: 0.9375em;
    text-align: left;
    margin-right: 15px;
    margin-top: 15px;
    padding-left: 5px;
    display: block;
  }
  .month_select {
    margin-left: 5%;
    margin-right: 5%;
    background: url("../assets/arrow.png") 90% / 12% no-repeat;
    width: 40%;
    background-color: #fff;
  }
  input {
    width: 25%;
  }
}

.country_select {
  width: 100%;
  background: url("../assets/arrow.png") 90% / 5% no-repeat;
  background-color: #fff;
}
#gender {
  // display: inline-block;
  // background-color: transparent;
  input {
    margin-top: 3px;
    border-radius: 2px;
    width: 15%;
    margin-bottom: 0px;
    padding: 0em;
  }
  .gender_field {
    display: inline-block;
    float: left;
    width: 7%;
  }
  label {
    color: #88898c;
    font-size: 0.9375em;
    text-align: left;
    padding-top: 16px;
    margin-right: 20px;
    padding-left: 5px;
  }
}
.signup-form {
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
h2{
  margin-top: 5%;
}
</style>
<script>
export default {
      name: "BuyProduct",
  data: function() {
    
    return {
    //   playlistname: ""
    showModal:true
    };
  },
  components: {},
}
</script>