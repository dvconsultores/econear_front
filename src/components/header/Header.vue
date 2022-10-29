<template>
  <section id="header">
    <MenuHeader ref="menu" :AccountId="accountId" :DataLogout="dataLogout" :User="user" :DataSwitchAccount="dataSwitch"
      @SelectItem_AvatarMenu="(item) => SelectItem_AvatarMenu(item)" @SignIn="signIn()"></MenuHeader>
    <v-app-bar id="headerApp" :height="heightApp" absolute color="transparent">
      <aside class="left acenter">
        <!-- logo -->
        <router-link :to="('/')">
          <img src="@/assets/logos/logo.svg" alt="Logo" style="--w: clamp(13em, 17vw, 17.3125em);--h:8.115em">
        </router-link>
      </aside>

      <aside class="middle acenter eliminarmobile">
        <a v-for="(item,i) in dataHeader" :key="i" @click="$router.push(item.to)" class="h11_em eliminarmobile">
          {{item.name}}
        </a>
        <v-menu offset-y>
          <!-- slot more -->
          <template v-slot:activator="{ on, attrs}">
            <button class="acenter h11_em eliminarmobile" v-on="on" v-bind="attrs">
              <span>More</span>
              <v-icon color="var(--success)" size="1.3em">mdi-chevron-down</v-icon>
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
                <v-btn icon href="https://twitter.com/econear" target="_blank">
                  <img src="@/assets/icons/twitter.svg" alt="twitter" style="--w:1.5625em">
                </v-btn> 
                <v-btn icon href="https://discord.gg/EpMDUY5ueZ" target="_blank">
                  <img src="@/assets/icons/discord.svg" alt="discord" style="--w:1.5625em">
                </v-btn>
                <!-- <v-btn icon>
                  <img src="@/assets/icons/telegram.svg" alt="telegram" style="--w:1.5625em">
                </v-btn> -->
              </div>
            </aside>
          </v-card>
        </v-menu>

        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs}">
            <button v-show="!user" class="acenter h11_em" v-on="on" v-bind="attrs">
              <span>{{languageText}}</span>
              <v-icon color="var(--success)" size="1.3em">mdi-chevron-down</v-icon>
            </button>
          </template>

          <v-list class="menu_list">
            <v-list-item v-for="(item, i) in dataLanguage" :key="i" :class="{active:item.active}"
              @click="CambiarLanguage(item.key);dataLanguage.forEach(e=>{e.active=false});item.active=true;languageText=item.key">
              <v-list-item-title class="h11_em">{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </aside>

      <aside class="right acenter eliminarmobile" style="gap:clamp(1em, 1.5vw, 1.5em)">
        <v-menu offset-y>
          <!-- slot language if user -->
          <!-- <template v-slot:activator="{ on, attrs}">
            <button v-show="user" class="center h11_em" v-on="on" v-bind="attrs">
              <span>{{languageText}}</span>
              <v-icon color="var(--success)" size="1.3em">mdi-chevron-down</v-icon>
            </button>
          </template> -->

          <!-- <v-list class="menu_list">
            <v-list-item v-for="(item, i) in dataLanguage" :key="i" :class="{active:item.active}"
              @click="CambiarLanguage(item.key);dataLanguage.forEach(e=>{e.active=false});item.active=true;languageText=item.key">
              <v-list-item-title class="h11_em">{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-menu>

        <v-btn v-show="user" class="btn h11_em" @click="signIn()"
          style="--p: clamp(.8em, 1.5vw, 1.5em) clamp(1em, 1.7vw, 1.7em)">
          Connect Wallet
        </v-btn>

        <!-- <v-badge v-show="!user" overlap :content="messages" :value="messages" class="openNotifications"
          style="--bg:var(--error);--c:#FFFFFF;--b:1.5px solid var(--success);--t:translate(-30%, 30%)">
          <v-btn icon>
            <img src="@/assets/icons/bell-outline.svg" alt="notifications" style="width:clamp(24px, 1.7vw, 1.775em)">
          </v-btn>
        </v-badge> -->

        <v-btn v-show="!user" class="btn avatarBtn openAccount"
          style="--p: clamp(1em, 1.5vw, 1.5em) .2em clamp(1em, 1.5vw, 1.5em) 0;--br:.2vmax;
          --bs: 0 2px 8px 3px #6FFFE9;">
          <v-avatar style="box-shadow:0px 0px 8px 3px #6FFFE9" width="clamp(55px, 4.6vw, 4.6em)" height="clamp(55px, 4.6vw, 4.6em)">
            <img :src="this.avatar" alt="Avatar" style="--w:100%">
          </v-avatar>
          <div id="container-account" class="divcol" style="gap:.2em">
            <span class="h11_em">Disconnect Wallet</span>
            <span class="h12_em">{{ accountId }}</span>
          </div>
          <v-icon color="#6FFFE9">mdi-menu-down</v-icon>
        </v-btn>

        <!-- menu account -->
        <v-menu v-model="avatarMenu" offset-y :close-on-content-click="false" activator=".openAccount">
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
                  <span class="h12_em" style="color:var(--success)">{{profile.near}} N</span>
                </div>
                <!-- <div class="space fill_w">
                  <span class="h11_em">ECO</span>
                  <span class="h12_em" style="color:var(--success)">0 E</span>
                </div> -->
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
      
      <!-- mobile elements -->
      <aside class="center gap1 vermobile">
        <v-badge overlap :content="messages" :value="messages" class="openNotificationsMobile"
          style="--bg:var(--error);--c:#FFFFFF;--b:1.5px solid var(--success);--t:translate(-30%, 30%)">
          <v-btn icon>
            <img src="@/assets/icons/bell-outline.svg" alt="notifications" style="width:clamp(24px, 1.7vw, 1.775em)">
          </v-btn>
        </v-badge>
        
        <v-btn icon class="vermobile" @click.stop="$refs.menu.drawer=true" style="--p:1.6em;--br:3.5vmax/50%">
          <img src="@/assets/icons/toggle.svg" alt="toggle button"
            style="--w:clamp(2em, 3vw, 3em); margin-left:0">
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

const { connect, keyStores, WalletConnection, Contract } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "mainnet",
  keyStore, 
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://wallet.mainnet.near.org",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
};

// let scrollValue =
// document.body.scrollTop || document.documentElement.scrollTop;
// // let ubicacionPrincipal = window.pageYOffset;
// let resizeTimeout;
// function resizeThrottler(actualResizeHandler) {
//   // ignore resize events as long as an actualResizeHandler execution is in the queue
//   if (!resizeTimeout) {
//     resizeTimeout = setTimeout(() => {
//       resizeTimeout = null;
//       actualResizeHandler();

//       // The actualResizeHandler will execute at a rate of 15fps
//     }, 80);
//   }
// }

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
      image: require('@/assets/nfts/nft1.png'),
      dataTableAlerts: [],
      intervals: [],
      profile: {},
      heightApp: "100px",
      model: 1,
      accountId: null,
      user: true,
      messages: 1,
      // themeButton: true,
      dataHeader: [
        { key: "home", name: "Home", to: "/" },
        { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
        // { key: "portfolio", name: "Portfolio tracker", to: "/portafolio" },
        { key: "drops", name: "Upcoming projects", to: "/upcoming-nft-drops" },
        //{ key: "bulk-nft-management", name: "Bulk actions", to: "/bulk-nft-management" },
        //{ key: "contact", name: "Contact us", to: "/contact" },
      ],
      //Home - Snipe tool - Portfolio tracker - Upcoming projects - Bulk actions - More.
      dataMore: [
        // {
        //   list: [
        //     { title: "Account" },
        //     { key: "login", name: "Login" },
        //     { key: "whitelist", name: "Whitelist" },
        //     //{ key: "register", name: "Register" },
        //   ]
        // },
        {
          list: [
            { title: "NFTS" },
            { key: "compare-projects", name: "Compare Projectss" },
            //{ key: "upcoming-nft-drops", name: "Upcoming Projects (Drops)" },
            { key: "new-projects", name: "New Projects" },
          ]
        },
        {
          list: [
            { title: "ECONEAR" },
            // { key: "wallet-submission", name: "Wallet Submission" },
            //{ key: "coming-soon", name: "Wallet Submission" },
            { key: "vote", name: "Vote" },
          ]
        },
        {
          list: [
            { title: "Others" },
            { key: "marketplace-stats", name: "Marketplace Stats" },
            { key: "alert", name: "Alert" },
            { key: "bulk-nft-management", name: "Bulk NFT Management" },
            { key: "active-wallets-stats", name: "Active Wallets Stats" },
            { key: "mint-calendar", name: "Mint Calendar" },
          ]
        },
        {
          list: [
            { title: "Services" },
            { key: "support", name: "Support" },
            { key: "contact", name: "Contact Us" },
            // { key: "advertising", name: "Advertising" },
            // { key: "ama-hosting", name: "AMA Hosting" },
            // { key: "twitter-space", name: "Twitter Space" },
            // { key: "giveaways", name: "Giveaways" },
          ]
        }
      ],
      languageText: "EN",
      dataLanguage: [
        {key: "EN", name: "English", active: true},
        {key: "ES", name: "Spanish", active: false},
        {key: "PR", name: "Portuguese", active: false},
      ],
      avatarMenu: false,
      dataSwitch: [],
      dataLogout: [
        {
          list: [
            { key: "profile", name: "My Profile" },
            //{ key: "portafolio", name: "My Portfolio" },
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
  computed: {
    avatar() {
      return this.$store.state.dataUser.avatar
    },
  },
  mounted() {
    this.verifyHeader()
    this.get_alert()
    this.responsive();
    window.onresize = () => this.responsive();
    // document.getElementById("headerApp").style.background = "transparent";
    // document.addEventListener('scroll', this.scrollListener);
    this.isSigned()
    this.getData()
    this.getBalance()
    this.LogState();
    if (localStorage.language) {
      const index = this.dataLanguage.findIndex(e=>e.key==localStorage.language)
      this.dataLanguage[index].active = true
      this.languageText = localStorage.language
    }
  },
  methods: {
    async verifyHeader() {
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        this.dataHeader = [
          { key: "home", name: "Home", to: "/" },
          { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
          { key: "portfolio", name: "Portfolio tracker", to: "/portafolio" },
          { key: "drops", name: "Upcoming projects", to: "/upcoming-nft-drops" },
        ]


        this.dataMore = [
          {
            list: [
              { title: "NFTS" },
              { key: "compare-projects", name: "Compare Projectss" },
              { key: "new-projects", name: "New Projects" },
            ]
          },
          {
            list: [
              { title: "ECONEAR" },
              // { key: "wallet-submission", name: "Wallet Submission" },
              { key: "vote", name: "Vote" },
            ]
          },
          {
            list: [
              { title: "Others" },
              { key: "marketplace-stats", name: "Marketplace Stats" },
              { key: "alert", name: "Alert" },
              { key: "bulk-nft-management", name: "Bulk NFT Management" },
              { key: "active-wallets-stats", name: "Active Wallets Stats" },
              { key: "mint-calendar", name: "Mint Calendar" },
            ]
          },
          {
            list: [
              { title: "Services" },
              { key: "support", name: "Support" },
              { key: "contact", name: "Contact Us" }
            ]
          }
        ]
      } else {
        this.dataHeader = [
          { key: "home", name: "Home", to: "/" },
          { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
          { key: "drops", name: "Upcoming projects", to: "/upcoming-nft-drops" },
        ]

        this.dataMore = [
          {
            list: [
              { title: "NFTS" },
              { key: "compare-projects", name: "Compare Projectss" },
              { key: "new-projects", name: "New Projects" },
            ]
          },
          {
            list: [
              { title: "ECONEAR" },
              // { key: "wallet-submission", name: "Wallet Submission" },
              { key: "vote", name: "Vote" },
            ]
          },
          {
            list: [
              { title: "Others" },
              { key: "marketplace-stats", name: "Marketplace Stats" },
              // { key: "alert", name: "Alert" },
              // { key: "bulk-nft-management", name: "Bulk NFT Management" },
              // { key: "active-wallets-stats", name: "Active Wallets Stats" },
              { key: "mint-calendar", name: "Mint Calendar" },
            ]
          },
          {
            list: [
              { title: "Services" },
              { key: "support", name: "Support" },
              { key: "contact", name: "Contact Us" }
            ]
          }
        ]
      }
    },
     async get_alert () {
      this.dataTableAlerts = []
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['get_alert'],
          sender: wallet.account()
        })
        await contract.get_alert({
          account_id: wallet.getAccountId(),
        })
          .then((response) => {
            this.dataTableAlerts = []
            for (var i = 0; i < response.length; i++) {
              for (var j = 0; j < response[i].alerts.length; j++) {
                let item = {
                  contract: response[i].alerts[j].collection,
                  type: response[i].alerts[j].alert_type,
                  type_id: response[i].alerts[j].alert_type_id,
                  value: response[i].alerts[j].value,
                  frecuency: response[i].alerts[j].frecuency,
                  frecuency_id: response[i].alerts[j].frecuency_id
                }
                this.dataTableAlerts.push(item)
              }
            }
            this.startIntervals()
          }).catch((error) => {
            console.log("ERR",error)
          })
      }
    },
    alertNotificacion() {
      for (var i = 0; i < this.dataTableAlerts.length; i++) {  
        const alerta = this.dataTableAlerts[i]
        if (alerta.type_id === 1 || alerta.type_id === 2) {
          const url = "api/v1/alertprice"
          let item = {
            collection: alerta.contract
          }
          
          this.axios.post(url, item)
          .then((response) => {
            if (alerta.type_id === 1 && response.data[0].price > alerta.value ) {
              this.notificacion(response.data[0].collection, response.data[0].icon, "Price rose above " + Number(alerta.value).toFixed(2) + " to " + Number(response.data[0].price).toFixed(2))
              if (alerta.frecuency_id === 1) {
                this.deleteAlert(alerta)
              }
            } else if (alerta.type_id === 2 && response.data[0].price < alerta.value ) {
              this.notificacion(response.data[0].collection, response.data[0].icon, "Price dropped from "  + Number(alerta.value).toFixed(2) + " to " + Number(response.data[0].price).toFixed(2))
              if (alerta.frecuency_id === 1) {
                this.deleteAlert(alerta)
              }
            }
          }).catch((error) => {
            console.log(error)
          })
        } else if (alerta.type_id === 3 || alerta.type_id === 4) {
          const url = "api/v1/alertvolumen"
          let item = {
            collection: alerta.contract
          }
          
          this.axios.post(url, item)
          .then((response) => {
            if (alerta.type_id === 3 && response.data[0].volumen > alerta.value ) {
              this.notificacion(response.data[0].collection, response.data[0].icon, "Volumen rose above " + Number(alerta.value).toFixed(2) + " to " + Number(response.data[0].volumen).toFixed(2))
              if (alerta.frecuency_id === 1) {
                this.deleteAlert(alerta)
              }
            } else if (alerta.type_id === 4 && response.data[0].volumen < alerta.value ) {
              this.notificacion(response.data[0].collection, response.data[0].icon, "Volumen dropped from " + Number(alerta.value).toFixed(2) + " to " + Number(response.data[0].volumen).toFixed(2))
              if (alerta.frecuency_id === 1) {
                this.deleteAlert(alerta)
              }
            }
          }).catch((error) => {
            console.log(error)
          })
        } 
      }
    },
    notificacion(name, img, msg) {
      if (Notification) {
        if (Notification.permission !== "granted") {
          Notification.requestPermission()
        }
        var title = "ECONEAR"
        var extra = {          
          icon: img || this.image,
          //icon: "http://xitrus.es/imgs/logo_claro.png",
          body: "NFT: " + name + ", " + msg
        }
        var noti = new Notification( title, extra)
        noti.onclick = {
        // Al hacer click
        }
        noti.onclose = {
        // Al cerrar
        }
        setTimeout( function() { noti.close() }, 20000)
      }
    },
    async startIntervals() {
      clearInterval(this.interval)
      this.interval = setInterval(this.alertNotificacion, 60000)
    },
    async deleteAlert (item) {
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          changeMethods: ['delete_alert'],
          sender: wallet.account()
        })
        await contract.delete_alert({
          collection: item.contract,
          alert_type_id: item.type_id
        })
          .then((response) => {
            this.get_alert()
       
          }).catch((error) => {
            console.log("ERR",error)
         })
      }
    },
    async get_accounts() {
      let accounts = localStorage.getItem('switch-accounts')
      if (accounts[0]) {
        this.dataSwitch = []
        accounts = JSON.parse(accounts)
        let account_connect = JSON.parse(localStorage.getItem('undefined_wallet_auth_key'))
        for (var i = 0; i < accounts.length; i++) {
          let item = {
            index: i,
            img: require("@/assets/logos/user-empty.png"),
            name: accounts[i].accountId,
            allKeys: accounts[i].allKeys,
            amount: "0 N",
            select: false,
          }
          if (item.name === account_connect.accountId) {
            item.select = true
          }
          let balance = await this.getBalanceAccounts(item.name)
          item.amount = (balance || 0) + " N" 

          let img = await this.getImgAccount(item.name)
          item.img = img || require("@/assets/logos/user-empty.png")
          this.dataSwitch.push(item)
        }
        this.$refs.menu.modalSwitchAccount = true
      }
    },
    async getImgAccount(nearId) {
      const url = "api/v1/yourperfil"
      let item = {
        wallet: nearId
      }
      const result = this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            return response.data[0].img
          }
          return null
        }).catch((error) => {
          console.log(error)
          return null
        })
      return result
    },
    async getBalanceAccounts (nearId) {
      const near = await connect(config);
      const account = await near.account(nearId);
      const response = await account.state();
      let valueStorage = Math.pow(10, 19)
      let valueYocto = Math.pow(10, 24)

      const storage = (response.storage_usage * valueStorage) / valueYocto 
      let balance = ((response.amount / valueYocto) - storage).toFixed(2)
      return balance
    },
    responsive() {
      if (window.innerWidth <= 880) {
        this.heightApp = "75px"
      } else {
        this.heightApp = "100px"
      }
    },
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
      if (item.key=='whitelist') {this.$router.push("/"+item.key)}
      //if (item.key=='register') {this.$refs.menu.modalRegister = true}
      // nft
      if (item.key=='compare-projects') {this.$router.push("/"+item.key)}
      if (item.key=='new-projects') {this.$router.push("/"+item.key)}
      if (item.key=='upcoming-nft-drops') {this.$router.push("/"+item.key)}
      // econear
      if (item.key=='wallet-submission') {this.$router.push('/coming-soon')}
      if (item.key=='vote') {this.$router.push("/"+item.key)}
      if (item.key=='contact') {this.$router.push("/"+item.key)}
      if (item.key=='support') {window.open('https://discord.gg/EpMDUY5ueZ', '_blank')}
      // other
      if (item.key=='marketplace-stats') {this.$router.push(item.key)}
      //if (item.key=='marketplace-stats') {this.$router.push('/coming-soon')}
      if (item.key=='alert') {this.$refs.menu.modalAlert = true}
      if (item.key=='bulk-nft-management') {this.$router.push("/"+item.key)}
      if (item.key=='active-wallets-stats') {this.$router.push("/"+item.key)}
      if (item.key=='mint-calendar') {this.$router.push("/"+item.key)}
    },
    SelectItem_AvatarMenu(item) {
      this.avatarMenu = false
      if (item.key=='logout') {this.signOut()}
      if (item.key=='switch') {this.get_accounts()}
      if (item.key=='profile') {this.$router.push('/profile')}
      //if (item.key=='portafolio') {this.$router.push('/portafolio')}
      if (item.key=='portafolio') {this.$router.push('/coming-soon')}
      if (item.key=='settings') {this.$refs.menu.modalSettings = true}
    },
    async getData() {
      const url = "api/v1/yourperfil"
      const near = await connect(config);
      const wallet = new WalletConnection(near)

      if (wallet.isSignedIn()) {
        this.accountId= wallet.getAccountId()
        let item = {
          wallet: wallet.getAccountId()
        }
        this.axios.post(url, item)
          .then((response) => {
            if (response.data[0]) {
              this.$store.state.dataUser.avatar = response.data[0].img
            }
          }).catch((error) => {
            console.log(error)
          })
      }
    },
    LogState() {
      if (localStorage.getItem('logKey') == 'in') {this.user = false}
      if (localStorage.getItem('logKey') == 'out') {this.user = true}
    },
    async signIn () {
      this.isSigned()
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      wallet.requestSignIn(
        'backend.monkeonnear.near'
      )
    },
    async isSigned () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        localStorage.setItem('logKey', 'in')
        this.user = false
      }
      this.switch_accounts()
    },
    switch_accounts () {
      const queryString = window.location.search; // tomo mi url
      const urlParams = new URLSearchParams(queryString); // tomo los paramtros de url
      
      if (urlParams.get("account_id") !== null && urlParams.get("public_key") !== null && urlParams.get("all_keys") !== null) {
        let network = 'mainnet'
        let p_key = localStorage.getItem('near-api-js:keystore:pending_key' + urlParams.get("public_key") + ':' + network)
        if (p_key) {
          localStorage.setItem("near-api-js:keystore:"+ urlParams.get("account_id") +":mainnet", p_key);
          localStorage.removeItem('near-api-js:keystore:pending_key' + urlParams.get("public_key") + ':' + network)
          let account = {
            accountId: urlParams.get("account_id"),
            allKeys: [urlParams.get("all_keys")]
          }
          localStorage.setItem('undefined_wallet_auth_key', JSON.stringify(account));
          localStorage.setItem('logKey', 'in');
        }
        let accounts = localStorage.getItem('switch-accounts')

        if (accounts) {
          accounts = JSON.parse(accounts)
          let aux = false
          for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].accountId === urlParams.get("account_id")) {
              aux = true
              break
            }
          }
          if (!aux) {
            let item = {
              accountId: urlParams.get("account_id"),
              allKeys: urlParams.get("all_keys")
            }
            accounts.push(item)
            localStorage.setItem('switch-accounts', JSON.stringify(accounts));
          }
        } else {
          let item = [{
              accountId: urlParams.get("account_id"),
              allKeys: urlParams.get("all_keys")
            }]
          localStorage.setItem('switch-accounts', JSON.stringify(item));
        }

        history.replaceState(null, location.href.split("?")[0], '/#/');
      }
    },
    async getBalance () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const account = await near.account(wallet.getAccountId());
        const response = await account.state();
        let valueStorage = Math.pow(10, 19)
        let valueYocto = Math.pow(10, 24)

        const storage = (response.storage_usage * valueStorage) / valueYocto 
        this.profile.near = ((response.amount / valueYocto) - storage).toFixed(2)
      }
    },
    async signOut () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)

      let accounts = localStorage.getItem('switch-accounts')

      if (accounts) {
        accounts = JSON.parse(accounts)
        let array = []
        for (var i = 0; i < accounts.length; i++) {
          if (accounts[i].accountId !== wallet.getAccountId()) {
            array.push(accounts[i])
          }
        }
        localStorage.setItem('switch-accounts', JSON.stringify(array));
      }
      localStorage.setItem('logKey', 'out')
      this.user = true
      let accounts2 = JSON.parse(localStorage.getItem('switch-accounts'))
      if (accounts2.length > 0) {
        let account = {
          accountId: accounts2[0].accountId,
          allKeys: [accounts2[0].allKeys]
        }
        localStorage.setItem('undefined_wallet_auth_key', JSON.stringify(account));
        localStorage.setItem('logKey', 'in');
        location.reload();
      } else {
        wallet.signOut()
      }
      this.$router.push({ path: '/' })
    },
    // OcultarNavbar() {
    //   let Desplazamiento_Actual = window.pageYOffset;
    //   //     // in top
    //   if (Desplazamiento_Actual > scrollValue) {
    //     // document.getElementById("headerApp").style.background = "hsl(180, 37%, 17%)";
    //     document.getElementById("headerApp").style.backdropFilter = "blur(8px)";
    //   } else {
    //     // document.getElementById("headerApp").style.background = "transparent";
    //     document.getElementById("headerApp").style.backdropFilter = "none";
    //   }
    // },
    // scrollListener() {resizeThrottler(this.OcultarNavbar)}
  },
  // beforeDestroy() {
  //   document.removeEventListener('scroll', this.scrollListener);
  // }
};
</script>

<style src="./Header.scss" lang="scss" />
