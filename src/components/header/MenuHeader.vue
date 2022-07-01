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
