<template>
  <section id="compareProjects" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Compare Projects</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <aside id="container-vs" class="spacea acenter divcolmobile">
      <div class="aend gap1 fill_wmobile">
        <img :src="project1.img" alt="project 1" style="--w:var(--size)">
        <div class="divcol" style="width:calc(100% - var(--size))">
          <h3 class="h10_em">Project Name 1</h3>
          <v-text-field
            solo
            hide-details
            placeholder="projectname1"
          ></v-text-field>
        </div>
      </div>

      <span class="eliminarmobile">VS</span>

      <div class="aend gap1 fill_wmobile">
        <img :src="project2.img" alt="project 2" style="--w:var(--size)">
        <div class="divcol" style="width:calc(100% - var(--size))">
          <h3 class="h10_em">Project Name 2</h3>
          <v-text-field
            solo
            hide-details
            placeholder="projectname2"
          ></v-text-field>
        </div>
      </div>
    </aside>

    <v-btn id="compare-button" class="btn h10_em center align fill_wmobile" @click="showCompareInfo=true"
      style="--p:0 2em;--h:50px;width:13.5em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);--br:10px">
      Compare
    </v-btn>

    <template v-if="showCompareInfo">
      <aside class="container-controls space gap2">
        <v-tabs>
          <v-tab v-for="(item,i) in dataControls" :key="i">
            <h6 class="h11_em p">{{item.name}}</h6>
          </v-tab>
        </v-tabs>

        <v-tabs class="tab-right">
          <v-tab>
            <img class="flr" src="@/assets/logos/near.png" alt="near" style="--w:19.2px">
          </v-tab>
          <v-tab style="color:#FFFFFF">
            $
          </v-tab>
        </v-tabs>
      </aside>

      <section class="section-down divcol" style="gap:2em">
        <Chart ref="chart"></Chart>
        <h3 class="h9_em p">Market stats</h3>

        <v-simple-table id="market" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableMarket"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <td v-if="item.key!=='change'&&item.key!=='confidence'" class="tcenter">{{ item.project1 }}</td>
                <td v-if="item.key!=='change'&&item.key!=='confidence'" class="tcenter">{{ item.project2 }}</td>
                <!-- if color -->
                <td v-if="item.key=='change'" class="tcenter" :style="item.state1?'color:#22B573':'color:var(--error)'">
                  {{item.state1?'+':'-'}}{{ item.project1 }}
                </td>
                <td v-if="item.key=='change'" class="tcenter" :style="item.state2?'color:#22B573':'color:var(--error)'">
                  {{item.state2?'+':'-'}}{{ item.project2 }}
                </td>
                <!-- if circle progress bar -->
                <td v-if="item.key=='confidence'" class="confidence tcenter" :style="``">
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="15"
                    :value="item.key=='confidence'?item.project1:null"
                    color="var(--success)"
                  >
                    <span>
                      {{ item.key=='confidence'?item.project1:null }}
                    </span>
                  </v-progress-circular>
                </td>
                <td v-if="item.key=='confidence'" class="confidence tcenter" :style="``">
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="15"
                    :value="item.key=='confidence'?item.project2:null"
                    color="var(--success)"
                  >
                    <span>
                      {{ item.key=='confidence'?item.project2:null }}
                    </span>
                  </v-progress-circular>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <h3 class="h9_em p">Socials</h3>

        <v-simple-table id="social" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableSocials"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <td class="tcenter">{{ item.project1 }}</td>
                <td class="tcenter">{{ item.project2 }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <h3 class="h9_em p">Additional Information</h3>

        <v-simple-table id="aditional" class="dataTableSimple">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  <h4 class="h8_em">Projects</h4>
                </th>
                <th>
                  <center>
                    <img :src="project1.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
                <th>
                  <center>
                    <img :src="project2.img" alt="project 1" style="--w:4.375em">
                  </center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in dataTableAdditional"
                :key="item.compare"
              >
                <td>{{ item.compare }}</td>
                <!-- col 1 -->
                <template v-if="item.key=='buy'">
                  <td class="tcenter">
                    <span class="center" style="gap:.8em">
                      <img :src="item.market1" alt="market 1" style="--w:1.5625em">
                      {{ item.project1 }}
                    </span>
                  </td>
                  <td class="tcenter">
                    <span class="center" style="gap:.8em">
                      <img :src="item.market2" alt="market 2" style="--w:1.5625em">
                      {{ item.project2 }}
                    </span>
                  </td>
                </template>
                <!-- col 2 -->
                <template v-if="item.key=='royalties'">
                  <td class="tcenter">{{ item.project1 }}</td>
                  <td class="tcenter">{{ item.project2 }}</td>
                </template>
                <!-- col 3 -->
                <template v-if="item.key=='watchlist'">
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/${item.project1}.svg`)" style="--w:4em">
                    </center>
                  </td>
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/${item.project2}.svg`)" style="--w:4em">
                    </center>
                  </td>
                </template>
                <!-- col 4 -->
                <template v-if="item.key=='alert'">
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/bell${item.project1?'':'-outline'}.svg`)" style="--w:1.5em">
                    </center>
                  </td>
                  <td class="tcenter">
                    <center class="center">
                      <img :src="require(`@/assets/icons/bell${item.project2?'':'-outline'}.svg`)" style="--w:1.5em">
                    </center>
                  </td>
                </template>
                <!-- col 5 -->
                <template v-if="item.key=='category'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
                <!-- col 6 -->
                <template v-if="item.key=='contract'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
                <!-- col 7 -->
                <template v-if="item.key=='verification'">
                  <td class="tcenter">
                    <v-chip class="btn" :style="`--bs:none;--bg:transparent;
                      --b:1px solid ${item.project1?'var(--success)':'var(--error)'};--p:.5em .7em`">
                      <v-icon :style="`color:${item.project1?'var(--success)':'var(--error)'} !important;margin-right:.2em`">
                        mdi-{{item.project1?'check':'close'}}
                      </v-icon>
                      {{item.project1?'Verified by Econear':'No verified'}}
                    </v-chip>
                  </td>
                  <td class="tcenter">
                    <v-chip class="btn" :style="`--bs:none;--bg:transparent;
                      --b:1px solid ${item.project2?'var(--success)':'var(--error)'};--p: .5em.7em`">
                      <v-icon :style="`color:${item.project2?'var(--success)':'var(--error)'} !important;margin-right:.2em`">
                        mdi-{{item.project2?'check':'close'}}
                      </v-icon>
                      {{item.project2?'Verified by Econear':'No verified'}}
                    </v-chip>
                  </td>
                </template>
                <!-- col 8 -->
                <template v-if="item.key=='about'">
                  <td class="tcenter">{{item.project1}}</td>
                  <td class="tcenter">{{item.project2}}</td>
                </template>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
    </template>
  </section>
</template>

<script>
import Chart from './chart/Chart.vue'
export default {
  name: "compareProjects",
  i18n: require("./i18n"),
  components: { Chart },
  data() {
    return {
      showCompareInfo: false,
      project1: {
        
        img: require('@/assets/nfts/nft1.png')
      },
      project2: {
        img: require('@/assets/nfts/nft2.png')
      },
      dataControls: [
        { name: "Floor price", active: false },
        { name: "Holder", active: false },
        { name: "Volume", active: false },
      ],
      dataTableMarket: [
        {
          compare: 'Floor Price',
          project1: 19,
          project2: 19,
        },
        {
          key: "change",
          compare: 'Price change (24h)',
          project1: 2.62,
          project2: 2.62,
          state1: true,
          state2: false,
        },
        {
          compare: 'Market Cap',
          project1: '57,000',
          project2: '66,000',
        },
        {
          compare: 'Volume (24h)',
          project1: 426,
          project2: 426,
        },
        {
          compare: 'Holders',
          project1: 456,
          project2: 456,
        },
        {
          compare: 'Total listed',
          project1: 172,
          project2: 172,
        },
        {
          compare: 'Total upvotes',
          project1: '16,378',
          project2: '16,378',
        },
        {
          compare: 'Total downvotes',
          project1: 1802,
          project2: 1902,
        },
        {
          compare: 'Supply',
          project1: 3000,
          project2: 3000,
        },
        {
          compare: 'Average price (24h)',
          project1: 21.6,
          project2: 21.6,
        },
        {
          compare: 'Lowest sale (24h)',
          project1: 17.1,
          project2: 17.1,
        },
        {
          compare: 'Highest sale (24h)',
          project1: 27,
          project2: 27,
        },
        {
          compare: 'Rank by volume (7d)',
          project1: '9th rank',
          project2: '9th rank',
        },
        {
          compare: 'Rank by Marketcap',
          project1: '11th rank',
          project2: '12th rank',
        },
        {
          key: "confidence",
          compare: 'Confidence percentage',
          project1: '89%',
          project2: '89%',
        },
      ],
      dataTableSocials: [
        {
          compare: 'Discord',
          project1: '5.80k',
          project2: '6.80k',
        },
        {
          compare: 'Twitter',
          project1: '12.9k',
          project2: '14.9k',
        },
        {
          compare: 'Instagram',
          project1: '9k',
          project2: '10k',
        },
        {
          compare: 'Medium',
          project1: '-',
          project2: 170,
        },
        {
          compare: 'Online members (Discord)',
          project1: '-',
          project2: 1062,
        },
        {
          compare: 'Website',
          project1: 'Loremipsum.com',
          project2: 'Loremipsum.como',
        },
      ],
      dataTableAdditional: [
        {
          key: "buy",
          compare: 'Buy on',
          market1: require("@/assets/logos/market-p.svg"),
          project1: 'Paras',
          market2: require("@/assets/logos/market-p.svg"),
          project2: 'Paras',
        },
        {
          key: "royalties",
          compare: 'Royalties',
          project1: '5%',
          project2: '5%',
        },
        {
          key: "watchlist",
          compare: 'Add to watchlist',
          project1: "add",
          project2: "add",
        },
        {
          key: "alert",
          compare: 'Create alert',
          project1: true,
          project2: false,
        },
        {
          key: "category",
          compare: 'Category',
          project1: "Staking + DAO",
          project2: "Staking + DAO",
        },
        {
          key: "contract",
          compare: 'Contract address',
          project1: "nearton_nft.near",
          project2: "nearton_nft.near",
        },
        {
          key: "verification",
          compare: 'Verification',
          project1: true,
          project2: false,
        },
        {
          key: "about",
          compare: 'About project',
          project1: "The first meta town on NEAR.",
          project2: "The first meta town on NEAR.",
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./CompareProjects.scss" lang="scss" />
