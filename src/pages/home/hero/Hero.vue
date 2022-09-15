<template>
  <section id="hero" class="divcol acenter gap2">
    <v-card id="sales" class="divcol card fill_w">
      <div class="center">
        <h3 class="h9_em">Sales Of The Day</h3>
      </div>

      <section id="containerSliderHero" class="scrollx">
        <div id="sliderHero" class="space">
          <aside v-for="(item2,i2) in dataSales.slice(0,3)" :key="i2"
            class="space gap1 tnowrap card align" style="--bg: #122432;--br:.5vmax">
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
                  {{item2.near}} N
                </span>
                <span class="h12_em">${{item2.dollar}}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </v-card>

    <!-- <h1 class="h4_em h5_emmobile tcenter">
      The whole <br class="vermobile"><span class="mask" :style="`--mask:'NEAR ecosystem'`">NEAR ecosystem</span><br>at one place.
    </h1> -->
    <h1 class="h4_em h5_emmobile tcenter">
      The whole <br class="vermobile"><span class="mask">NEAR ecosystem</span><br>at one place.
    </h1>

    <v-btn id="hero-btn" class="btn h10_em center" @click="modalProject=true"
      style="--p:0 2em;--h:62px;--w:13.5em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Get Started</v-btn>

    <blockquote class="fill_w scrollxmobile">
      <aside v-for="(item,i) in dataCards" :key="i" class="wrapperCards"
        :style="`--top:${item.style.top};--left:${item.style.left};--right:${item.style.right}`">
        <v-card class="hero-cards divcol center tcenter gap1"
            :style="`--clip:${item.style.clip}`">
          <h3 class="p">{{item.title}}</h3>
          <v-btn class="btn">Buy Here</v-btn>
          <img :src="item.img" alt="Card Image" style="--w:min(100%,10.25em)">
        </v-card>
      </aside>
    </blockquote>

    <v-dialog
      v-model="modalProject"
      max-width="82.358125em"
    >
      <v-card color="var(--primary)" class="modalProject">
        <v-btn icon class="close" @click="modalProject = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter align" style="max-width: 15ch">Listed Your Project on Econear</h3>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
        <v-sheet class="divcol center" style="padding:2em">
            <section class="fill_w grid" style="--gtc:repeat(auto-fit, minmax(min(100%,350px), 1fr));gap:2em;margin-bottom:1em">
              <v-text-field
                v-model="item.project_name"
                label="Project Name"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-text-field
                v-model="item.contract_id"
                label="Contract Id"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-text-field
                v-model="item.email"
                label="Email"
                placeholder="example@domain.com"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-text-field
                v-model="item.discord_id"
                label="Discord ID"
                placeholder="Username#321"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-text-field
                v-model="item.website"
                label="Website"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-text-field
                v-model="item.twitter"
                label="Twitter Account"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>

              <v-menu
                v-model="menu2"
                :disabled="!this.item.no_mint"
                :close-on-content-click="false"
                :nudge-right="40"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="item.date"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    style="--c:#000000"
                    solo
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="item.date"
                  style="--c:#000000"
                  no-title
                  :min="min_date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>

              <v-text-field
                v-model="item.discord_server"
                label="Discord Server"
                placeholder="discord.gg/invitecode"
                style="--c:#000000"
                solo
                :rules="rules.date"
              ></v-text-field>
            </section>

            <section class="fill_w">
              <center style="font-size:clamp(14px, 1vw, 16px)">
                <label style="color:var(--clr-inv)">Have you already minted ?</label>
              </center>
              <div class="container-checkbox space">
                <aside class="acenter">
                  <label class="labels" for="A" style="color:var(--clr-inv);--tag:'A'">No, the mint is upcoming!</label>
                  <v-checkbox
                    v-model="item.no_mint"
                    id="A"
                    @click="buttonNo()"
                  ></v-checkbox>
                </aside>

                <aside class="acenter">
                  <label class="labels" for="B" style="color:var(--clr-inv);--tag:'B'">Yes, Already minted</label>
                  <v-checkbox
                    v-model="item.yes_mint"
                    id="B"
                    @click="buttonYes()"
                  ></v-checkbox>
                </aside>
              </div>
            </section>
          

          <v-btn class="btn h10_em" @click="submint()" style="--bs:0 3px 4px 2px hsl(176, 60%, 70%, .4);width:min(90%,517px);--br:.8vmax">
            Submint
          </v-btn>
        </v-sheet>
        </v-form>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment';
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const leftCards = 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%)';
const rightCards = 'polygon(0 0, 85% 0, 100% 10%, 100% 100%, 0 100%)';
export default {
  name: "hero",
  i18n: require("./i18n"),
  data() {
    return {
      // responsive: false,
      rules: {
        date: [
          v => !!v || 'Required value',
        ],
        long: [
          v => (v || '' ).length <= 255 || '255 caracteres o menos',
        ],
        email: [
          v => /.+@.+\..+/.test(v) || 'E-mail tiene que ser valido',
        ]
      },
      min_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      item: {},
      nearPrice: null,
      image: require('@/assets/nfts/nft1.png'),
      modalProject: false,
      dataCards: [
        {
          img: require('@/assets/images/c1.png'),
          title: "New Collection",
          style: { clip: leftCards, top: "-12.5em", left: "0"}
        },
        {
          img: require('@/assets/images/c2.png'),
          title: "Top Volume Projects",
          style: { clip: leftCards, top: "-3.125em", left: "20%"}
        },
        {
          img: require('@/assets/images/c3.png'),
          title: "Top Collection",
          style: { clip: rightCards , top: "3.125em"}
        },
        {
          img: require('@/assets/images/c4.png'),
          title: "Top Voted Projects",
          style: { clip: rightCards, top: "-3.125em", right: "20%"}
        },
        {
          img: require('@/assets/images/c5.png'),
          title: "Top Floor Featured Projects",
          style: { clip: rightCards, top: "-12.5em", right: "0"}
        },
      ],
      dataSales: [
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
    }
  },
  async mounted() {
    await this.priceNEAR()
    this.salesOfTheDay()
    this.interval = setInterval(function () {
        this.salesOfTheDay()
    }.bind(this), 1800000);
    if (window.innerWidth <= 880) {
      const cont = document.querySelector("#containerSliderHero")
      const el = document.querySelector("#sliderHero")
      cont.addEventListener("touchstart", () => {el.classList.add("paused")})
      cont.addEventListener("touchend", () => {el.classList.remove("paused")})
    }
  },
  methods: {
    async submint(){
      if (this.$refs.form.validate()) {
        console.log("VALIDACION")
      }
      console.log(this.item)
      let items = {
        "project_name": this.item.project_name,
        "email": this.item.email,
        "discord_id": this.item.discord_id,
        "website": this.item.website,
        "twiter": this.item.twitter,
        "discord_server": this.item.discord_server,
        "upcoming": this.item.no_mint,
        "already": this.item.yes_mint,
        "fecha_lanzamiento": this.item.date || 0,
        "id_contract_project": this.item.contract_id,
      }

      console.log(items)

      // const CONTRACT_NAME = 'contract.monkeonnear.testnet'
      // // connect to NEAR
      // const near = await connect(config)
      // // create wallet connection
      // const wallet = new WalletConnection(near)
      // if (wallet.isSignedIn()) {
      //   const contract = new Contract(wallet.account(), CONTRACT_NAME, {
      //     changeMethods: ['listar_project'],
      //     sender: wallet.account()
      //   })
      
      //   await contract.listar_project({
      //     items: items,
      //   })
      //     .then((response) => {
      //       console.log(response)
      //     }).catch((error) => {
      //       console.log(error)
      //     })
      // }
    },
    async buttonYes(){
      if (this.item.yes_mint === true && this.item.no_mint === true) {
        this.item.no_mint = false
        this.item.date = null
      }
    },
    async buttonNo(){
      if (this.item.no_mint === true && this.item.yes_mint === true) {
        this.item.yes_mint = false
      } else {
        this.item.date = null
      }
    },
    async priceNEAR(){
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=near&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
          console.log(response.data[0])
          this.nearPrice = response.data[0]
        })
        .catch((e) => {
          console.log(e)
        })
    },
    async salesOfTheDay(){
      console.log("HOLA1")
      const url = "api/v1/salesoftheday"
      let item = {
        top: 3
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataSales = []
          for (var i = 0; i < response.data.length; i++) {
            console.log("HOLA2")
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name + " #" + response.data[i].token_id,
              user: response.data[i].nft_contract_id,
              near: parseFloat(response.data[i].price).toFixed(1) + " N",
              dollar: "$"+(response.data[i].price * this.nearPrice.current_price).toFixed(2),
              state: true,
            }
            this.dataSales.push(collection)
          }
          console.log("DATA",this.dataSales)
        }).catch((error) => {
          console.log("HOLA3")
          console.log(error)
        })
    },
  }
};
</script>

<style src="./Hero.scss" lang="scss" />
