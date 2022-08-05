<template>
  <section id="header">
    <MenuHeader ref="menu"></MenuHeader>
    <v-app-bar id="headerApp" height="100px" fixed>
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
        <a v-for="(item,i) in dataHeader" :key="i" @click="$router.push(item.to)" class="h11_em">
          {{item.name}}
        </a>
        <v-menu offset-y>
          <!-- slot -->
          <template v-slot:activator="{ on, attrs}">
            <button class="h11_em" v-on="on" v-bind="attrs">
              More<v-icon medium color="var(--success)">mdi-chevron-down</v-icon>
            </button>
          </template>

          <v-card class="menu_list morelist">
            <v-list v-for="(item,i) in dataMore" :key="i" color="hsl(212 47% 12% / .7)">
              <template v-for="(item2,i2) in item.list">
                <v-list-item :key="i2" disabled>
                  <v-list-item-title class="Title">{{item2.title}}</v-list-item-title>
                </v-list-item>

                <v-list-item :key="i2" @click="SelectItem_More(item2)">
                  <v-list-item-title>{{item2.name}}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>

            <aside class="divcol center">
              <span>Join us on:</span>
              <div class="acenter" style="gap:.5em">
                <v-btn icon>
                  <img src="@/assets/icons/twitter.svg" alt="twitter" style="--w:1.5625em">
                </v-btn>
                <v-btn icon>
                  <img src="@/assets/icons/discord.svg" alt="discord" style="--w:1.5625em">
                </v-btn>
                <v-btn icon>
                  <img src="@/assets/icons/telegram.svg" alt="telegram" style="--w:1.5625em">
                </v-btn>
              </div>
            </aside>
          </v-card>
        </v-menu>

        <v-menu offset-y>
          <!-- slot -->
          <template v-slot:activator="{ on, attrs}">
            <button v-if="!user" class="h11_em eliminarmobile" v-on="on" v-bind="attrs">
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
      </aside>

      <aside class="right acenter" style="gap:clamp(1em, 1.5vw, 1.5em)">
        <v-menu offset-y>
          <!-- slot -->
          <template v-slot:activator="{ on, attrs}">
            <button v-if="user" class="h11_em eliminarmobile" v-on="on" v-bind="attrs">
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

        <v-btn v-show="user" class="btn h11_em" @click="signIn()"
          style="--p: clamp(.8em, 1.5vw, 1.5em) clamp(1em, 1.7vw, 1.7em)">
          Connect Wallet
        </v-btn>

        <v-badge overlap :content="messages" :value="messages" class="openNotifications"
          style="--bg:var(--error);--c:#FFFFFF;--b:1.5px solid var(--success);--t:translate(-30%, 30%)">
          <v-btn icon>
            <img src="@/assets/icons/bell-outline.svg" alt="notifications" style="width:1.775em;height:1.971875em">
          </v-btn>
        </v-badge>

        <v-btn v-show="!user" class="btn avatarBtn"
          style="--p: clamp(1em, 1.5vw, 1.5em) .2em clamp(1em, 1.5vw, 1.5em) 0;--br:.2vmax;
          --bs: 0 2px 8px 3px #6FFFE9;">
          <v-avatar style="box-shadow:0px 0px 8px 3px #6FFFE9" width="4.6em" height="4.6em">
            <img src="@/assets/logos/user.png" alt="Avatar">
          </v-avatar>
          <div class="divcol" style="gap:.2em">
            <span class="h11_em">Disconnect Wallet</span>
            <span class="h12_em">{{ accountId }}</span>
          </div>
          <v-icon color="#6FFFE9">mdi-menu-down</v-icon>
        </v-btn>

        <v-menu v-model="avatarMenu" offset-y :close-on-content-click="false" activator=".avatarBtn">
          <v-card class="menu_list morelist">
            <v-list color="transparent" class="cabecera">
              <v-list-item>
                <v-list-item-title class="h10_em">{{ accountId }}</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list color="hsl(212 47% 12% / .5)">
              <v-list-item class="divcol">
                <div class="space fill_w h11_em">
                  <span class="h11_em">NEAR</span>
                  <span class="h12_em" style="color:var(--success)">478.5 N</span>
                </div>
                <div class="space fill_w">
                  <span class="h11_em">ECO</span>
                  <span class="h12_em" style="color:var(--success)">234.72 E</span>
                </div>
              </v-list-item>
            </v-list>

            <v-list v-for="(item,i) in dataLogout" :key="i" color="#112131">
              <v-list-item v-for="(item2,i2) in item.list" :key="i2" @click="SelectItem_AvatarMenu(item2)">
                <v-list-item-title>{{item2.name}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
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

let scrollValue =
document.body.scrollTop || document.documentElement.scrollTop;
// let ubicacionPrincipal = window.pageYOffset;
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 80);
  }
}

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
        { key: "home", name: "Home", to: "/" },
        { key: "drops", name: "Drops", to: "/upcoming-nft-drops" },
        { key: "nfts", name: "NFTS", to: "" },
        { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
        { key: "contact", name: "Contact us", to: "" },
      ],
      dataMore: [
        {
          list: [
            { title: "Account" },
            { key: "login", name: "Login" },
            { key: "whitelist", name: "Whitelist" },
            { key: "register", name: "Register" },
          ]
        },
        {
          list: [
            { title: "NFTS" },
            { key: "compare-projects", name: "Compare Projectss" },
            { key: "upcoming-projects", name: "Upcoming Projects (Drops)" },
            { key: "new-projects", name: "New Projects" },
          ]
        },
        {
          list: [
            { title: "ECONEAR" },
            { key: "wallet-submission", name: "Wallet Submission" },
            { key: "vote", name: "Vote" },
            { key: "contact-us", name: "Contact Us" },
          ]
        },
        {
          list: [
            { title: "Others" },
            { key: "marketplace-stats", name: "Marketplace Stats" },
            { key: "alert", name: "Alert" },
            { key: "bulk-nft-management", name: "Bulk NFT Management" },
            { key: "active-wallets-stats", name: "Active Wallets Stats" },
          ]
        },
        {
          list: [
            { title: "Services" },
            { key: "advertising", name: "Advertising" },
            { key: "ama-hosting", name: "AMA Hosting" },
            { key: "twitter-space", name: "Twitter Space" },
            { key: "giveaways", name: "Giveaways" },
          ]
        }
      ],
      languageText: "EN",
      dataLanguage: [
        {key: "EN", name: "English", active: false},
        {key: "ES", name: "Spanish", active: false},
        {key: "PR", name: "Portuguese", active: false},
      ],
      avatarMenu: false,
      dataLogout: [
        {
          list: [
            { key: "profile", name: "My Profile" },
            { key: "portafolio", name: "My Portfolio" },
            { key: "settings", name: "Settings" },
          ]
        },
        {
          list: [
            { key: "switch", name: "Switch Account" },
            { key: "logout", name: "Log out" },
          ]
        },
      ]
    };
  },
  mounted() {
    // this.responsive();
    // window.addEventListener('resize', this.responsive());
    document.getElementById("headerApp").style.background = "transparent";
    document.addEventListener('scroll', this.scrollListener);
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
    SelectItem_More(item) {
      // account
      if (item.key=='login') {this.$refs.menu.modalLogin = true}
      if (item.key=='whitelist') {this.$router.push(item.key)}
      if (item.key=='register') {this.$refs.menu.modalRegister = true}
      // nft
      if (item.key=='compare-projects') {this.$router.push(item.key)}
      if (item.key=='new-projects') {this.$router.push(item.key)}
      // econear
      if (item.key=='vote') {this.$router.push(item.key)}
      // other
      if (item.key=='marketplace-stats') {this.$router.push(item.key)}
      if (item.key=='alert') {this.$refs.menu.modalAlert = true}
      if (item.key=='bulk-nft-management') {this.$router.push(item.key)}
      if (item.key=='active-wallets-stats') {this.$router.push(item.key)}
    },
    SelectItem_AvatarMenu(item) {
      this.avatarMenu = false
      if (item.key=='logout') {this.signOut()}
      if (item.key=='switch') {this.$refs.menu.modalSwitchAccount = true}
      if (item.key=='profile') {this.$router.push('/profile')}
      if (item.key=='portafolio') {this.$router.push('/portafolio')}
      if (item.key=='settings') {this.$refs.menu.modalSettings = true}
    },
    async getData () {
      this.account = {}
      // connect to NEAR
      const near = await connect(config);
      // create wallet connection
      const wallet = new WalletConnection(near)
      this.accountId= wallet.getAccountId()

      // if (wallet.isSignedIn()) {
      //   const url = "api/v1/profile/?wallet=" + this.accountId
      //   this.axios.defaults.headers.common.Authorization='token'
      //   this.axios.get(url)
      //     .then((response) => {
      //       if (response.data[0]){
      //         this.avatar = response.data[0].avatar
      //         this.$store.commit("Avatar", this.avatar)
      //       }
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // }
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
    OcultarNavbar() {
      let Desplazamiento_Actual = window.pageYOffset;
      //     // in top
      if (Desplazamiento_Actual > scrollValue) {
        document.getElementById("headerApp").style.background = "var(--clr-gradient)";
      } else {
        document.getElementById("headerApp").style.background = "transparent";
      }
    },
    scrollListener() {resizeThrottler(this.OcultarNavbar)}
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener);
  }
};
</script>

<style src="./Header.scss" lang="scss" />
