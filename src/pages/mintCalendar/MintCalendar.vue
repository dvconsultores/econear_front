<template>
  <section id="mintCalendar" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Mint Calendar</h2>
      <!-- <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p> -->
    </aside>
    
    <Calendar ref="calendar"></Calendar>
    
    <section class="divcol">
      <div class="acenter gap1 margin2bottom">
        <h3 class="h9_em p bold">Date:</h3>
        <v-chip class="h9_em bold" style="padding:.8em" color="hsl(210, 50%, 8%)">{{date}}</v-chip>
      </div>

      <section class="section-down divcol gap2">
        <aside class="grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
          <v-card v-for="(item,i) in dataProjects" :key="i" class="card divcol"
            style="--p:0;gap:.5em">
            <img :src="item.img" alt="NFT Image" style="--w: 100%;--max-h:11.9375em">

            <div style="padding:clamp(1em,2vw,2em);padding-top:1em;gap:1em" class="divcol">
              <div class="divcol center">
                <h6 class="bold p">{{item.name}}</h6>
                <span id="type" class="h11_em">{{item.type}}</span>
              </div>
              <p id="desc" class="p light tspace">{{item.desc}}</p>
              <div class="divcol light" style="gap:.2em">
                <!-- <div class="space h11_em">
                  <span class="bold">Presale</span>
                  <span style="color:var(--success)">{{item.presale}} NEAR</span>
                </div>
                
                <div class="space h11_em">
                  <span class="bold">Public Sale</span>
                  <span style="color:var(--success)">{{item.sale}} NEAR</span>
                </div>

                <div class="space h11_em">
                  <span class="bold">Supply</span>
                  <span>{{item.supply}}</span>
                </div> -->
                
                <div class="space h11_em">
                  <span class="bold">Date</span>
                  <span>{{item.hour}}</span>
                </div>
                
                <div class="space h11_em">
                  <span class="bold">Votes</span>
                  <span>{{item.votes}}</span>
                </div>
              </div>

              <aside>
                <div class="cronometer center">
                  <div class="grid" style="--gtc:repeat(4,1fr);gap:12px 0;place-items:center">
                    <span v-for="(item2,i2) in item.cronometer" :key="i2" style="color:var(--success)">
                      {{item2.time}}
                    </span>
                    <span v-for="n in 4" :key="n" class="h11_em">
                      {{n==1?'Days':n==2?'Hrs':n==3?'Min':n==4?'Sec':null}}
                    </span>
                  </div>
                </div>
                
                <div id="container-footer" class="gap1 center">
                  <v-btn v-for="(item2,i) in item.redes" :key="i" icon :href="item2.url" target="_blank"
                    style="--p:0">
                    <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                      style="--w:1.8em">
                  </v-btn>
                </div>
              </aside>
            </div>
          </v-card>
        </aside>
<!-- 
        <v-btn-toggle mandatory color="#60D2CA" class="align">
          <v-btn color="transparent">
            <v-icon color="#707070">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn v-for="n in 5" :key="n" color="transparent">
            <span>{{n}}</span>
          </v-btn>
          <v-btn color="transparent">
            <v-icon color="#707070">mdi-chevron-right</v-icon>
          </v-btn>
        </v-btn-toggle> -->
      </section>
    </section>
  </section>
</template>

<script>
import moment from 'moment';
import Calendar from './Calendar.vue'
import * as nearAPI from 'near-api-js'

const { connect, transactions, keyStores, WalletConnection, Contract, utils } = nearAPI
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
  name: "mintCalendar",
  i18n: require("./i18n"),
  components: { Calendar },
  data() {
    return {
      date: null,
      dataProjects: [
        // {
        //   img: require("@/assets/images/whitelist-image.jpg"),
        //   name: "Discord Server Project Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   hour: "17:00:00 UTC",
        //   votes: "6,917",
        //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
        //   redes: [
        //     { name: "twitter", url: "#" },
        //     { name: "discord", url: "#" },
        //     { name: "telegram", url: "#" },
        //   ],
        // },
        // {
        //   img: require("@/assets/images/whitelist-image.jpg"),
        //   name: "Discord Server Project Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   presale: 9,
        //   sale: 22,
        //   supply: 300,
        //   hour: "17:00:00 UTC",
        //   votes: "6,917",
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
  mounted(){
    this.pushHome()
    this.upcomingListed()
    this.date = new Date().toDateString();
  },
  methods: {
    async pushHome () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (!wallet.isSignedIn()) {
        this.$router.push("/")
      } else {
        const result = await this.isHolderMonke()
        if (result === 0) {
          this.$router.push("/contact") //No Holder
        }
      }
    },
    async isHolderMonke() {
      const CONTRACT_NAME = 'monkeonear.neartopia.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['nft_supply_for_owner'],
          sender: wallet.account()
        })
        let res = await contract.nft_supply_for_owner({
          account_id: wallet.getAccountId(),
        })
          .then((response) => {
            return Number(response)
          }).catch((error) => {
            console.log("ERR",error)
            return 0
          })
        return res
      }
    },
    async upcomingListed(){
      this.dataProjects = []
      const url = "api/v1/upcominglisted"
      let item = {
        top: "36",
        order: "fecha"
      }
     
      this.axios.post(url, item)
        .then(async (response) => {
          for (var i = 0; i < response.data.length; i++) {
            let times = await this.getTime(response.data[i].fecha_lanzamiento)
            let timeEnd = response.data[i].fecha_lanzamiento
            let collection = {
              img: require("@/assets/images/whitelist-image.jpg"),
              name: response.data[i].project_name,
              fecha_lanzamiento: response.data[i].fecha_lanzamiento,
              type: response.data[i].collection,
              desc: response.data[i].descripcion,
              hour: moment.unix(timeEnd).format("Do MMM YYYY, h:mm A"),
              votes: response.data[i].voto,
              cronometer: [ {time: times.days}, {time: times.hours}, {time: times.minutes}, {time: times.seconds} ],
              redes: [
                { name: "twitter", url: "https://twitter.com/" + response.data[i].telegram },
                { name: "discord", url: response.data[i].discord_server },
                { name: "telegram", url: "https://t.me/" + response.data[i].telegram },
              ],
            }
            this.dataProjects.push(collection)
            this.interval = setInterval(function () {
              this.updateTime()
            }.bind(this), 1000);
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async updateTime () {
      let timeNow = await parseInt(new Date().getTime() / 1000)
      for (var i = 0; i < this.dataProjects.length; i++) {
        let time = this.dataProjects[i].fecha_lanzamiento - timeNow

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

        this.dataProjects[i].cronometer = cronometer
      }
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
  }
};
</script>

<style src="./MintCalendar.scss" lang="scss" />
