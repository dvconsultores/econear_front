<template>
  <section id="menuHeader">
    <!-- drawer -->
    <v-navigation-drawer
      id="toggleBar"
      v-model="drawer"
      height="100%"
      fixed right
      temporary
      overlay-opacity="0.5"
      overlay-color="black"
      color="var(--primary)"
    >
      <img src="@/assets/logos/logo.svg" alt="Logo" style="--w: 100%;--h:8.115em;">
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
            <v-expansion-panel-header hide-actions class="h11_em">
              <v-col class="conttitle acenter gap2">
                <span class="clr_text_btn normal" style="max-width: max-content">{{ item.name }}</span>
              </v-col>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-list>
                <!-- ciclo for items -->
                <v-list-item v-for="(item2,i) in item.selection" :key="i"
                  @click="CambiarLanguage(item2.key)">
                  <v-list-item-title class="center h10_em">
                    <span class="clr_text_btn normal">{{ item2.name}}</span>
                  </v-list-item-title>
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

    <!-- modal login -->
    <v-dialog
      v-model="modalLogin"
      max-width="82.358125em"
    >
      <v-card color="var(--primary)" class="overflowx" style="padding-block:6em">
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
      <v-card color="var(--primary)" style="padding:6em">
        <v-btn icon class="close" @click="modalRegister = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter">Register</h3>
        <v-sheet class="divcol center" style="padding:2em">
          <section class="fill_w grid" style="--gtc:repeat(auto-fit, minmax(min(100%,350px), 1fr));gap:2em;margin-bottom:1em">
            <v-text-field
              label="Username"
              style="--c:#000000"
            ></v-text-field>

            <v-text-field
              label="Email"
              placeholder="example@domain.com"
              style="--c:#000000"
            ></v-text-field>

            <v-text-field
              label="Discord ID"
              placeholder="Username#321"
              style="--c:#000000"
            ></v-text-field>

            <v-text-field
              label="Twitter Account"
              style="--c:#000000"
            ></v-text-field>
          </section>

          <v-btn class="btn h10_em" style="--bs:none;width:min(90%,517px);">
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
      <v-card color="var(--primary)" style="padding:6em" class="modalSwitchAccount">
        <v-btn icon class="close" @click="modalSwitchAccount = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter">Switch Account</h3>
        <v-sheet class="divcol center" style="padding:2em">
          <section class="fill_w grid" style="gap:2em;margin-bottom:1em;place-content:center">
            <v-list class="divcol gap1">
              <v-list-item v-for="(item,i) in dataSwitchAccount" :key="i" class="acenter gap1"
                @click="dataSwitchAccount.forEach(e=>{e.select=false});item.select=true">
                <aside class="acenter gap1">
                  <v-avatar size="4em">
                    <img :src="item.img" alt="user">
                  </v-avatar>
                  <div class="divcol">
                    <span>{{item.name}}</span>
                    <span>{{item.amount}}</span>
                  </div>
                </aside>

                <v-checkbox
                  v-model="item.select"
                ></v-checkbox>
              </v-list-item>
            </v-list>
          </section>

          <v-btn class="btn h10_em" style="--bs:none;width:min(90%,417px);">
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
      <v-card color="var(--primary)" style="padding:6em" class="modalSettings">
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
                reverse
                style="--c:#000000;max-width:20ch"
              ></v-text-field>
            </div>
          </section>

          <v-btn class="btn h10_em" style="--bs:none;width:100%">
            Save
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
      settings: { nftdrops: false, transactionNotification: true },
      dataDrawer: {
        list: [
          { key: "home", name: "Home", to: "" },
          { key: "drops", name: "Drops", to: "" },
          { key: "nfts", name: "NFTS", to: "" },
          { key: "snipe", name: "Snipe tool", to: "" },
          { key: "contact", name: "Contact us", to: "" },
        ],
        expansion: [
          {
            name: "LANGUAGE",
            selection: [
              {name: "English", key: "EN"},
              {name: "Spanish", key: "ES"},
              {name: "Portuguese", key: "PR"},
            ],
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
    };
  },
  methods: {
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
