<template>
  <v-footer id="footer" absolute>
    <v-row no-gutters style="gap:2em">
      <!-- content -->
      <section class="fill_w space gap2 divcolmobile">
        <aside class="divcol" style="width: min(100%, 25.933125em)">
          <img class="alignmobile" src="@/assets/logos/logo.svg" alt="Logo" style="--w:min(100%,17.25em)">

          <div class="gap1 acenter alignmobile margin2bottom">
            <v-btn v-for="(item,i) in dataRedes" :key="i" icon :href="item.to" target="_blank"
              style="--p:2.2em">
              <img class="aspect" :src="item.icon" alt="social icons"
                style="margin-left:0;--w:2.674375em">
            </v-btn>
          </div>

          <p class="h11_em p eliminarmobile">
            Data, tables and charts are free for personal use. For commercial use, 
            please contact us at contact @econear.co. All data is for informational purposes 
            only. Before purchasing any NFT, please DYOR. 
          </p>
        </aside>

        <aside class="divcol gap2mobile" style="gap:8em">
          <div class="acenter gap2 fwrapmobile" style="--fb: 1 1 70px">
            <a v-for="(item,i) in dataFooter" :key="i" @click="$router.push(item.to)" class="h11_em">
              {{item.name}}
            </a>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs}">
                <button class="h11_em" v-on="on" v-bind="attrs">
                  More<v-icon medium color="var(--success)">mdi-chevron-down</v-icon>
                </button>
              </template>
              
              <v-card id="footer" class="menu_list morelist">
                <v-list v-for="(item,i) in dataMore" :key="i" color="hsl(212 47% 12% / .7)">
                  <template v-for="(item2,i2) in item.list">
                    <v-list-item :key="i2" disabled>
                      <v-list-item-title class="Title">{{item2.title}}</v-list-item-title>
                    </v-list-item>

                    <v-list-item :key="i2" @click="$emit('SelectMore',item2)">
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
          </div>

          <v-text-field
            v-model="input"
            solo
            :rules="[rules.email]"
            label="example@email.com"
            style="--p: 0 0 0 12px;margin-left:auto;--w:clamp(20em, 24vw, 24.848125em);
              --h:clamp(2.6em, 3vw, 3em);--label:black"
          >
            <template v-slot:append>
              <v-btn rounded class="btn h11_em" @click="SendEmail()"
                style="--b: 1px solid #6FFFE9;--bg:var(--clr-btn);--h:clamp(2.7em, 3.1vw, 3.1em);--p:0 16px;--bs:none">
                <span style="color:#FFFFFF !important">Subscribe</span>
              </v-btn>
            </template>
          </v-text-field>
        </aside>
      </section>

      <a class="h11_em marginaleft" href="https://www.dvconsultores.com" target="_blank">Powered by GlobalDv</a>
      <!-- <section class="fill_w space tcenter divcolmobile">
        <span class="h11_em normal padd2left">&copy; 2022 Econear. All Rights Reserved.</span>
        <span class="h11_em acenter gap1">
          <a href="#" target="_blank">Cookie statement</a>
          <a href="#" target="_blank">Terms &amp; Conditions</a>
          <a href="#" target="_blank">Privacy Policy</a>
        </span>
      </section> -->
    </v-row>
  </v-footer>
</template>

<script>
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

export default {
  data() {
    return {
      dataRedes: [
        { icon: require("@/assets/icons/twitter.svg"), to: "https://twitter.com/econear" },
        { icon: require("@/assets/icons/discord.svg"), to: "https://discord.gg/EpMDUY5ueZ" },
        // { icon: require("@/assets/icons/telegram.svg"), to: "#" },
      ],
      dataFooter: [
        { key: "home", name: "Home", to: "/" },
        { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
        // { key: "portfolio", name: "Portfolio tracker", to: "/portafolio" },
        { key: "drops", name: "Upcoming projects", to: "/upcoming-nft-drops" },
      ],
      dataMore: [
        // {
        //   list: [
        //     { title: "Account" },
        //     { key: "login", name: "Login" },
        //     { key: "whitelist", name: "Whitelist" },
        //     { key: "register", name: "Register" },
        //   ]
        // },
        // {
        //   list: [
        //     { title: "NFTS" },
        //     { key: "compare-projects", name: "Compare Projectss" },
        //     { key: "upcoming-projects", name: "Upcoming Projects (Drops)" },
        //     { key: "new-projects", name: "New Projects" },
        //   ]
        // },
        // {
        //   list: [
        //     { title: "ECONEAR" },
        //     { key: "wallet-submission", name: "Wallet Submission" },
        //     { key: "vote", name: "Vote" },
        //     { key: "contact-us", name: "Contact Us" },
        //   ]
        // },
        // {
        //   list: [
        //     { title: "Others" },
        //     { key: "marketplace-stats", name: "Marketplace Stats" },
        //     { key: "alert", name: "Alert" },
        //     { key: "bulk-nft-management", name: "Bulk NFT Management" },
        //     { key: "active-wallets-stats", name: "Active Wallets Stats" },
        //     { key: "mint-calendar", name: "Mint Calendar" },
        //   ]
        // },
        // {
        //   list: [
        //     { title: "Services" },
        //     { key: "advertising", name: "Advertising" },
        //     { key: "ama-hosting", name: "AMA Hosting" },
        //     { key: "twitter-space", name: "Twitter Space" },
        //     { key: "giveaways", name: "Giveaways" },
        //   ]
        // }
      ],
      input: "",
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  mounted(){
    this.verifyHeader()
  },
   methods: {
    async verifyHeader() {
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        this.dataFooter = [
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
        this.dataFooter = [
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
    SendEmail() {
      if (this.input !== '' && this.input !== null) {
        const url = "api/v1/tosubscribe"
        let item = {
          email: this.input
        }
        this.axios.post(url, item)
          .then((response) => {
            this.$store.dispatch('GenerateAlert', {key:'success', title: 'Success!', desc: 'Successful subscription.'})
            this.input= ''
          }).catch((error) => {
            console.log("ERR",error)
            this.$store.dispatch('GenerateAlert', {key:'error', title: 'Error!', desc: 'Something happened.'})
          })
      }
    },
  }
}
</script>

<style src="./Footer.scss" lang="scss" />
