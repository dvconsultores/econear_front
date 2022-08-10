<template>
  <section class="charts card" style="--p:2em">
    <div class="toolbar divcol not_margin">
      <h3 class="h9_em">Rarity and price</h3>

      <div class="acenter gap2 wrap">
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #3EFFF3" />
            <span>Price</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #F7931E" />
            <span>Rarity</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>
        </aside>
      </div>
    </div>

    <apexchart
      class="tags"
      width="100%"
      height="422.76px"
      type="scatter"
      ref="chart"
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'Price (NEAR)'"
    ></apexchart>
    <span class="tag_bottom center">Rarity score</span>
  </section>
</template>

<script>
// autogenerate series functioin for style test
function generateData(baseval, count, yrange) {
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
  name: "chartRarityPrice",
  i18n: require("../i18n"),
  data() {
    return {
      // series
      chartSeries: [
        {
          name: 'Bubble1',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble2',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
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
        colors: ["#3EFFF3", "#F7931E"],
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
          style: "hollow",
          colors: ["#3EFFF3", "#F7931E"],
          strokeColors: ["#3EFFF3", "#F7931E"],
        },
        tooltip: {
          fillSeriesColor: true,
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
          tickAmount: 12,
          type: 'category',
        },
      },
    };
  },
  methods: {
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss"></style>
