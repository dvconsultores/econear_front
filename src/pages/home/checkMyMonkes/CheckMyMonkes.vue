<template>
  <section id="checkMyMonkes" class="divcol gap2">
    <aside id="container-header" class="divcol center tcenter align">
      <template>
        <v-form ref="form" @submit="submit" v-if="mostratSUI" v-model="valid" lazy-validation>    
          <v-text-field v-model="search" :rules="rules.required" solo label="Add your SUI Wallet Address"
            style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF; max-width: 97%; margin-left: 1%;" class="customeFilter search">
          </v-text-field>
 
          <v-text-field v-model="search1" :rules="rules.required" solo label="Add your user Discord"
            style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF; margin-top: 15px;max-width: 97%; margin-left: 1%;"
            class="customeFilter search">
          </v-text-field>
    
  
          <v-btn type="submit" :loading="loading" block class="btn" style="margin-top: 15px;max-width: 97%; margin-left: 1%;">
            <span style="color: #FFF !important">Submit</span>
          </v-btn>
        </v-form>
      </template>
      <h5 class="p" v-if="mostratSUI">Please don't transfer your NFTs to different wallet or trade them until the final
        snapshot has been taken. If the wallet doesn't match with the number of Gen0 Monkes at the time of the snapshot,
        this might end up disqualifying you from the mint</h5>
    </aside>

    <!-- mosaico -->
    <section class="mosaico card grid"
      style="--gtc: repeat(auto-fit, minmax(min(100%,var(--size)),1fr)); gap:1.5em;--p:clamp(1em,2vw,2em);--size:16.2225em">
      <span v-if="notFount" justify="center" align="center"><h5>Oops! Looks like you don't have any Gen0 Monke. To buy one now <a
          href="https://paras.id/collection/monkeonear.neartopia.near" target="_blank"><b>click here</b></a></h5></span>
      <v-card v-for="(item, i) in dataTable" :key="i" class="divcol alignmobile" color="#112131"
        style="border-radius: .4vmax">
        <img class="h11_em" :src="item.img" alt="nft" style="--w:100%">
        <aside class="contenido divcol" style="gap:.2em">
          <span :title="item.name" class="Title tcenter h11_em">{{ verificar(item.name, 20) }}</span>
          <div class="space h11_em">
            <span>Token ID</span>
            <span :title="item.token_id">
              {{ verificar(item.token_id, 14) }}
            </span>
            <!-- <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
              {{item.state_change?'+':'-'}}{{item.change}}%
            </span> -->
          </div>
          <!-- <div class="space h11_em">
            <span>Floor Price</span>
            <span>
              {{item.price}}
            </span>

          </div>
          <div class="space h11_em">
            <span>Rarity Score</span>
            <span>
              {{item.rarity_score}}
            </span>
       
          </div> -->

          <!-- <div class="space h11_em">
            <span>Price</span>
            <span v-show="seeCoin == 1">{{item.price}}</span>
            <span v-show="seeCoin == 2">{{item.price_usd}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Floor Price</span>
            <span>{{item.price}}</span>
          </div> -->

          <!-- <div class="space h11_em">
            <span>Market</span>
            <span>{{item.market_name}}</span>
          </div> -->

          <div class="space">
            <span class="h11_em">Rarity</span>
            <v-chip style="border-radius: .3vmax" :color="item.rarity == 'common' ? '#26A17B' :
              item.rarity == 'uncommon' ? '#F7972C' :
                item.rarity == 'rare' ? '#EF3340' :
                  item.rarity == 'epic' ? '#0000B6' :
                    item.rarity == 'legendary' ? '#6A25D2' : null">
              <span class="tfirst">{{ item.rarity }}</span>
            </v-chip>
          </div>
          <v-dialog v-model="dialog" max-width="590">
        <v-card id="modalDislike" class="overflowx"
          style="padding-block:3em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
          <p>{{ message }}</p>
        </v-card>
      </v-dialog>
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'
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
  name: "checkMyMonkes",
  i18n: require("./i18n"),
  data() {
    return {
      notFount: false,
      valid: true,
      btnDisabled: true,
      search: "",
      search1: "",
      loading: false,
      dialog: false,
      message: "",
      dataTable: [
        // {
        //   img: require('@/assets/images/c2.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipum dolor sit",
        //   token_id: "0.89",
        //   price: "104.4 N",
        //   market_icon: require('@/assets/images/c2.png'),
        //   marketplace: "marketplace.paras.near",
        //   holdings: "1234/3333",
        //   state_change: false,
        //   rarity: "common",
        // }
      ],
      dataNftsAux: [],
      index: 0,
      nearPrice: 0,
      seeCoin: 1,
      cont: 0,
      mostrarTotal: false,
      mostrarTotal2: false,
      mostratSUI: false,
      rules: {
        required: [v => !!v || "Pleaase fill this input."]
      },
      nfts: []
    }
  },
  mounted() {
    this.search = ""
    this.search1 = ""
    this.getNFTContractsByAccount()
  },
  methods: {
    verify() {
      if (this.search && this.dataTable.length > 0) {
        this.btnDisabled = false
      } else {
        this.btnDisabled = true
      }
    },
    async getNFTContractsByAccount() {
      try {
        this.notFount = false
        this.btnDisabled = true;
        this.dataTable = []
        this.dataNftsAux = []
        const near = await connect(config);
        const wallet = new WalletConnection(near)

        if (wallet.isSignedIn()) {
          let accountId = wallet.getAccountId()
          const serviceUrl = `https://api.kitwallet.app/account/${accountId}/likelyNFTs`;
          const result = await this.axios.get(serviceUrl);

          //console.log(result.data)
          ////console.log("AQUI",result.data)
          //this.nfts = result.data;
          for (var i = 0; i < result.data.length; i++) {
            if (result.data[i].includes('monkeonear.neartopia.near')) {
              await this.getNFTByContract(result.data[i], accountId)
            }
          }
          // let index = 12
          this.dataTable = this.dataNftsAux


          if (this.dataTable.length > 0) {
            if (this.search.length > 0) {
              alert("Congratulations please place your SUI wallet to be on the AirDrop list!")
              this.btnDisabled = false
            }
          } else {
            this.notFount = true
          }
        } else {
          this.$router.push("/")
        }
      } catch (error) {
        this.btnDisabled = false
      }
    },
    async getNFTByContract(contract_id, owner_account_id) {
      this.nfts = [];
      try {
        const near = await connect(config);
        const wallet = new WalletConnection(near)
        const contract = new Contract(wallet.account(), contract_id, {
          viewMethods: ["nft_tokens_for_owner", "nft_metadata"],
          sender: wallet.account(),
        });

        const result = await contract.nft_tokens_for_owner({
          account_id: owner_account_id,
          from_index: "0",
          limit: 100
        });

        const metadata = await contract.nft_metadata();

        for (var i = 0; i < result.length; i++) {
          let collection = {
            index: i,
            img: await this.buildMediaUrl(result[i].metadata.media, metadata.base_uri) || require("@/assets/nfts/nft1.png"),
            collection: contract_id,
            name: result[i].metadata.title || result[i].token_id,
            token_id: result[i].token_id,
            selected: false,
            rarity: "-"
          }

          this.dataNftsAux.push(collection)
          this.rarityNft(contract_id, result[i].token_id, this.dataNftsAux.length)
          this.nfts.push(result[i].token_id)
          this.mostratSUI = true;
          //console.log(this.nfts)
        }

      } catch (err) {
        return [];
      }
    },
    rarityNft(collection, token_id, index) {
      const url = "api/v1/rarezastoken"
      let item = {
        "collection": collection,
        "token_id": token_id
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            this.dataNftsAux[index - 1].rarity = response.data[0].rareza
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    buildMediaUrl(media, base_uri) {
      if (!media || media.includes('://') || media.startsWith('data:image')) {
        return media;
      }

      if (base_uri) {
        return `${base_uri}/${media}`;
      }

      return `https://cloudflare-ipfs.com/ipfs/${media}`;
    },
    verificar(item, num) {
      if (item.length > num) {
        return item.substring(0, num) + "..."
      }
      return item
    },
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const near = await connect(config);
        const wallet = new WalletConnection(near)

        const url = "api/v1/save-wallet-nft/"
        let item = {
          "wallet": wallet.getAccountId(),
          "addressSUI": this.search,
          "discord": this.search1,
          "nfts": this.nfts
        }
        this.axios.post(url, item)
          .then((response) => {
            //alert("Congratulations, your wallet address has been successfully submitted.")
            //console.log("SAVED")
            this.message = "Congratulations, your wallet address has been successfully submitted."
            this.dialog = true;
            this.loading = false;
            this.$refs.form.reset();
          }).catch((error) => {
            //alert("ERROR: " + error)
            this.message = error
            this.dialog = true;
            this.loading = false;
          })
      }
    }
  }
};
</script>

<style src="./CheckMyMonkes.scss" lang="scss" />
