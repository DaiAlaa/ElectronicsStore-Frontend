<template>
    <div class="barchart" id="artistbarchart" testid="artistbarchart">
        <Chart/>
        </div>

</template>
<style lang="scss" scoped>

</style>
<script>
import Chart from "@/components/Chart.vue";
export default {
    name: "Statistics",
    components:{
        Chart
    }
}
</script>