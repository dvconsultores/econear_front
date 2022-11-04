<template>
  <section v-if="chartSeries.length > 0" class="charts card" style="--p:clamp(1.5em,2vw,2em)" >
    <div class="toolbar divcol not_margin">
      <h3 class="h9_em">Rarity Distribution</h3>

      <div class="acenter gap2 wrap">
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #26A17B" />
            <span>Common</span>
            <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
          </div>
          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.common}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #F7972C" />
            <span>Uncommon</span>
            <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.uncommon}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #EF3340" />
            <span>Rare</span>
            <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.rare}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #0000B6" />
            <span>Epic</span>
            <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.epic}}</h6>
          </div>
        </aside>
        
        <aside class="divcol">
          <div class="legend acenter">
            <div class="marker" style="--color: #6A25D2" />
            <span>Legendary</span>
            <!-- <img src="@/assets/icons/info-gray.svg" alt="info"> -->
          </div>

          <div class="values acenter gap1">
            <h6 class="p bold">{{dataDisrtibution.legendary}}</h6>
          </div>
        </aside>
      </div>
    </div>

    <apexchart
      id="rarityDistribution"
      class="tags"
      width="100%"
      :height="Height"
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
  props: {
    Height: String,
  },
  data() {
    return {
      contract_nft: this.$route.params.id,
      dataDisrtibution: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0 },
      // series
      chartSeries: [
        {
          data: [0]
        },
        {
          data: [0]
        },
        {
          data: [0]
        },
        {
          data: [0]
        },
        {
          data: [0]
        },
      ],
      // options
      chartOptions: {
        defaultLocale: 'en',
        grid: {
          borderColor: '#90A4AE',
        },
        colors: ["#26A17B", "#F7972C", "#EF3340", "#0000B6", "#6A25D2"],
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
  mounted() {
    this.getGrafica()
  },
  methods: {
    getGrafica() {
      const url = "api/v1/StastRarityDistributionCollection"
      let item = {
        "collection": this.contract_nft,
      }
      this.axios.post(url, item)
        .then((response) => {
          let datos = [
            {
              rareza: 'common',
              cantidad: '0'
            },
            {
              rareza: 'uncommon',
              cantidad: '0'
            },
            {
              rareza: 'rare',
              cantidad: '0'
            },
            {
              rareza: 'epic',
              cantidad: '0'
            },
            {
              rareza: 'legendary',
              cantidad: '0'
            }
          ]

          for (var i = 0; i < response.data.length; i++) { 
            if (response.data[i].rareza === 'common') {
              datos[0].cantidad = response.data[i].cantidad
            } else if (response.data[i].rareza === 'uncommon') {
              datos[1].cantidad = response.data[i].cantidad
            } else if (response.data[i].rareza === 'rare') {
              datos[2].cantidad = response.data[i].cantidad
            } else if (response.data[i].rareza === 'epic') {
              datos[3].cantidad = response.data[i].cantidad
            } else if (response.data[i].rareza === 'legendary') {
              datos[4].cantidad = response.data[i].cantidad
            }
          }

          this.dataDisrtibution = { common: Number(datos[0].cantidad), uncommon: Number(datos[1].cantidad), rare: Number(datos[2].cantidad), epic: Number(datos[3].cantidad), legendary: Number(datos[4].cantidad) },

          this.chartSeries = [
            {
              name: this.letraMayuscula(datos[0].rareza),
              data: [Number(datos[0].cantidad)]
            },
            {
              name: this.letraMayuscula(datos[1].rareza),
              data: [Number(datos[1].cantidad)]
            },
            {
              name: this.letraMayuscula(datos[2].rareza),
              data: [Number(datos[2].cantidad)]
            },
            {
              name: this.letraMayuscula(datos[3].rareza),
              data: [Number(datos[3].cantidad)]
            },
            {
              name: this.letraMayuscula(datos[4].rareza),
              data: [Number(datos[4].cantidad)]
            }
          ]
        }).catch((error) => {
          console.log(error)
        })
      // console.log("SERIESSSSSSS", series)
      // return series;
    },
    letraMayuscula (cadena) {
      const primerCaracter = cadena.charAt(0).toUpperCase();
      const restoDeLaCadena = cadena.substring(1, cadena.length);
      return primerCaracter.concat(restoDeLaCadena);
    }
  },
};
</script>

<style src="@/styles/Charts.scss" lang="scss"></style>
