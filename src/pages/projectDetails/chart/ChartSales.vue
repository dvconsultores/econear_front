<template>
  <section id="linechart" class="charts doble card" style="--p:clamp(1.5em,2vw,2em)">
    <div class="toolbar wrap not_margin">
      <div class="divcol">
        <h3 class="h9_em">Sales & Liquidity</h3>

        <div class="space gap2">
          <aside class="divcol">
            <div class="legend acenter">
              <div class="marker" style="--color: #6A25D2" />
              <span>Sales</span>
              <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
            </div>

            <div class="values acenter gap1">
              <h6 class="p bold">{{dataSales.sales.value}}</h6>
              <!-- <span class="percent" :style="`--c:${dataSales.sales.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{dataSales.sales.percent}}%
              </span> -->
            </div>
          </aside>
          
          <aside class="divcol">
            <div class="legend acenter">
              <div class="marker" style="--color: #F7931E" />
              <span>Liquidity</span>
              <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
            </div>


            <div class="values acenter gap1">
              <h6 class="p bold">{{dataSales.liquidity.value}}</h6>
              <!-- <span class="percent" :style="`--c:${dataSales.liquidity.percent.includes('+')?'var(--success)':'var(--error)'}`">
                {{dataSales.liquidity.percent}}%
              </span> -->
            </div>
          </aside>
        </div>
      </div>

      <v-btn-toggle mandatory color="#60D2CA">
        <v-btn v-for="(item,i) in dataControlsChart" :key="i" color="transparent" @click="updateDate(item)">
          <span>{{item.name}}</span>
        </v-btn>
        <!-- <v-btn color="transparent">
          <v-icon color="#FFFFFF">mdi-calendar</v-icon>
        </v-btn> -->
      </v-btn-toggle>
    </div>

    <apexchart
      id="sales"
      class="tags2"
      width="100%"
      :height="Height"
      type="line"
      ref="chart"
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'Sales';--tag2: 'Liquidity'; --text-color: #ffffff"
    ></apexchart>
  </section>
</template>

<script>
import moment from 'moment';
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
  name: "chartPrice",
  i18n: require("../i18n"),
  props: {
    Height: String,
  },
  data() {
    return {
      contract_nft: this.$route.params.id,
      dataSales: {
        sales: {
          value: 16,
          percent: "+8.42"
        },
        liquidity: {
          value: 0.88,
          percent: "+0.08"
        },
      },
      dataControlsChart: [
        { key: "24h", name: "24h" },
        { key: "7d", name: "7d" },
        { key: "30d", name: "30d" },
        { key: "90d", name: "90d" },
        { key: "1y", name: "1Y" }
      ],
      itemDate: { key: "24h", name: "24h" },
      selection: '24h',
      // series
      chartSeries: [
        // {
        //   name: '',
        //   data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 60
        //   })
        // },
        // {
        //   name: '',
        //   data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //     min: 10,
        //     max: 20
        //   })
        // },
      ],
      // options
      chartOptions: {
        defaultLocale: 'en',
        grid: {
          borderColor: '#90A4AE',
        },
        colors: ["#6A25D2", "#F7931E"],
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
          colors: ["#6A25D2", "#F7931E"],
          strokeColors: ["#6A25D2", "#F7931E"],
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
        yaxis: [
          {
            title: {
              text: ""
            },
          },
          {
            opposite: true,
            title: {
              text: ""
            }
          }
        ],
      },
    };
  },
  mounted() {
    this.getGrafica()
  },
  methods: {
    updateDate(item) {
      this.itemDate = item
      this.getGrafica()
    },
    getGrafica() {
      var seriesBuyers = [];
      var seriesSellers = [];
      const url = "api/v1/StastSalesLiquidCollection"
      let item = {
        "collection": this.contract_nft,
        "value": "h",
        "time": 24
      }

      if (this.itemDate.key === "24h") {
        item.value = "h"
        item.time = 24
      } else if (this.itemDate.key === "7d") {
        item.value = "d"
        item.time = 7
      } else if (this.itemDate.key === "30d") {
        item.value = "d"
        item.time = 30
      } else if (this.itemDate.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate.key === "1y") {
        item.value = "d"
        item.time = 365
      }
      var contBuyers = 0
      var contSellers = 0
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = (moment(response.data[i].fecha).unix() * 1000)
      
            let yBuyers = Number(response.data[i].sales).toFixed(2)
            let ySellers = Number(response.data[i].liquidez).toFixed(2)
            contBuyers = Number(contBuyers) + Number(yBuyers)
            contSellers = Number(contSellers) + Number(ySellers)
            seriesBuyers.push([x, yBuyers]);
            seriesSellers.push([x, ySellers]);
          }

          //this.dataSales.sales.value = (contBuyers / response.data.length).toFixed(2)
          this.dataSales.sales.value = seriesBuyers[response.data.length - 1][1]
          this.dataSales.liquidity.value = seriesSellers[response.data.length - 1][1]
          //this.dataSales.liquidity.value = (contSellers / response.data.length).toFixed(2)
          

          this.chartSeries = [
            {
              name: 'Sales',
              data: seriesBuyers
            },
            {
              name: 'Liquidez',
              data: seriesSellers
            },
          ]
        }).catch((error) => {
          //console.log(error)
        })
      // //console.log("SERIESSSSSSS", series)
      // return series;
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
