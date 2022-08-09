<template>
  <section id="linechart" class="charts fwrap card">
    <!-- chart 1 -->
    <aside class="divcol">
      <div class="toolbar">
        <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateData(item.key)"
          :class="{active: selection===item.key}">
          {{item.name}}
        </v-btn>
      </div>

      <apexchart
        width="100%"
        height="422.76px"
        type="area"
        ref="chart" 
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </aside>


    <!-- chart 2 -->
    <aside class="divcol">
      <div class="toolbar">
        <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateData2(item.key)"
          :class="{active: selection2===item.key}">
          {{item.name}}
        </v-btn>
      </div>

      <apexchart
        width="100%"
        height="422.76px"
        type="area"
        ref="chart2" 
        :options="chartOptions"
        :series="chartSeries"
      ></apexchart>
    </aside>
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
        grid: {
          show: false,
        },
        colors: ["#60D2CA"],
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
        markers: {
          size: 0,
          style: "hollow",
          colors: ["#60D2CA"],
          hover: {
            size: 8,
          },
        },
        tooltip: {
          shared: true,
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
