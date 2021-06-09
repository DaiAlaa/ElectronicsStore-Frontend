<template>
    <div class="container">
    <div class="row">
      <div class="col">
          <h1 class="text-center">Categories total profit and counts</h1>
      </div>
    </div>
    <div class="barchart" id="artistbarchart" testid="artistbarchart">
      <chart />
    </div>
        <!-- <div class="row mt-5" v-if="arrTotal.length > 0">
      <div class="col">
        <h2 class="text-center">Total</h2>
        <bar-chart
          :chartData="arrTotal"
          :options="chartOptions"
          :chartColors="totalChartColors"
          label="Total"
        />
      </div>
    </div> -->
      <!-- <div class="row mt-5" v-if="arrCount.length > 0">
      <div class="col">
        <h2 class="text-center">Count</h2>
        <bar-chart
          :chartData="arrCount"
          :options="chartOptions"
          :chartColors="countChartColors"
          label="Count"
        />
      </div>
    </div> -->
</div>
</template>
<style lang="scss" scoped>
.barchart {
  margin: 25px;
}
</style>
<script>
import Chart from "@/components/Chart.vue";
// import moment from "moment";
// import { mapGetters } from "vuex";
export default {
    name: "Statistics",
    components:{
        Chart
    },
    // data(){
    //     return{
    //         arrTotal:[],
    //         totalChartColors:{
    //             borderColor: "#077187",
    //             pointBorderColor: "#0E1428",
    //             pointBackgroundColor: "#AFD6AC",
    //             backgroundColor: "#74A57F"
    //         },
    //         arrCount:[],
    //         countChartColors:{
    //             borderColor: "#251F47",
    //             pointBorderColor: "#260F26",
    //             pointBackgroundColor: "#858EAB",
    //             backgroundColor: "#858EAB"
    //         },
    //         chartOptions:{
    //              responsive: true,
    //             maintainAspectRatio: false
    //         }
    //     };
    // },
    // async created() {
    //     const { data } = await this.$store.dispatch("Products/ShowStats");
    //     console.log(data);
    //      data.forEach(d => {
             
    //         const {
    //             category,
    //             total,
    //             count
    //             } = d;
    //             this.arrTotal.push({category,total:total});
    //             this.arrCount.push({category,total:count});
    //      });
    // },
//      computed: {
//     ...mapGetters({
//       GetStats: "Products/GetStats",
//       loadedchart: "Products/loadedchart"
//     })
//   }
};
</script>