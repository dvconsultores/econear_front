<template>
  <section id="piechart" class="charts fwrap card">
    <!-- chart 1 -->
    <aside  v-if="chartSeries.length > 0" class="container-linechart divcol">
      <!-- <div class="toolbar responsive_actions">
        <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateData(item.key)"
          :class="{active: selection===item.key}">
          {{item.name}}
        </v-btn>
      </div> -->

      <apexchart
        width="100%"
        height="600px"
        type="donut"
        ref="chart" 
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </aside>


    <!-- chart 2 -->
    <!-- <aside class="container-linechart divcol">
      <div class="toolbar responsive_actions">
        <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateData2(item.key)"
          :class="{active: selection2===item.key}">
          {{item.name}}
        </v-btn>
      </div>

      <apexchart
        width="100%"
        height="422.76px"
        type="donut"
        ref="chart2" 
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </aside> -->
  </section>
</template>

<script>
export default {
  name: "lineChart",
  i18n: require("../i18n"),
  data() {
    return {
      dataControls: [
        { key: "24h", name: "24h" },
        { key: "7d", name: "7d" },
        { key: "30d", name: "30d" },
        { key: "60d", name: "60d" },
        { key: "90d", name: "90d" },
        { key: "all", name: "ALL" },
      ],
      selection: '24h',
      selection2: '24h',
      // series
      chartSeries: [],
      // options
      chartOptions: {
      defaultLocale: 'en',
      legend: {
        position: 'bottom'
      },
      labels: [ "NEAR", "USDT", "USDC", "DAI", "UTO", "NEXP" ],
      colors: [ "#6A25D2", "#259976", "#2774CA", "#F5AC37", "#202124", "#48C558" ],
      
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
  methods: {
    getGrafica(chartSeries) {
      this.chartSeries = []
      this.chartSeries = chartSeries
      //this.chartSeries = [15, 20, 60, 30, 45, 32]
    },
    updateData: function(timeline) {
      this.selection = timeline
      
      switch (timeline) {
        case '24h':
          this.$refs.chart.zoomX(
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '7d':
          this.$refs.chart.zoomX(
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '30d':
          this.$refs.chart.zoomX(
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '60d':
          this.$refs.chart.zoomX(
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '90d':
          this.$refs.chart.zoomX(
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'all':
          this.$refs.chart.zoomX(
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        default:
      }
    },

    updateData2: function(timeline) {
      this.selection2 = timeline
      
      switch (timeline) {
        case '24h':
          this.$refs.chart2.zoomX(
            new Date('28 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '7d':
          this.$refs.chart2.zoomX(
            new Date('27 Sep 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '30d':
          this.$refs.chart2.zoomX(
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '60d':
          this.$refs.chart2.zoomX(
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '90d':
          this.$refs.chart2.zoomX(
            new Date('01 Jan 2013').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case 'all':
          this.$refs.chart2.zoomX(
            new Date('23 Jan 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        default:
      }
    },
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss" />
