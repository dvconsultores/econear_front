<template>
  <section id="projectDetails" class="divcol">
    <!-- <aside class="container-header">
    </aside> -->

    <aside class="container-profile divcol center gap1 tcenter">
      <v-avatar width="12.48875em" height="12.48875em">
        <img :src="dataInfo.img" alt="avatar" style="--b:3px solid var(--success);--w:100%;--h:100%;--br:50%">
      </v-avatar>
      <v-chip class="center" style="border-radius: .3vmax;min-width:6.174375em" color="#6A25D2">
        <span>{{contract_nft}}</span>
      </v-chip>
      <h2 class="p bold">{{dataInfo.name}}</h2>
      <!-- <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
      
      <div class="contactions acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialActions" :key="i" icon style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social actions" style="--w:2.5em">
        </v-btn>
      </div> -->
    </aside>

    <!-- <p class="description p align" style="max-width:65ch">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi.
    </p> -->

    <v-card class="infoup card fwrap align">
      <div class="divcol">
        <label>Total Supply</label>
        <span>{{dataInfo.supply}}</span>
      </div>

      <div class="divcol">
        <label>Owners</label>
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
      <v-card v-for="(item,i) in dataInfo.down" :key="i" class="card align">
        <v-sheet color="var(--clr-card)" class="jspace" max-height="150px">
          <div class="divcol">
            <div class="infotext bold acenter" style="gap:.7em">
              <span>{{item.key=='market'?'Market Cap':item.key=='holders'?'Holders':item.key=='volume'?'Volume (24H)':item.key=='price'?'Floor price':null}}</span>
              <!-- <img src="@/assets/icons/info.svg" alt="info" style="--w:.9em"> -->
            </div>
            <span class="number bold acenter" style="gap:.7em">
              <img v-if="item.key=='volume'||item.key=='price'" src="@/assets/logos/near.svg" alt="near" style="--w:.8em">
              {{item.price}}
            </span>
            <span v-show="item.percent != ''" class="percent" :style="`color:${item.percent.includes('+')?'var(--success)':'var(--error)'}`">
              {{item.percent}}%
            </span>
          </div>

          <!-- <v-chip class="btn center" 
            style="--bg:var(--primary);--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 3.5em);--h:2em">
            #{{item.number}}
          </v-chip> -->
        </v-sheet>
      </v-card>
    </section>

    <h3 class="h9_em p">Buy On:</h3>

    <section class="card grid" style="--p:clamp(1em,2vw,2em);gap:1em;--gtc: repeat(auto-fit,minmax(min(100%,16.124375em),1fr))">
      <v-card v-for="(item,i) in dataBuy" :key="i" class="card" style="--p:1em;display:flex;gap:1em;" @click="$router.push('/view-collections/' + contract_nft)">
        <img :src="item.img" alt="markets" style="--w:4.710625em">
        <span class="h9_em">{{item.name}}</span>
      </v-card>
    </section>

    <aside class="container-controls divcol gap1">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" @click="dataControls.forEach(e=>{e.active=false});item.active=true">
          <h6 class="p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>
    </aside>

    <!-- overview section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='overview')].active">
      <!-- <section class="container-potential card" style="--p:clamp(1em,2vw,2em)">
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
      </section> -->

      <!-- chart market -->
      <ChartMarket ref="chartmarket" :Height="chartHeight"></ChartMarket>

      <!-- chart price -->
      <ChartPrice ref="chartprice" :Height="chartHeight"></ChartPrice>

      <section class="fwrap" style="gap:2em">
        <!-- chart sales -->
        <ChartSales ref="chartsales" :Height="chartHeight"></ChartSales>

        <!-- chart buyers -->
        <ChartBuyers ref="chartbuyers" :Height="chartHeight"></ChartBuyers>
      </section>

      <!-- chart holders -->
      <!-- <ChartHolders ref="chartholders" :Height="chartHeight"></ChartHolders> -->


      <!-- chart holding amount -->
       <!-- chart holding period -->
      <!-- <section class="fwrap" style="--fb:1 1 45em; gap:2em">
        
        <ChartHoldingAmount ref="chartholdingamount" :Height="chartHeight"></ChartHoldingAmount>

       
        <ChartHoldingPeriod ref="chartholdingperiod" :Height="chartHeight"></ChartHoldingPeriod>
      </section> -->


        <!-- top sales  -->
      <section class="card" style="--p:clamp(1em,2vw,2em)">
        <div class="space wrap margin2bottom">
          <h3 class="h9_em">Top sales</h3>

          <v-btn-toggle
            mandatory
            color="#60D2CA"
          >
            <v-btn v-for="n in 5" :key="n" color="transparent" @click="changeTopSales(n)">
              <span>{{n==1?'24h':n==2?'7d':n==3?'30d':n==4?'90d':n==5?'1Y':n==6}}</span>
            </v-btn>
          </v-btn-toggle>
        </div>

        <v-data-table
          class="dataTable card"
          :headers="headersTableTopSales"
          :items="dataTableTopSales"
          hide-default-footer
          mobile-breakpoint="-1"
          style="--bg:transparent;--b:none;--p:0em"
        >
          <template v-slot:[`header.number`]>
            <center class="center">
              <span>#</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>

          <template v-slot:[`item.number`]="{ item }">
            {{dataTableTopSales.indexOf(item) + 1}}
          </template>

          <template v-slot:[`item.name`]="{ item }">
            <div class="acenter gap1 tstart">
              <img :src="item.img" alt="nft image" style="--w:4.710625em">
              <span style="max-width:18ch" :title="item.name" class="bold">{{verificar(item.name, 37)}}</span>
            </div>
          </template>

          <template v-slot:[`item.buyer`]="{ item }">
            <span :title="item.buyer"> {{item.buyer.limitString(14)}}</span>
          </template>

          <template v-slot:[`item.seller`]="{ item }">
            <span :title="item.seller"> {{item.seller.limitString(14)}}</span>
          </template>
          
          <template v-slot:[`item.price`]="{ item }">
            {{item.price}}N
          </template>

          <!-- <template v-slot:[`item.time`]="{ item }">
            {{item.time}}
          </template> -->

          <!-- <template v-slot:[`item.time`]="{ item }">
            <v-sparkline
              :value="item.history"
              :line-width="3"
              color="var(--secondary)"
              stroke-linecap="round"
              :smooth="10"
              auto-draw
            ></v-sparkline>
          </template> -->

          <!-- <template v-slot:footer>
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
          </template> -->
        </v-data-table>
      </section>
    </template>


    <!-- social section -->
    <!-- <template v-if="dataControls[dataControls.findIndex(e=>e.key=='social')].active"> -->
      <!-- chart discord -->
      <!-- <ChartDiscord ref="chartdiscord" :Height="chartHeight"></ChartDiscord> -->

      <!-- chart twitter -->
      <!-- <ChartTwitter ref="charttwitter" :Height="chartHeight"></ChartTwitter>
    </template> -->


    <!-- nft section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='nft')].active">
      <!-- chart rarity distribution -->
      <ChartRarityDistribution ref="chartraritydistribution" :Height="chartHeight"></ChartRarityDistribution>

      <!-- chart rarity and price -->
      <!-- <ChartRarityPrice ref="chartrarityprice" :Height="chartHeight"></ChartRarityPrice> -->

      <!-- nfts -->
      <section id="container-nft" class="card divcol gap2" style="--p:clamp(1em,2vw,2em)">
        <div id="controls" class="space gap2">
          <div class="divcol">
            <h3 class="h9_em p">NFTs</h3>
            <div class="acenter" style="gap:.2em">
              <span class="infotext bold">{{cantNfts}}</span>
              <!-- <img src="@/assets/icons/info-gray.svg" alt="info icon" style="--w:.9em"> -->
            </div>
          </div>

          <v-text-field
            v-model="search"
            hide-details
            solo
            label="Search for NFT's"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF;max-width:30.061875em;--b: .8px solid hsl(0, 0%, 44%, .1)"
            class="customeFilter search openRankingSearch"
            @click:append="searchCollection()"
            @keydown.enter.prevent="searchCollection()"
            @input="inputSearch()"
          ></v-text-field>
        </div>

        <v-menu ref="menu" v-model="menuSearch" bottom offset-y activator=".openRankingSearch">
          <v-list id="menuSearch" class="card scrolly" v-show="dataMenuSearch.length != 0">
            <v-list-item v-for="(item,i) in dataMenuSearch" :key="i" @click="clickSearch(item)" v-show="dataMenuSearch.length != 0">
              <img :src="item.img" alt="referencial image">
              <div class="divcol">
                <h6 class="p bold">{{item.name}}</h6>
                <span>{{item.contract}}</span>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>

        <div class="content grid" style="--gtc: repeat(auto-fit,minmax(min(100%,21.2225em),1fr));gap:3.5em">
          <v-card v-for="(item,i) in dataNfts" :key="i" color="transparent" class="divcol" :class="{widthLimiter: widthLimiter}">
            <img :src="item.img" alt="nft images" style="--w:100%;">

            <v-sheet class="card" style="--p:1em">
              <h6>{{item.name}}</h6>
              <div class="divcol" style="gap:.2em">
                <div class="space">
                  <span>Token ID:</span>
                  <span>{{item.token_id}}</span>
                </div>
                

                <div class="space">
                  <span>Last Price:</span>
                  <span v-if="item.price > 0" class="price">{{item.price}} N</span>
                  <span v-else class="price text-decoration-line-through">SALE</span>
                  <!-- <img v-if = "item.price > 0" src="@/assets/logos/near.svg" alt="near"> -->
                </div> 

                <div class="space">
                  <span>Rarity rank:</span>
                  <v-chip class="btn center" id="rank"
                    style="--bg:#0D1A26;--c:var(--secondary);--bs:none;font-size:1.25em;--p:0;--w:min(199%, 2.75875em);--h:1.868125em">
                    #{{item.ranking}}
                  </v-chip>
                </div>

                <div class="space">
                  <span>Rarity:</span>
                  <v-chip style="border-radius: .3vmax" id="rarity"
                    :color="item.rarity=='common'?'#26A17B':
                    item.rarity=='uncommon'?'#F7972C':
                    item.rarity=='rare'?'#EF3340':
                    item.rarity=='epic'?'#0000B6':
                    item.rarity=='legendary'?'#6A25D2':null">
                    <span class="tfirst">{{item.rarity}}</span>
                  </v-chip>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </div>
        <v-btn v-if="seeMoreVisible" text :disabled="seeMoreDis" @click="seeMore()" class="align" style="color:var(--success); font-size: 1.4025em; margin-block:3em">Load more...</v-btn>
      </section>
    </template>


    <!-- leaderboard section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='leaderboard')].active">
      <!-- <section class="card" style="--p:clamp(1em,2vw,2em)">
        <div class="acenter margin2bottom">
          <h3 class="h9_em p">Top Holders</h3>
          <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.810625em;margin-left:.3em">
        </div> -->

        <!-- table top holders -->
        <!-- <v-data-table
          class="dataTable card"
          :headers="headersTableTopHolders"
          :items="dataTableTopHolders"
          hide-default-footer
          mobile-breakpoint="-1"
          style="--bg:transparent;--b:none;--p:0"
        >
          <template v-slot:[`header.number`]>
            <center class="center">
              <span>#</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.nft`]>
            <center class="center">
              <span>NFT</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.near`]>
            <center class="center">
              <span>Holding value (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.dollar`]>
            <center class="center">
              <span>Holding value ($)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.buy`]>
            <center class="center">
              <span>Buy volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.sell`]>
            <center class="center">
              <span>Sell volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
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
      </section> -->


      <section id="contaioner-buyer-seller" class="fwrap" style="gap: 2em 1em">
        <section class="card" style="--p:clamp(1em,2vw,2em)">
          <h3 class="h9_em">Top Buyers (24H)</h3>

          <!-- table top buyers -->
          <v-data-table
            class="dataTable card top"
            :headers="headersTableTopBuyers"
            :items="dataTableTopBuyers"
            hide-default-footer
            mobile-breakpoint="-1"
            style="--bg:transparent;--b:none;--p:0"
          >
            <template v-slot:[`header.number`]>
              <center class="center">
                <span>#</span>
                <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
              </center>
            </template>
            
            <template v-slot:[`header.bought`]>
              <center class="center">
                <span>Bought</span>
                <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
              </center>
            </template>
            
            <template v-slot:[`header.near`]>
              <span>Buy volume (N)</span>
              <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
            </template>

            
            <template v-slot:[`item.number`]="{ item }">
              {{dataTableTopBuyers.indexOf(item) + 1}}
            </template>

            <template v-slot:[`item.address`]="{ item }">
              <span :title="item.address">{{item.address.limitString(14)}}</span>
            </template>
            
            <template v-slot:[`item.near`]="{ item }">
              {{item.near}} N
            </template>
            
            <!-- <template v-slot:footer>
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
            </template> -->
          </v-data-table>
        </section>


        <section class="card" style="--p:clamp(1em,2vw,2em)">
          <h3 class="h9_em">Top Sellers (24H)</h3>

          <!-- table top sellers -->
          <v-data-table
            class="dataTable card top"
            :headers="headersTableTopSellers"
            :items="dataTableTopSellers"
            hide-default-footer
            mobile-breakpoint="-1"
            style="--bg:transparent;--b:none;--p:0"
          >
            <template v-slot:[`header.number`]>
              <center class="center">
                <span>#</span>
                <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
              </center>
            </template>
            
            <template v-slot:[`header.sold`]>
              <center class="center">
                <span>Sold</span>
                <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
              </center>
            </template>
            
            <template v-slot:[`header.near`]>
              <center class="center">
                <span>Buy volume (N)</span>
                <!-- <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em"> -->
              </center>
            </template>
            
            <template v-slot:[`item.number`]="{ item }">
              {{dataTableTopSellers.indexOf(item) + 1}}
            </template>

            <template v-slot:[`item.address`]="{ item }">
              <span :title="item.address">{{item.address.limitString(14)}}</span>
            </template>
            
            <template v-slot:[`item.near`]="{ item }">
              {{item.near}} N
            </template>
            
            <!-- <template v-slot:footer>
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
            </template> -->
          </v-data-table>
        </section>
      </section>


      <!-- <section class="card" style="--p:clamp(1em,2vw,2em)">
        <h3 class="h9_em">Top Traders (24H)</h3>

     
        <v-data-table
          class="dataTable card"
          :headers="headersTableTopTraders"
          :items="dataTableTopTraders"
          hide-default-footer
          mobile-breakpoint="-1"
          style="--bg:transparent;--b:none;--p:0"
        >
          <template v-slot:[`header.number`]>
            <center class="center">
              <span>#</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.near`]>
            <center class="cente">
              <span>Holding value (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.dollar`]>
            <center class="center">
              <span>Holding value ($)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.buy`]>
            <center class="center">
              <span>Buy volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
          </template>
          
          <template v-slot:[`header.sell`]>
            <center class="center">
              <span>Sell volume (N)</span>
              <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
            </center>
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
      </section> -->
    </template>


    <!-- activity section -->
    <template v-if="dataControls[dataControls.findIndex(e=>e.key=='activity')].active">
      <section class="card" style="--p:clamp(1em,2vw,2em)">
        <div class="space wrap margin2bottom">
          <h3 class="h9_em p">Activity</h3>

          <!-- <v-btn-toggle mandatory color="#60D2CA">
            <v-btn v-for="n in 1" :key="n" color="transparent">
              <span>{{n==1?'ALL':null}}</span>
            </v-btn>
          </v-btn-toggle> -->
        </div>

        <!-- table activity -->
        <v-data-table
          class="dataTable card"
          :headers="headersTableActivity"
          :items="dataTableActivity"
          hide-default-footer
          mobile-breakpoint="-1"
          style="--bg:transparent;--b:none;--p:0"
        >
        <template v-slot:[`item.number`]="{ item }">
            {{dataTableActivity.indexOf(item) + 1}}
          </template>

          <template v-slot:[`item.name`]="{ item }">
            <div class="acenter gap1 tstart">
              <img :src="item.img" alt="nft image" style="--w:4.710625em">
              <span style="max-width:18ch" class="bold">{{item.name}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.action`]="{ item }">
            <span :style="`color: ${item.action=='sale'?'var(--success)':null}`" class="tfirst">{{item.action}}</span>
          </template>

          <template v-slot:[`item.from`]="{ item }">
            <span :title="item.from"> {{item.from.limitString(14)}}</span>
          </template>

          <template v-slot:[`item.to`]="{ item }">
            <span :title="item.to"> {{item.to.limitString(14)}}</span>
          </template>
          
          <template v-slot:[`item.price`]="{ item }">
            <div class="divcol">
              <span>{{item.price}}{{item.price?' N':'---'}}</span>
              <span v-if="item.price_dollar > 0" style="--c:hsl(0, 0%, 100%, .35)">{{(item.price_dollar + "$")}}</span>
              <span v-else style="--c:hsl(0, 0%, 100%, .35)">{{'---'}}</span>
            </div>
          </template>
          
          <template v-slot:[`item.time`]="{ item }">
            {{item.time}}
          </template>
          
          <!-- <template v-slot:footer>
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
          </template> -->
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
import ChartHolders from './chart/ChartHolders.vue'
import ChartHoldingAmount from './chart/ChartHoldingAmount.vue'
import ChartHoldingPeriod from './chart/ChartHoldingPeriod.vue'
import ChartDiscord from './chart/ChartDiscord.vue'
import ChartTwitter from './chart/ChartTwitter.vue'
import ChartRarityDistribution from './chart/ChartRarityDistribution.vue'
import ChartRarityPrice from './chart/ChartRarityPrice.vue'
import moment from 'moment'

import * as nearAPI from 'near-api-js'

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
  name: "details",
  i18n: require("./i18n"),
  components: { ChartMarket, ChartPrice, ChartSales, ChartBuyers, ChartHolders, ChartHoldingAmount, ChartHoldingPeriod, ChartDiscord, ChartTwitter, ChartRarityDistribution, ChartRarityPrice },
  data() {
    return {
      seeMoreDis: false,
      seeMoreVisible: false,
      contract_nft: this.$route.params.id,
      token_id: null,
      chartHeight: "422.76px",
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
        name: null,
        img: null,
        supply: null,
        owners: null,
        total_volume: null,
        down: [
          { key: "market", price: null, percent: "", number: null },
          { key: "holders", price: null, percent: "", number: null },
          { key: "volume", price: null, percent: "", number: null },
          { key: "price", price: null, percent: "", number: null },
        ]
      },
      dataBuy: [
        // { img: require('@/assets/images/paras.png'), name: "Paras" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Paras" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
        // { img: require('@/assets/nfts/nft1.png'), name: "Whinto Swap" },
      ],
      dataControls: [
        { key: "overview", name: "Overview", active: true },
        // { key: "social", name: "Social", active: false },
        { key: "nft", name: "NFTs & Rarity", active: false },
        { key: "leaderboard", name: "Leaderboard", active: false },
        { key: "activity", name: "Activity", active: false },
      ],
      dataPotential: [
        { key: "holders", price: "71,629", percent: "-0.12", number: 3, holding: "231 (52.02%)" },
        { key: "whales", price: "361", percent: "+12.78", number: 23, holding: "127 (28.6%)" },
      ],
      headersTableTopSales: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"name", text:"NFT", align:"center", sortable: false },
        // { value:"collection", text:"Collection", align:"center", sortable: false },
        { value:"seller", text:"Seller", align:"center", sortable: false },
        { value:"buyer", text:"Buyer", align:"center", sortable: false },
        { value:"price", text:"Price", align:"center", sortable: false },
        { value:"time", text:"Time", align:"center", sortable: false },
      ],
      auxTopSales: 1,
      cantNfts: 0,
      dataTableTopSales: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "MonkeONear #232 Lorem ipsum dolor sit",
        //   buyer: "tonystark.near",
        //   seller: "justinsonbib.near",
        //   price: "315",
        //   time: "3 hours ago",
        //   history: [ 200, 675, 410, 390, 310, 460, 250, 240 ],
        // },
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "MonkeONear #232 Lorem ipsum dolor sit",
        //   buyer: "tonystark.near",
        //   seller: "justinsonbib.near",
        //   price: "315",
        //   time: "3 hours ago",
        //   history: [ 200, 675, 810, 190, 310, 460, 220, 140 ],
        // },
      ],
      dataNfts: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "MonkeONear #312",
          price: "234",
          rank: null,
          rarity: null
        }
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
        // {
        //   address: "thethirdeye.near",
        //   bought: 37,
        //   buy: 6475,
        // },
        // {
        //   address: "thethirdeye.near",
        //   bought: 37,
        //   buy: 6475,
        // },
      ],
      headersTableTopSellers: [
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"address", text:"Address", align:"center", sortable: false },
        { value:"sold", text:"Sold", align:"center", sortable: false },
        { value:"sell", text:"Sell volume (N)", align:"center", sortable: false },
      ],
      dataTableTopSellers: [
        // {
        //   address: "thethirdeye.near",
        //   sold: 37,
        //   sell: 6475,
        // },
        // {
        //   address: "thethirdeye.near",
        //   sold: 37,
        //   sell: 6475,
        // },
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
        { value:"number", text:"#", align:"center", sortable: false },
        { value:"name", text:"NFT", align:"center", sortable: false },
        { value:"action", text:"Action", align:"center", sortable: false },
        { value:"price", text:"Price", align:"center", sortable: false },
        { value:"from", text:"From", align:"center", sortable: false },
        { value:"to", text:"To", align:"center", sortable: false },
        { value:"time", text:"Time", align:"center", sortable: false },
      ],
      dataTableActivity: [
        // {
        //   img: require("@/assets/nfts/nft1.png"),
        //   name: "MonkeONear Gen 0",
        //   number: 421,
        //   action: "sale",
        //   price: 174,
        //   price_dollar: 1083,
        //   from: "tonystark.near",
        //   to: "justinsonbib.near",
        //   time: "3 hours"
        // },
        // {
        //   img: require("@/assets/nfts/nft2.png"),
        //   name: "MonkeONear Gen 0",
        //   number: 421,
        //   action: "Transfer",
        //   from: "tonystark.near",
        //   to: "justinsonbib.near",
        //   time: "5 hours"
        // },
      ],
      limit: 24,
      index: 0,
      nearPrice: 0,
      menuSearch: false,
      dataMenuSearch: [],
      search: null,
    }
  },
  async mounted() {
    await this.$store.dispatch('pushHomeMonke', {contract_nft: this.contract_nft})
    this.priceNEAR()
    this.getNftCollection()
    this.getDataCollection()
    this.projectsDetailsHeader()
    this.stastTopBuyers()
    this.stastTopSellers()
    this.getDataBuyOn()
    this.Responsive()
    window.onresize = () => this.Responsive()
  },
  methods: {
    clickSearch (item) {
      this.token_id = item.token_id
      this.getNftCollection()
    },
    searchCollection() {
      let item = {
        collection: this.contract_nft,
        search: this.search,
        limit: 10,
        index: 0
      }
      if (this.search) {
        const url = "api/v1/StastSearchNftCollection"
        this.axios.post(url, item)
          .then((response) => {
            this.dataMenuSearch = []
            for (var i = 0; i < response.data.length; i++) {
              let item = {
                img: response.data[i].media,
                name: response.data[i].titulo,
                contract: response.data[i].collection,
                token_id: response.data[i].token_id
              }
         
              this.dataMenuSearch.push(item)
            }
            this.menuSearch = true
          }).catch((error) => {
            //console.log(error)
          })
      } else {
        this.dataMenuSearch = []
        this.menuSearch = false
      }
    },
    inputSearch () {
      if (this.search == '' || this.search == null) {
        this.token_id = null
        this.getNftCollection()
        this.dataMenuSearch = []
        this.menuSearch = false
      }
    },
    async stastTopBuyers(){
      const url = "api/v1/stasttopbuyerscollection"
      let item = {
        "collection": this.contract_nft,
        "limit": 10,
        "index": 0
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataTableTopBuyers = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              address: response.data[i].buyer,
              bought: response.data[i].bought,
              buy: Number(response.data[i].volumen).toFixed(2)
            }
            this.dataTableTopBuyers.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async stastTopSellers(){
      const url = "api/v1/stasttopsellerscollection"
      let item = {
        "collection": this.contract_nft,
        "limit": 10,
        "index": 0
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataTableTopSellers = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              address: response.data[i].seller,
              sold: response.data[i].sold,
              sell: Number(response.data[i].volumen).toFixed(2)
            }
            this.dataTableTopSellers.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async priceNEAR(){
      this.axios.get("https://api.binance.com/api/v3/ticker/24hr?symbol=NEARUSDT")
        .then((response) => {
          this.nearPrice = response.data.lastPrice
          this.stastActivityCollection()
          this.stastTopSalesCollection()
        })
        .catch((e) => {
          this.stastActivityCollection()
          this.stastTopSalesCollection()
        })
    },
    verificar(item, num) {
      if (item.length > num) {
        return item.substring(0, num) + "..."
      }
      return item
    },
    async stastActivityCollection(){
      const url = "api/v1/stastactivitycollection"
      let item = {
        "collection": this.contract_nft,
        "limit": 10,
        "index": 0
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataTableActivity = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].media,
              name: response.data[i].titulo + " #" + response.data[i].token_id,
              collection: response.data[i].collection,
              from: response.data[i].owner_id,
              to: response.data[i].new_owner_id,
              price: response.data[i].price,
              action: response.data[i].actions,
              time: moment.unix(parseInt(response.data[i].fecha / 1000000000)).format("Do MMM YYYY, h:mm A"),
            }
            if (response.data[i].price) {
              collection.price_dollar = (Number(response.data[i].price) * this.nearPrice).toFixed(2)
            }

            if (collection.action === "TRANSFER") {
              collection.action = "Transfer"
            }

            this.dataTableActivity.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    changeTopSales(item) {
      this.auxTopSales = item
      this.stastTopSalesCollection()
    },
    async stastTopSalesCollection(){
      const url = "api/v1/stasttopsalescollection"
      let item = {
        "collection": this.contract_nft,
        "value": "h",
        "time": 24,
        "limit": 10,
        "index": 0
      }

      if (this.auxTopSales === 1) {
        item.value = "h"
        item.time = 24
      } else if (this.auxTopSales === 2) {
        item.value = "d"
        item.time = 7
      } else if (this.auxTopSales === 3) {
        item.value = "d"
        item.time = 30
      } else if (this.auxTopSales === 4) {
        item.value = "d"
        item.time = 90
      } else if (this.auxTopSales === 5) {
        item.value = "d"
        item.time = 365
      }


      this.axios.post(url, item)
        .then((response) => {
          this.dataTableTopSales = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].media,
              name: response.data[i].titulo + " #" + response.data[i].token_id,
              collection: response.data[i].collection,
              buyer: response.data[i].buyer,
              seller: response.data[i].seller,
              price: response.data[i].pricenear,
              time: moment.unix(parseInt(response.data[i].fecha / 1000000000)).format("Do MMM YYYY, h:mm A"),
            }
            this.dataTableTopSales.push(collection)
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async getNftCollection(){
      this.index = 0
      const url = "api/v1/StastNftCollection"
    
      let item = {
        "collection": this.contract_nft,
        "token_id": this.token_id || "%",
        "limit": this.limit,
        "index": this.index,
      }

      this.axios.post(url, item)
        .then((response) => {
          this.dataNfts = []
          this.cantNfts = response.data.total_nfts
          for (var i = 0; i < response.data.data.length; i++) {
            let collection = {
              img: response.data.data[i].media,//,
              name: response.data.data[i].titulo,
              rarity: response.data.data[i].rareza.toLowerCase(),
              ranking: response.data.data[i].ranking,
              price: Number(response.data.data[i].precio_near),
              token_id: response.data.data[i].token_id,
              contract: response.data.data[i].collection
            }
            this.dataNfts.push(collection)
          }
          // this.dataList = this.dataList2
          this.index = this.index + this.limit
          
          //this.dataList = this.dataList.concat(this.dataList2)
          // this.variableCarga = true
          this.verifyMore()
        }).catch((error) => {
          //console.log(error)
        })
    },
    async verifyMore(){
      const url = "api/v1/StastNftCollection"
      let item = {
        "collection": this.contract_nft,
        "token_id": this.token_id || "%",
        "limit": this.limit,
        "index": this.index,
      }
  
      this.axios.post(url, item)
        .then((response) => {
          if (response.data.data.length === 0) {
            this.seeMoreVisible = false
          } else {
            this.seeMoreVisible = true
          }
        }).catch((error) => {
          //console.log(error)
        })
    },
    async seeMore(){
      this.seeMoreDis = true
      const url = "api/v1/StastNftCollection"
      let item = {
        "collection": this.contract_nft,
        "token_id": this.token_id || "%",
        "limit": this.limit,
        "index": this.index,
      }

      this.axios.post(url, item)
        .then((response) => {
          let dataList2 = []
          for (var i = 0; i < response.data.data.length; i++) {
            let collection = {
              img: response.data.data[i].media,//,
              name: response.data.data[i].titulo,
              rarity: response.data.data[i].rareza.toLowerCase(),
              ranking: response.data.data[i].ranking,
              price: Number(response.data.data[i].precio_near),
              token_id: response.data.data[i].token_id,
              contract: response.data.data[i].collection
            }
            dataList2.push(collection)
          }
          this.dataNfts = this.dataNfts.concat(dataList2)
          this.index = this.index + this.limit
          this.seeMoreDis = false
          this.verifyMore()
        }).catch((error) => {
          this.seeMoreDis = false
          //console.log(error)
        })
    },
    Responsive() {
      if (window.innerWidth >= 880) {
        if (this.dataNfts.length<=3) {this.widthLimiter = true}
        else {this.widthLimiter = false}
        this.chartHeight = "422.76px"
      } else {
        this.chartHeight = "222.76px"
      }
    },
    async getDataCollection(){
      const url = "api/v1/collectiondetails"
      let item = {
        "collection": this.contract_nft,
      }
      this.axios.post(url, item)
        .then((response) => {
          if (response.data[0]) {
            this.dataInfo.supply = Number(response.data[0].supply).toLocaleString("en-US")
            this.dataInfo.owners = Number(response.data[0].owner_for_tokens).toLocaleString("en-US")
            this.dataInfo.total_volume = Number(parseFloat(response.data[0].total_volumen).toFixed(2)).toLocaleString("en-US")
            this.dataInfo.name = response.data[0].name
            this.dataInfo.img = response.data[0].icon
          }
     
        }).catch((error) => {
          //console.log(error)
        })
    },
    async getDataBuyOn(){
      const url = "api/v1/buyonmarketplace"
      let item = {
        "collection": this.contract_nft,
      }
      this.axios.post(url, item)
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].market_icon,
              name: response.data[i].market_name,
              marketplace: response.data[i].marketplace,
            }
            this.dataBuy.push(collection)
          }
        }).catch((error) => {
          //console.log("ERRORRRR",error)
        })
    },
    async projectsDetailsHeader(){
      const url = "api/v1/ProjectsDetailsHeader"
      let item = {
        "collection": this.contract_nft,
      }
      this.axios.post(url, item)
        .then((response) => {
          let data = response.data[0]
          this.dataInfo.down = [
            { key: "market", price: Number(data.jsonmarket_cap[0].market_cap).toLocaleString("en-US"), percent: Number(data.jsonmarket_cap[0].porcentaje).toFixed(2), number: null },
            { key: "holders", price: Number(data.holders).toLocaleString("en-US"), percent: "", number: null },
            { key: "volume", price: Number(data.jsonvolumen24h[0].volumen24h).toLocaleString("en-US"), percent: Number(data.jsonvolumen24h[0].porcentaje).toFixed(2), number: null },
            { key: "price", price: Number(data.jsonfloor_price[0].floor_price).toLocaleString("en-US"), percent: Number(data.jsonfloor_price[0].porcentaje).toFixed(2), number: null },
          ]

          if (this.dataInfo.down[0].percent > 0) {
            this.dataInfo.down[0].percent = "+" + this.dataInfo.down[0].percent 
          } else {
            this.dataInfo.down[0].percent = String(this.dataInfo.down[0].percent )
          }

          if (this.dataInfo.down[2].percent > 0) {
            this.dataInfo.down[2].percent = "+" + this.dataInfo.down[2].percent 
          } else {
            this.dataInfo.down[2].percent = String(this.dataInfo.down[2].percent )
          }

          if (this.dataInfo.down[3].percent > 0) {
            this.dataInfo.down[3].percent = "+" + this.dataInfo.down[3].percent 
          } else {
            this.dataInfo.down[3].percent = String(this.dataInfo.down[3].percent )
          }
        }).catch((error) => {
          //console.log("ERRORRRR",error)
        })
    },

  }
};
</script>

<style src="./ProjectDetails.scss" lang="scss" />
