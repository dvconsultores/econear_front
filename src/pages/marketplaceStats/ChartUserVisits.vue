<template>
  <section id="barchart" class="charts card" style="--p:clamp(1em,2vw,2em)">
    <div class="toolbar wrap not_margin">
      <div class="divcol">
        <h3 class="h9_em">User Visits</h3>

        <div class="legend acenter">
          <div class="marker" style="--color: #6A25D2" />
          <span># User Visits</span>
          <img src="@/assets/icons/info-gray.svg" alt="info">
        </div>

        <div class="values acenter gap1">
          <h6 class="p bold">{{dataUserVisits.value}}</h6>
          <span class="percent" :style="`--c:${dataUserVisits.percent.includes('+')?'var(--success)':'var(--error)'}`">
            {{dataUserVisits.percent}}%
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
      id="visits"
      class="tags"
      width="100%"
      :height="Height"
      type="line"
      ref="chart" 
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'User Visits'; --color: hsl(264, 70%, 48%, .8)"
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
  name: "chartUserVisits",
  i18n: require("./i18n"),
  props: {
    Height: String,
  },
  data() {
    return {
      dataUserVisits: {
        value: 281,
        percent: "+4.22"
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
          name: "users",
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
          borderColor: '#90A4AE',
        },
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
          width: 4.5,
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
          colors: ["#6A25D2"],
          strokeColors: '#6A25D2',
          hover: {
            size: 8,
          },
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
