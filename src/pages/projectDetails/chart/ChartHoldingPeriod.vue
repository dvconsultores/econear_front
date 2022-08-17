<template>
  <section id="piechart" class="charts card" style="--p:clamp(1.5em,2vw,2em)">
    <h3 class="h9_em">Holding Period Distribution</h3>

    <apexchart
      id="pie"
      width="100%"
      height="422.76px"
      type="donut"
      ref="chart" 
      :options="chartOptions"
      :series="chartSeries"
      :style="`--percent: ${Array}`"
    ></apexchart>
    <!-- need modify to work -->
  </section>
</template>

<script>
export default {
  name: "piechart",
  i18n: require("../i18n"),
  data() {
    return {
      percent: [ "70.94%", "16.44%", "7.88%", "3.15%", "1.57%", "57.20%" ],
      // series
      chartSeries: [ 34, 55, 41, 29, 10 ],
      // options
      chartOptions: {
      defaultLocale: 'en',
      legend: {
        position: 'right'
      },
      labels: [ "24H", "1-7d", "7-30D", '30-90D', '90D-1Y', "1Y+" ],
      colors: [ "#26A17B", "#6A25D2", "#F7931E", "#0000B6", "#EF3340", "#6FFFE9" ],
      
      // responsive
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      },
    };
  },
  computed: {
    Array() {
      for (item of this.percent) {item}
    }
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss" />
