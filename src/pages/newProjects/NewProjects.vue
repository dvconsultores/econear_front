<template>
  <section id="newProjects" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">New Projects</h2>
      <p class="h10_em" style="max-width:60ch">
        New NFT projects coming to Near
      </p>
    </aside>

    <h3 class="h9_em p vermobile">Sort by</h3>

    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i">
          <h6 class="p" @click="orderList(item)">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>

    <section v-if="variableCarga" class="section-down grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
      <v-card v-for="(item,i) in dataNftDrops" :key="i" class="card divcol"
        style="--p:clamp(1em,2vw,2em);gap:.5em">
        <div class="acenter" style="gap:.5em">
          <img :src="item.img" alt="NFT Image" style="--w: 4.5em">
          <div class="divcol">
            <h6 class="h11_em p">{{item.name}}</h6>
            <span style="color:var(--success)" class="h11_em" :title="item.type">{{item.type}}</span>
          </div>
        </div>
        <p class="h11_em p light">{{item.desc}}</p>
        <div class="divcol light" style="gap:.2em">
          <div class="space h11_em">
            <span>Price</span>
            <span style="color:var(--success)">{{item.price}}</span>
          </div>

          <div class="space h11_em">
            <span>Supply</span>
            <span>{{item.supply}}</span>
          </div>

          <div class="space h11_em">
            <span>Date</span>
            <span>{{item.date}}</span>
          </div>

          <div class="space h11_em">
            <span>Votes</span>
            <span>{{item.votes}}</span>
          </div>
        </div>

        <aside class="space gap1 wrap_inv">
          <div class="acenter alignmobile">
            <v-btn v-for="(item2,i) in item.redes" :key="i" icon :href="item2.url" target="_blank"
              style="--p:0">
              <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                style="--w:1.8em">
            </v-btn>
          </div>

          <div class="acenter alignmobile" style="gap:.5em">
            <v-btn class="btn" @click="votar(item.type,true)" style="--p:.3em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn class="btn" @click="$router.push(`/view-collections/${item.type}`)" style="--p:.45em 1.5em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)">
              View
            </v-btn>
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
  name: "newProjects",
  i18n: require("./i18n"),
  data() {
    return {
      variableCarga: false,
      dataControls: [
        { name: "Sort by Price", active: false, id:1 },
        { name: "Sort by Votes", active: false, id: 2 },
        { name: "Sort by Supply", active: false, id: 3 },
        { name: "Sort by Date", active: false, id: 4 },
      ],
      dataNftDrops: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Collection o NFT Name",
        //   type: "Utility",
        //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
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
        //   price: "9 NEAR",
        //   supply: "3333",
        //   date: "01 FEB 2022 17:00:00",
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
  async mounted() {
    this.getNewProjects()
  },
  methods: {
    async votar (contract_id, vote) {
      document.documentElement.style.cursor = "progress"
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['votar'],
          sender: wallet.account()
        })
        let aux = null
        await contract.votar({
          collections: contract_id,
          voto: vote,
        })
          .then((response) => {
            console.log(response)
            aux = true            
          }).catch((error) => {
            console.log(error)
            aux = false
          })
        if (aux) {
          //setTimeout(this.refreshVote, 30000)
          this.refreshVote()
        } else {
          document.documentElement.style.cursor = "default"
        }
      }
    },
    refreshVote() {
      const url = "api/v1/refreshvotes"
      this.axios.post(url)
        .then((response) => {
          document.documentElement.style.cursor = "default"
          this.getNewProjects()
        }).catch((error) => {
          console.log(error)
          document.documentElement.style.cursor = "default"
        })
    },
    orderList (item) {
      this.variableCarga = false
      if (item.id === 1) {
        this.dataControls[0].active = true
        this.dataControls[1].active = false
        this.dataControls[2].active = false
        this.dataControls[3].active = false
      } else if (item.id === 2) {
        this.dataControls[0].active = false
        this.dataControls[1].active = true
        this.dataControls[2].active = false
        this.dataControls[3].active = false
      } else if (item.id === 3) {
        this.dataControls[0].active = false
        this.dataControls[1].active = false
        this.dataControls[2].active = true
        this.dataControls[3].active = false
      } else if (item.id === 4) {
        this.dataControls[0].active = false
        this.dataControls[1].active = false
        this.dataControls[2].active = false
        this.dataControls[3].active = true
      }
      this.getNewProjects()
    },
    async getNewProjects(){
      this.dataNftDrops = []
      const url = "api/v1/newprojectslisted"
      let item = {
        top: "20",
        order: null
      }
      if (this.dataControls[0].active === true) {
        item.order = "price"
      }
      if (this.dataControls[1].active === true) {
        item.order = "voto"
      }
      if (this.dataControls[2].active === true) {
        item.order = "supply"
      }
      if (this.dataControls[3].active === true) {
        item.order = "fecha"
      }
     
      this.axios.post(url, item)
        .then(async (response) => {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].fecha_lanzamiento === 0 || response.data[i].fecha_lanzamiento === "0" || !response.data[i].fecha_lanzamiento) {
              response.data[i].fecha_lanzamiento = parseInt(response.data[i].fecha_creacion)
            }
            // console.log("Lanzamiento: ",response.data[i].fecha_lanzamiento)
            // console.log("FECHA",moment(response.data[i].fecha_lanzamiento / 1000000).format("Do MMM YYYY, h:mm A"))
            let collection = {
              img: response.data[i].icon || require("@/assets/nfts/nft1.png"),
              name: response.data[i].name,
              fecha_lanzamiento: response.data[i].fecha_lanzamiento,
              type: response.data[i].nft_contract,
              desc: response.data[i].descripcion,
              website: response.data[i].website,
              price: parseFloat(response.data[i].price).toFixed(2) + " NEAR",
              supply: response.data[i].total_supply,
              // price: "9 NEAR","01 FEB 2022 17:00:00"
              // supply: "3333",
              date: moment(response.data[i].fecha_lanzamiento / 1000000).format("Do MMM YYYY, h:mm A"),
              votes: response.data[i].voto,
              redes: [
                { name: "twitter", url: "https://twitter.com/" + response.data[i].twiter },
                { name: "discord", url: response.data[i].discord_server },
                { name: "telegram", url: "https://t.me/" + response.data[i].telegram },
              ],
            }
            this.dataNftDrops.push(collection)
          }
          this.variableCarga = true
        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./NewProjects.scss" lang="scss" />
