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
        //     { key: "compare-projects", name: "Compare Projects" },
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
              { key: "compare-projects", name: "Compare Projects" },
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
              { key: "compare-projects", name: "Compare Projects" },
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
            //console.log("ERR",error)
            this.$store.dispatch('GenerateAlert', {key:'error', title: 'Error!', desc: 'Something happened.'})
          })
      }
    },
  }
}
</script>

<style src="./Footer.scss" lang="scss" />
