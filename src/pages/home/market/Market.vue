<template>
  <section id="market" class="divcol gap2">
    <ModalMarketMore ref="modal" :DataMore="dataMore"></ModalMarketMore>
    <section class="marketContainer divcol acenter gap2">
      <aside class="sectionTop fill_w fwrap gap1" style="--fb: 1 1">
        <v-card v-for="(item,i) in dataMarket" :key="i"
          class="divcol jcenter tnowrap">
          <div class="space bold h11_em gap1">
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
          </div>
          <div class="space semibold h12_em gap1">
            <span class="acenter">
              {{item.state?'+':''}}{{item.value}}
              <img class="margin1left" :src="item.value?(item.state?require('@/assets/icons/increase.svg'):require('@/assets/icons/decrease.svg')):''">
            </span>
            <span>{{item.state?'+':''}}{{item.percent?item.percent+"%":''}}</span>
          </div>
        </v-card>
      </aside>

      <aside class="sectionDown fill_w fwrap gap1" style="--fb:1 1">
        <v-card v-for="(item,i) in dataBoard" :key="i" class="divcol">
          <div class="space">
            <h3 class="h9_em">{{item.title}}</h3>
            <button class="h11_em acenter" @click="$refs.modal.modalMarketMore=true;dataMore=item">
              <span>More</span>
              <v-icon color="var(--success)">mdi-chevron-right</v-icon>
            </button>
          </div>

          <div class="divcol gap1">
            <aside v-for="(item2,i2) in item.list.slice(0,3)" :key="i2"
              class="space gap1 tnowrap">
              <div class="acenter gap1">
                <span>{{i2+1}}</span>
                <img :src="item2.img || image" alt="Referencial Image" style="--w:clamp(3.5em,2vw,4.75em)">
                <div class="divcol">
                  <span class="h11_em">{{item2.name}}</span>
                  <span class="h12_em">{{item2.user}}</span>
                </div>
              </div>

              <div class="divcol jcenter aend tend">
                <span v-if="item2.percent || item2.percent ==0" :style="item2.state?'color:var(--success)':'color:var(--error)'"
                  class="h11_em">
                  {{item2.state?'+':''}}{{item2.percent}}%
                </span>

                <div v-if="item2.near&&item2.dollar" class="divcol">
                  <span :style="item2.state?'color:var(--success)':'color:var(--error)'" class="h11_em">
                    {{item2.near}}
                  </span>
                  <span class="h12_em">{{item2.dollar}}</span>
                </div>
              </div>
            </aside>
          </div>
        </v-card>
      </aside>
    </section>

    <article>
      <v-card class="fwrap center overflow">
        <img src="@/assets/images/anuncio.png" alt="Announcement Image" style="--w:min(100%,40em)">

        <div class="container-info space gap2">
          <h3 class="h7_em p bold">Our Collection MonkeONear</h3>
          <p class="p h11_em">
            The first ever community voting tool and wallet management tool that comes with 
            built-in data analysis system to find the best project on NEAR PROTOCOL
          </p>
          <v-btn href ="https://paras.id/collection/monkeonear.neartopia.near" target="_blank" class="btn" style="--bg: var(--primary);--bs: 0px 0px 2.5px 1px #6FFFE9;--p: 0 0.75em;
            width: 7.875em;">Buy Here</v-btn>
        </div>
      </v-card>
    </article>
  </section>
</template>

