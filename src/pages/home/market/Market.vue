<template>
  <section id="market" class="divcol gap2">
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
            <button class="h11_em">More<v-icon color="var(--success)">mdi-chevron-right</v-icon></button>
          </div>

          <div class="divcol gap1">
            <aside v-for="(item2,i2) in item.list" :key="i2"
              class="space gap1 tnowrap">
              <div class="acenter gap1">
                <span>{{i2+1}}</span>
                <img :src="item2.img || image" alt="Referencial Image" style="--w:clamp(4em,4.7vw,4.75em)">
                <div class="divcol">
                  <span class="h11_em">{{item2.name}}</span>
                  <span class="h12_em">{{item2.user}}</span>
                </div>
              </div>

              <div class="divcol jcenter aend tend">
                <span v-if="item2.percent" :style="item2.state?'color:var(--success)':'color:var(--error)'"
                  class="h11_em">
                  {{item2.state?'+':'-'}}{{item2.percent}}%
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
      <v-card class="fwrap center overflow" style="--fb: 1 1 495px">
        <img src="@/assets/images/anuncio.png" alt="Announcement Image" style="--w:min(100%,40em)">

        <div class="container-info space gap2">
          <h3 class="h7_em p bold">Our Collection MonkeONear</h3>
          <p class="p h11_em">
            The first ever community voting tool and wallet management tool that comes with 
            built-in data analysis system to find the best project on NEAR PROTOCOLV
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
export default {
  name: "market",
  i18n: require("./i18n"),
  data() {
    return {
      nearPrice: null,
      parasPrice: null,
      volume24h: null,
      image: require('@/assets/nfts/nft1.png'),
      dataMarket: [
        {
          name: "EST.MCAP",
          price: "$12,531.843",
          value: "$0.07",
          percent: "0.25",
          state: true
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
          price: "30,516.38 N",
          value: "1,122.95 N",
          percent: "3.55",
          state: false
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
          title: "Recently Added",
          list: [
            {
              img: require('@/assets/nfts/nft1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "123,45 N",
              dollar: "$ 3102",
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "23,45 N",
              dollar: "$ 120,3",
              state: true,
            },
            {
              img: require('@/assets/nfts/nft1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "5 N",
              dollar: "$ 28",
              state: true,
            },
          ]
        },
      ],
    }
  },
  async mounted() {
    await this.priceNEAR()
    this.pricePARAS()
    this.highestVolGainers()
    this.salesOfTheDay()
    this.volumen24h()
    
    this.interval = setInterval(function () {
        this.priceNEAR()
    }.bind(this), 60000);

    this.interval2 = setInterval(function () {
        this.pricePARAS()
    }.bind(this), 60000);

    this.interval3 = setInterval(function () {
        this.highestVolGainers()
    }.bind(this), 1800000);

    this.interval4 = setInterval(function () {
        this.salesOfTheDay()
    }.bind(this), 1800000);

    this.interval5 = setInterval(function () {
        this.volumen24h()
    }.bind(this), 1800000);

    // this.getVolume()
    // this.interval3 = setInterval(function () {
    //     this.getVolume()
    // }.bind(this), 60000);
  },
  methods: {
    async priceNEAR(){
      // this.dataMarket[1].price = null
      // this.dataMarket[1].value = null
      // this.dataMarket[1].percent = null
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
          console.log(e)
        })
    },
    async pricePARAS(){
      // this.dataMarket[2].price = null
      // this.dataMarket[2].value = null
      // this.dataMarket[2].percent = null
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
          console.log(e)
        })
    },
    async salesOfTheDay(){
      const url = "api/v1/salesoftheday"
      let item = {
        top: 3
      }
      this.axios.post(url, item)
        .then((response) => {
          console.log("sales", response.data)
          this.dataBoard[1].list = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              user: response.data[i].nft_contract_id,
              near: parseFloat(response.data[i].max_price).toFixed(1) + " N",
              dollar: "$"+(response.data[i].max_price * this.nearPrice.current_price).toFixed(2),
              state: true,
            }
            this.dataBoard[1].list.push(collection)
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async highestVolGainers(){
      const url = "api/v1/highestvolgainers"
      let item = {
        top: 3
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
          console.log(error)
        })
    },
    async volumen24h(){
      const url = "api/v1/volumen24h"

      this.axios.post(url)
        .then((response) => {
          this.volume24h = response.data[0]
          console.log(this.volume24h)
          this.dataMarket[3].price = parseFloat(this.volume24h.volumen24h).toFixed(2) + " N"
          this.dataMarket[3].value = (this.volume24h.volumen24h - this.volume24h.volumen48h).toFixed(2) + " N"
          this.dataMarket[3].percent = parseFloat(this.volume24h.porcentaje).toFixed(2)
          if (this.volume24h.porcentaje > 0) {
            this.dataMarket[3].state = true
          } else {
            this.dataMarket[3].state = false
          }
        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./Market.scss" lang="scss" />
