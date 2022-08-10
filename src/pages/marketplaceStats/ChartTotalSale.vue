<template>
  <section id="barchart" class="charts card" style="--p:2em">
    <div class="toolbar wrap not_margin">
      <div class="divcol">
        <h3 class="h9_em">Total Sales</h3>

        <div class="legend acenter">
          <div class="marker" style="--color: #6A25D2" />
          <span>Volume</span>
          <img src="@/assets/icons/info-gray.svg" alt="info">
        </div>

        <div class="values acenter gap1">
          <h6 class="p bold">{{dataTotalSale.value}} N</h6>
          <span class="percent" :style="`--c:${dataTotalSale.percent.includes('+')?'var(--success)':'var(--error)'}`">
            {{dataTotalSale.percent}}%
          </span>
        </div>
      </div>

      <v-btn-toggle mandatory color="#60D2CA">
        <v-btn v-for="(item,i) in dataControlsChart" :key="i" color="transparent" @click="updateData(item.key)">
          <span>{{item.name}}</span>
        </v-btn>
      </v-btn-toggle>
    </div>

    <apexchart
      id="sales"
      class="tags"
      width="100%"
      height="422.76px"
      type="bar"
      ref="chart" 
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'Sales'; --color: hsl(264, 70%, 48%, .8)"
    ></apexchart>
  </section>
</template>

<script>
// autogenerate series functioin for style test
function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
// autogenerate series functioin for style test

export default {
  name: "chartTotalSale",
  i18n: require("./i18n"),
  data() {
    return {
      dataTotalSale: {
        value: "700,051",
        percent: "+9.22"
      },
      dataControlsChart: [
        { key: "24h", name: "24h" },
        { key: "7d", name: "7d" },
        { key: "30d", name: "30d" },
      ],
      selection: '24h',
      // series
      chartSeries: [
        {
          name: "",
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
      ],
      // options
      chartOptions: {
      defaultLocale: 'en',
        colors: ["#6A25D2"],
        chart: {
          stacked: false,
          toolbar: {
            show: false,
            autoSelected: "zoom",
          },
        },
        stroke: {
          curve: 'smooth',
          lineCap: 'butt',
          width: 1,
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          marker: {
            show: false,
          },
          x: {
            show: false
          }
        },
        legend: {
          show: false,
          position: 'top',
          horizontalAlign: "start",
        },
        xaxis: {
          type: "datetime",
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
      },
    };
  },
  methods: {
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
        default:
      }
    },
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss" />
