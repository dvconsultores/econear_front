<template>
  <v-dialog
    v-model="modalCalendar"
    max-width="37.304375em"
    hide-overlay
  >
    <v-card id="modalCalendar" class="overflowx">
      <v-btn icon class="close" @click="modalCalendar = false">
        <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
      </v-btn>

      <v-card class="card divcol align" style="--p:0;gap:.5em;--bg:var(--primary)">
        <img :src="dataModalCalendar.img" alt="NFT Image" style="--w: 100%;--max-h:11.9375em">

        <div style="padding:2em;padding-top:1em;gap:1em" class="divcol">
          <div class="divcol center">
            <h6 class="bold p">{{dataModalCalendar.name}}</h6>
            <span id="type" class="h11_em">{{dataModalCalendar.type}}</span>
          </div>
          <p id="desc" class="p light tspace">{{dataModalCalendar.desc}}</p>
          <div class="divcol light" style="gap:.2em">
            <div v-if="dataModalCalendar.supply" class="space h11_em">
              <span class="bold">Price</span>
              <span style="color:var(--success)">{{dataModalCalendar.price}}</span>
            </div>
            
            <!-- <div class="space h11_em">
              <span class="bold">Public Sale</span>
              <span style="color:var(--success)">{{dataModalCalendar.sale}} NEAR</span>
            </div> -->

            <div v-if="dataModalCalendar.supply" class="space h11_em">
              <span class="bold">Supply</span>
              <span>{{dataModalCalendar.supply}}</span>
            </div>
            
            <div v-if="dataModalCalendar.hour" class="space h11_em">
              <span class="bold">Date</span>
              <span>{{dataModalCalendar.hour}}</span>
            </div>
            
            <div class="space h11_em">
              <span class="bold">Votes</span>
              <span>{{dataModalCalendar.votes}}</span>
            </div>
          </div>

          <aside>
            <div v-if="dataModalCalendar.cronometer" class="cronometer center">
              <div class="grid" style="--gtc:repeat(4,1fr);gap:12px 0;place-items:center">
                <span v-for="(item,i) in dataModalCalendar.cronometer" :key="i" style="color:var(--success)">
                  {{item.time}}
                </span>
                <span v-for="n in 4" :key="n" class="h11_em">
                  {{n==1?'Days':n==2?'Hrs':n==3?'Min':n==4?'Sec':null}}
                </span>
              </div>
            </div>
            
            <div id="container-footer" class="gap1 center">
              <v-btn v-for="(item,i) in dataModalCalendar.redes" :key="i" icon :href="item.url"
                style="--p:0">
                <img class="aspect" :src="require(`@/assets/icons/${item.name}.svg`)" alt="social icons"
                  style="--w:1.8em">
              </v-btn>
            </div>
          </aside>
        </div>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "modalCalendar",
  i18n: require("./i18n"),
  data() {
    return {
      modalCalendar: false,
      dataModalCalendar: {
      //   img: require("@/assets/images/whitelist-image.jpg"),
      //   name: "Discord Server Project Name",
      //   type: "Utility",
      //   desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
      //   presale: 9,
      //   sale: 22,
      //   supply: 300,
      //   hour: "17:00:00 UTC",
      //   votes: "6,917",
      //   cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
      //   redes: [
      //     { name: "twitter", url: "#" },
      //     { name: "discord", url: "#" },
      //     { name: "telegram", url: "#" },
      //   ],
      }
    }
  },
  mounted() {
    this.interval = setInterval(function () {
      this.updateTime()
    }.bind(this), 1000);
  },
  methods: {
    async updateTime () {
      let timeNow = await parseInt(new Date().getTime() / 1000)
      if (this.dataModalCalendar.cronometer) {
        let time = this.dataModalCalendar.fecha_lanzamiento - timeNow

        var d = String(Math.floor(time / (3600*24)));
        var h = String(Math.floor(time % (3600*24) / 3600));
        var m = String(Math.floor(time % 3600 / 60));
        var s = String(Math.floor(time % 60));

        if (d.length === 1) {
          d = "0" + d
        }
        if (h.length === 1) {
          h = "0" + h
        }
        if (m.length === 1) {
          m = "0" + m
        }
        if (s.length === 1) {
          s = "0" + s
        }

        let cronometer = [ {time: d}, {time: h}, {time: m}, {time: s} ]

        this.dataModalCalendar.cronometer = cronometer
      }
    },
  }
};
</script>

<style src="./MintCalendar.scss" lang="scss" />
