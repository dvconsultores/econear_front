<template>
  <section id="snipeTool" class="divcol gap2">
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p">Snipe Tool</h2>
      <p class="h10_em" style="max-width:60ch">
        Bag your favorite NFT from any collection
      </p>
    </aside>

    <aside class="container-controls divcol gap1 gap2mobile">
      <div id="container-trackmobile" class="contents order2mobile spacemobile alignmobile">        
        <div id="container-switch" class="acenter  gap1 card vermobile">
          <span>Notifications</span>
          <div class="switch" :style="`--color:${notifications?'var(--success)':'var(--error)'}`"
            :class="{active:notifications}" @click="notifications=!notifications" />
        </div>
      </div>

      <div class="space contentsmobile">
        <v-card class="tracking-pause card acenter" style="max-width:max-content;--bg:hsl(212 47% 12% / .5);gap:1em;--p:.5em 1em">
          <v-btn v-for="(item,i) in dataControls.up" :key="i" text style="--ml:.5em" :class="{active: item.active}"
              @click="dataControls.up.forEach(e=>{e.active=false});item.active=true; tracking()">
            <span>{{item.name}}</span><img :src="require(`@/assets/icons/${item.name}.svg`)"
            :style="item.name=='tracking'?'--w:1em':'--w:.7em'">
          </v-btn>
          <!-- {{variable}} -->
        </v-card>
        

        <!-- <v-tabs class="order3mobile alignmobile">
          <v-tab v-for="(item,i) in dataControls.down" :key="i" class="options">
            <h6 class="p">{{item.name}}</h6>
          </v-tab>
        </v-tabs> -->

        <h3 class="h9_em p order1mobile tcentermobile">Recently listed</h3>

        <div id="container-switch" class="acenter  gap1 card eliminarmobile">
          <span>Notifications</span>
          <div class="switch" :style="`--color:${notifications?'var(--success)':'var(--error)'}`"
            :class="{active:notifications}" @click="changeNotificacion()" />
        </div>
      </div>
    </aside>

    <!-- table  -->
    <v-data-table
      id="dataTable"
      class="card"
      :headers="headersTable"
      :items="dataTable"
      hide-default-footer
      mobile-breakpoint="-1"
      height="800px"
    >
      <template v-slot:[`item.nft`]="{ item }">
        <div class="center gap1">
          <img class="aspect" :src="item.img || image" alt="nft" style="--w:4.710625em">
          <div class="divcol tstart" style="width:170px">
            <span>{{item.name}}</span>
            <!-- <span>{{item.desc}}</span> -->
          </div>
        </div>
      </template>

      <template v-slot:[`item.rareness`]="{ item }">
        <v-chip style="border-radius: .3vmax"
          :color="item.rareness=='rare'?'#26A17B':
          item.rareness=='common'?'var(--warning)':
          item.rareness=='legendary'?'#0000B6':
          item.rareness=='mystic'?'#6A25D2':null">
          <span class="tfirst">{{item.rareness}}</span>
        </v-chip>
      </template>

      <template v-slot:[`item.price`]="{ item }">
        <!-- <span :style="item.state_price?'color:#22B573':'color:var(--error)'"> -->
        <span>
          {{item.price}}
        </span>
      </template>

      <template v-slot:[`item.market`]="{ item }">
        <!-- <img :src="item.market" alt="market"> -->
        <span>
          {{item.marketplace}}
        </span>
      </template>

      <template v-slot:[`item.buy`]="{ item }">
        <v-btn class="btn" style="border-radius: .3vmax;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">
          <span class="tfirst" @click="$router.push(`/view-collections/${item.nft_contract}`)">Buy Now</span>
        </v-btn>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: "snipeTool",
  i18n: require("./i18n"),
  data() {
    return {
      image: require('@/assets/nfts/nft1.png'),
      notifications: null,
      auxNoti: null,
      dataControls: {
        up: [
          { name: "tracking", active: false },
          { name: "pause", active: false },
        ],
        down: [
          { name: "Common", active: false },
          { name: "Rare", active: false },
          { name: "Epic", active: false },
          { name: "Mystic", active: false },
        ],
      },
      headersTable: [
        { value: "nft", text: "Collection NFT", align: "center", sortable: false },
        { value: "supply", text: "Supply", align: "center", sortable: false },
        //{ value: "rareness", text: "Rareness", align: "center", sortable: false },
        { value: "price", text: "Price", align: "center", sortable: false },
        { value: "market", text: "Market", align: "center", sortable: false },
        { value: "buy", text: "Buy", align: "center", sortable: false },
      ],
      dataTable: [],
      variable: null,
    }
  },
  async mounted() {
    this.notifications = localStorage.getItem('notifications')
    if (this.notifications === 'true') {
      this.notifications = true
    } else{
      this.notifications = false
    }
    this.recentlyListed()
    this.tracking()
  },
  methods: {
    async changeNotificacion() {
      this.notifications = !this.notifications
      localStorage.notifications = this.notifications
      if(this.notifications === true) {
        this.auxNoti = await Notification.requestPermission().then(function(result) {
           return result
        });

        if (this.auxNoti === 'denied' || this.auxNoti === 'default') {
          this.notifications = false
        } else {
          // this.notificacion()
        }
      }
    },
    notificacion(name, img, price, marketplace) {
      if (Notification) {
        if (Notification.permission !== "granted") {
          Notification.requestPermission()
        }
        var title = "ECONEAR"
        var extra = {          
          icon: img || this.image,
          //icon: "http://xitrus.es/imgs/logo_claro.png",
          body: "NFT: " + name + " salio a un precio de " + price + " en " + marketplace
        }
        var noti = new Notification( title, extra)
        noti.onclick = {
        // Al hacer click
        }
        noti.onclose = {
        // Al cerrar
        }
        setTimeout( function() { noti.close() }, 20000)
      }
    },
    permisoNotificacion () {
      Notification.requestPermission().then(function(result) {
      });
    },
    tracking () {
      if (this.dataControls.up[0].active === true) {
        this.interval = setInterval(function () {
            this.recentlyListed()
        }.bind(this), 10000);
        this.interval2 = setInterval(function () {
          // scroll down
          const dataTable = document.querySelector("#dataTable .v-data-table__wrapper");
          dataTable.scrollTop += 20
        }, 100);
      } else {
        clearInterval(this.interval)
        clearInterval(this.interval2)
      }
    },
    async recentlyListed(){
      const url = "api/v1/recentlylisted"
      this.axios.post(url)
        .then((response) => {
          this.dataTable = []
          for (var i = 0; i < response.data.length; i++) {
            let collection = {
              img: response.data[i].icon,
              name: response.data[i].name,
              nft_contract: response.data[i].nft_contract,
              supply: response.data[i].total_supply,
              price: parseFloat(response.data[i].price).toFixed(1) + " N",
              marketplace: response.data[i].marketplace,
              state_price: true,
            }
            this.dataTable.push(collection)
          }
          if (this.notifications === true) {
            const snipetool = JSON.parse(localStorage.getItem('snipetool'))
            this.dataTable.forEach(dataTable => {
              snipetool.forEach(item => {
                if (dataTable.nft_contract === item.nft_contract && dataTable.marketplace === item.marketplace) {
                  if (dataTable.price < item.price) {
                    this.notificacion(dataTable.name, dataTable.img, dataTable.price, dataTable.marketplace)
                  } 
                }
              })
            })
          }

          localStorage.snipetool = JSON.stringify(this.dataTable)
        }).catch((error) => {
          console.log(error)
        })
    },
  }
};
</script>

<style src="./SnipeTool.scss" lang="scss" />
