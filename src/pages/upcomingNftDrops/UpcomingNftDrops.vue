<template>
  <section id="upcomingNftDrops" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Upcoming NFT Drops</h2>
      <p class="h10_em" style="max-width:60ch">
        New NFT Projects Upcoming to Near
      </p>
    </aside>

    <h3 class="h9_em p vermobile">Sort by</h3>
    
    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i2) in dataControls" :key="i2">
          <h6 class="p" @click="orderList(item)">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>
    
    <section v-if="variableCarga" class="section-down grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
      <v-card v-for="(item,i3) in dataNftDrops" :key="i3" class="card divcol"
        style="--p:clamp(1em,2vw,2em);gap:.5em">
        <div class="acenter" style="gap:.5em">
          <img :src="item.img" alt="NFT Image" style="--w: 4.5em">
          <div class="divcol">
            <h6 class="h11_em p">{{item.name}}</h6>
            <span style="color:var(--success)" class="h11_em">{{item.type}}</span>
          </div>
        </div>
        <p class="h11_em p light">{{item.desc}}</p>
        <div class="divcol light" style="gap:.2em">
          <!-- <div class="space h11_em">
            <span>Price</span>
            <span style="color:var(--success)">{{item.price}}</span>
          </div>

          <div class="space h11_em">
            <span>Supply</span>
            <span>{{item.supply}}</span>
          </div> -->

          <div class="space h11_em">
            <span>Date</span>
            <span>{{item.date}}</span>
          </div>

          <div class="space h11_em">
            <span>Votes</span>
            <span>{{item.votes}}</span>
          </div>
        </div>

        <aside class="cronometer center">
          <div class="grid" style="--gtc:repeat(4,1fr);gap:12px 0;place-items:center">
            <span v-for="(item2,i4) in item.cronometer" :key="i4" style="color:var(--success)">
              {{item2.time}}
            </span>
            <span v-for="n in 4" :key="n" class="h11_em">
              {{n==1?'Days':n==2?'Hrs':n==3?'Min':n==4?'Sec':null}}
            </span>
          </div>
        </aside>

        <aside class="space gap1 wrap_inv">
          <div class="acenter alignmobile">
            <v-btn v-for="(item2,i5) in item.redes" :key="i5" icon :href="item2.url"  target="_blank"
              style="--p:0">
              <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                style="--w:1.8em">
            </v-btn>
          </div>

          <div class="acenter alignmobile" style="gap:.5em">
            <v-btn class="btn" style="--p:.3em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)" @click="votar(item.type)">
              <!-- <v-icon>mdi-arrow-up-bold</v-icon> -->
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <!-- <v-btn class="btn" style="--p:.45em 1.5em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)" :href="item.website"  target="_blank">
              Mint
            </v-btn> -->
          </div>
        </aside>
      </v-card>
    </section>
    <center v-else style="margin-block:10em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center>
  </section>
</template>

