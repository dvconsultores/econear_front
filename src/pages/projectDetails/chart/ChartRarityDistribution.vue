<template>
  <section class="charts card" style="--p:2em">
    <div class="toolbar divcol not_margin">
      <h3 class="h9_em">Rarity Distribution</h3>

      <div class="acenter gap2 wrap">
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #F7931E" />
            <span>Common</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.common}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #26A17B" />
            <span>Rare</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.rare}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #EF3340" />
            <span>Super rare</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.superRare}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #0000B6" />
            <span>Legendary</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.legendary}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #6A25D2" />
            <span>Mythic</span>
            <img src="@/assets/icons/info-gray.svg" alt="info">
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.mythic}}</h6>
          </div>
        </aside>
      </div>
    </div>

    <apexchart
      class="tags"
      width="100%"
      height="422.76px"
      type="bar"
      ref="chart"
      :options="chartOptions"
      :series="chartSeries"
      style="--tag: 'Rarity Score'"
    ></apexchart>
    <span class="tag_bottom center">NFTs</span>
  </section>
</template>

<script>
export default {
  name: "chartRarityDistribution",
  i18n: require("../i18n"),
  data() {
    return {
      dataDisrtibution: { common: 146, rare: 116, superRare: 82, legendary: 57, mythic: 23 },
      // series
      chartSeries: [
        {
          data: [100]
        },
        {
          data: [80]
        },
        {
          data: [60]
        },
        {
          data: [40]
        },
        {
          data: [20]
        },
      ],
      // options
      chartOptions: {
        defaultLocale: 'en',
        grid: {
          borderColor: '#90A4AE',
        },
        colors: ["#F7931E", "#26A17B", "#EF3340", "#0000B6", "#6A25D2", "6A25D2"],
        chart: {
          stacked: false,
          toolbar: {
            show: false,
            autoSelected: "zoom",
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
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
          categories: [100, 80, 60, 40, 20]
        },
      },
    };
  },
  methods: {
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss"></style>
