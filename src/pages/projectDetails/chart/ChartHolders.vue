<template>
  <section id="linechart" class="charts triple card" style="--p:2em">
    <div class="toolbar wrap not_margin">
      <div class="divcol">
        <h3 class="h9_em">Holders</h3>

        <div class="space gap2">
          <aside class="divcol">
            <div class="legend acenter">
              <div class="marker" style="--color: #6FFFE9" />
              <span>Floor price</span>
              <img src="@/assets/icons/info-gray.svg" alt="info">
            </div>

            <div class="values acenter gap1">
              <h6 class="p bold">{{dataHolders.holders.value}} N</h6>
              <span class="percent" :style="`--c:${dataHolders.holders.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{dataHolders.holders.percent}}%
              </span>
            </div>
          </aside>

          <aside class="divcol">
            <div class="legend acenter">
              <div class="marker" style="--color: #F7931E" />
              <span>Whales</span>
              <img src="@/assets/icons/info-gray.svg" alt="info">
            </div>

            <div class="values acenter gap1">
              <h6 class="p bold">{{dataHolders.whales.value}} N</h6>
              <span class="percent" :style="`--c:${dataHolders.whales.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{dataHolders.whales.percent}}%
              </span>
            </div>
          </aside>
          
          <aside class="divcol">
            <div class="legend acenter">
              <div class="marker" style="--color: #6A25D2" />
              <span>Blue Chip Holders</span>
              <img src="@/assets/icons/info-gray.svg" alt="info">
            </div>


            <div class="values acenter gap1">
              <h6 class="p bold">{{dataHolders.blue.value}} N</h6>
              <span class="percent" :style="`--c:${dataHolders.blue.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{dataHolders.blue.percent}}%
              </span>
            </div>
          </aside>
        </div>
      </div>

      <v-btn-toggle mandatory color="#60D2CA">
        <v-btn v-for="(item,i) in dataControlsChart" :key="i" color="transparent" @click="updateData(item.key)">
          <span>{{item.name}}</span>
        </v-btn>
        <v-btn color="transparent">
          <v-icon color="#FFFFFF">mdi-calendar</v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>

    <apexchart
      id="holders"
      class="tags2"
      width="100%"
      height="422.76px"
      type="line"
      ref="chart"
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'Holders & Blue Chip Holders';--tag2: 'Whales'"
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
  name: "chartHolders",
  i18n: require("../i18n"),
  data() {
    return {
      dataHolders: {
        holders: {
          value: 361,
          percent: "+1.23"
        },
        whales: {
          value: 32,
          percent: "+5.63"
        },
        blue: {
          value: 281,
          percent: "+4.22"
        },
      },
      dataControlsChart: [
        { key: "24h", name: "24h" },
        { key: "7d", name: "7d" },
        { key: "30d", name: "30d" },
        { key: "90d", name: "90d" },
        { key: "1y", name: "1Y" },
        { key: "all", name: "ALL" },
      ],
      selection: '24h',
      // series
      chartSeries: [
        {
          name: '',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: '',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
          })
        },
        {
          name: '',
          data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 20
          })
        },
      ],
      // options
      chartOptions: {
        defaultLocale: 'en',
        grid: {
          borderColor: '#90A4AE',
        },
        colors: ["#6FFFE9", "#F7931E", "#6A25D2"],
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
          colors: ["#6FFFE9", "#F7931E", "#6A25D2"],
          strokeColors: ["#6FFFE9", "#F7931E", "#6A25D2"],
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
        case '90d':
          this.$refs.chart.zoomX(
            new Date('27 Feb 2012').getTime(),
            new Date('27 Feb 2013').getTime()
          )
          break
        case '1y':
          this.$refs.chart.zoomX(
            new Date('27 Feb 2012').getTime(),
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
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss" />
