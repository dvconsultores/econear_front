<template>
  <section id="bulkNftManagement" class="divcol gap2">
    <ModalBulkNftManagement ref="menu"></ModalBulkNftManagement>
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p">Bulk NFT Management</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <aside class="container-controls space gap2 wrap">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
      
      <!-- <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for NFTs and collections"
        append-icon="mdi-magnify"
        style="--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF;max-width:30.061875em"
        class="customeFilter"
      ></v-text-field> -->
    </aside>


    <!-- My NFTS -->
    <section v-show="dataControls[dataControls.findIndex(e=>e.key=='nfts')].active" id="container-nfts" class="card divcol gap2">
      <div class="grid" style="--gtc: repeat(auto-fit,minmax(min(100%,20.2225em),1fr));gap:3.5em">
        <v-card v-for="(item,i) in dataNfts" :key="i" color="transparent" @click="selected(item)" class="divcol" :class="{widthLimiter: widthLimiter, active: item.selected}">
          <img :src="item.img || image" alt="nft images" style="--w:100%; --h:391px"  class="pointer">

          <v-sheet class="card" style="--p:1em">
            <h6>{{item.name}}</h6>
            <div class="divcol" style="gap:.3em">
              <!-- <div class="space">
                <span>Floor price</span>
                <div class="divcol">
                  <span style="color:var(--success)">{{item.price}} N</span>
                  <span>≈ $ {{item.dollar}}</span>
                </div>
              </div> -->
              <div class="space">
                <span>Token ID:</span>
                <span>{{item.token_id}}</span>
              </div>
              <!-- <div class="space">
                <span>Holdings</span>
                <span>{{item.holdings}}</span>
              </div>
              <div class="space">
                <span>Rarity</span>
                <v-chip style="border-radius: .3vmax" id="rarity"
                  :color="item.rarity=='rare'?'#26A17B':
                  item.rarity=='common'?'var(--warning)':
                  item.rarity=='legendary'?'#0000B6':
                  item.rarity=='mystic'?'#6A25D2':null">
                  <span class="tfirst">{{item.rarity}}</span>
                </v-chip>
              </div> -->
            </div>
          </v-sheet>
        </v-card>
      </div>

      <aside class="footer-controls end">
        <!-- <v-btn-toggle mandatory color="#60D2CA" class="align">
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

        <v-btn v-if="variableCarga && seeMoreVisible" text :disabled="!seeMoreDis" @click="seeMore()" class="align" style="color:var(--success); font-size: 1.2025em">See more...</v-btn>

        <div id="container-button" class="acenter" style="gap:1em">
          <!-- <div class="acenter" style="gap:.2em">
            <span>Select</span>
            <v-chip color="#26A17B" style="border-radius:.2vmax;height:1.861875em" class="bold">4/{{dataNfts.length}}</v-chip>
          </div> -->
          <v-btn class="btn bold" :disabled="transferDis" style="--h:2.75em;--p:0 clamp(1.5em,2vw,2em);--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:1.1em"
            @click="transferNFT()">
            Transfer NFT
          </v-btn>
        </div>
      </aside>
    </section>


    <!-- bulk NFT listing -->
    <section v-show="dataControls[dataControls.findIndex(e=>e.key=='bulk')].active" id="container-bulk" class="card divcol gap2 container-controls" style="--p:2em clamp(1em,3vw,3em)">
      <v-tabs color="var(--primary)">
        <v-tab v-for="(item,i) in dataControlsBulk" :key="i" @click="dataControlsBulk.forEach(e=>{e.active=false});item.active=true; changeMenu()">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <template v-if="dataControlsBulk[dataControlsBulk.findIndex(e=>e.key=='unlisted')].active">
        <div class="divcol gap2">
          <v-card v-for="(item,i) in dataBulk.unlisted" :key="i" class="card">
            <v-sheet color="transparent" class="fwrap acenter gap1" style="--fb: 1 1 12.5em" :class="{active: item.show}">
              <div class="nfts" :title="item.name" :class="{active: false}">
                <img :src="item.img || image" alt="nft images" style="--w:100%;--max-h: 10.468125em">
              </div>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Nfts</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <span class="number bold">{{item.nfts}}</span>
              </v-sheet>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Floor Price</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <div class="acenter" style="gap:.8em">
                  <img src="@/assets/logos/near.svg" alt="near" style="--w:1.655em">
                  <span class="number bold">{{item.price}}</span>
                </div>
              </v-sheet>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Total Price</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <div class="acenter" style="gap:.8em">
                  <img src="@/assets/logos/near.svg" alt="near" style="--w:1.655em">
                  <span class="number bold">{{item.total}}</span>
                </div>
              </v-sheet>
              <v-btn class="btn bold" @click="showNFTUnlisted(item, true)"
                style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:clamp(1.2em, 1.3vw, 1.3125em);--h:5.375em;">
                Show NFTS
              </v-btn>
            </v-sheet>

            <v-sheet v-show="item.show" color="transparent" class="grid" style="--gtc: repeat(auto-fit, minmax(min(100%,20.16375em),1fr));gap:2em">
              <v-card v-for="(item2,i2) in item.dataNfts" :key="i2" @click="selectedUnlisted(item, item2)" class="divcol" :class="{widthLimiter: widthLimiter, active: item2.selected}" color="var(--primary)">
                <img :src="item2.img" alt="nft images" style="--w:100%" class="pointer">
                <span class="bold">{{item2.name}}</span>
              </v-card>
            </v-sheet>
            
            <aside v-show="item.show" class="footer-controls end" style="margin-top:2em">
              <v-btn-toggle mandatory color="#60D2CA" class="align">
                <!-- <button color="transparent">
                  <v-icon color="#707070">mdi-chevron-left</v-icon>
                </button> -->
                <v-btn v-for="n in item.indice" :key="n" color="transparent" @click="fnPaginationUnlisted(item, n)">
                  <span>{{n}}</span>
                </v-btn>
                <!-- <button color="transparent">
                  <v-icon color="#707070">mdi-chevron-right</v-icon>
                </button> -->
              </v-btn-toggle>

              <div id="container-button" class="acenter" style="gap:1em">
                <!-- <div class="acenter" style="gap:.2em">
                  <span>Select</span>
                  <v-chip color="#26A17B" style="border-radius:.2vmax;height:1.861875em" class="bold">4/{{item.dataNfts.length}}</v-chip>
                </div> -->
                <v-btn class="btn bold" :disabled="item.listDisabled" style="--h:2.75em;--p:0 2em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:1.1em"
                  @click="listNft(item)">
                  List NFT
                </v-btn>
              </div>
            </aside>
          </v-card>
        </div>

        <aside class="footer-controls end">
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
          </v-btn-toggle>

          <!-- <div id="container-button" class="acenter" style="gap:1em">
            <div class="acenter" style="gap:.2em">
              <span>Select</span>
              <v-chip color="#26A17B" style="border-radius:.2vmax;height:1.861875em" class="bold">1/{{dataNfts.length}}</v-chip>
            </div>
            <v-btn class="btn bold" style="--h:2.75em;--p:0 2em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:1.1em"
              @click="$refs.menu.modalNfts=true">
              Transfer NFTS
            </v-btn>
          </div> -->
        </aside>
      </template>


      <template v-if="dataControlsBulk[dataControlsBulk.findIndex(e=>e.key=='listed')].active">
        <div class="divcol gap1">
          <v-card v-for="(item,i) in dataBulk.listed" :key="i" class="card">
            <v-sheet color="transparent"  class="fwrap acenter gap1" style="--fb: 1 1 12.5em" :class="{active: item.show}">
              <div class="nfts" :title="item.name" :class="{active: false}">
                <img :src="item.img || image" alt="nft images" style="--w:100%;--max-h: 10.468125em">
              </div>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Nfts</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <span class="number bold">{{item.nfts}}</span>
              </v-sheet>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Floor Price</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <div class="acenter" style="gap:.8em">
                  <img src="@/assets/logos/near.svg" alt="near" style="--w:1.655em">
                  <span class="number bold">{{item.price}}</span>
                </div>
              </v-sheet>
              <v-sheet class="card">
                <div class="acenter" style="gap:.5em">
                  <label class="bold">Total Price</label>
                  <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
                </div>
                <div class="acenter" style="gap:.8em">
                  <img src="@/assets/logos/near.svg" alt="near" style="--w:1.655em">
                  <span class="number bold">{{item.total}}</span>
                </div>
              </v-sheet>
              <v-btn class="btn bold" @click="showNFTListed(item, true)"
                style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:clamp(1.2em, 1.3vw, 1.3125em);--h:5.375em;">
                Show NFTS
              </v-btn>
            </v-sheet>

            <v-sheet id="lineaJuan" v-show="item.show" color="transparent" class="grid" style="--gtc: repeat(auto-fit, minmax(min(100%,20.16375em),1fr));gap:2em">
              <v-card v-for="(item2,i2) in item.dataNfts" :key="i2" class="divcol" :class="{widthLimiter: widthLimiter, active: item2.selected}" color="var(--primary)">
                <img :src="item2.img" alt="nft images" style="--w:100%" @click="item2.selected=!item2.selected" class="pointer">
                <span class="bold">{{item2.name}}</span>
                <div class="space">
                  <span>Marketplace:</span>
                  <span>{{item2.market_name}}</span>
                </div>
              </v-card>
            </v-sheet>
            
            <aside v-show="item.show" id="listed" class="footer-controls end" style="margin-top:2em">
              <v-btn-toggle mandatory color="#60D2CA" class="align">
                <!-- <button color="transparent">
                  <v-icon color="#707070">mdi-chevron-left</v-icon>
                </button> -->
                <v-btn v-for="n in item.indice" :key="n" color="transparent" @click="fnPaginationListed(item, n)">
                  <span>{{n}}</span>
                </v-btn>
                <!-- <button color="transparent">
                  <v-icon color="#707070">mdi-chevron-right</v-icon>
                </button> -->
              </v-btn-toggle>

              <div id="container-button" class="acenter" style="gap: 1em">
                <!-- <div class="acenter" style="gap:.2em">
                  <span>Select</span>
                  <v-chip color="#26A17B" style="border-radius:.2vmax;height:1.861875em" class="bold">4/{{item.dataNfts.length}}</v-chip>
                </div> -->
                <div class="contents">
                  <v-btn class="btn bold" style="--h:2.75em;--p:0 2em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--fs:1.1em"
                    @click="$refs.menu.modalUpdate=true">
                    Update NFTS
                  </v-btn>
                  <v-btn class="btn bold" style="--h:2.75em;--p:0 2em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .4);--fs:1.1em;--bg:var(--error)"
                    @click="$refs.menu.modalDelisting=true">
                    Delisting
                  </v-btn>
                </div>
              </div>
            </aside>
          </v-card>
        </div>
      </template>
    </section>
  </section>
