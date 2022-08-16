<template>
  <section id="ranking" class="divcol gap2">
    <h2 class="h7_em p">All Time Best</h2>

    <aside class="container-controls space gap2 fwrap_inv" style="--fb: 1 1 200px">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" class="options" @click="getRanking(item)">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for NFT's and collections"
        append-icon="mdi-magnify"
        style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
      ></v-text-field>
    </aside>

    <!-- tabla 1  -->
    <v-data-table
      v-if="dataTable.length !== 0"
      id="dataTable"
      class="card"
      :search="search"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
      mobile-breakpoint="-1"
      :items-per-page="dataTable.length"
    >
      <template v-slot:[`header.volume`]>
        <button class="acenter align" style="cursor:default;gap:.2em">
          <label for="volume" style="cursor:pointer">Volume</label>
          <v-select
            id="volume"
            v-model="sort.volume.value"
            :items="sort.volume.items"
            solo
            hide-details
            append-icon="mdi-chevron-down"
            style="--w:min-content;--h:24px;--p:0 0 0 .5em;--bg:#0D2C3F;--bs: 3px 0 5px 1px rgb(0,0,0,.4);--c:#FFFFFF;--br:.4vmax"
          ></v-select>
        </button>
      </template>

      <template v-slot:[`header.price`]>
        <button class="acenter align" style="cursor:default;gap:.2em">
          <label for="price" style="cursor:pointer">Floor price</label>
          <v-select
            id="price"
            v-model="sort.price.value"
            :items="sort.price.items"
            solo
            hide-details
            append-icon="mdi-chevron-down"
            style="--w:min-content;--h:24px;--p:0 0 0 .5em;--bg:#0D2C3F;--bs: 3px 0 5px 1px rgb(0,0,0,.4);--c:#FFFFFF;--br:.4vmax"
          ></v-select>
        </button>
      </template>

      <template v-slot:[`item.number`]="{ item }">
        <span>{{dataTable.indexOf(item)+1}}</span>
      </template>

      <template v-slot:[`item.nft`]="{ item }">
        <div class="nftDetail start gap1" @click="$router.push('/project-details')">
          <img class="aspect" :src="item.img || image" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart">
            <span>{{item.name}}</span>
            <span>{{item.desc}}</span>
          </div>
        </div>
      </template>

      <template v-slot:[`item.volume`]="{ item }">
        <span :style="item.state_volume?'color:#22B573':'color:var(--error)'">{{item.volume}}</span>
      </template>

      <template v-slot:[`item.price`]="{ item }">
        <span :style="item.state_price?'color:#22B573':'color:var(--error)'">{{item.price}}</span>
      </template>

      <template v-slot:[`item.change`]="{ item }">
        <span :style="item.state_change?'color:#22B573':'color:var(--error)'">
          {{item.state_change?'+':''}}{{item.change}}%
        </span>
      </template>

      <template v-slot:[`item.vote`]="{ item }">
        <div class="center" style="gap:.5em">
          <span>{{item.vote}}</span>
          <div class="acenter">
            <v-btn icon>
              <img src="@/assets/icons/like.svg" alt="like">
            </v-btn>
            <v-btn icon>
              <img src="@/assets/icons/dislike.svg" alt="dislike">
            </v-btn>
          </div>
        </div>
      </template>

      <template v-slot:[`item.confidence`]="{ item }">
        <v-chip style="border-radius: .3vmax"
          :color="item.confidence=='high'?'#22B573':
          item.confidence=='moderate'?'var(--warning)':
          item.confidence=='low'?'var(--error)':null">
          <span class="tfirst">{{item.confidence}}</span>
        </v-chip>
      </template>
    </v-data-table>

    <center v-else style="margin-block:10em">
      <v-progress-circular
        :size="110"
        :width="10"
        indeterminate
        color="white"
      ></v-progress-circular>
    </center>



    <!-- tabla 2
    <table class="dataTable card">
      <thead>
        <th v-for="(item,i) in dataTable.headers" :key="i">
          <button v-if="item.key!=='volume'&&item.key!=='price'" style="cursor:default">{{item.name}}</button>

          <button v-if="item.key=='volume'||item.key=='price'" class="acenter align" style="cursor:default;gap:.2em">
            <label :for="item.key" style="cursor:pointer">{{item.name}}</label>
            <v-select
              :id="item.key"
              :items="item.select"
              solo
              hide-details
              append-icon="mdi-chevron-down"
              style="--w:min-content;--h:24px;--p:0 0 0 .5em;--bg:#0D2C3F;--bs: 3px 0 5px 1px rgb(0,0,0,.4);--c:#FFFFFF;--br:.4vmax"
            ></v-select>
          </button>
        </th>
      </thead>

      <tbody class="tcenter">
        <tr v-for="(item,i) in dataTable.items" :key="i">
          <td v-for="(item2,i2) in item.columns" :key="i2">
            col 1
            <span v-if="item2.key=='number'">{{i+1}}</span>
            col 2
            <div v-if="item2.key=='nft'" class="center gap1">
              <img class="aspect" :src="item2.img" alt="nft" style="--w:4.710625em">
              <div class="divcol">
                <span>{{item2.name}}</span>
                <span>{{item2.desc}}</span>
              </div>
            </div>
            col 3
            <span>{{item2.supply}}</span>
            col 4
            <span :style="item2.state?'color:#22B573':'color:var(--error)'">{{item2.volume}}</span>
            col 5
            <span :style="item2.state?'color:#22B573':'color:var(--error)'">{{item2.price}}</span>
            col 6
            <span v-if="item2.key=='change'" :style="item2.state?'color:#22B573':'color:var(--error)'">
              {{item2.state?'+':'-'}}{{item2.change}}%
            </span>
            col 7
            <span>{{item2.date}}</span>
            col 8
            <div v-if="item2.key=='vote'" class="center" style="gap:.5em">
              <span>{{item2.vote}}</span>
              <div>
                <v-btn icon>
                  <img src="@/assets/icons/like.svg" alt="like">
                </v-btn>
                <v-btn icon>
                  <img src="@/assets/icons/dislike.svg" alt="dislike">
                </v-btn>
              </div>
            </div>
            col 9
            <v-chip v-if="item2.key=='confidence'" style="border-radius: .3vmax"
              :color="item2.confidence=='high'?'#22B573':
              item2.confidence=='moderate'?'var(--warning)':
              item2.confidence=='low'?'var(--error)':null">
              <span class="tfirst">{{item2.confidence}}</span>
            </v-chip>
          </td>
        </tr>
      </tbody>
    </table> -->

    <section id="container-footer" class="divcol gap1" style="padding-block:6em 7em">
      <h2 class="h6_em tcenter">Want to get Your Project Listed?</h2>
      <p class="divcol center tcenter">
        <span>Can't find your project? List your favorite project now!</span>
        <span>Get your community to vote for your project and gain exposure.</span>
      </p>
      <v-btn class="h10_em btn align" style="--p:1em 1.5em">Upload Collection</v-btn>
    </section>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  name: "ranking",
  i18n: require("./i18n"),
  data() {
    return {
      image: require('@/assets/nfts/nft1.png'),
      search: "",
      dataControls: [
        { id: 1, name: "All Time Best", active: false },
        { id: 2, name: "Floor Price", active: false },
        { id: 3, name: "Volume", active: false },
      ],
      //table
      sort: {
        volume: {
          value: "24h",
          items: ['24h', '7d', '30d', '90d', '1Y']
        },
        price: {
          value: "24h",
          items: ['24h', '7d', '30d', '90d', '1Y']
        }
      },
      headersTable: [
        { value: "number", text: "#", align: "center", sortable: false },
        { value: "nft", text: "NFT", align: "center", sortable: false },
        { value: "supply", text: "Supply", align: "center", sortable: false },
        { value: "volume", text: "Volume", align: "center", sortable: false },
        { value: "price", text: "Floor Price", align: "center", sortable: false },
        { value: "change", text: "Change 24h", align: "center", sortable: false },
        { value: "date", text: "Launch Date", align: "center", sortable: false },
        { value: "vote", text: "Vote", align: "center", sortable: false },
        { value: "confidence", text: "Confidence Level", align: "center", sortable: false },
      ],
      dataTable: [
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipsum dolor sit",
        //   supply: "12,0001",
        //   volume: "1,250.104,4  N",
        //   price: "104.4 N",
        //   change: "0.89",
        //   date: "Nov / 23 / 2022",
        //   vote: "3456",
        //   confidence: "high",
        //   state_volume: true,
        //   state_price: true,
        //   state_change: false,
        // },
        // { 
        //   img: require('@/assets/nfts/nft1.png'),
        //   name: "Collection o Nft Name",
        //   desc: "Lorem ipsum dolor sit",
        //   supply: "12,0001",
        //   volume: "1,250.104,4  N",
        //   price: "104.4 N",
        //   change: "0.89",
        //   date: "Nov / 23 / 2022",
        //   vote: "3456",
        //   confidence: "moderate",
        //   state_volume: false,
        //   state_price: false,
        //   state_change: true,
        // },
      ],
      //tabla 2
      // dataTable: {
      //   headers: [
      //     { key: "number", name: "#" },
      //     { key: "nft", name: "NFT" },
      //     { key: "supply", name: "Supply" },
      //     { key: "volume", name: "Volume", select:['24h', '7d', '30d', '90d', '1Y'] },
      //     { key: "price", name: "Floor price", select:['24h', '7d', '30d', '90d', '1Y'] },
      //     { key: "change", name: "Change 24h" },
      //     { key: "date", name: "Launch Date" },
      //     { key: "vote", name: "Vote" },
      //     { key: "confidence", name: "Confidence Level" },
      //   ],
      //   items: [
      //     {
      //       columns: [
      //         { key: "number" },
      //         { 
      //           key: "nft",
      //           img: require('@/assets/nfts/nft1.png'),
      //           name: "Collection o Nft Name",
      //           desc: "Lorem ipsum dolor sit"
      //         },
      //         { key: "supply", supply: "12,0001" },
      //         { key: "volume", volume: "1,250.104,4  N", state: true },
      //         { key: "price", price: "104.4 N", state: true },
      //         { key: "change", change: "0.89", state: false },
      //         { key: "date", date: "Nov / 23 / 2022" },
      //         { key: "vote", vote: "3456" },
      //         { key: "confidence", confidence: "high" },
      //       ]
      //     },
      //     {
      //       columns: [
      //         { key: "number" },
      //         { 
      //           key: "nft",
      //           img: require('@/assets/nfts/nft2.png'),
      //           name: "Collection o Nft Name",
      //           desc: "Lorem ipsum dolor sit"
      //         },
      //         { key: "supply", supply: "12,0001" },
      //         { key: "volume", volume: "1,250.104,4  N", state: true },
      //         { key: "price", price: "104.4 N", state: true },
      //         { key: "change", change: "0.89", state: false },
      //         { key: "date", date: "Nov / 23 / 2022" },
      //         { key: "vote", vote: "3456" },
      //         { key: "confidence", confidence: "moderate" },
      //       ]
      //     },
      //   ]
      // }
    }
  },
  async mounted() {
    this.getRanking({ id: 1, name: "All Time Best", active: false })

    this.interval = setInterval(function () {
        this.getRanking()
    }.bind(this), 1800000);
  },
  methods: {
    async getRanking(select){
      this.dataTable = []
      const url = "api/v1/ranking"
      let item = {
        horas: 24,
        top: 50,
        order: null
      }
      if (select.id == 1) {
        item.order = "best"
      } else if (select.id == 2) {
        item.order = "floor"
      } else if (select.id == 3) {
        item.order = "volumen"
      } else {
        item.order = "best"
      }
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              supply: response.data[i].supply,
              volume: parseFloat(response.data[i].volumen1).toFixed(2) + " N",
              price: parseFloat(response.data[i].floor_price).toFixed(2) + " N",
              change: parseFloat(response.data[i].porcentaje).toFixed(2),//"0.89",
              date: moment(response.data[i].fecha).format('DD / MM / YYYY'),
              vote: "3456",
              confidence: "high",
              state_volume: true,
              state_price: true,
              state_change: true,
              desc: response.data[i].symbol,
            }
            if (response.data[i].floor_price < 0) {
              collection.state_price = false
            } 
            if (response.data[i].porcentaje < 0) {
              collection.state_change = false
            }

            this.dataTable.push(collection)
          }
          console.log("data", this.dataTable)
        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
