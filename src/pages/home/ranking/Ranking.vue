<template>
  <section id="ranking" class="divcol gap2">
    <h2 class="h7_em p">All Time Best</h2>

    <aside class="container-controls space gap2 fwrap">
      <v-tabs>
        <v-tab v-for="(item,i) in dataControls" :key="i" class="options">
          <h6 class="h11_em p">{{item.name}}</h6>
        </v-tab>
      </v-tabs>

      <v-text-field
        v-model="search"
        hide-details
        solo
        label="Search for NFT's and collections"
        append-icon="mdi-magnify"
        style="max-width:30.061875em;--bg:hsl(210, 48%, 13%, .46);--c:#FFFFFF;--p:0 1.5em"
      >
      </v-text-field>
    </aside>

    <section class="dataTable card">
      
    </section>
  </section>
</template>

<script>
export default {
  name: "ranking",
  i18n: require("./i18n"),
  data() {
    return {
      search: "",
      dataControls: [
        { name: "All Time Best", active: false },
        { name: "Floor Price", active: false },
        { name: "Volume", active: false },
      ]
    }
  },
  methods: {
  }
};
</script>

<style src="./Ranking.scss" lang="scss" />
