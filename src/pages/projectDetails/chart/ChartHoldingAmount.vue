<template>
  <section id="piechart" class="charts card" style="--p:clamp(1.5em,2vw,2em)">
    <h3 class="h9_em">Holding Amount Distribution</h3>

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
      percent: [ "70.94%", "16.44%", "7.88%", "3.15%", "1.57%" ],
      // series
      chartSeries: [ 34, 55, 41, 29, 10 ],
      // options
      chartOptions: {
      defaultLocale: 'en',
      legend: {
        position: 'right'
      },
      labels: [ "1", "2-3", "4-10", '10-50', '51-100' ],
      colors: [ "#6FFFE9", "#6A25D2", "#F7931E", "#0000B6", "#EF3340" ],
      
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
