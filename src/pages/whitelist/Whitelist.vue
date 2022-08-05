<template>
  <section id="whitelist" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Whitelist</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <aside class="container-controls divcol gap1">
      <h3 class="h9_em p">My Porjects</h3>
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>
    
    <section class="section-down divcol gap2">
      <section class="grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
        <v-card v-for="(item,i) in dataWhitelist" :key="i" class="card divcol"
          style="--p:0;gap:.5em">
          <img :src="item.img" alt="NFT Image" style="--w: 100%;--max-h:11.9375em">

          <div style="padding:2em;padding-top:1em;gap:1em" class="divcol">
            <div class="divcol center">
              <h6 class="bold p">{{item.name}}</h6>
              <span id="type" class="h11_em">{{item.type}}</span>
            </div>
            <p id="desc" class="p light tcenter">{{item.desc}}</p>
            <div class="divcol light" style="gap:.2em">
              <div class="space h11_em">
                <span class="bold">Whitelist</span>
                <span style="color:var(--success)">{{item.whitelist}}</span>
              </div>
              
              <div class="space h11_em">
                <span class="bold">Whitelist spots taken</span>
                <span>{{item.spots}}</span>
              </div>

              <div class="space h11_em">
                <span class="bold">Supply</span>
                <span>{{item.supply}}</span>
              </div>
              
              <div class="space h11_em">
                <span class="bold">Mint Date</span>
                <span>{{item.date}}</span>
              </div>
              
              <div class="space h11_em">
                <span class="bold">Mint Price</span>
                <span>{{item.price}}</span>
              </div>

              <div class="space h11_em">
                <span class="bold">Votes</span>
                <span>{{item.votes}}</span>
              </div>
            </div>

            <aside id="container-footer" class="divcol gap1">
              <v-btn class="btn align bold" style="--p:.45em 1.5em;height:max-content;width:min(100%,14.85em);
                --c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)" @click="$router.push('/whitelist-details')">
                Submit Wallet
              </v-btn>

              <div class="center align">
                <v-btn v-for="(item2,i) in item.redes" :key="i" icon :href="item2.url"
                  style="--p:0">
                  <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                    style="--w:1.8em">
                </v-btn>
              </div>
            </aside>
          </div>
        </v-card>
      </section>

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
    </section>
  </section>
</template>

<script>
export default {
  name: "whitelist",
  i18n: require("./i18n"),
  data() {
    return {
      dataControls: [
        { name: "My projects", active: false },
        { name: "Other Projects", active: false },
        { name: "Past Projects", active: false },
      ],
      dataWhitelist: [
        {
          img: require("@/assets/images/whitelist-image.jpg"),
          name: "Discord Server Project Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          whitelist: "Active",
          spots: 34,
          supply: 300,
          date: "Thu, July 14th, 2023",
          price: "TBD",
          votes: "6,917",
          redes: [
            { name: "twitter", url: "#" },
            { name: "discord", url: "#" },
            { name: "telegram", url: "#" },
          ],
        },
        {
          img: require("@/assets/images/whitelist-image.jpg"),
          name: "Discord Server Project Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          whitelist: "Active",
          spots: 34,
          supply: 300,
          date: "Thu, July 14th, 2023",
          price: "TBD",
          votes: "6,917",
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

<style src="./Whitelist.scss" lang="scss" />
