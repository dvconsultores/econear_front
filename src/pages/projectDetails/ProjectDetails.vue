<template>
  <section id="projectDetails" class="divcol">
    <!-- <aside class="container-header">
    </aside> -->

    <aside class="container-profile divcol center gap1 tcenter">
      <div class="contactions acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialActions" :key="i" icon style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social actions" style="--w:2.5em">
        </v-btn>
      </div>

      <v-avatar width="12.48875em" height="12.48875em">
        <img src="@/assets/images/muestra.jpg" alt="avatar" style="--b:3px solid var(--success);--w:100%">
      </v-avatar>
      <v-chip class="center" style="border-radius: .3vmax;min-width:6.174375em" color="#6A25D2">
        <span class="tfirst">Utility</span>
      </v-chip>
      <h2 class="p bold">MonkeONear Gen 0</h2>
      <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
    </aside>

    <p class="description p align" style="max-width:65ch">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi.
    </p>

    <v-card class="infoup card fwrap align">
      <div class="divcol">
        <label>Total Supply</label>
        <span>{{dataInfo.supply}}</span>
      </div>

      <div class="divcol">
        <label>owners</label>
        <span>{{dataInfo.owners}}</span>
      </div>

      <div class="divcol">
        <label>Total Volume</label>
        <div class="acenter" style="gap:.4em">
          <span>{{dataInfo.total_volume}}</span>
          <img src="@/assets/logos/near.svg" alt="near" style="--w:1.3em">
        </div>
      </div>
    </v-card>

    <section class="infodown fwrap">
      <v-card v-for="(item,i) in dataInfo.down" :key="i" class="card align center">
        <v-sheet color="var(--clr-card)" class="jspace" max-height="150px">
          <div class="divcol">
            <div class="infotext bold acenter" style="gap:.7em">
              <span>{{item.key=='market'?'Market Cap':item.key=='holders'?'Holders':item.key=='volume'?'Volume (24H)':item.key=='price'?'Floor price':null}}</span>
              <img src="@/assets/icons/info.svg" alt="info" style="--w:.9em">
            </div>
            <span class="number bold acenter" style="gap:.7em">
              <img v-if="item.key=='volume'||item.key=='price'" src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
              {{item.price}}
            </span>
            <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
              {{item.percent}}%
            </span>
          </div>

          <v-chip class="btn center" 
            style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
            #{{item.number}}
          </v-chip>
        </v-sheet>
      </v-card>
    </section>

    <h3 class="h9_em p">Buy On:</h3>

    <section class="card grid" style="--p:2em;gap:1em;--gtc: repeat(auto-fit,minmax(min(100%,16.124375em),1fr))">
      <v-card v-for="(item,i) in dataBuy" :key="i" class="card" style="--p:1em;display:flex;gap:1em;">
        <img :src="item.img" alt="markets" style="--w:4.710625em">
        <span class="h9_em">{{item.name}}</span>
      </v-card>
    </section>

    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>

    <!-- overview section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='overview')].active">
      <section class="container-potential card" style="--p:2em">
        <h3 class="h9_em">BlueChip Potential</h3>

        <div class="fwrap gap2 space" style="--fb: 1 1 20em">
          <v-card v-for="(item,i) in dataPotential" :key="i" color="var(--clr-card)" class="jspace">
            <div class="divcol">
              <div class="infotext bold acenter" style="gap:.7em">
                <span>{{item.key=='holders'?'Blue Chip Holders':item.key=='whales'?'Whales':null}}</span>
                <img src="@/assets/icons/info.svg" alt="info" style="--w:1em">
              </div>
              <div class="astart gap1">
                <span class="number bold acenter" style="gap:.7em">{{item.price}}</span>
                <span class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
                  {{item.percent}}%
                </span>
              </div>
              <div class="holding acenter" style="gap:.7em">
                <span>Holding {{item.holding}} NFTs</span>
                <img src="@/assets/icons/info-gray.svg" alt="info" style="--w:1em">
              </div>
            </div>

            <v-chip class="btn center" 
              style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
              #{{item.number}}
            </v-chip>
          </v-card>
        </div>
      </section>

      <!-- chart market -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">MarketCap &amp; Volume</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartMarket ref="chartmarket"></ChartMarket>
      </section>


      <!-- chart price -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Price ($NEAR)</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartPrice ref="chartprice"></ChartPrice>
      </section>


      <section class="fwrap" style="--fb:1 1 45em; gap:1em">
        <!-- chart sales -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Sales and liquidity</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartSales ref="chartsales"></ChartSales>
        </aside>


        <!-- chart buyers -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Buyers &amp; Traders</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartBuyers ref="chartbuyers"></ChartBuyers>
        </aside>
      </section>


      <!-- chart holders -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Holders</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartHolders ref="chartholders"></ChartHolders>
      </section>


      <section class="fwrap" style="--fb:1 1 45em; gap:1em">
        <!-- chart holding amount -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Holding Amount Distribution</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartHoldingAmount ref="chartholdingamount"></ChartHoldingAmount>
        </aside>


        <!-- chart holding period -->
        <aside class="container-chart card" style="--p:2em">
          <div class="space wrap">
            <h3 class="h9_em">Holding Period Distribution</h3>

            <v-btn-toggle
              mandatory
              color="#60D2CA"
            >
              <v-btn v-for="n in 6" :key="n" color="transparent">
                <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
              </v-btn>
              <v-btn color="transparent">
                <v-icon color="#FFFFFF">mdi-calendar</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <ChartHoldingPeriod ref="chartholdingperiod"></ChartHoldingPeriod>
        </aside>
      </section>


        <!-- top sales  -->
      <section class="card" style="--p:2em">
        <div class="space wrap margin2bottom">
          <h3 class="h9_em">Top sales</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 4" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'ALL':null}}</span>
            </v-btn>
          </v-btn-toggle>
        </div>

        <v-data-table
          class="dataTable card"
          :headers="headersTableTopSales"
          :items="dataTableTopSales"
          hide-default-footer
          style="--bg:transparent;--b:none;--p:0em"
        >
          <template v-slot:[`header.number`]>
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>

          <template v-slot:[`item.number`]="{ item }">
            {{dataTableTopSales.indexOf(item) + 1}}
          </template>

          <template v-slot:[`item.name`]="{ item }">
            <div class="acenter gap1 tstart">
              <img :src="item.img" alt="nft image" style="--w:4.710625em">
              <span style="max-width:18ch" class="bold">{{item.name}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.price`]="{ item }">
            {{item.price}}N
          </template>

          <template v-slot:[`item.history`]="{ item }">
            <v-sparkline
              :value="item.history"
              :line-width="3"
              color="var(--secondary)"
              stroke-linecap="round"
              :smooth="10"
              auto-draw
            ></v-sparkline>
          </template>

          <template v-slot:footer>
            <div class="fill_w center">
              <v-btn-toggle mandatory color="#60D2CA">
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
            </div>
          </template>
        </v-data-table>
      </section>
    </template>


    <!-- social section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='social')].active">
      <!-- chart discord -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Discord</h3>

          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartDiscord ref="chartdiscord"></ChartDiscord>
      </section>

      <!-- chart twitter -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Twitter</h3>

          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 6" :key="n" color="transparent">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6?'ALL':null}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#FFFFFF">mdi-calendar</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <ChartTwitter ref="charttwitter"></ChartTwitter>
      </section>
    </template>


    <!-- nft section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='nft')].active">
      <!-- chart rarity distribution -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Rarity Distribution</h3>
        </div>

        <ChartRarityDistribution ref="chartraritydistribution"></ChartRarityDistribution>
      </section>

      <!-- chart rarity and price -->
      <section class="container-chart card" style="--p:2em">
        <div class="space wrap">
          <h3 class="h9_em">Rarity and price</h3>
        </div>

        <ChartRarityPrice ref="chartrarityprice"></ChartRarityPrice>
      </section>

      <!-- nfts -->
      <section class="container-chart card divcol gap2" style="--p:2em">
        <div class="space wrap gap1">
          <div class="divcol">
            <h3 class="h9_em p">NFTs</h3>
            <div class="acenter" style="gap:.2em">
              <span class="infotext bold">444</span>
              <img src="@/assets/icons/info-gray.svg" alt="info icon" style="--w:.9em">
            </div>
          </div>

          <v-text-field
            v-model="searchNft"
            hide-details
            solo
            label="Search NFT by #"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--w:100%;--label:#FFFFFF;max-width:30.061875em;"
            class="search"
          ></v-text-field>
        </div>

        <div class="container-nfts grid" style="--gtc: repeat(auto-fit,minmax(min(100%,21.2225em),1fr));gap:3.5em">
          <v-card v-for="(item,i) in dataNfts" :key="i" color="transparent" class="divcol" :class="{widthLimiter: widthLimiter}">
            <img :src="item.img" alt="nft images" style="--w:100%;">

            <v-sheet class="card" style="--p:1em">
              <h6>{{item.name}}</h6>
              <div class="divcol" style="gap:.2em">
                <div class="space">
                  <span>Last price:</span>
                  <span>{{item.price}}N</span>
                </div>
                <div class="space">
                  <span>Rarity rank:</span>
                  <v-chip class="btn center" id="rank"
                    style="--bg:#0D1A26;--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 2.75875em);--h:1.868125em">
                    #{{item.rank}}
                  </v-chip>
                </div>
                <div class="space">
                  <span>Rarity:</span>
                  <v-chip style="border-radius: .3vmax" id="rarity"
                    :color="item.rarity=='rare'?'#26A17B':
                    item.rarity=='common'?'var(--warning)':
                    item.rarity=='legendary'?'#0000B6':
                    item.rarity=='mystic'?'#6A25D2':null">
                    <span class="tfirst">{{item.rarity}}</span>
                  </v-chip>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </div>
      </section>
    </template>


    <!-- leaderboard section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='leaderboard')].active">
      <section class="card" style="--p:2em">
        <div class="acenter margin2bottom">
          <h3 class="h9_em p">Top Holders</h3>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.810625em;margin-left:.3em">
        </div>

        <!-- table top holders -->
        <v-data-table
          class="dataTable card"
          :headers="headersTableTopHolders"
          :items="dataTableTopHolders"
          hide-default-footer
          style="--p:2em;--bg:transparent;--b:none;--p:0"
        >
          <template v-slot:[`header.number`]>
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.nft`]>
            <span>NFT</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.near`]>
            <span>Holding value (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.dollar`]>
            <span>Holding value ($)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.buy`]>
            <span>Buy volume (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.sell`]>
            <span>Sell volume (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`item.number`]="{ item }">
            {{dataTableTopHolders.indexOf(item) + 1}}
          </template>
          
          <template v-slot:[`item.nft`]="{ item }">
            <div class="divcol">
              <span>{{item.nft}}</span>
              <span style="--c:hsl(0, 0%, 100%, .35)">{{item.nft_percent}}%</span>
            </div>
          </template>
          
          <template v-slot:[`item.near`]="{ item }">
            {{item.near}} N
          </template>
          
          <template v-slot:[`item.dollar`]="{ item }">
            {{item.dollar}} $
          </template>
          
          <template v-slot:[`item.buy`]="{ item }">
            {{item.buy}} N
          </template>
          
          <template v-slot:[`item.sell`]="{ item }">
            {{item.sell}} N
          </template>
          
          <template v-slot:[`item.recent`]="{ item }">
            {{item.recent}} ago
          </template>
          
          <template v-slot:footer>
            <div class="fill_w center">
              <v-btn-toggle mandatory color="#60D2CA">
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
            </div>
          </template>
        </v-data-table>
      </section>


      <section class="fwrap" style="gap: 2em 1em">
        <section class="card" style="--p:2em">
          <h3 class="h9_em">Top Buyers (24H)</h3>

          <!-- table top buyers -->
          <v-data-table
            class="dataTable card"
            :headers="headersTableTopBuyers"
            :items="dataTableTopBuyers"
            hide-default-footer
            style="--p:2em;--bg:transparent;--b:none;--p:0"
          >
            <template v-slot:[`header.number`]>
              <span>#</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`header.bought`]>
              <span>Bought</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`header.near`]>
              <span>Buy volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`item.number`]="{ item }">
              {{dataTableTopBuyers.indexOf(item) + 1}}
            </template>
            
            <template v-slot:[`item.near`]="{ item }">
              {{item.near}} N
            </template>
            
            <template v-slot:footer>
              <div class="fill_w center">
                <v-btn-toggle mandatory color="#60D2CA">
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
              </div>
            </template>
          </v-data-table>
        </section>


        <section class="card" style="--p:2em">
          <h3 class="h9_em">Top Sellers (24H)</h3>

          <!-- table top sellers -->
          <v-data-table
            class="dataTable card"
            :headers="headersTableTopSellers"
            :items="dataTableTopSellers"
            hide-default-footer
            style="--p:2em;--bg:transparent;--b:none;--p:0"
          >
            <template v-slot:[`header.number`]>
              <span>#</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`header.sold`]>
              <span>Sold</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`header.near`]>
              <span>Buy volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </template>
            
            <template v-slot:[`item.number`]="{ item }">
              {{dataTableTopSellers.indexOf(item) + 1}}
            </template>
            
            <template v-slot:[`item.near`]="{ item }">
              {{item.near}} N
            </template>
            
            <template v-slot:footer>
              <div class="fill_w center">
                <v-btn-toggle mandatory color="#60D2CA">
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
              </div>
            </template>
          </v-data-table>
        </section>
      </section>


      <section class="card" style="--p:2em">
        <h3 class="h9_em">Top Traders (24H)</h3>

        <!-- table top traders -->
        <v-data-table
          class="dataTable card"
          :headers="headersTableTopTraders"
          :items="dataTableTopTraders"
          hide-default-footer
          style="--p:2em;--bg:transparent;--b:none;--p:0"
        >
          <template v-slot:[`header.number`]>
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.near`]>
            <span>Holding value (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.dollar`]>
            <span>Holding value ($)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.buy`]>
            <span>Buy volume (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`header.sell`]>
            <span>Sell volume (N)</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </template>
          
          <template v-slot:[`item.number`]="{ item }">
            {{dataTableTopTraders.indexOf(item) + 1}}
          </template>
          
          <template v-slot:[`item.near`]="{ item }">
            {{item.near}} N
          </template>
          
          <template v-slot:[`item.dollar`]="{ item }">
            {{item.dollar}} $
          </template>
          
          <template v-slot:[`item.buy`]="{ item }">
            {{item.buy}} N
          </template>
          
          <template v-slot:[`item.sell`]="{ item }">
            {{item.sell}} N
          </template>
          
          <template v-slot:[`item.recent`]="{ item }">
            {{item.recent}} ago
          </template>
          
          <template v-slot:footer>
            <div class="fill_w center">
              <v-btn-toggle mandatory color="#60D2CA">
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
            </div>
          </template>
        </v-data-table>
      </section>
    </template>


    <!-- activity section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='activity')].active">
      <section class="card" style="--p:2em">
        <div class="space wrap margin2bottom">
          <h3 class="h9_em p">Activity</h3>

          <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 1" :key="n" color="transparent">
              <span>{{n==1?'ALL':null}}</span>
            </v-btn>
          </v-btn-toggle>
        </div>

        <!-- table activity -->
        <v-data-table
          class="dataTable card"
          :headers="headersTableActivity"
          :items="dataTableActivity"
          hide-default-footer
          style="--p:2em;--bg:transparent;--b:none;--p:0"
        >
          <template v-slot:[`item.name`]="{ item }">
            <div class="acenter gap1 tstart">
              <img :src="item.img" alt="nft image" style="--w:4.710625em">
              <span style="max-width:18ch" class="bold">{{item.name}}</span>
              <span class="bold">#{{item.number}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.action`]="{ item }">
            <span :style="`color: ${item.action=='sale'?'var(--success)':null}`" class="tfirst">{{item.action}}</span>
          </template>
          
          <template v-slot:[`item.price`]="{ item }">
            <div class="divcol">
              <span>{{item.price}}{{item.price?' N':'---'}}</span>
              <span style="--c:hsl(0, 0%, 100%, .35)">{{item.price_dollar?'$ ':'---'}}{{item.price_dollar}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.time`]="{ item }">
            {{item.time}} ago
          </template>
          
          <template v-slot:footer>
            <div class="fill_w center">
              <v-btn-toggle mandatory color="#60D2CA">
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
            </div>
          </template>
        </v-data-table>
      </section>
    </template>
  </section>
</template>

<script>
import ChartMarket from './chart/ChartMarket.vue'
import ChartPrice from './chart/ChartPrice.vue'
import ChartSales from './chart/ChartSales.vue'
import ChartBuyers from './chart/ChartBuyers.vue'
import ChartDiscord from './chart/ChartDiscord.vue'
import ChartTwitter from './chart/ChartTwitter.vue'
import ChartRarityDistribution from './chart/ChartRarityDistribution.vue'
import ChartRarityPrice from './chart/ChartRarityPrice.vue'
export default {
  name: "details",
  i18n: require("./i18n"),
  components: { ChartMarket, ChartPrice, ChartSales, ChartBuyers, ChartDiscord, ChartTwitter, ChartRarityDistribution, ChartRarityPrice },
  data() {
    return {
      dataSocialRed: [
        { social: "clip", link: "#" },
        { social: "twitter", link: "#" },
        { social: "discord", link: "#" },
        { social: "telegram", link: "#" },
      ],
      dataSocialActions: [
        { social: "heart" },
        { social: "share" },
        { social: "bell-white" },
      ],
      dataInfo: {
        supply: "3333",
        owners: "1967",
        total_volume: "1,967,234.43",
        down: [
          { key: "market", price: "71,629", percent: "-0.12", number: 3 },
          { key: "holders", price: "361", percent: "+12.78", number: 23 },
          { key: "volume", price: "318", percent: "+73.26", number: 2 },
          { key: "price", price: "175", percent: "-1.78", number: 3970 },
        ]
      },
      dataBuy: [
        { img: require('@/assets/images/paras.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Paras" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
      ],
      dataControls: [
        { key: "overview", name: "Overview", active: true },
        { key: "social", name: "Social", active: false },
        { key: "nft", name: "NFT & rarity", active: false },
        { key: "leaderboard", name: "Leaderboard", active: false },
        { key: "activity", name: "Activity", active: false },
      ],
      dataPotential: [
        { key: "holders", price: "71,629", percent: "-0.12", number: 3, holding: "231 (52.02%)" },
        { key: "whales", price: "361", percent: "+12.78", number: 23, holding: "127 (28.6%)" },
      ],
      headersTableTopSales: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"name", text:"NFT", align:"center" },
        { value:"buyer", text:"Buyer", align:"center" },
        { value:"seller", text:"Seller", align:"center" },
        { value:"price", text:"Price", align:"center" },
        { value:"time", text:"Time", align:"center" },
        { value:"history", text:"History", align:"center" },
      ],
      dataTableTopSales: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #232 Lorem ipsum dolor sit",
          buyer: "tonystark.near",
          seller: "justinsonbib.near",
          price: "315",
          time: "3 hours ago",
          history: [ 200, 675, 410, 390, 310, 460, 250, 240 ],
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #232 Lorem ipsum dolor sit",
          buyer: "tonystark.near",
          seller: "justinsonbib.near",
          price: "315",
          time: "3 hours ago",
          history: [ 200, 675, 810, 190, 310, 460, 220, 140 ],
        },
      ],
      dataNfts: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #312",
          price: "234",
          rank: 3,
          rarity: "common"
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "MonkeONear #312",
          price: "234",
          rank: 3,
          rarity: "rare"
        },
      ],
      widthLimiter: false,
      headersTableTopHolders: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"nft", text:"NFT", align:"center", sortable: false },
        { value:"near", text:"Holding value (N)", align:"center", sortable: false },
        { value:"dollar", text:"Holding value ($)", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
        { value:"recent", text:"Recent deal", align:"center", sortable: false },
      ],
      dataTableTopHolders: [
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
        {
          address: "thethirdeye.near",
          nft: 37,
          nft_percent: 8.33,
          near: 6475,
          dollar: 38850,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
      ],
      headersTableTopBuyers: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"bought", text:"Bought", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
      ],
      dataTableTopBuyers: [
        {
          address: "thethirdeye.near",
          bought: 37,
          buy: 6475,
        },
        {
          address: "thethirdeye.near",
          bought: 37,
          buy: 6475,
        },
      ],
      headersTableTopSellers: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"sold", text:"Sold", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
      ],
      dataTableTopSellers: [
        {
          address: "thethirdeye.near",
          sold: 37,
          sell: 6475,
        },
        {
          address: "thethirdeye.near",
          sold: 37,
          sell: 6475,
        },
      ],
      headersTableTopTraders: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"trade", text:"Trade", align:"center", sortable: false },
        { value:"near", text:"Trading volume (N)", align:"center", sortable: false },
        { value:"dollar", text:"Trading volume ($)", align:"center", sortable: false },
        { value:"buy", text:"Buy volume (N)", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
        { value:"recent", text:"Recent deal", align:"center", sortable: false },
      ],
      dataTableTopTraders: [
        {
          address: "thethirdeye.near",
          trade: 37,
          near: 13632,
          dollar: 38586,
          buy: 13632,
          sell: 0.78,
          recent: "6 hours"
        },
      ],
      headersTableActivity: [
        { value:"name", text:"NFT", align:"center" },
        { value:"action", text:"Action", align:"center" },
        { value:"price", text:"Price", align:"center" },
        { value:"from", text:"From", align:"center" },
        { value:"to", text:"To", align:"center" },
        { value:"time", text:"Time", align:"center" },
      ],
      dataTableActivity: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear Gen 0",
          number: 421,
          action: "sale",
          price: 174,
          price_dollar: 1083,
          from: "tonystark.near",
          to: "justinsonbib.near",
          time: "3 hours"
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "MonkeONear Gen 0",
          number: 421,
          action: "Transfer",
          from: "tonystark.near",
          to: "justinsonbib.near",
          time: "5 hours"
        },
      ],
    }
  },
  mounted() {
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    Responsive() {
      if (window.innerWidth >= 880&&this.dataNfts.length<=3) {
        this.widthLimiter = true
      } else {
        this.widthLimiter = false
      }
    },
  }
};
</script>

<style src="./ProjectDetails.scss" lang="scss" />
