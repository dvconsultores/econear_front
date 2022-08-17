<template>
  <section id="modalWihtelistDetails">
    <!-- modal verify -->
    <v-dialog
      v-for="(item,i) in dataVerify" :key="i"
      v-model="item.model"
      max-width="68.8125em"
      hide-overlay
    >
      <v-card id="modalVerify" class="overflowx">
        <v-btn icon class="close" @click="ClearAlerts(item)">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>

        <v-sheet class="center align" style="gap:.5em" max-width="max-content">
          <h4 class="bold p">{{item.title}}</h4>
          <v-icon :color="item.color" size="3em">{{item.icon}}</v-icon>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "modalWihtelistDetails",
  i18n: require("./i18n"),
  data() {
    return {
      dataVerify: []
    }
  },
  methods: {
    ClearAlerts(item) {item.model=false;this.dataVerify=[]},
    Alerts(key) {
      // create alert
      if (key=="success") {
        var alert = {
          key: key,
          title: 'Fetched project successfully',
          icon: 'mdi-check',
          color: 'var(--success)',
          model: true,
        }
      } else if (key=="cancel") {
        var alert = {
          key: key,
          title: 'Failed to meet whitelist criteria',
          icon: 'mdi-close',
          color: 'var(--error)',
          model: true,
        }
      }
      this.dataVerify.push(alert)
    }
  }
};
</script>

<style src="./WhitelistDetails.scss" lang="scss" />
