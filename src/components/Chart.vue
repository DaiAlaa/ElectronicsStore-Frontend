<script>
// import { mapGetters } from "vuex";
// import { Line } from "vue-chartjs";
// export default {
//   extends: Line,
//    props: {
//     label: {
//       type: String
//     },
//     chartData: {
//       type: Array
//     },
//     options: {
//       type: Object
//     },
//     chartColors: {
//       type: Object
//     }
// //   data() {
// //     return {
// //       datacollection: {
// //         //Data to be represented on x-axis
// //         labels: ["category", "total", "count"],
// //         datasets: [
// //           {
// //             label: "Profits",
// //             backgroundColor: "#172847",
// //             pointBackgroundColor: "white",
// //             borderWidth: 1,
// //             pointBorderColor: "#249EBF"
// //           }
// //         ]
// //       },
// //       //Chart.js options that controls the appearance of the chart
// //       options: {
// //         scales: {
// //           yAxes: [
// //             {
// //               ticks: {
// //                 beginAtZero: true
// //               },
// //               gridLines: {
// //                 display: true
// //               }
// //             }
// //           ],
// //           xAxes: [
// //             {
// //               gridLines: {
// //                 display: false
// //               }
// //             }
// //           ]
// //         },
// //         legend: {
// //           display: true
// //         },
// //         responsive: true,
// //         maintainAspectRatio: false
// //       }
// //     };
//   },
// //   async created() {
// //       console.log("mmmm",this.GetStats);
// //     await this.$store.dispatch("Products/ShowStats");
// //       console.log("mmmm",this.GetStats);
// //     this.datacollection.datasets[0].data = this.GetStats;
// //     this.numFollowers();
// //   },
// //   methods: {
// //     /**
// //      * get number of followers for the artist for the current day, month and year
// //      * @public This is a public method
// //      */
// //     numFollowers() {
// //       this.options.update;
// //       this.datacollection.update;
// //     //   if (this.loadedchart == true)
// //         this.renderChart(this.datacollection, this.options);
// //     }
// //   },
// mounted(){
//     const categories = this.chartData.map(d => d.category);
//     const totals = this.chartData.map(d => d.total);
//      const {
//       borderColor,
//       pointBorderColor,
//       pointBackgroundColor,
//       backgroundColor
//     } = this.chartColors;
//     this.renderChart(
//       {
//         labels: categories,
//         datasets: [
//           {
//             label: this.label,
//             data: totals,
//             borderColor: borderColor,
//             pointBorderColor: pointBorderColor,
//             pointBackgroundColor: pointBackgroundColor,
//             backgroundColor: backgroundColor
//           }
//         ]
//       },
//       this.options
//     );
// },
//   computed: {
//     ...mapGetters({
//       GetStats: "Products/GetStats",
//       loadedchart: "Products/loadedchart"
//     })
//   }
// };
// </script>







import { mapGetters } from "vuex";
import { Bar } from "vue-chartjs";
export default {
    extends: Bar,
    data(){
        return{
            datacollection:{
                labels: ["category"],
                datasets: [
                    {
                        label: ["total","count"],
                        backgroundColor: "#172847",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "#249EBF"
                    }
                ]
            },
            options:{
                scales: {   yAxes: [{ ticks: { beginAtZero: true },gridLines: {display: true}}],
                            xAxes: [{ gridLines: { display: false }}]},
                            legend: { display: true},
                            responsive: true,
                            maintainAspectRatio: false
                        }
                    };
    },
    async created() {
    console.log("there");    
    await this.$store.dispatch("Products/ShowStats");
    console.log("here");
     this.datacollection.datasets[0].data = this.GetStats;
     this.numFollowers();
    },
    methods: {
        numFollowers() {
            this.options.update;
            this.datacollection.update;
            if (this.loadedchart == true)
                this.renderChart(this.datacollection, this.options);
        }
  },
    computed: {
        ...mapGetters({
            GetStats: "Products/GetStats",
            loadedchart: "Products/loadedchart"
                    })
             }
};
</script>
