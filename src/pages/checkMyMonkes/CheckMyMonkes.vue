<template>
  <section id="checkMyMonkes" class="divcol gap2">
    <aside id="container-header" class="divcol center tcenter align">
      <!-- <h2 class="h5_em p">My portfolio</h2> -->
      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Check my wallet"
        style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF"
        class="customeFilter search"
      >
        <template v-slot:append>
          <v-btn class="btn" @click="submit()">
            <span style="color: #FFF !important">Submit</span>
          </v-btn>
        </template>
      </v-text-field>
    </aside>

    <!-- mosaico -->
    <section class="mosaico card grid"
      style="--gtc: repeat(auto-fit, minmax(min(100%,var(--size)),1fr)); gap:1.5em;--p:clamp(1em,2vw,2em);--size:16.2225em">
      <v-card v-for="(item,i) in dataTable" :key="i" class="divcol alignmobile" color="#112131" style="border-radius: .4vmax">
        <img class="h11_em" :src="item.img" alt="nft" style="--w:100%">
        <aside class="contenido divcol" style="gap:.2em">
          <span :title="item.name" class="Title tcenter h11_em">{{verificar(item.name, 20)}}</span>
          <div class="space h11_em">
            <span>Token ID</span>
            <span :title="item.token_id">
              {{verificar(item.token_id, 14)}}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>
          <div class="space h11_em">
            <span>Floor Price</span>
            <span>
              {{item.price}}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>
          <div class="space h11_em">
            <span>Rarity Score</span>
            <span>
              {{item.rarity_score}}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>

          <!-- <div class="space h11_em">
            <span>Price</span>
            <span v-show="seeCoin == 1">{{item.price}}</span>
            <span v-show="seeCoin == 2">{{item.price_usd}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Floor Price</span>
            <span>{{item.price}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Market</span>
            <span>{{item.market_name}}</span>
          </div> -->

          <div class="space">
            <span class="h11_em">Rarity</span>
            <v-chip style="border-radius: .3vmax"
              :color="item.rarity=='common'?'#26A17B':
              item.rarity=='uncommon'?'#F7972C':
              item.rarity=='rare'?'#EF3340':
              item.rarity=='epic'?'#0000B6':
              item.rarity=='legendary'?'#6A25D2':null">
              <span class="tfirst">{{item.rarity}}</span>
            </v-chip>
          </div>
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  name: "checkMyMonkes",
  i18n: require("./i18n"),
  data() {
    return {
      search: "",
      dataTable: [
        {
          img: require('@/assets/images/c2.png'),
          name: "Collection o Nft Name",
          desc: "Lorem ipum dolor sit",
          token_id: "0.89",
          price: "104.4 N",
          market_icon: require('@/assets/images/c2.png'),
          marketplace: "marketplace.paras.near",
          holdings: "1234/3333",
          state_change: false,
          rarity: "common",
        },
      ],
      index: 0,
      nearPrice: 0,
      seeCoin: 1,
      cont: 0,
      mostrarTotal: false,
      mostrarTotal2: false
    }
  },
  methods: {
    verificar(item, num) {
      if (item.length > num) {
        return item.substring(0, num) + "..."
      }
      return item
    },
    submit() {
      console.log("submit buttom");
    }
  }
};
</script>

<style src="./CheckMyMonkes.scss" lang="scss" />
