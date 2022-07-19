<template>
  <section id="profile" class="divcol">
    <aside class="container-header">
      <v-btn class="btn" style="--bg:#101C2F;--p:.5em .8em;--bs:0px 2.5px 7px .5px #6FFFE9">Edit Profile</v-btn>
    </aside>

    <aside class="container-profile divcol center gap1 tcenter">
      <v-avatar width="12.48875em" height="12.48875em">
        <img src="@/assets/logos/user.png" alt="avatar" style="--b:3px solid var(--success)">
      </v-avatar>
      <h2 class="p bold">pedro NFT Gperez</h2>
      <div class="acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialRed" :key="i" icon :href="item.link" target="_blank" style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social red" style="--w:2.674375em">
        </v-btn>
      </div>
      <v-btn class="btn" style="--bg:var(--primary);--bs:0 3px 4px 1px hsl(176, 60%, 40%, 1);--b:1px solid var(--success);width: min(90%,23.8125em);--fs:1.25em">Wallets</v-btn>
      <p class="p" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>


    <aside class="space gap2">
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
      style="--p:2em"
    >
      <template v-slot:[`header.number`]>
        <span>#</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
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


    <aside class="space gap2">
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
      style="--p:2em"
    >
      <template v-slot:[`header.number`]>
        <span>#</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
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


    <aside class="space gap2">
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

    <!-- tabla watchlist  -->
    <v-data-table
      class="dataTable card"
      :headers="headersTableAlerts"
      :items="dataTableAlerts"
      hide-default-footer
      style="--p:2em"
    >
      <template v-slot:[`header.number`]>
        <span>#</span>
        <img src="@/assets/icons/sort.svg" alt="sortable icon" style="--w: 0.5em;margin-left:.3em">
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
  </section>
</template>

<script>
export default {
  name: "profile",
  i18n: require("./i18n"),
  data() {
    return {
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
    }
  },
  methods: {
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
