<template>
  <section id="vote" class="divcol gap2">
    <ModalVote ref="menu"></ModalVote>
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Vote</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <section id="container-top" class="card jspace fwrap">
      <section class="card divcol gap2">
        <h4 class="p">The most Voted</h4>
        <v-sheet class="container-wrapper " color="transparent">
          <v-card color="transparent" v-for="(item,i) in dataVoted" :key="i" class="space gap1 scrollx">
            <div class="divrow gap2">
              <div class="center gap1">
                <span class="number">{{i+1}}</span>
                <img :src="item.img" alt="project images" style="--w:4.710625em">
              </div>

              <div class="divcol overflow" style="width:11.63375em">
                <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                <span style="font-size:0.97375em">{{item.desc}}</span>
              </div>
            </div>

            <div class="right space">
              <div class="center" style="gap:.5em">
                <span>{{item.vote_positivo}}</span>
                <div class="acenter">
                  <v-btn :class="{clr_tertiary: item.positivo == 1}" icon @click="votar(item.desc, true)">
                    <img src="@/assets/icons/like.svg" alt="like">
                  </v-btn>
                  <v-btn :class="{clr_tertiary: item.negativo == 1}" :disabled="!item.permission" icon @click="votar(item.desc, false)">
                    <img src="@/assets/icons/dislike.svg" alt="dislike">
                  </v-btn>
                </div>
                <span>{{item.vote_negativo}}</span>
              </div>
            </div>
          </v-card>
        </v-sheet>
      </section>

      <section class="card divcol gap2">
        <h4 class="p">Recently Added</h4>
        <v-sheet class="container-wrapper " color="transparent">
          <v-card color="transparent" v-for="(item,i) in dataAdded" :key="i" class="space gap1 scrollx">
            <div class="divrow gap2">
              <div class="center gap1">
                <span class="number">{{i+1}}</span>
                <img :src="item.img" alt="project images" style="--w:4.710625em">
              </div>

              <div class="divcol overflow" style="width:11.63375em">
                <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                <span style="font-size:0.97375em">{{item.desc}}</span>
              </div>
            </div>

            <div class="right space">
              <div class="center" style="gap:.5em">
                <span>{{item.vote_positivo}}</span>
                <div class="acenter">
                  <v-btn :class="{clr_tertiary: item.positivo == 1}" icon @click="votar(item.desc, true)">
                    <img src="@/assets/icons/like.svg" alt="like">
                  </v-btn>
                  <v-btn :class="{clr_tertiary: item.negativo == 1}" :disabled="!item.permission" icon @click="votar(item.desc, false)">
                    <img src="@/assets/icons/dislike.svg" alt="dislike">
                  </v-btn>
                </div>
                <span>{{item.vote_negativo}}</span>
              </div>
            </div>
              <!-- <div class="center">
                <v-btn icon>
                  <img src="@/assets/icons/like.svg" alt="like button">
                </v-btn>
                <v-btn icon @click="$refs.menu.modalDislike = true">
                  <img src="@/assets/icons/dislike.svg" alt="dislike button">
                </v-btn>
              </div>

              <div class="divcol">
                <span style="--c:var(--success)">{{item.voted}}</span>
                <span>Voted</span>
              </div>
            </div> -->
          </v-card>
        </v-sheet>
      </section>
    </section>


    <section id="container-bottom" class="fwrap space">
      <!-- left -->
      <!-- <section class="divcol gap2">
        <aside class="container-controls space gap2 wrap">
          <v-tabs>
            <v-tab v-for="(item,i) in dataControlsLeft" :key="i">
              <h6 class="p">{{item.name}}</h6>
            </v-tab>
          </v-tabs>
          <v-text-field
            v-model="searchLeft"
            hide-details
            solo
            label="Search for Nft Project Name"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%, .7);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF"
            class="customeFilter search"
          ></v-text-field>
        </aside>

        <v-sheet class="card divcol gap2">
          <v-sheet class="container-wrapper">
            <section class="container-content scrollx">
              <v-card color="transparent" v-for="(item,i) in dataVoteLeft" :key="i" class="space gap1">
                <div class="divrow gap2">
                  <div class="center gap1">
                    <span class="number">{{i+1}}</span>
                    <img :src="item.img" alt="project images" style="--w:4.710625em">
                  </div>

                  <div class="divcol overflow" style="width:11.63375em">
                    <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                    <span style="font-size:0.97375em">{{item.desc}}</span>
                  </div>
                </div>

                <div class="right space">
                  <div class="center">
                    <v-btn icon>
                      <img src="@/assets/icons/like.svg" alt="like button">
                    </v-btn>
                    <v-btn icon @click="$refs.menu.modalDislike = true">
                      <img src="@/assets/icons/dislike.svg" alt="dislike button">
                    </v-btn>
                  </div>

                  <div class="divcol">
                    <span style="--c:var(--success)">{{item.voted}}</span>
                    <span>Voted</span>
                  </div>
                </div>
              </v-card>
            </section>
          </v-sheet>
          
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
        </v-sheet>
      </section> -->


      <!-- right -->
      <!-- <section class="divcol gap2">
        <aside class="container-controls space gap2 wrap">
          <v-tabs>
            <v-tab v-for="(item,i) in dataControlsRight" :key="i">
              <h6 class="p">{{item.name}}</h6>
            </v-tab>
          </v-tabs>
          <v-text-field
            v-model="searchRight"
            hide-details
            solo
            label="Search for Nft Project Name"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%, .7);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF"
            class="customeFilter search"
          ></v-text-field>
        </aside>

        <v-sheet class="card divcol gap2">
          <v-sheet class="container-wrapper">
            <section class="container-content scrollx">
              <v-card color="transparent" v-for="(item,i) in dataVoteRight" :key="i" class="space gap1">
                <div class="divrow gap2">
                  <div class="center gap1">
                    <span class="number">{{i+1}}</span>
                    <img :src="item.img" alt="project images" style="--w:4.710625em">
                  </div>

                  <div class="divcol overflow" style="width:11.63375em">
                    <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                    <span style="font-size:0.97375em">{{item.desc}}</span>
                  </div>
                </div>

                <div class="right space">
                  <div class="center">
                    <v-btn icon>
                      <img src="@/assets/icons/like.svg" alt="like button">
                    </v-btn>
                    <v-btn icon @click="$refs.menu.modalDislike = true">
                      <img src="@/assets/icons/dislike.svg" alt="dislike button">
                    </v-btn>
                  </div>

                  <div class="divcol">
                    <span style="--c:var(--success)">{{item.voted}}</span>
                    <span>Voted</span>
                  </div>
                </div>
              </v-card>
            </section>
          </v-sheet>
          
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
        </v-sheet>
      </section> -->
    </section>
  </section>