<script>
import moment from 'moment';
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "mainnet",
  keyStore, 
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
};
export default {
  name: "upcomingNftDrops",
  i18n: require("./i18n"),
  data() {
    return {
      variableCarga: false,
      intervals: [],
      start: new Date().getTime(),
      dataControls: [
        // { name: "Sort by Price", active: false },
        { name: "Sort by Votes", active: true, id: 1},
        // { name: "Sort by Supply", active: false },
        { name: "Sort by Date", active: false, id: 2 },
      ],
      dataNftDrops: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft2.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   //: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft3.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft4.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft2.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft3.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/nfts/nft4.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   // price: "9 NEAR",
        //   // supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
        //   //: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
      ]
    }
  },
  async mounted() {
    await this.$store.dispatch('pushHomeNormal')
    this.refreshVote()
    this.upcomingListed()
  },
  methods: {
    orderList (item) {
      this.variableCarga = false
      if (item.id === 1) {
        this.dataControls[0].active = true
        this.dataControls[1].active = false
      } else if (item.id === 2) {
        this.dataControls[0].active = false
        this.dataControls[1].active = true
      }
      this.upcomingListed()
    },
    async getTime (timeEnd) {
      let timeNow = parseInt(new Date().getTime() / 1000)

      let time = timeEnd - timeNow

      var d = String(Math.floor(time / (3600*24)));
      var h = String(Math.floor(time % (3600*24) / 3600));
      var m = String(Math.floor(time % 3600 / 60));
      var s = String(Math.floor(time % 60));

      if (d.length === 1) {
        d = "0" + d
      }
      if (h.length === 1) {
        h = "0" + h
      }
      if (m.length === 1) {
        m = "0" + m
      }
      if (s.length === 1) {
        s = "0" + s
      }

      let item = {
        days: d,
        hours: h,
        minutes: m,
        seconds: s
      }

      return item
    },
    async votar (contract_id) {
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['votar_upcoming'],
          sender: wallet.account()
        })
        let aux = null
        await contract.votar_upcoming({
          collections: contract_id,
          voto: true
        })
          .then((response) => {
            aux = true            
          }).catch((error) => {
            //console.log(error)
            aux = false
          })
        if (aux) {
          //setTimeout(this.refreshVote, 30000)
          this.refreshVote()
        }
      }
    },
    refreshVote() {
      const url = "api/v1/refreshvotesupcoming"
      this.axios.post(url)
        .then((response) => {
          this.upcomingListed()
        }).catch((error) => {
          //console.log(error)
        })
    },
    async updateTime () {
      let timeNow = await parseInt(new Date().getTime() / 1000)
      for (var i = 0; i < this.dataNftDrops.length; i++) {
        let time = this.dataNftDrops[i].fecha_lanzamiento - timeNow

        var d = String(Math.floor(time / (3600*24)));
        var h = String(Math.floor(time % (3600*24) / 3600));
        var m = String(Math.floor(time % 3600 / 60));
        var s = String(Math.floor(time % 60));

        if (d.length === 1) {
          d = "0" + d
        }
        if (h.length === 1) {
          h = "0" + h
        }
        if (m.length === 1) {
          m = "0" + m
        }
        if (s.length === 1) {
          s = "0" + s
        }

        let cronometer = [ {time: d}, {time: h}, {time: m}, {time: s} ]

        this.dataNftDrops[i].cronometer = cronometer
      }
      
    },
    async upcomingListed(){
      this.dataNftDrops = []
      const url = "api/v1/upcominglisted"
      let item = {
        top: "20",
        order: null
      }
      if (this.dataControls[0].active === true) {
        item.order = "voto"
      }
      if (this.dataControls[1].active === true) {
        item.order = "fecha"
      }
     
      this.axios.post(url, item)
        .then(async (response) => {
          for (var i = 0; i < response.data.length; i++) {
            let times = await this.getTime(response.data[i].fecha_lanzamiento)
            let timeEnd = response.data[i].fecha_lanzamiento
            let collection = {
              img: require("@/assets/nfts/nft1.png"),
              name: response.data[i].project_name,
              fecha_lanzamiento: response.data[i].fecha_lanzamiento,
              type: response.data[i].collection,
              desc: response.data[i].descripcion,
              website: response.data[i].website,
              // price: "9 NEAR","01 FEB 2022 17:00:00"
              // supply: "3333",
              date: moment.unix(timeEnd).format("Do MMM YYYY, h:mm A"),
              votes: response.data[i].voto,
              cronometer: [ {time: times.days}, {time: times.hours}, {time: times.minutes}, {time: times.seconds} ],
              redes: [
                { name: "twitter", url: "https://twitter.com/" + response.data[i].telegram },
                { name: "discord", url: response.data[i].discord_server },
                { name: "telegram", url: "https://t.me/" + response.data[i].telegram },
              ],
            }
            this.dataNftDrops.push(collection)
          }
          this.variableCarga = true
          this.interval = setInterval(function () {
            this.updateTime()
          }.bind(this), 1000);
        }).catch((error) => {
          //console.log(error)
        })
    },
  }
};
</script>

<style src="./UpcomingNftDrops.scss" lang="scss" />
