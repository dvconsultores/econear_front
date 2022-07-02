<template>
  <section id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" color="transparent" height="100px" fixed>
      <aside class="left acenter">
        <!-- logo -->
        <router-link :to="('/')" class="eliminarmobile">
          <img src="@/assets/logos/logo.svg" alt="Logo" style="--w: 17.3125em;--h:8.115em">
        </router-link>
        <v-btn icon class="vermobile" @click.stop="$refs.menu.drawer=true" style="--p:2.2em;--br:3.5vmax/50%">
          <img src="@/assets/icons/toggle.png" alt="toggle button"
            style="--w:clamp(2.5em, 3vw, 3em); margin-left:0">
        </v-btn>
      </aside>

      <aside class="middle acenter gap2 eliminarmobile">
        <a v-for="(item,i) in dataHeader" :key="i" :href="item.to" class="h11_em">
          {{item.name}}
        </a>
        <button class="h11_em">
          More<v-icon medium color="var(--success)">mdi-chevron-down</v-icon>
        </button>
      </aside>

      <aside class="right acenter gap1">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs}">
            <button class="h11_em eliminarmobile" v-on="on" v-bind="attrs">
              {{languageText}}<v-icon color="var(--success)">mdi-chevron-down</v-icon>
            </button>
          </template>

          <v-list class="menu_list">
            <v-list-item v-for="(item, i) in dataLanguage" :key="i" :class="{active:item.active}"
              @click="CambiarLanguage(item.key);dataLanguage.forEach(e=>{e.active=false});item.active=true;languageText=item.key">
              <v-list-item-title class="h11_em">{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn v-if="user" class="btn h11_em" @click="signIn()"
          style="--p: clamp(.8em, 1.5vw, 1.5em) clamp(1em, 1.7vw, 1.7em)">
          Connect Wallet
        </v-btn>
        <v-btn v-else class="btn" @click="signOut()"
          style="--fs:var(--step-em--1);--p: clamp(.8em, 1.5vw, 1.5em) clamp(1em, 1.7vw, 1.7em)">
          Log Out
        </v-btn>
      </aside>
    </v-app-bar>
  </section>
</template>

<script>
import MenuHeader from "./MenuHeader.vue"
import { i18n } from "@/plugins/i18n";
import * as nearAPI from 'near-api-js'

// const theme = localStorage.getItem("theme");

const { connect, keyStores, WalletConnection } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "testnet",
  keyStore, 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

export default {
  name: "header",
  components: { MenuHeader },
  i18n: require("./i18n"),
  // created() {
  //   this.element = document.getElementById("theme");
  //   if (theme) {this.CambiarTheme(theme); this.$store.commit('OverlayMethod', theme)}
  //   if (theme == "light") {this.themeButton = true}
  //   if (theme == "dark") {this.themeButton = false}
  // },
  // computed: {
  //   perfil() {return this.$store.state.user.perfil},
  // },
  data() {
    return {
      model: 1,
      accountId: null,
      user: true,
      messages: 1,
      // themeButton: true,
      dataHeader: [
        { key: "home", name: "Home", to: "" },
        { key: "drops", name: "Drops", to: "" },
        { key: "nfts", name: "NFTS", to: "" },
        { key: "snipe", name: "Snipe tool", to: "" },
        { key: "contact", name: "Contact us", to: "" },
      ],
      languageText: "EN",
      dataLanguage: [
        {key: "EN", name: "English", active: false},
        {key: "ES", name: "Spanish", active: false},
        {key: "PR", name: "Portuguese", active: false},
      ]
    };
  },
  mounted() {
    // this.responsive();
    // window.addEventListener('resize', this.responsive());
    this.isSigned()
    this.getData()
    this.LogState();
    if (localStorage.language) {
      const index = this.dataLanguage.findIndex(e=>e.key==localStorage.language)
      this.dataLanguage[index].active = true
      this.languageText = localStorage.language
    }
  },
  methods: {
    // responsive() {
    //   if (window.innerWidth <= 880) {
    //     console.log('mobile')
    //   } else {
    //     console.log('desktop')
    //   }
    // },
    // CambiarTheme(theme) {
    //   this.$store.dispatch("CambiarTheme", { theme, element: this.element });
    //   this.themeButton = !this.themeButton;
    // },
    CambiarLanguage(lang) {
      if (lang === "ES") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else {
        localStorage.language = lang;
        i18n.locale = lang;
      }
    },
    async getData () {
      this.account = {}
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.accountId= wallet.getAccountId()

      if (wallet.isSignedIn()) {
        const url = "api/v1/profile/?wallet=" + this.accountId
        this.axios.defaults.headers.common.Authorization='token'
        this.axios.get(url)
          .then((response) => {
            if (response.data[0]){
              this.avatar = response.data[0].avatar
              this.$store.commit("Avatar", this.avatar)
            }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // use for update account log states
    LogState() {
      if (localStorage.getItem('logKey') == 'in') {this.user = false}
      if (localStorage.getItem('logKey') == 'out') {this.user = true}
    },
    async signIn () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'contract.nearbase.testnet'
      )
    },
    async isSigned () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        localStorage.setItem('logKey', 'in')
        this.user = false
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.signOut()
      localStorage.setItem('logKey', 'out')
      this.user = true
      this.$router.push({ path: '/' })
    },
  },
};
</script>

<style src="./Header.scss" lang="scss" />
