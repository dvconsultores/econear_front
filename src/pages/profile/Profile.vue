<template>
  <section id="profile" class="divcol">
    <ModalEdit ref="menu"></ModalEdit>
    <aside class="container-header">
      <v-btn class="btn" style="--bg:#101C2F;--p:.5em .8em;--bs:0px 2.5px 7px .5px #6FFFE9"
        @click="$refs.menu.modalEdit=true">
        Edit Profile
      </v-btn>
    </aside>

    <aside class="container-profile divcol center gap1 tcenter">
      <v-avatar width="12.48875em" height="12.48875em">
        <img src="@/assets/logos/user.png" alt="avatar" style="--b:3px solid var(--success);--br:50%;--w:100%">
      </v-avatar>
      <h2 class="p bold">pedro NFT Gperez</h2>
      <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
      <center>
        <v-btn class="btn" style="--bg:var(--primary);--bs:0 3px 4px 1px hsl(176, 60%, 40%, 1);--b:1px solid var(--success);width: min(90%,23.8125em);--fs:1.25em"
          @click="switchInfo=!switchInfo">
          {{switchInfo?'Wallets':'Main info'}}
        </v-btn>
      </center>
      <p v-if="switchInfo==true" class="p" style="max-width:65ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi.
      </p>
    </aside>

    <template v-if="switchInfo">
      <aside class="space gap2 wrap" style="font-size:16px">
        <h2 class="h9_em p bold">Your Projects Lists</h2>

        <v-text-field
          v-model="searchProjects"
          hide-details
          solo
          label="Search your projects"
          append-icon="mdi-magnify"
          style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
          class="search"
        ></v-text-field>
      </aside>

      <!-- tabla projects  -->
      <v-data-table
        class="dataTable card"
        :headers="headersTableProjects"
        :items="dataTableProjects"
        hide-default-footer
        mobile-breakpoint="-1"
        style="--p:clamp(1em,2vw,2em)"
      >
        <template v-slot:[`header.number`]>
          <center class="center">
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </center>
        </template>

        <template v-slot:[`item.number`]="{ item }">
          {{dataTableProjects.indexOf(item) + 1}}
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <div class="acenter gap1">
            <img :src="item.img" alt="nft image" style="--w:4.710625em">
            <span style="max-width:18ch" class="bold">{{item.name}}</span>
          </div>
        </template>
      </v-data-table>


      <aside class="space gap2 wrap" style="font-size:16px">
        <h2 class="h9_em p bold">Watchlist</h2>

        <v-text-field
          v-model="searchWatchlist"
          hide-details
          solo
          label="Search your watchlist"
          append-icon="mdi-magnify"
          style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
          class="search"
        ></v-text-field>
      </aside>

      <!-- tabla watchlist  -->
      <v-data-table
        class="dataTable card"
        :headers="headersTableWatchlist"
        :items="dataTableWatchlist"
        hide-default-footer
        mobile-breakpoint="-1"
        style="--p:clamp(1em,2vw,2em)"
      >
        <template v-slot:[`header.number`]>
          <center class="center">
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </center>
        </template>

        <template v-slot:[`item.number`]="{ item }">
          {{dataTableWatchlist.indexOf(item) + 1}}
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <div class="acenter gap1">
            <img :src="item.img" alt="nft image" style="--w:4.710625em">
            <span style="max-width:18ch" class="bold">{{item.name}}</span>
          </div>
        </template>
      </v-data-table>


      <aside class="space gap2 wrap" style="font-size:16px">
        <h2 class="h9_em p bold">Alerts</h2>

        <v-text-field
          v-model="searchAlerts"
          hide-details
          solo
          label="Search your alerts / NFT Projects name"
          append-icon="mdi-magnify"
          style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
          class="search"
        ></v-text-field>
      </aside>

      <!-- tabla alerts  -->
      <v-data-table
        class="dataTable card"
        :headers="headersTableAlerts"
        :items="dataTableAlerts"
        hide-default-footer
        mobile-breakpoint="-1"
        style="--p:clamp(1em,2vw,2em)"
      >
        <template v-slot:[`header.number`]>
          <center class="center">
            <span>#</span>
            <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
          </center>
        </template>

        <template v-slot:[`item.number`]="{ item }">
          {{dataTableAlerts.indexOf(item) + 1}}
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <div class="acenter gap1">
            <img :src="item.img" alt="nft image" style="--w:4.710625em">
            <span style="max-width:18ch" class="bold">{{item.name}}</span>
          </div>
        </template>
      </v-data-table>
    </template>

    <section v-else class="container-wallets">
      <aside class="divcol gap2">
        <div class="space gap2 wrap">
          <h2 class="h9_em p bold">Your Projects Lists</h2>

          <v-text-field
            v-model="searchWallets"
            hide-details
            solo
            label="Search your projects"
            append-icon="mdi-magnify"
            style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
            class="search"
          ></v-text-field>
        </div>

        <!-- tabla wallets  -->
        <section class="relative">
          <v-simple-table
            class="dataTable wallets card"
            style="--p:clamp(1em,2vw,2em)"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="center">
                    <span>#</span>
                    <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
                  </th>
                  <th>
                    Wallet
                  </th>
                  <th class="text-center">
                    Project Discord
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in dataTableWallets"
                  :key="item.number"
                >
                  <td class="tcenter">{{dataTableWallets.indexOf(item) + 1}}</td>
                  <td class="tcenter">
                    <div class="name acenter gap1">
                      <img :src="item.img" alt="nft image" style="--w:4.710625em">
                      <v-text-field
                        v-model="item.name"
                        placeholder="Wallet name"
                        type="text"
                        hide-details
                        style="--min-w:200px"
                      ></v-text-field>
                      <!-- <span style="max-width:35ch;word-break: break-all" class="bold">{{item.name}}</span> -->
                    </div>
                  </td>
                  <td class="tcenter">
                    <v-select
                      v-model="item.project"
                      :items="projectList"
                      :item-value="value"
                      hide-details
                      solo
                      append-icon="mdi-chevron-down"
                      style="--bg:#21786D"
                      class="align"
                      :menu-props="{ contentClass: 'menuWallets'}"
                    ></v-select>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          
          <div class="add" @click="dataTableWallets.push({
            img: require('@/assets/nfts/nft3.png'),
            name: '',
            project: { value:'All - Default' },
          })">
            <v-icon color="var(--success)">mdi-plus</v-icon>
            <span>Add</span>
          </div>
        </section>
      </aside>

      <article class="notes card">
        <h4>Note</h4>
        <p>
          The wallet address put forward to projects for whitelisting is the address that is configured as "All - Default". 
          This can be changed as many times up until the project finisches whitelisting and has fully exported their whitelist addresses.
        </p>
        <p class="p">You can link a wallet address to any project on your whitelist</p>
      </article>
    </section>
  </section>
