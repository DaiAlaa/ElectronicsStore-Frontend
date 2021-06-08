<template>
  <div>
    <!-- <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="Successpurchase"
        @click="SuccessfulPurchaseModalState()"
      ></div>
    </transition> -->
    <transition name="slide" appear>
      <div class="modal" v-if="SuccessPurchase">
        <div class="child">
          <!-- <div class="grandchild"> -->
            <!-- <div class="info"> -->
              <h2>Successful Purchase</h2>

              <button
                class="closebutton"
                testid="closepopup"
                @click="SuccessfulPurchaseModalState()"
              >
                CLOSE
              </button>
            <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
* {
  // margin: 10;
  // padding: 10;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;

}

div {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: transparent;


}
// .modal-overlay {
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: none;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   height: 200%;
//   z-index: 104;
//   width: 100%;
//   height: 200%;
//   background-color: rgba(0, 0, 0, 0);
//   overflow: hidden;

// }

.modal {
  position: relative;
  z-index: 100;
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.2);
  // display: table;
  transition: opacity 0.3s ease;
  overflow: hidden;
  justify-content: center;
  margin: 0px;
  // animation: UpsellShowAnimation 0.2s 1;
  // animation-fill-mode: both;
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
  // transition: transform 0.5s;
}

// @keyframes fadeIn {
//   from {opacity: 0;}
//   to {opacity:1 ;}
// }

.child {
  position: absolute;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  background-color: transparent;
    h2 {
      position: relative;
      color: #fff;
      margin-bottom: 12px;
      font-size: 48px;
      font-weight: 700;
      line-height: 48px;
      font-family: 'Brush Script MT';
      align-content: center;
      text-align: center;
      top:25%;
    }
    .fa {
      padding: 5px;
    }

  // }
}
button:focus {
  outline: 0 !important;
}
.closebutton {
  position: relative;
  color: white;
  background-color: transparent;
  border-color: transparent;
  margin: 20px;
  font-size:20px;
  line-height: 40px;
  font-weight: 700;
  letter-spacing: 1.76px;
  top:50%;
}
.closebutton:hover {
  text-decoration-line: underline;
}
// @media screen and (max-width: 1030px) {
//   .child {
//     left: 10%;
//   }
// }
// @media screen and (max-width: 815px) {
//   .child {
//     left: 0;
//   }
// }
// @media screen and (max-width: 500px) {
//   .child {
//     position: relative;
//     width: 100%;
//     left: 0;
//     top: 0;
//     height: 100vh;
//     align-content: center;
//     padding: 20px;
//     .grandchild {
//       margin: 20px;
//       height: 100vh;
//       top: 0;
//       position: relative;
//       .closebutton {
//         margin: 5px;
//       }
//       .info {
//         position: absolute;
//         display: block;
//         width: 100%;
//         height: 320px;
//       }
//     }
//   }
// }
</style>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SuccessfulPurchase",
  computed: {
    ...mapGetters({
      SuccessPurchase: "Products/SuccessPurchase"
    })
  },
  methods: {
    SuccessfulPurchaseModalState() {
      this.$store.dispatch("Products/toggleSuccessfulPurchaseForm");
    }
  }
};
</script>
