<template>
  <div >
    <!-- <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition> -->
    <transition name="slide" appear>
       <div class="modal" v-if="showModal">
        <form>
          <p>Full Name</p>
          <input
            class="input_field"
            type="text"
            placeholder="Name"
            v-model="Name"
            testid="Name input"
            id="Name"
          />
          <br />
          <p
            v-if="req_name == true"
            class="invalid"
            testid="name required error"
            id="req_name"
          >
            Please enter your name.
          </p>
          <p>Mobile Number</p>
          <input
            class="input_field"
            type="text"
            placeholder="MobileNumber"
            v-model="MobileNumber"
            testid="Mobile input"
            id="Mobile"
          />
          <br />
          <p>City</p>
          <select
            v-model="City"
            class="City_select"
            testid="city input"
          >
            <option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :disabled="city.disabled"
            >
              {{city.text }}
            </option>
          </select>
          <br />
          <p>street Name</p>
          <input
            class="input_field"
            type="text"
            placeholder="StreetName"
            v-model="StreetName"
            testid="Street input"
            id="Street"
          />
          <br />
          <p>Building Number</p>
          <input
            class="input_field"
            type="text"
            placeholder="BuildingNumber"
            v-model="BuildingNumber"
            testid="Building input"
            id="Building"
          />
          <br />
          <p>Floor</p>
          <input
            class="input_field"
            type="text"
            placeholder="Floor"
            v-model="FloorNumber"
            testid="Floor input"
            id="Floor"
          />
          <br />
          <p>Creidt Card </p>
          <input
            class="input_field"
            type="text"
            placeholder="CreditCard Number"
            v-model="CreditCardr"
            testid="CreditCard input"
            id="CreditCard"
          />
          <br />

          <button
            @click.prevent="buyProduct(),changeModalState()"
            class="costum-btn justify-content-center"
            id="buy-btn"
            type="submit"
            testid="buy button"
          >
            Buy this product
          </button>
          <button
              class="customButton"
              @click="changeModalState()"
            >
              cancel
            </button>
        </form>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 10;
  padding: 10;
  box-sizing: border-box;
  overflow: hidden;
}

html,body {
  font-family: "montserrat", sans-serif;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

div {
  position:absolute;
  display: block;
  // right :10%;
  left:25%;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 120vh;
  // overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
}
/* .modal-overlay {
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: none;
//   top: 0;
//   left: 20%;
//   right: 20%;
//   bottom: 0;
//   z-index: 20;
//   width: 50vw;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0);
//   overflow: hidden;
 }*/

.modal {
  position:relative;
  z-index: 20;
  top: 0;
  left: 0;
  width: 50vw;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
  overflow-y: scroll;
}
p{
    position:relative;
    display:flex;
    font-weight: bold;
    color:white;
    margin-left: 10%;
    margin-top: 2%;
    margin-bottom: 0%;
  }
  input {
    position:relative;
    display:inline-block;
    width: 80%;
    height: 2.5em;
    align-items: center;
    background-color: transparent;
    color: #fff;
    border-color:whitesmoke;
    font-size: 1em;
    line-height: 10vh;
    outline: none;
    font-weight: bold;
    margin-top: 2vh;
    z-index: 20;
  }
select {
  border-radius: 2px;
  border: 1px solid #dfe0e6;
  color: white;
  font-size: 0.9375em;
  height: 3em;
  padding: 0.625em 0.625em 0.625em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 80%;
  background: url("../assets/arrow.png") 90% / 10% no-repeat;
  background-color: rgba(0, 0, 0, 0.8);
}
button {
  position:relative;
  display: inline-flex;
  align-items:baseline; 
  margin: 2em;
  font-size: 1em;
  font-weight: 700;
  height: 2.5em;
  border-radius: 500px;
  padding: 0.5em;
  cursor: pointer;
  transition-duration: 0.3s;
  border-width: 0;
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

// @media screen and (max-width: 700px) {
//   .customButton {
//     height: 10%;
//     width: 43%;
//     border-radius: 500px;
//     font-size: 10px;
//   }
// }




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
button:hover {
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


h2 {
  margin-top: 5%;
}
</style>
<script>
export default {
  name: "BuyProduct",
  data: function () {
    return {
      //   playlistname: "" 
      showModal: true,
      city: "0",
      cities: [
        { text: "Choose a country", value: "0", disabled: true },
        { text: "Alexandria", value: "Alex", disabled: false },
        { text: "Aswan", value: "Aswan", disabled: false },
        { text: "Asyut", value: "Asyut", disabled: false },
        { text: "Beheira", value: "Beheira", disabled: false },
        { text: "BeniSuef", value: "BeniSuef", disabled: false },
        { text: "Cairo", value: "Cairo", disabled: false },
        { text: "Dakahlia", value: "Kafr ElSheikh", disabled: false },
        { text: "Damietta", value: "Damietta", disabled: false },
        { text: "Faiyum", value: "Faiyum", disabled: false },
        { text: "Gharbia", value: "Gharbia", disabled: false },
        { text: "Giza", value: "Giza", disabled: false },
        { text: "Ismailia", value: "Ismailia", disabled: false },
        { text: "Kafr ElSheikh", value: "Kafr ElSheikh", disabled: false },
        { text: "Luxor", value: "Luxor", disabled: false },
        { text: "Matruh", value: "Matruh", disabled: false },
        { text: "Minya", value: "Minya", disabled: false },
        { text: "Monufia", value: "Monufia", disabled: false },
        { text: "New Valley", value: "New Valley", disabled: false },
        { text: "North Sinai", value: "North Sinai", disabled: false },
        { text: "Port Said", value: "Port Said", disabled: false },
        { text: "Qalyubia", value: "Qalyubia", disabled: false },
        { text: "Qena", value: "Qena", disabled: false },
        { text: "Red Sea", value: "Red Sea", disabled: false },
        { text: "Sharqia", value: "Sharqia", disabled: false },
        { text: "Sohag", value: "Sohag", disabled: false },
        { text: "South Sinai", value: "South Sinai", disabled: false },
        { text: "Suez", value: "Suez", disabled: false },
      ],
    };
  },
  components: {},
};
</script>
