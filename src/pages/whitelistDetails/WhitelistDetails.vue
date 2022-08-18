<template>
  <section id="whitelistDetails" class="divcol">
    <ModalWihtelistDetails ref="menu"></ModalWihtelistDetails>
    <!-- <aside class="container-header">
    </aside> -->

    <aside class="container-profile divcol center gap1 tcenter">
      <v-avatar width="12.48875em" height="12.48875em">
        <img src="@/assets/images/whitelist-avatar.png" alt="avatar" style="--b:3px solid var(--success);--w:100%;--h:100%;--br:50%">
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
      
      <div class="contactions acenter spacea gap1">
        <v-btn v-for="(item,i) in dataSocialActions" :key="i" icon style="--p:2em">
          <img :src="require(`@/assets/icons/${item.social}.svg`)" alt="social actions" style="--w:2.5em">
        </v-btn>
      </div>
    </aside>

    <p class="description p align" style="max-width:65ch">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi. Donec rutrum posuere sollicitudin. 
    </p>

    <h3 class="h9_em p">Discord Server Project Name - Whitelist Criteria</h3>

    <section id="container-whitelist" class="card grid gap2" style="--p:clamp(1em,2vw,2em);--gtc:repeat(auto-fit,minmax(min(100%,22.999375em),1fr))">
      <v-card v-for="(item,i) in dataWhitelist" :key="i" class="card divcol gap2" style="--p:clamp(1em,2vw,2em)">
        <v-sheet class="card scrolly" style="--p:1em" height="11.648125em">
          <div class="acenter" style="gap:.2em">
            <h6 class="p bold">{{item.name}}</h6>
            <v-tooltip top color="#1A6765" style="border-radius:.5vmax">
              <template v-slot:activator="{ on, attrs}">
                <img v-on="on" v-bind="attrs" src="@/assets/icons/info.svg" alt="info icon" style="--w:1.1875em">
              </template>
              <span>If you have this role in the discord server,<br>you are automatically eligible for whitelist.</span>
            </v-tooltip>
          </div>
          <p class="p bold">{{item.desc}}</p>
        </v-sheet>
        <v-btn class="btn align bold" style="--p:.45em 1.5em;height:max-content;width:min(100%,14.85em);--c:#000000;--bs:0 2px 3px 1px hsl(171, 100%, 72%, .4)"
          @click="$refs.menu.Alerts('cancel')">
          Verify
        </v-btn>
      </v-card>
    </section>
  </section>
</template>

<script>
import ModalWihtelistDetails from './ModalWihtelistDetails.vue'
export default {
  name: "whitelistDetails",
  i18n: require("./i18n"),
  components: { ModalWihtelistDetails },
  data() {
    return {
      dataSocialRed: [
        { social: "twitter", link: "#" },
        { social: "discord", link: "#" },
        { social: "telegram", link: "#" },
      ],
      dataSocialActions: [
        { social: "share" },
      ],
      dataWhitelist: [
        {
          name: "Criteria #1",
          desc: 'Obtain the "Discord Server Project Name" Whitelist Discord role',
        },
        {
          name: "Criteria #2",
          desc: 'Obtain the OG Discord role',
        },
        {
          name: "Criteria #3",
          desc: 'Obtain the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat ligula orci, ac imperdiet tortor cursus vitae. Nunc fringilla lacus vel tempus ultrices. Nulla facilisi. Donec rutrum posuere sollicitudin. ',
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./WhitelistDetails.scss" lang="scss" />