</template>

<script>
import ModalVote from './ModalVote.vue'
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'

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
  name: "vote",
  i18n: require("./i18n"),
  components: { ModalVote },
  data() {
    return {
      dataVoted: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: true,
        //   dislike: false,
        //   voted: 2555,
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: false,
        //   dislike: false,
        //   voted: 3556,
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: false,
        //   dislike: false,
        //   voted: 3556,
        // }
      ],
      dataAdded: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: false,
        //   dislike: false,
        //   voted: 3556,
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: false,
        //   dislike: false,
        //   voted: 3556,
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "Nft Project Name",
        //   desc: "Project description Lorem ipsum dolor sit amet",
        //   like: false,
        //   dislike: false,
        //   voted: 3556,
        // }
      ],
      searchLeft: "",
      dataControlsLeft: [
        { name: "All", active: false },
        { name: "Popularity", active: false },
        { name: "New", active: false },
      ],
      dataVoteLeft: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
      ],
      searchRight: "",
      dataControlsRight: [
        { name: "All", active: false },
        { name: "Popularity", active: false },
        { name: "New", active: false },
      ],
      dataVoteRight: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
      ],
    }
  },
  async mounted() {
    await this.pushHome()
    this.theMostVoted()
    this.recentlyAdded()
  },
  methods: {
    async pushHome () {
      const near = await connect(config);
      const wallet = new WalletConnection(near)
      if (!wallet.isSignedIn()) {
        this.$router.push("/")
      } else {
        const result = await this.isHolderMonke()
        if (result === 0) {
          this.$router.push("/contact") //No Holder
        }
      }
    },
    async isHolderMonke() {
      const CONTRACT_NAME = 'monkeonear.neartopia.near'
      // connect to NEAR
      const near = await connect(config)
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['nft_supply_for_owner'],
          sender: wallet.account()
        })
        let res = await contract.nft_supply_for_owner({
          account_id: wallet.getAccountId(),
        })
          .then((response) => {
            return Number(response)
          }).catch((error) => {
            console.log("ERR",error)
            return 0
          })
        return res
      }
    },
    async votar (contract_id, vote) {
      document.documentElement.style.cursor = "progress"
      document.querySelectorAll("#vote #container-top .v-btn").forEach(item => item.style.pointerEvents = "none")
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
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
            this.refreshVote()
            
            console.log(response)
            aux = true            
          }).catch((error) => {
            console.log(error)
            aux = false
          })
        // if (aux) {
        //   //setTimeout(this.refreshVote, 30000)
          
        // }
      }
    },
    refreshVote() {
      const url = "api/v1/refreshvotes"
      this.axios.post(url)
        .then((response) => {
          this.theMostVoted()
          this.recentlyAdded()
          document.documentElement.style.cursor = "default"
          document.querySelectorAll("#vote #container-top .v-btn").forEach(item => item.style.pointerEvents = "all")
        }).catch((error) => {
          console.log(error)
        })
    },
    async theMostVoted(){
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      // create wallet connection
      const wallet = new WalletConnection(near)
      const url = "api/v1/themostvoted"
      let item = {
        top: 10,
        owner: wallet.getAccountId() || "%"
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataVoted = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon || require('@/assets/nfts/nft1.png'),
              name: response.data[i].name,
              desc: response.data[i].collection,
              like: false,
              dislike: false,
              vote_positivo: response.data[i].votos_positivos,
              vote_negativo: response.data[i].votos_negativos,
              positivo: 0,
              negativo: 0,
              permission: response.data[i].permission_voto_nega,
              //voted: response.data[i].votos_positivos,
            }
         
            this.dataVoted.push(collection)
            this.getVotaciones()
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async recentlyAdded(){
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      // create wallet connection
      const wallet = new WalletConnection(near)
      const url = "api/v1/recentlyadded"
      let item = {
        top: 10,
        owner: wallet.getAccountId() || "%"
      }
      this.axios.post(url, item)
        .then((response) => {
          this.dataAdded = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon || require('@/assets/nfts/nft1.png'),
              name: response.data[i].name,
              desc: response.data[i].nft_contract,
              like: false,
              dislike: false,
              vote_positivo: response.data[i].votos_positivos,
              vote_negativo: response.data[i].votos_negativos,
              positivo: 0,
              negativo: 0,
              permission: response.data[i].permission_voto_nega,
              //voted: response.data[i].votos_positivos,
            }
        
            this.dataAdded.push(collection)
            this.getVotacionesRecently()
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async getVotacionesRecently() {
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['get_voto_user'],
          sender: wallet.account()
        })
        for (var i = 0; i < this.dataAdded.length; i++) {
          await contract.get_voto_user({
            collection: this.dataAdded[i].desc,
            user_id: wallet.getAccountId(),
          })
            .then((response) => {
              this.dataAdded[i].positivo = response.positivo
              this.dataAdded[i].negativo = response.negativo
            }).catch((error) => {
              console.log(error)
              this.dataAdded[i].positivo = 0
              this.dataAdded[i].negativo = 0
            })
        }
      }
    },
    async getVotaciones() {
      const CONTRACT_NAME = 'backend.monkeonnear.near'
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['get_voto_user'],
          sender: wallet.account()
        })
        for (var i = 0; i < this.dataVoted.length; i++) {
          await contract.get_voto_user({
            collection: this.dataVoted[i].desc,
            user_id: wallet.getAccountId(),
          })
            .then((response) => {
              this.dataVoted[i].positivo = response.positivo
              this.dataVoted[i].negativo = response.negativo
            }).catch((error) => {
              console.log(error)
              this.dataVoted[i].positivo = 0
              this.dataVoted[i].negativo = 0
            })
        }
      }
      this.dataTableBool = true
    },
  }
};
</script>

<style src="./Vote.scss" lang="scss" />
