<template>
  <section id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="toggleBar"
      v-model="drawer"
      height="100%"
      fixed left
      temporary
      overlay-opacity="0.5"
      overlay-color="black"
      color="var(--primary)"
    >
      <router-link :to="('/')">
        <img src="@/assets/logos/logo.svg" alt="Logo" style="--w: 95%;--h:8.115em;margin-left:2%">
      </router-link>
      
      <v-expansion-panels focusable accordion class="anim_moveleft">
        <template v-if="dataDrawer.list">
          <v-list class="fill_w">
            <!-- ciclo for items -->
            <v-list-item v-for="(item,i) in dataDrawer.list" :key="i" link :to="(item.to)">
              <v-list-item-content>
                <v-col class="conttitle acenter gap2">
                  <span class="h10_em clr_text_btn" style="max-width: max-content">
                    {{ item.name }}
                  </span>
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>

        <template v-if="dataDrawer.expansion">
          <v-expansion-panel v-for="(item,i) in dataDrawer.expansion" :key="i">
            <!-- title -->
            <v-expansion-panel-header hide-actions class="h10_em"
              @click="item.active?item.active=!item.active:dataDrawer.expansion.forEach(e=>{e.active=false;item.active=true});
              item.key=='account'&&User?$emit('SignIn'):null">
              <v-col v-show="item.key!=='account'" class="conttitle acenter gap2">
                <span class="clr_text_btn normal" style="max-width: max-content">{{ item.name }}</span>
                <v-icon :class="{active_rotate: item.active}" size="1.4em">mdi-chevron-down</v-icon>
              </v-col>

              <v-btn v-show="item.key=='account'&&User" class="btn h11_em align" @click="$emit('SignIn')"
                style="--p: clamp(.8em, 1.5vw, 1.5em) clamp(1em, 1.7vw, 1.7em);max-width:max-content">
                Connect Wallet
              </v-btn>

              <v-btn v-show="item.key=='account'&&!User" class="btn avatarBtn align"
                style="--p: clamp(1em, 1.5vw, 1.5em) .2em clamp(1em, 1.5vw, 1.5em) 0;--br:.2vmax;
                --bs: 0 2px 8px 3px #6FFFE9;">
                <v-avatar style="box-shadow:0px 0px 8px 3px #6FFFE9" width="clamp(55px, 4.6vw, 4.6em)" height="clamp(55px, 4.6vw, 4.6em)">
                  <img src="@/assets/logos/user-empty.png" alt="Avatar" style="--w:100%">
                </v-avatar>
                <div id="container-account" class="divcol" style="gap:.2em">
                  <span class="h11_em">Disconnect Wallet</span>
                  <span class="h12_em">{{ AccountId }}</span>
                </div>
                <v-icon color="#6FFFE9" size="1.4em" :class="{active_rotate: item.active}">mdi-menu-down</v-icon>
              </v-btn>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-list>
                <!-- ciclo for items -->
                <template v-for="(item2,i) in item.selection">
                  <!-- titles -->
                  <v-list-item :key="i" v-show="item2.title" disabled>
                    <v-list-item-title class="titles center h10_em">
                      <span class="clr_text_btn normal" style="color:var(--success) !important">{{ item2.title}}</span>
                    </v-list-item-title>
                  </v-list-item>
                  <!-- content -->
                  <v-list-item :key="i" v-show="item2.name"
                    @click="SelectDrawer(item.key, item2)">
                    <v-list-item-title class="center h10_em">
                      <span class="clr_text_btn normal">{{ item2.name}}</span>
                    </v-list-item-title>
                  </v-list-item>
                </template>

                <!-- account -->
                <v-list-item v-show="item.key=='account'&&!User" id="account">
                  <v-list color="transparent" class="cabecera">
                    <v-list-item>
                      <v-list-item-title class="h10_em">{{ AccountId }}</v-list-item-title>
                    </v-list-item>
                  </v-list>

                  <v-list color="hsl(212 47% 12% / .5)">
                    <v-list-item class="divcol">
                      <div class="spacea fill_w h10_em">
                        <span class="h11_em">NEAR</span>
                        <span class="h12_em" style="color:var(--success)">478.5 N</span>
                      </div>
                      <div class="spacea fill_w">
                        <span class="h11_em">ECO</span>
                        <span class="h12_em" style="color:var(--success)">234.72 E</span>
                      </div>
                    </v-list-item>
                  </v-list>

                  <v-list v-for="(item,i) in DataLogout" :key="i" color="#112131">
                    <v-list-item v-for="(item2,i2) in item.list" :key="i2" @click="SelectItem_AvatarMenu(item2)">
                      <v-list-item-title class="h10_em">{{item2.name}}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-expansion-panels>
    </v-navigation-drawer>

    <!-- menu notifications -->
    <v-menu offset-y :close-on-content-click="false" activator=".openNotifications">
      <v-card class="menu_list notifications divcol">
        <h3 class="h9_em light">Notifications</h3>
        <v-list color="hsl(212 47% 12% / .7)" class="divcol gap1">
          <v-list-item v-for="(item,i) in dataNotifications" :key="i" class="padd0 space" style="gap:1em">
            <div class="acenter" style="gap:.5em;">
              <img :src="item.img" alt="profile" style="--w:3.125em">
              <span class="h11_em">{{item.desc}}</span>
            </div>
            <span class="h11_em marginaleft" style="color:var(--success)">{{item.ago}}</span>
          </v-list-item>
        </v-list>
        <a class="tcenter">Ver Todas</a>
      </v-card>
    </v-menu>
    
    <!-- menu notifications mobile -->
    <v-menu offset-y :close-on-content-click="false" activator=".openNotificationsMobile">
      <v-card class="menu_list notifications divcol">
        <h3 class="h9_em light">Notifications</h3>
        <v-list color="hsl(212 47% 12% / .7)" class="divcol gap1">
          <v-list-item v-for="(item,i) in dataNotifications" :key="i" class="padd0 space" style="gap:1em">
            <div class="acenter" style="gap:.5em;">
              <img :src="item.img" alt="profile" style="--w:3.125em">
              <span class="h11_em">{{item.desc}}</span>
            </div>
            <span class="h11_em marginaleft" style="color:var(--success)">{{item.ago}}</span>
          </v-list-item>
        </v-list>
        <a class="tcenter">Ver Todas</a>
      </v-card>
    </v-menu>

    <!-- modal login -->
    <v-dialog
      v-model="modalLogin"
      max-width="82.358125em"
    >
      <v-card class="overflowx" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalLogin = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>

        <v-sheet color="transparent" class="divcol center" style="gap:4em">
          <img src="@/assets/logos/logo-copy.svg" alt="econear logo" style="--w:min(90%,28.875em)">

          <v-btn class="btn" style="--mr:1em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7);width:min(80%,32.3125em)">
            <img src="@/assets/icons/discord.svg" alt="discord icon" style="--w:2.674375em">
            <span class="h10_em">Login with Discord</span>
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal register -->
    <v-dialog
      v-model="modalRegister"
      max-width="82.358125em"
    >
      <v-card color="var(--primary)">
        <v-btn icon class="close" @click="modalRegister = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter">Register</h3>
        <v-sheet class="divcol center" style="padding:2em">
          <section class="fill_w grid" style="--gtc:repeat(auto-fit, minmax(min(100%,350px), 1fr));gap:2em;margin-bottom:1em">
            <v-text-field
              label="Username"
              style="--c:#000000"
              solo
            ></v-text-field>

            <v-text-field
              label="Email"
              placeholder="example@domain.com"
              style="--c:#000000"
              solo
            ></v-text-field>

            <v-text-field
              label="Discord ID"
              placeholder="Username#321"
              style="--c:#000000"
              solo
            ></v-text-field>

            <v-text-field
              label="Twitter Account"
              style="--c:#000000"
              solo
            ></v-text-field>
          </section>

          <v-btn class="btn h10_em" style="--bs:0 3px 4px 2px hsl(176, 60%, 70%, .4);width:min(90%,517px);--br:.8vmax">
            Register
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal switch account -->
    <v-dialog
      v-model="modalSwitchAccount"
      max-width="62.358125em"
    >
      <v-card color="var(--primary)" class="modalSwitchAccount">
        <v-btn icon class="close" @click="modalSwitchAccount = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter">Switch Account</h3>
        <v-sheet class="divcol center" style="padding:clamp(1em, 2vw, 2em)">
          <section class="fill_w grid" style="gap:2em;margin-bottom:1em">
            <v-list class="divcol gap1">
              <!-- <v-list-item v-for="(item,i) in dataSwitchAccount" :key="i" class="center gap1" :ripple="false"
                @click="item.select?item.select=!item.select:dataSwitchAccount.forEach(e=>{e.select=false;item.select=true})"> -->
              <v-list-item v-for="(item,i) in dataSwitchAccount" :key="i" class="center gap1">
                <aside class="container-accounts divcol">
                  <v-avatar size="var(--size)">
                    <img :src="item.img" alt="user" style="--w:100%">
                  </v-avatar>
                  <span>{{item.name}}</span>
                  <span>{{item.amount}}</span>
                </aside>

                <v-checkbox
                  v-model="item.select"
                ></v-checkbox>
              </v-list-item>
            </v-list>
          </section>

          <v-btn class="btn h10_em" style="--bs:0 3px 4px 2px hsl(176, 60%, 70%, .4);width:min(90%,417px);--br:.8vmax">
            Add Account
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal settings -->
    <v-dialog
      v-model="modalSettings"
      max-width="62.358125em"
    >
      <v-card color="var(--primary)" class="modalSettings">
        <v-btn icon class="close" @click="modalSettings = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter">Settings</h3>
        <v-sheet class="divcol center" style="padding:2em 3em">
          <section class="fill_w divcol" style="margin-bottom:1em">
            <v-text-field
              label="Add Email"
              placeholder="example@domain.com"
              style="--c:#0000000"
              solo
            ></v-text-field>
            <span class="h10_em">Notification preferences</span>
            <div class="space">
              <label for="nft-drop">NFT Drops</label>
              <div id="nft-drop" class="switch" :style="`--color:${settings.nftdrops?'var(--success)':'var(--error)'}`"
                :class="{active:settings.nftdrops}" @click="settings.nftdrops=!settings.nftdrops" />
            </div>
            
            <div class="space">
              <label for="transaction-notification">Notification your transaction</label>
              <div id="transaction-notification" class="switch" :style="`--color:${settings.transactionNotification?'var(--success)':'var(--error)'}`"
                :class="{active:settings.transactionNotification}" @click="settings.transactionNotification=!settings.transactionNotification" />
            </div>

            <div class="space gap2 wrap">
              <aside class="divcol">
                <label for="Minimum-offer">Minimum Offer Price</label>
                <span class="light" style="max-width: 25ch;line-height:1.2">
                  Set the minimum offer you want for your collectibles
                </span>
              </aside>

              <v-text-field
                id="Minimum-offer"
                placeholder="123.45 N"
                reverse solo
                style="--c:#000000"
                class="minimum"
              ></v-text-field>
            </div>
          </section>

          <v-btn class="btn h10_em" style="--bs:0 3px 4px 2px hsl(176, 60%, 70%, .4);width:100%;--br:.8vmax">
            Save
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal alert -->
    <v-dialog
      v-model="modalAlert"
      max-width="62.358125em"
    >
      <v-card color="var(--primary)" class="modalAlert">
        <v-btn icon class="close" @click="modalAlert = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter p">Alert</h3>
        <h3 class="h8_em tcenter" style="color:var(--success)">MonkeONear Gen 0</h3>

        <v-sheet class="divcol" style="padding:2em 3em">
          <div class="divcol">
            <label for="type">Alert Type</label>
            <v-select
              id="type"
              v-model="dataAlert.type.value"
              :items="dataAlert.type.items"
              solo
              :menu-props="{contentClass: 'menuAlert'}"
            ></v-select>
          </div>
          
          <div class="divcol">
            <label for="value">Value</label>
            <v-text-field
              id="value"
              v-model="dataAlert.value"
              label="234.56 N"
              type="number"
              solo
            ></v-text-field>
          </div>
          
          <div class="divcol">
            <label for="frecuency">Frecuency</label>
            <v-select
              id="frecuency"
              v-model="dataAlert.frecuency.value"
              :items="dataAlert.frecuency.items"
              solo
              :menu-props="{contentClass: 'menuFrecuency'}"
            ></v-select>
          </div>

          <v-btn class="btn h10_em" style="--bs:none;width:100%">
            Create Alert
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "headerMenu",
  i18n: require("./i18n"),
  props: {
    AccountId: String,
    DataLogout: Array,
    User: Boolean,
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   this.OverlayMethod(theme);
  // },
  data() {
    return {
      messages: 1,
      drawer: false,
      modalLogin: false,
      modalRegister: false,
      modalSwitchAccount: false,
      modalSettings: false,
      modalAlert: false,
      settings: { nftdrops: false, transactionNotification: true },
      dataDrawer: {
        list: [
          { key: "home", name: "Home", to: "/" },
          { key: "drops", name: "Drops", to: "/upcoming-nft-drops" },
          { key: "nfts", name: "NFTS", to: "" },
          { key: "snipe", name: "Snipe tool", to: "/snipe-tool" },
          { key: "contact", name: "Contact us", to: "" },
        ],
        expansion: [
          {
            key: "more",
            active: false,
            name: "More",
            selection: [
              { title: "Account" },
              { key: "login", name: "Login" },
              { key: "whitelist", name: "Whitelist" },
              { key: "register", name: "Register" },
              { title: "NFTS" },
              { key: "compare-projects", name: "Compare Projectss" },
              { key: "upcoming-projects", name: "Upcoming Projects (Drops)" },
              { key: "new-projects", name: "New Projects" },
              { title: "ECONEAR" },
              { key: "wallet-submission", name: "Wallet Submission" },
              { key: "vote", name: "Vote" },
              { key: "contact-us", name: "Contact Us" },
              { title: "Others" },
              { key: "marketplace-stats", name: "Marketplace Stats" },
              { key: "alert", name: "Alert" },
              { key: "bulk-nft-management", name: "Bulk NFT Management" },
              { key: "active-wallets-stats", name: "Active Wallets Stats" },
              { key: "mint-calendar", name: "Mint Calendar" },
              { title: "Services" },
              { key: "advertising", name: "Advertising" },
              { key: "ama-hosting", name: "AMA Hosting" },
              { key: "twitter-space", name: "Twitter Space" },
              { key: "giveaways", name: "Giveaways" },
            ],
          },
          {
            key: "lang",
            active: false,
            name: "Language",
            selection: [
              {name: "English", key: "EN"},
              {name: "Spanish", key: "ES"},
              {name: "Portuguese", key: "PR"},
            ],
          },
          {
            key: "account",
            active: false,
            name: "Account",
          },
        ],
      },
      dataNotifications: [
        {
          img: require('@/assets/logos/user.png'),
          desc: "Collection Name ofer...",
          ago: "45 min",
        },
        {
          img: require('@/assets/logos/user.png'),
          desc: "Lorem ipsum dolor sit Lorem ipsum dolor sit...",
          ago: "60 min",
        },
        {
          img: require('@/assets/logos/user.png'),
          desc: "Collection Name ofer...",
          ago: "45 min",
        },
      ],
      dataSwitchAccount: [
        {
          img: require('@/assets/logos/user.png'),
          name: "pedrogperez23.near",
          amount: "456.67 N",
          select: false,
        },
      ],
      dataAlert: {
        type: {
          value: "Price rises above",
          items: [ "Price rises above", "Price drops to", "Change is osver", "Change is under", "Volume is over", "Volume is down" ]
        },
        value: 0,
        frecuency: {
          value: "Only Once",
          items: [ "Only Once", "Once a day", "Always" ]
        }
      },
    };
  },
  methods: {
    SelectItem_AvatarMenu(item) {
      this.$emit("SelectItem_AvatarMenu", item)
    },
    SelectDrawer(key, item) {
      if (key=="lang") {CambiarLanguage(item.key)}
      if (key=="more") {
        // account
        if (item.key=='login') {this.$parent.$refs.menu.modalLogin = true}
        if (item.key=='whitelist') {this.$router.push(item.key)}
        if (item.key=='register') {this.$parent.$refs.menu.modalRegister = true}
        // nft
        if (item.key=='compare-projects') {this.$router.push(item.key)}
        if (item.key=='new-projects') {this.$router.push(item.key)}
        // econear
        if (item.key=='vote') {this.$router.push(item.key)}
        // other
        if (item.key=='marketplace-stats') {this.$router.push(item.key)}
        if (item.key=='alert') {this.$parent.$refs.menu.modalAlert = true}
        if (item.key=='bulk-nft-management') {this.$router.push(item.key)}
        if (item.key=='active-wallets-stats') {this.$router.push(item.key)}
        if (item.key=='mint-calendar') {this.$router.push(item.key)}
      }
    },
    CambiarLanguage(lang) {
      if (lang === "ES") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else {
        localStorage.language = lang;
        i18n.locale = lang;
      }
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
