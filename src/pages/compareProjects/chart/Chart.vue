<template>
  <section id="linechart" class="charts fwrap card doble2">
    <!-- chart 1 -->
    <aside class="divcol">
      <div class="toolbar responsive_actions wrap">
        <div class="divcol">
          <!-- <h3 class="h9_em">Buyers &amp; Traders</h3> -->

          <div class="space gap2">
            <aside class="divcol">
              <div class="legend acenter">
                <div class="marker" style="--color: #92C5FC" />
                <span>Buyers</span>
              </div>
            </aside>
            
            <aside class="divcol">
              <div class="legend acenter">
                <div class="marker" style="--color: #FF0000" />
                <span>Sellers</span>
              </div>
            </aside>
          </div>
        </div>

        <v-btn-toggle mandatory background-color="var(--primary)">
          <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateDate(item)"
            :class="{active: selection===item.key}">
            {{item.name}}
          </v-btn>
        </v-btn-toggle>
      </div>

      <apexchart
        width="100%"
        :height="chartHeight"
        type="area"
        ref="chart" 
        :options="chartOptions1"
        :series="chartSeries1"
      ></apexchart>
    </aside>


    <!-- chart 2 -->
    <!-- <aside class="divcol">
      <div class="toolbar responsive_actions">
        <v-btn v-for="(item,i) in dataControls" :key="i" @click="updateDate2(item)"
          :class="{active: selection2===item.key}">
          {{item.name}}
        </v-btn>
      </div>

      <apexchart
        width="100%"
        :height="chartHeight"
        type="area"
        ref="chart2" 
        :options="chartOptions2"
        :series="chartSeries2"
      ></apexchart>
    </aside> -->
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
  name: "lineChart",
  i18n: require("../i18n"),
  data() {
    return {
      chartHeight: "422.76px",
      dataControls: [
        { key: "24h", name: "24h" },
        { key: "7d", name: "7d" },
        { key: "30d", name: "30d" },
        { key: "60d", name: "60d" },
        { key: "90d", name: "90d" },
        { key: "1y", name: "1Y" },
      ],
      itemDate: { key: "24h", name: "24h" },
      itemDate2: { key: "24h", name: "24h" },
      selection: '24h',
      selection2: '24h',
      auxChart: [
        {
          name: 'Project 1',
          data: [],
          active: false
        },
        {
          name: 'Project 2',
          data: [],
          active: false
        }
      ],
      // series
      chartSeries1: [
      ],
      chartSeries2: [
      ],
      // options
      chartOptions1: {
      defaultLocale: 'en',
        grid: {
          show: false,
        },
        colors: ["#92C5FC", "#FF0000"],
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
          colors: ["#92C5FC", "#FF0000"],
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
      chartOptions2: {
      defaultLocale: 'en',
        grid: {
          show: false,
        },
        colors: ["#FF0000"],
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
      collecion1: null,
      collecion2: null,
      controls: "Floor price"
    };
  },
  mounted() {
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    changeGrafic(item) {
      this.controls = item.name

      if (this.controls === "Floor price") {
        this.getGraficaFloor(this.collecion1)
        this.getGraficaFloor2(this.collecion2)
      } else if (this.controls === "Volume") {
        this.getGraficaVolume()
        this.getGraficaVolume2()
      } else if (this.controls === "Sales") {
        this.getGraficaSales()
        this.getGraficaSales2()
      } else if (this.controls === "Liquidity") {
        this.getGraficaLiquidity()
        this.getGraficaLiquidity2()
      }
    },
    updateDate(item) {
      this.selection = item.key
      this.itemDate = item

      this.updateDate2(item)

      if (this.controls === "Floor price") {
        this.getGraficaFloor(this.collecion1)
      } else if (this.controls === "Volume") {
        this.getGraficaVolume()
      } else if (this.controls === "Sales") {
        this.getGraficaSales()
      } else if (this.controls === "Liquidity") {
        this.getGraficaLiquidity()
      }
    },
    resetChart() {
      this.auxChart = [
        {
          name: 'Project 1',
          data: [],
          active: false
        },
        {
          name: 'Project 2',
          data: [],
          active: false
        }
      ]
    },
    getGraficaFloor(collection) {
      this.resetChart()
      this.collecion1 = collection
      var seriesAverage = [];
      const url = "api/v1/stastpricecollection"
      let item = {
        "collection": collection,
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
      } else if (this.itemDate.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].floor_price).toFixed(2)
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[0].name = collection
          this.auxChart[0].data = seriesAverage
          this.auxChart[0].active = true

          if (this.auxChart[1].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaFloor2(collection) {
      this.resetChart()
      this.collecion2 = collection
      var seriesAverage = [];
      const url = "api/v1/stastpricecollection"
      let item = {
        "collection": collection,
        "value": "h",
        "time": 24
      }

      if (this.itemDate2.key === "24h") {
        item.value = "h"
        item.time = 24
      } else if (this.itemDate2.key === "7d") {
        item.value = "d"
        item.time = 7
      } else if (this.itemDate2.key === "30d") {
        item.value = "d"
        item.time = 30
      } else if (this.itemDate2.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate2.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate2.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].floor_price).toFixed(2)
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[1].name = collection
          this.auxChart[1].data = seriesAverage
          this.auxChart[1].active = true

          if (this.auxChart[0].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }
          
          // this.chartSeries2 = [
          //   {
          //     name: 'Floor Price',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaVolume() {
      this.resetChart()
      var seriesFloor = [];
      var seriesAverage = [];
      const url = "api/v1/stastmarketcapvolumencollection"
      let item = {
        "collection": this.collecion1,
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
      } else if (this.itemDate.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yFloor = Number(response.data[i].market_cap).toFixed(2)
            let yAverage = Number(response.data[i].volumen).toFixed(2)
            seriesFloor.push([x, yFloor]);
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[0].name = "Project 1"
          this.auxChart[0].data = seriesAverage
          this.auxChart[0].active = true

          if (this.auxChart[1].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries1 = [
          //   {
          //     name: 'Volume',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaSales() {
      this.resetChart()
      var seriesAverage = [];
      const url = "api/v1/StastSalesLiquidCollection"
      let item = {
        "collection": this.collecion1,
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
      } else if (this.itemDate.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].sales).toFixed(2)
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[0].name = "Project 1"
          this.auxChart[0].data = seriesAverage
          this.auxChart[0].active = true

          if (this.auxChart[1].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries1 = [
          //   {
          //     name: 'Sales',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaLiquidity() {
      this.resetChart()
      var seriesAverage = [];
      const url = "api/v1/StastSalesLiquidCollection"
      let item = {
        "collection": this.collecion1,
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
      } else if (this.itemDate.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].liquidez).toFixed(2)
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[0].name = "Project 1"
          this.auxChart[0].data = seriesAverage
          this.auxChart[0].active = true

          if (this.auxChart[1].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries1 = [
          //   {
          //     name: 'Liquidity',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    updateDate2(item) {
      this.selection2 = item.key
      this.itemDate2 = item
      if (this.controls === "Floor price") {
        this.getGraficaFloor2(this.collecion2)
      } else if (this.controls === "Volume") {
        this.getGraficaVolume2()
      } else if (this.controls === "Sales") {
        this.getGraficaSales2()
      } else if (this.controls === "Liquidity") {
        this.getGraficaLiquidity2()
      }
    },
    getGraficaVolume2() {
      this.resetChart()
      var seriesFloor = [];
      var seriesAverage = [];
      const url = "api/v1/stastmarketcapvolumencollection"
      let item = {
        "collection": this.collecion2,
        "value": "h",
        "time": 24
      }

      if (this.itemDate2.key === "24h") {
        item.value = "h"
        item.time = 24
      } else if (this.itemDate2.key === "7d") {
        item.value = "d"
        item.time = 7
      } else if (this.itemDate2.key === "30d") {
        item.value = "d"
        item.time = 30
      } else if (this.itemDate2.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate2.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate2.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yFloor = Number(response.data[i].market_cap).toFixed(2)
            let yAverage = Number(response.data[i].volumen).toFixed(2)
            seriesFloor.push([x, yFloor]);
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[1].name = "Project 2"
          this.auxChart[1].data = seriesAverage
          this.auxChart[1].active = true

          if (this.auxChart[0].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries2 = [
          //   {
          //     name: 'Volume',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaSales2() {
      this.resetChart()
      var seriesAverage = [];
      const url = "api/v1/StastSalesLiquidCollection"
      let item = {
        "collection": this.collecion2,
        "value": "h",
        "time": 24
      }

      if (this.itemDate2.key === "24h") {
        item.value = "h"
        item.time = 24
      } else if (this.itemDate2.key === "7d") {
        item.value = "d"
        item.time = 7
      } else if (this.itemDate2.key === "30d") {
        item.value = "d"
        item.time = 30
      } else if (this.itemDate2.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate2.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate2.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].sales).toFixed(2)
           
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[1].name = "Project 2"
          this.auxChart[1].data = seriesAverage
          this.auxChart[1].active = true

          if (this.auxChart[0].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries2 = [
          //   {
          //     name: 'Sales',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    getGraficaLiquidity2() {
      this.resetChart()
      var seriesAverage = [];
      const url = "api/v1/StastSalesLiquidCollection"
      let item = {
        "collection": this.collecion2,
        "value": "h",
        "time": 24
      }

      if (this.itemDate2.key === "24h") {
        item.value = "h"
        item.time = 24
      } else if (this.itemDate2.key === "7d") {
        item.value = "d"
        item.time = 7
      } else if (this.itemDate2.key === "30d") {
        item.value = "d"
        item.time = 30
      } else if (this.itemDate2.key === "60d") {
        item.value = "d"
        item.time = 60
      } else if (this.itemDate2.key === "90d") {
        item.value = "d"
        item.time = 90
      } else if (this.itemDate2.key === "1y") {
        item.value = "d"
        item.time = 365
      }
    
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let x = moment(response.data[i].fecha).unix() * 1000
            let yAverage = Number(response.data[i].liquidez).toFixed(2)
           
            seriesAverage.push([x, yAverage]);
          }

          this.auxChart[1].name = "Project 2"
          this.auxChart[1].data = seriesAverage
          this.auxChart[1].active = true

          if (this.auxChart[0].active === true) {
            this.chartSeries1 = [
              {
                name: this.auxChart[0].name,
                data: this.auxChart[0].data
              },
              {
                name: this.auxChart[1].name,
                data: this.auxChart[1].data
              },
            ]
          }

          // this.chartSeries2 = [
          //   {
          //     name: 'Liquidity',
          //     data: seriesAverage
          //   },
          // ]
        }).catch((error) => {
          console.log(error)
        })
    },
    Responsive() {
      if (window.innerWidth >= 880) {
        this.widthLimiter = true;
        this.chartHeight = "422.76px"
      } else {
        this.widthLimiter = false;
        this.chartHeight = "222.76px"
      }
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
