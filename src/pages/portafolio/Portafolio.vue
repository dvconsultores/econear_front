<template>
  <section id="portafolio" class="divcol gap2">
    <aside class="divcol center tcenter align" style="max-width:max-content;gap:3em">
      <h2 class="h5_em p">My portafolio</h2>
      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for wallets"
        append-icon="mdi-magnify"
        style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF"
        class="search"
      ></v-text-field>
    </aside>

    <section class="container-profit fwrap gap2">
      <v-card v-for="(item,i) in dataProfit" :key="i"
        class="card" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
        <v-sheet class="card" style="--bg:hsl(210, 48%, 13%)">
          <aside class="divcol" style="gap:.5em">
            <div class="space gap2">
              <div class="acenter" style="gap:.5em">
                <img :src="require(`@/assets/logos/${item.token}.svg`)" alt="near" style="--w:2.25em">
                <h3 class="h7_em p bold">{{item.crypto}}</h3>
              </div>

              <v-chip class="btn h11_em" :style="`--b:none;--bs:none;--bg:hsl(210, 48%, 9%);--p:1em .8em;
                --c:${item.state_percent?'var(--success)':'var(--error)'}`">
                {{item.state_percent?'+':'-'}}{{item.percent}}%
              </v-chip>
            </div>
            <span class="h11_em">$ <span class="light">{{item.dollar}}</span></span>
          </aside>

          <aside class="divcol">
            <span>
              24h change
              <span class="margin2left" :style="item.state_change?'color:var(--success)':'color:var(--error)'">
                {{item.state_change?'+':'-'}}{{item.change}}
              </span>
            </span>

            <span>
              All time profit/loss
              <span class="margin2left" :style="item.state_profit?'color:var(--success)':'color:var(--error)'">
                {{item.state_profit?'+':'-'}}{{item.profit}}
              </span>
            </span>
          </aside>
        </v-sheet>
      </v-card>
    </section>

    <aside class="container-controls divcol gap1">
      <div class="space gap2">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControlsCharts" :key="i">
            <v-icon>mdi-{{item.icon}}</v-icon>
            <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs>
      </div>
    </aside>

    <section class="container-charts card" style="--bg:hsl(212 47% 12% / .5);--p:2em;--b:none">
      <Chart ref="chart"></Chart>
    </section>

    <aside class="space gap2">
      <h2 class="h9_em p">Assets</h2>

      <div class="acenter gap1">
        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs>
      </div>
    </aside>
  </section>
</template>

<script>
import Chart from './chart/Chart.vue'
export default {
  name: "portafolio",
  i18n: require("./i18n"),
  components: { Chart },
  data() {
    return {
      search: "",
      dataProfit: [
        {
          token: "near",
          crypto: "46,529",
          dollar: "232,245.65",
          percent: 12.8,
          state_percent: true,
          change: "28,747",
          state_change: true,
          profit: "28,747",
          state_profit: true,
        },
        {
          token: "econear",
          crypto: "36,379",
          dollar: "32,245.65",
          percent: 1.8,
          state_percent: false,
          change: "8,747",
          state_change: false,
          profit: "28,747",
          state_profit: true,
        },
      ],
      dataControlsCharts: [
        { icon: "chart-line", name: "Line Chart", active: false },
        { icon: "chart-pie", name: "Pie Chart", active: false },
        { icon: "chart-line-variant", name: "Statistics", active: false },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./Portafolio.scss" lang="scss" />
