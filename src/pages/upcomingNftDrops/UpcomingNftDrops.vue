<template>
  <section id="upcomingNftDrops" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Upcoming NFT Drops</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <h3 class="h9_em p vermobile">Sort by</h3>
    
    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>
    
    <section class="section-down grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
      <v-card v-for="(item,i) in dataNftDrops" :key="i" class="card divcol"
        style="--p:clamp(1em,2vw,2em);gap:.5em">
        <div class="acenter" style="gap:.5em">
          <img :src="item.img" alt="NFT Image" style="--w: 4.5em">
          <div class="divcol">
            <h6 class="h11_em p">{{item.name}}</h6>
            <span style="color:var(--success)" class="h11_em">{{item.type}}</span>
          </div>
        </div>
        <p class="h11_em p light">{{item.desc}}</p>
        <div class="divcol light" style="gap:.2em">
          <div class="space h11_em">
            <span>Price</span>
            <span style="color:var(--success)">{{item.price}}</span>
          </div>

          <div class="space h11_em">
            <span>Supply</span>
            <span>{{item.supply}}</span>
          </div>

          <div class="space h11_em">
            <span>Date</span>
            <span>{{item.date}}</span>
          </div>

          <div class="space h11_em">
            <span>Votes</span>
            <span>{{item.votes}}</span>
          </div>
        </div>

        <aside class="cronometer center">
          <div class="grid" style="--gtc:repeat(4,1fr);gap:12px 0;place-items:center">
            <span v-for="(item2,i2) in item.cronometer" :key="i2" style="color:var(--success)">
              {{item2.time}}
            </span>
            <span v-for="n in 4" :key="n" class="h11_em">
              {{n==1?'Days':n==2?'Hrs':n==3?'Min':n==4?'Sec':null}}
            </span>
          </div>
        </aside>

        <aside class="space gap1 wrap_inv">
          <div class="acenter alignmobile">
            <v-btn v-for="(item2,i) in item.redes" :key="i" icon :href="item2.url"
              style="--p:0">
              <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                style="--w:1.8em">
            </v-btn>
          </div>

          <div class="acenter alignmobile" style="gap:.5em">
            <v-btn class="btn" style="--p:.3em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)">
              <v-icon>mdi-arrow-up-bold</v-icon>
            </v-btn>
            <v-btn class="btn" style="--p:.45em 1.5em;min-width:max-content;height:max-content;
              --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)">
              Mint
            </v-btn>
          </div>
        </aside>
      </v-card>
    </section>
  </section>
</template>

<script>
export default {
  name: "upcomingNftDrops",
  i18n: require("./i18n"),
  data() {
    return {
      dataControls: [
        { name: "Sort by Price", active: false },
        { name: "Sort by Votes", active: false },
        { name: "Sort by Supply", active: false },
        { name: "Sort by Date", active: false },
      ],
      dataNftDrops: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          //: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft3.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft4.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft3.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/nfts/nft4.png"),
          name: "Collection o NFT Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          price: "9 NEAR",
          supply: "3333",
          date: "01 FEB 2022 17:00:00",
          //: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./UpcomingNftDrops.scss" lang="scss" />