</template>

<script>
import ModalEdit from './ModalEdit.vue'
export default {
  name: "profile",
  i18n: require("./i18n"),
  components: { ModalEdit },
  data() {
    return {
      switchInfo: true,
      dataSocialRed: [
        { social: "clip", link: "#" },
        { social: "twitter", link: "#" },
        { social: "discord", link: "#" },
        { social: "telegram", link: "#" },
      ],
      // projects
      searchProjects: "",
      headersTableProjects: [
        { value:"number", text:"#", alig:"center" },
        { value:"name", text:"Project Name", alig:"center", sortable:false },
        { value:"email", text:"Email", alig:"center", sortable:false },
        { value:"discord_id", text:"Discord ID", alig:"center", sortable:false },
        { value:"website", text:"Website", alig:"center", sortable:false },
        { value:"twitter", text:"Twitter Account", alig:"center", sortable:false },
        { value:"discord_server", text:"Discord Server", alig:"center", sortable:false },
      ],
      dataTableProjects: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
      ],
      // watchlist
      searchWatchlist: "",
      headersTableWatchlist: [
        { value:"number", text:"#", alig:"center" },
        { value:"name", text:"Project Name", alig:"center", sortable:false },
        { value:"email", text:"Email", alig:"center", sortable:false },
        { value:"discord_id", text:"Discord ID", alig:"center", sortable:false },
        { value:"website", text:"Website", alig:"center", sortable:false },
        { value:"twitter", text:"Twitter Account", alig:"center", sortable:false },
        { value:"discord_server", text:"Discord Server", alig:"center", sortable:false },
      ],
      dataTableWatchlist: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
      ],
      // alerts
      searchAlerts: "",
      headersTableAlerts: [
        { value:"number", text:"#", alig:"center" },
        { value:"name", text:"Project Name", alig:"center", sortable:false },
        { value:"email", text:"Email", alig:"center", sortable:false },
        { value:"discord_id", text:"Discord ID", alig:"center", sortable:false },
        { value:"website", text:"Website", alig:"center", sortable:false },
        { value:"twitter", text:"Twitter Account", alig:"center", sortable:false },
        { value:"discord_server", text:"Discord Server", alig:"center", sortable:false },
      ],
      dataTableAlerts: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "Collection o Nft Name Lorem ipsum dolor sit",
          email: "example@domain.com",
          discord_id: "Username#321",
          website: "www.loremimpsum.com",
          twitter: "@loremipsum",
          discord_server: "discord.gg/invitecode",
        },
      ],
      // wallets
      searchWallets: "",
      dataTableWallets: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "pedrogperez23.near",
          project: { value:"All - Default" },
        },
        {
          img: require("@/assets/nfts/nft2.png"),
          name: "609e3c23a999964d76833hbjj5.264f11e10",
          project: { value:"All - Default" },
        },
      ],
      projectList: [
        "All - Default",
        "Discord Server Project Name",
        "Discord Server Project Name2",
        "Discord Server Project Name3",
        "Discord Server Project Name4",
        "Discord Server Project Name5",
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
