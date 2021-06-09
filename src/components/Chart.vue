<script>
import { mapGetters } from "vuex";
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ["category", "total", "count"],
        datasets: [
          {
            label: "Profits",
            backgroundColor: "#172847",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF"
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  async created() {
      console.log("mmmm",this.GetStats);
    await this.$store.dispatch(
      "Products/ShowStats");
      console.log("mmmm",this.GetStats);
    this.datacollection.datasets[0].data = this.GetStats;
    this.numFollowers();
  },
  methods: {
    /**
     * get number of followers for the artist for the current day, month and year
     * @public This is a public method
     */
    numFollowers() {
      this.options.update;
      this.datacollection.update;
    //   if (this.loadedchart == true)
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
