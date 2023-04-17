<template>
  <section id="checkMyMonkes" class="divcol gap2">
    <aside id="container-header" class="divcol center tcenter align">
      <!-- <h2 class="h5_em p">My portfolio</h2> -->
      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Check my wallet"
        style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF"
        class="customeFilter search"
      >
        <template v-slot:append>
          <v-btn :disabled="btnDisabled" class="btn" @click="getNFTContractsByAccount()">
            <span style="color: #FFF !important">Submit</span>
          </v-btn>
        </template>
      </v-text-field>
    </aside>

    <!-- mosaico -->
    <section class="mosaico card grid"
      style="--gtc: repeat(auto-fit, minmax(min(100%,var(--size)),1fr)); gap:1.5em;--p:clamp(1em,2vw,2em);--size:16.2225em">
      <v-card v-for="(item,i) in dataTable" :key="i" class="divcol alignmobile" color="#112131" style="border-radius: .4vmax">
        <img class="h11_em" :src="item.img" alt="nft" style="--w:100%">
        <aside class="contenido divcol" style="gap:.2em">
          <span :title="item.name" class="Title tcenter h11_em">{{verificar(item.name, 20)}}</span>
          <div class="space h11_em">
            <span>Token ID</span>
            <span :title="item.token_id">
              {{verificar(item.token_id, 14)}}
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
            <v-chip style="border-radius: .3vmax"
              :color="item.rarity=='common'?'#26A17B':
              item.rarity=='uncommon'?'#F7972C':
              item.rarity=='rare'?'#EF3340':
              item.rarity=='epic'?'#0000B6':
              item.rarity=='legendary'?'#6A25D2':null">
              <span class="tfirst">{{item.rarity}}</span>
            </v-chip>
          </div>
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
      btnDisabled: false,
      search: "",
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
      mostrarTotal2: false
    }
  },
  methods: {
    async getNFTContractsByAccount() {
      try {
        this.btnDisabled = true;
        this.dataTable = []
        this.dataNftsAux = []
        let accountId = this.search
        const serviceUrl = `https://api.kitwallet.app/account/${accountId}/likelyNFTs`;
        const result = await this.axios.get(serviceUrl);

        console.log(result)
        ////console.log("AQUI",result.data)
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].includes('monkeonear.neartopia.near')) {
            await this.getNFTByContract(result.data[i], accountId)
          }
        }
        // let index = 12
        this.dataTable = this.dataNftsAux
        this.btnDisabled = false

        if (this.dataTable.length > 0) {
          const url = "api/v1/save-wallet-nft/"
          let item = {
            "wallet": accountId,
          }
          this.axios.post(url, item)
            .then((response) => {
              console.log("SUCCESS")
            }).catch((error) => {
              console.log("ERR")
            })
        }
      } catch (error) {
        this.btnDisabled = false
      }
    },
    async getNFTByContract(contract_id, owner_account_id) {
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
            this.dataNftsAux[index-1].rarity = response.data[0].rareza
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    buildMediaUrl (media, base_uri) {
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
    submit() {
      console.log("submit buttom");
    }
  }
};
</script>

<style src="./CheckMyMonkes.scss" lang="scss" />