</template>

<script>
import ModalBulkNftManagement from './ModalBulkNftManagement.vue'
import * as nearAPI from 'near-api-js'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
  networkId: "mainnet",
  keyStore, 
  nodeUrl: "https://rpc.mainnet.near.org",
  walletUrl: "https://app.mynearwallet.com",
  helperUrl: "https://helper.mainnet.near.org",
  explorerUrl: "https://explorer.mainnet.near.org",
};
export default {
  name: "bulkNftManagement",
  i18n: require("./i18n"),
  components: { ModalBulkNftManagement },
  data() {
    return {
      dataControls: [
        { key: "nfts", name: "My NFTS", active: true },
        { key: "bulk", name: "Bulk NFT listing", active: false },
      ],
      nftTransfer: {},
      image: require("@/assets/nfts/nft1.png"),
      transferDis: true,
      widthLimiter: false,
      variableCarga: true,
      index:0,
      seeMoreVisible: true,
      seeMoreDis: true,
      dataNfts2: [],
      dataNfts: [
        //{
            //   img: require("@/assets/nfts/nft1.png"),
            //   name: "Collection / Nft Name #43",
            //   price: 0.01,
            //   dollar: 0.10,
            //   supply: 3333,
            //   holdings: "16,637.12",
            //   rarity: "common",
            //   selected: false,
            // },
            // {
            //   img: require("@/assets/nfts/nft1.png"),
            //   name: "Collection / Nft Name #43",
            //   price: 0.01,
            //   dollar: 0.10,
            //   supply: 3333,
            //   holdings: "16,637.12",
            //   rarity: "common",
            //   selected: false,
            // },
            // {
            //   img: require("@/assets/nfts/nft1.png"),
            //   name: "Collection / Nft Name #43",
            //   price: 0.01,
            //   dollar: 0.10,
            //   supply: 3333,
            //   holdings: "16,637.12",
            //   rarity: "common",
            //   selected: false,
            // },
            // {
            //   img: require("@/assets/nfts/nft1.png"),
            //   name: "Collection / Nft Name #43",
            //   price: 0.01,
            //   dollar: 0.10,
            //   supply: 3333,
            //   holdings: "16,637.12",
            //   rarity: "common",
            //   selected: false,
            // }
      ],
      seeMoreDis: true,
      dataControlsBulk: [
        { key: "unlisted", name: "Unlisted NFTS", active: true },
        { key: "listed", name: "Listed NFTS", active: false },
      ],
      dataBulk: {
        unlisted: [
          // {
          //   img: require("@/assets/nfts/nft1.png"),
          //   nfts: 30,
          //   price: 10.00,
          //   total: 300,
          //   show: false,
          //   dataNfts: [
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: true },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //   ]
          // },
          // {
          //   img: require("@/assets/nfts/nft2.png"),
          //   nfts: 30,
          //   price: 10.00,
          //   total: 300,
          //   show: false,
          //   dataNfts: [
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: true },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //   ]
          // },
        ],
        listed: [
          // {
          //   img: require("@/assets/nfts/nft1.png"),
          //   nfts: 30,
          //   price: 10.00,
          //   total: 300,
          //   show: false,
          //   dataNfts: [
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: true },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //     { img: require("@/assets/nfts/nft1.png"), name: "Collection / Nft Name #43", selected: false },
          //   ]
          // },
        ]
      }
    }
  },
  mounted() {
    this.getNftCollection()
    this.getUnlistedNft()
    this.Responsive()
    window.onresize = () => this.Responsive()

    const queryString = window.location.search; // tomo mi url
    const urlParams = new URLSearchParams(queryString); // tomo los paramtros de url
    urlParams.get("transactionHashes") //variable donde esta el hash
    this.hash = "https://explorer.mainnet.near.org/transactions/" + urlParams.get("transactionHashes") // esto es para tener el explorer
    if (urlParams.get("transactionHashes") !== null) {
      // le das tu mensaje de exito
      this.refreshNft()
      this.$store.dispatch('GenerateAlert', {key:'success', title: 'Success!', desc: 'Your NFT has been successfully transferred.'})
      this.transactionHashes = urlParams.get("transactionHashes")
      history.replaceState(null, location.href.split("?")[0], '/#/bulk-nft-management');
      // this.$router.go(0)
    }
    if (urlParams.get("errorCode") !== null) {
      // error de transaccion
      history.replaceState(null, location.href.split("?")[0], '/#/bulk-nft-management');
    }
  },
  methods: {
    fnPaginationUnlisted(item, n) {
      if (n == 1) {
        this.dataBulk.unlisted[item.index].pagination = 0
      } else {
        this.dataBulk.unlisted[item.index].pagination = 12 * (n-1)
      }
      this.showNFTUnlisted(this.dataBulk.unlisted[item.index], false)
    },
    fnPaginationListed(item, n) {
      if (n == 1) {
        this.dataBulk.listed[item.index].pagination = 0
      } else {
        this.dataBulk.listed[item.index].pagination = 12 * (n-1)
      }
      this.showNFTListed(this.dataBulk.listed[item.index], false)
    },
    changeMenu(){
      console.log(this.dataControlsBulk)
      if (this.dataControlsBulk[0].active === true) {
        this.getUnlistedNft()
      } else if (this.dataControlsBulk[1].active === true) {
        this.getListedNft()
      }
    },
    selected(item) {
      item.selected=!item.selected
      
      if (this.nftTransfer.selected && this.nftTransfer.index !== item.index) {
        this.dataNfts[this.nftTransfer.index].selected = false
      }

      if (item.selected === true) {
        this.transferDis = false
      } else {
        this.transferDis = true
      }
      if (!item.selected && this.nftTransfer.index === item.index) {
        this.nftTransfer = {}
      } else {
        this.nftTransfer = item
      }
    },
    selectedUnlisted(item, item2) {
      item2.selected=!item2.selected
      
      if (this.dataBulk.unlisted[item.index].itemListNft.selected && this.dataBulk.unlisted[item.index].itemListNft.index !== item2.index) {
        this.dataBulk.unlisted[item.index].dataNfts[this.dataBulk.unlisted[item.index].itemListNft.index].selected = false
      }

      if (item2.selected === true) {
        this.dataBulk.unlisted[item.index].listDisabled = false
      } else {
        this.dataBulk.unlisted[item.index].listDisabled = true
      }
      if (!item2.selected && this.dataBulk.unlisted[item.index].itemListNft.index === item2.index) {
        this.dataBulk.unlisted[item.index].itemListNft = {}
      } else {
        this.dataBulk.unlisted[item.index].itemListNft = item2
      }
    },
    transferNFT () {
      this.$refs.menu.modalNfts=true
      this.$refs.menu.itemNft=this.nftTransfer
    },
    listNft (item) {
      // const near = await connect(config);
      // const wallet = new WalletConnection(near);

      const url = "api/v1/ListMarketplaceCollection"
      let item2 = {
        "collection": this.dataBulk.unlisted[item.index].collection
      }

      this.axios.post(url, item2)
        .then((response) => {
          console.log(response.data)
          this.$refs.menu.marketplaces.items=response.data
        }).catch((error) => {
          console.log(error)
        })

      this.$refs.menu.modalListNfts=true
      this.$refs.menu.itemListNft=this.dataBulk.unlisted[item.index].itemListNft
    },
    Responsive() {
      if (window.innerWidth >= 880&&this.dataNfts.length<=3) {
        this.widthLimiter = true
      } else {
        this.widthLimiter = false
      }
    },
    async getNftCollection(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/ListNftOwner"
      let item = {
        "owner": wallet.getAccountId(),//"legendkiller.near",
        "limit": "20",
        "index": this.index
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataNfts2 = []

          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              index: this.index + i,
              img: response.data[i].media || require("@/assets/nfts/nft1.png"),
              collection: response.data[i].collection,
              name: response.data[i].titulo,
              token_id: response.data[i].token_id,
              selected: false,
            }
            this.dataNfts2.push(collection)
            //this.dataNfts.push(collection)
          }
          this.dataNfts = this.dataNfts2
          this.index = this.dataNfts.length
          this.verifyMore()

        }).catch((error) => {
          console.log(error)
        })
    },
    async getListedNft(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/bulklist"
      let item = {
        "owner": "seseorang.near",//wallet.getAccountId(),
        "limit": "50",
        "index": "0",
        "listed": true
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataBulk.listed = []

          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              index: i,
              pagination: 0,
              indice: Math.ceil(response.data[i].nft / 12),
              img: response.data[i].icon,
              nfts: response.data[i].nft,
              name: response.data[i].name,
              collection: response.data[i].collection,
              price: Number(response.data[i].floor_price).toFixed(2),
              total: Number(response.data[i].total_price).toFixed(2),
              show: false,
              dataNfts: []
            }
            if (!collection.img) {
              this.axios.get("https://api-v2-mainnet.paras.id/collections?creator_id=" + collection.collection).then(res => {
                  // console.log(res.data.data.results)
                let data = res.data.data.results
                data.forEach(element => {
                  if ((element.collection).toLowerCase() === collection.name.toLowerCase()) {
                    collection.img = 'https://ipfs.fleek.co/ipfs/' + element.media
                  }
                });
                collection.img = collection.img || require('@/assets/nfts/nft1.png')
              })
            }
            this.dataBulk.listed.push(collection)
            console.log(collection)
            //this.dataNfts.push(collection)
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async showNFTListed(collection, aux) {
      if (aux) {
        this.dataBulk.listed[collection.index].show=!this.dataBulk.listed[collection.index].show
      }

      if (this.dataBulk.listed[collection.index].show) {
        const near = await connect(config);
        const wallet = new WalletConnection(near);

        const url = "api/v1/bulklistdetails"
        let item = {
          "owner": "seseorang.near",
          "collection": collection.collection,
          "limit": "12",
          "index": collection.pagination,
          "listed": true
        }

        this.axios.post(url, item)
          .then((response) => {
            this.dataBulk.listed[collection.index].dataNfts = []

            for (var i = 0; i < response.data.length; i++) {
              let nft = {
                img: response.data[i].media || require("@/assets/nfts/nft1.png"),
                collection: response.data[i].collection,
                name: response.data[i].titulo + " #" + response.data[i].token_id,
                token_id: response.data[i].token_id,
                marketplace: response.data[i].marketplace,
                market_name: response.data[i].market_name,
                selected: false,
              }
              this.dataBulk.listed[collection.index].dataNfts.push(nft)
            }
          }).catch((error) => {
            console.log(error)
          })
      } else {
        this.dataBulk.listed[collection.index].pagination = 0
      }
    },
    async getUnlistedNft(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/bulklist"
      let item = {
        "owner": wallet.getAccountId(),//"seseorang.near",//wallet.getAccountId(),
        "limit": "50",
        "index": "0",
        "listed": false
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataBulk.unlisted = []

          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              index: i,
              pagination: 0,
              indice: Math.ceil(response.data[i].nft / 12),
              img: response.data[i].icon,
              nfts: response.data[i].nft,
              name: response.data[i].name,
              collection: response.data[i].collection,
              price: Number(response.data[i].floor_price).toFixed(2),
              total: Number(response.data[i].total_price).toFixed(2),
              show: false,
              dataNfts: [],
              itemListNft: {},
              listDisabled: true,
            }
            if (!collection.img) {
              this.axios.get("https://api-v2-mainnet.paras.id/collections?creator_id=" + collection.collection).then(res => {
                  // console.log(res.data.data.results)
                let data = res.data.data.results
                data.forEach(element => {
                  if ((element.collection).toLowerCase() === collection.name.toLowerCase()) {
                    collection.img = 'https://ipfs.fleek.co/ipfs/' + element.media
                  }
                });
                collection.img = collection.img || require('@/assets/nfts/nft1.png')
              })
            }
            this.dataBulk.unlisted.push(collection)
            console.log("AQUI",collection)
            //this.dataNfts.push(collection)
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async showNFTUnlisted(collection, aux) {
      if (aux) {
        this.dataBulk.unlisted[collection.index].show=!this.dataBulk.unlisted[collection.index].show
      }
      
      if (this.dataBulk.unlisted[collection.index].show) {
        const near = await connect(config);
        const wallet = new WalletConnection(near);

        const url = "api/v1/bulklistdetails"
        let item = {
          "owner": wallet.getAccountId(),//"seseorang.near",
          "collection": collection.collection,
          "limit": "12",
          "index": collection.pagination,
          "listed": false
        }

        this.axios.post(url, item)
          .then((response) => {
            this.dataBulk.unlisted[collection.index].dataNfts = []

            for (var i = 0; i < response.data.length; i++) {
              let nft = {
                index: collection.pagination + i,
                img: response.data[i].media || require("@/assets/nfts/nft1.png"),
                collection: response.data[i].collection,
                name: response.data[i].titulo + " #" + response.data[i].token_id,
                token_id: response.data[i].token_id,
                selected: false,
              }
              this.dataBulk.unlisted[collection.index].dataNfts.push(nft)
            }
          }).catch((error) => {
            console.log(error)
          })
      } else {
        this.dataBulk.unlisted[collection.index].pagination = 0
      }
    },
    async seeMore(){
      this.seeMoreDis = true
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/ListNftOwner"
      let item = {
        "owner": wallet.getAccountId(),//"legendkiller.near",//wallet.getAccountId(),
        "limit": "20",
        "index": this.index
      }
      
      this.axios.post(url, item)
        .then((response) => {
          this.dataNfts2 = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              index: this.index + i,
              img: response.data[i].media || require("@/assets/nfts/nft1.png"),
              collection: response.data[i].collection,
              name: response.data[i].titulo,
              token_id: response.data[i].token_id,
              selected: false,
            }
            this.dataNfts2.push(collection)
          }
          this.dataNfts = this.dataNfts.concat(this.dataNfts2)
          this.index = this.dataNfts.length
          this.seeMoreDis = false
          this.verifyMore()
        }).catch((error) => {
          this.seeMoreDis = false
        })
    },
    async verifyMore(){
      const near = await connect(config);
      const wallet = new WalletConnection(near);

      const url = "api/v1/ListNftOwner"
      let item = {
        "owner": wallet.getAccountId(),//"legendkiller.near",//wallet.getAccountId(),
        "limit": "20",
        "index": this.index
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data.length === 0) {
            this.seeMoreVisible = false
          }
        }).catch((error) => {
        })
    },
    refreshNft() {
      const url = "api/v1/RefrescarNft"
      this.axios.post(url)
        .then((response) => {
          console.log("bien refresh")
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./BulkNftManagement.scss" lang="scss" />
