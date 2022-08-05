<template>
  <section id="mintCalendar" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Mint Calendar</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>
    
    <Calendar ref="calendar"></Calendar>
    
    <section class="divcol">
      <div class="acenter gap1 margin2bottom">
        <h3 class="h9_em p bold">Date:</h3>
        <v-chip class="h9_em bold" style="padding:.8em" color="hsl(210, 50%, 8%)">Tue, Aug 2nd, 2022</v-chip>
      </div>

      <section class="section-down divcol gap2">
        <aside class="grid" style="--gtc:repeat(auto-fit,minmax(min(100%,20em),1fr));gap:2em">
          <v-card v-for="(item,i) in dataProjects" :key="i" class="card divcol"
            style="--p:0;gap:.5em">
            <img :src="item.img" alt="NFT Image" style="--w: 100%;--max-h:11.9375em">

            <div style="padding:2em;padding-top:1em;gap:1em" class="divcol">
              <div class="divcol center">
                <h6 class="bold p">{{item.name}}</h6>
                <span id="type" class="h11_em">{{item.type}}</span>
              </div>
              <p id="desc" class="p light tspace">{{item.desc}}</p>
              <div class="divcol light" style="gap:.2em">
                <div class="space h11_em">
                  <span class="bold">Presale</span>
                  <span style="color:var(--success)">{{item.presale}} NEAR</span>
                </div>
                
                <div class="space h11_em">
                  <span class="bold">Public Sale</span>
                  <span style="color:var(--success)">{{item.sale}} NEAR</span>
                </div>

                <div class="space h11_em">
                  <span class="bold">Supply</span>
                  <span>{{item.supply}}</span>
                </div>
                
                <div class="space h11_em">
                  <span class="bold">Hour</span>
                  <span>{{item.hour}}</span>
                </div>
                
                <div class="space h11_em">
                  <span class="bold">Votes</span>
                  <span>{{item.votes}}</span>
                </div>
              </div>

              <aside>
                <div class="cronometer center">
                  <div class="grid" style="--gtc:repeat(4,1fr);gap:.5em;place-items:center">
                    <span v-for="(item2,i2) in item.cronometer" :key="i2" style="color:var(--success)">
                      {{item2.time}}
                    </span>
                    <span v-for="n in 4" :key="n" class="h11_em">
                      {{n==1?'Days':n==2?'Hrs':n==3?'Min':n==4?'Sec':null}}
                    </span>
                  </div>
                </div>
                
                <div id="container-footer" class="gap1 center">
                  <v-btn v-for="(item2,i) in item.redes" :key="i" icon :href="item2.url"
                    style="--p:0">
                    <img class="aspect" :src="require(`@/assets/icons/${item2.name}.svg`)" alt="social icons"
                      style="--w:1.8em">
                  </v-btn>
                </div>
              </aside>
            </div>
          </v-card>
        </aside>

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
  </section>
</template>

<script>
import Calendar from './Calendar.vue'
export default {
  name: "mintCalendar",
  i18n: require("./i18n"),
  components: { Calendar },
  data() {
    return {
      dataProjects: [
        {
          img: require("@/assets/images/whitelist-image.jpg"),
          name: "Discord Server Project Name",
          type: "Utility",
          desc: "The first ever community voting tool and wallet management tool that comes with built-in data analysis system to find the best project on NEAR PROTOCOL",
          presale: 9,
          sale: 22,
          supply: 300,
          hour: "17:00:00 UTC",
          votes: "6,917",
          cronometer: [ {time: '02'}, {time: '11'}, {time: '31'}, {time: '42'} ],
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
          presale: 9,
          sale: 22,
          supply: 300,
          hour: "17:00:00 UTC",
          votes: "6,917",
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

<style src="./MintCalendar.scss" lang="scss" />