<script>
import axios from 'axios'
import { cp } from 'fs';
import ModalMarketMore from './ModalMarketMore.vue'
export default {
  name: "market",
  i18n: require("./i18n"),
  components: { ModalMarketMore },
  data() {
    return {
      dataMore: [],
      nearPrice: 0,
      nearPrice2: 0,
      parasPrice: null,
      volume24h: null,
      volume7d: null,
      image: require('@/assets/nfts/nft1.png'),
      dataMarket: [
        {
          name: "EST.MCAP",
          price: null,
          value: null,
          percent: null,
          state: false
        },
        {
          name: "USD/NEAR",
          price: null,
          value: null,
          percent: null,
          state: false
        },
        {
          name: "USD/$PARAS",
          price: null,
          value: null,
          percent: null,
          state: false
        },
        {
          name: "VOL 24H",
          price: null,
          value: null,
          percent: null,
          state: null,
        },
        {
          name: "VOL 7D",
          price: null,
          value: null,
          percent: null,
          state: null,
        },
      ],
      dataBoard: [
        {
          title: "Highest VOL Gainers",
          list: [
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              percent: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              percent: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              percent: null,
              state: true,
            },
          ]
        },
        {
          title: "Sales Of The Day",
          list: [
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
          ]
        },
        {
          title: "Top Floor Movers",
          list: [
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: null,
              user: null,
              near: null,
              dollar: null,
              state: true,
            },
          ]
        },
      ],
    }
  },
  async mounted() {
    await this.priceNEAR()
    await this.priceNEAR2()
    this.pricePARAS()
    this.highestVolGainerss()
    this.salesOfTheDay()
    this.recentlyListed()
    this.volumen24h()
    this.volumen7d()
    this.estMcap()
    
    this.interval = setInterval(function () {
        this.priceNEAR()
    }.bind(this), 60000);

    this.interval8 = setInterval(function () {
        this.estMcap()
    }.bind(this), 60000);

    this.interval2 = setInterval(function () {
        this.pricePARAS()
    }.bind(this), 60000);

    this.interval3 = setInterval(function () {
        this.highestVolGainerss()
    }.bind(this), 1800000);

    this.interval4 = setInterval(function () {
        this.salesOfTheDay()
    }.bind(this), 1800000);

    this.interval7 = setInterval(function () {
        this.recentlyListed()
    }.bind(this), 1800000);

    this.interval5 = setInterval(function () {
        this.volumen24h()
    }.bind(this), 1800000);

    this.interval6 = setInterval(function () {
        this.volumen7d()
    }.bind(this), 1800000);

  },
  methods: {
    async priceNEAR2(){
      this.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol=NEARUSDT")
        .then((response) => {
          this.nearPrice2 = response.data.lastPrice
        })
        .catch((e) => {
          //console.log(e)
        })
    },
    async priceNEAR(){
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=near&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
          this.nearPrice = response.data[0]
          this.dataMarket[1].price = "$"+this.nearPrice.current_price.toFixed(2)
          this.dataMarket[1].value = "$"+ this.nearPrice.price_change_24h.toFixed(2)
          this.dataMarket[1].percent = this.nearPrice.price_change_percentage_24h.toFixed(2)
          if (this.nearPrice.price_change_percentage_24h > 0) {
            this.dataMarket[1].state = true
          } else {
            this.dataMarket[1].state = false
          }
        })
        .catch((e) => {
          //console.log(e)
        })
    },
    async pricePARAS(){
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=paras&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
          this.parasPrice = response.data[0]
          this.dataMarket[2].price = "$"+this.parasPrice.current_price.toFixed(2)
          this.dataMarket[2].value = "$"+ this.parasPrice.price_change_24h.toFixed(2)
          this.dataMarket[2].percent = this.parasPrice.price_change_percentage_24h.toFixed(2)
          if (this.parasPrice.price_change_percentage_24h > 0) {
            this.dataMarket[2].state = true
          } else {
            this.dataMarket[2].state = false
          }
        })
        .catch((e) => {
          //console.log(e)
        })
    },
    async salesOfTheDay(){
      const url = "api/v1/salesoftheday"
      let item = {
        top: 10
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataBoard[1].list = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name + " #" + response.data[i].token_id,
              user: response.data[i].nft_contract_id,
              near: parseFloat(response.data[i].price).toFixed(1) + " N",
              dollar: "$"+(response.data[i].price * this.nearPrice2).toFixed(2),
              state: true,
            }
            this.dataBoard[1].list.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async recentlyListed(){
      const url = "api/v1/TopFloorMovers"
      let item = {
        top: 10
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataBoard[2].list = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              user: response.data[i].collection,
              near: parseInt(response.data[i].porcentaje),
              dollar: Number(response.data[i].floor_price).toFixed(2) + " N",
              state: true,
            }
            if (collection.near < 0) {
              collection.state = false
              collection.near = collection.near + "%"
            } else {
              collection.near = "+" + collection.near + "%"
            }

            this.dataBoard[2].list.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async highestVolGainerss(){
      const url = "api/v1/highestvolgainers"
      let item = {
        top: 10
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataBoard[0].list = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              user: response.data[i].nft_contract_id,
              percent: parseInt(response.data[i].porcentaje),
              state: true,
            }          
            if (response.data[i].porcentaje < 0) {
              collection.state = false
            }  
            this.dataBoard[0].list.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async estMcap(){
      const url = "https://api.degenwhale.club/historical"

      this.axios.get(url)
        .then((response) => {
          let est_market_cap = response.data.est_market_capitalization
          this.dataMarket[0].price = "$" + Number((est_market_cap.current_value * this.nearPrice2).toFixed(2)).toLocaleString("en-US")
          this.dataMarket[0].value = Number(((est_market_cap.current_value * this.nearPrice2) - (est_market_cap.value_24h_ago * this.nearPrice2)).toFixed(2)).toLocaleString("en-US")
          this.dataMarket[0].percent = (((est_market_cap.current_value / est_market_cap.value_24h_ago) * 100) - 100).toFixed(2)
          if (this.dataMarket[0].percent > 0) {
            this.dataMarket[0].state = true
          } else {
            this.dataMarket[0].state = false
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async volumen24h(){
      const url = "api/v1/volumen24h"

      this.axios.post(url)
        .then((response) => {
          this.volume24h = response.data[0]
          this.dataMarket[3].price = parseFloat(this.volume24h.volumen24h).toFixed(2) + " N"
          this.dataMarket[3].value = (this.volume24h.volumen24h - this.volume24h.volumen48h).toFixed(2) + " N"
          this.dataMarket[3].percent = parseFloat(this.volume24h.porcentaje).toFixed(2)
          if (this.volume24h.porcentaje > 0) {
            this.dataMarket[3].state = true
          } else {
            this.dataMarket[3].state = false
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async volumen7d(){
      const url = "api/v1/volumen7d"

      this.axios.post(url)
        .then((response) => {
          this.volume7d = response.data[0]
          this.dataMarket[4].price = parseFloat(this.volume7d.volumen7d).toFixed(2) + " N"
          this.dataMarket[4].value = (this.volume7d.volumen7d - this.volume7d.volumen14d).toFixed(2) + " N"
          this.dataMarket[4].percent = parseFloat(this.volume7d.porcentaje).toFixed(2)
          if (this.volume7d.porcentaje > 0) {
            this.dataMarket[4].state = true
          } else {
            this.dataMarket[4].state = false
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
  }
};
</script>

<style src="./Market.scss" lang="scss" />
