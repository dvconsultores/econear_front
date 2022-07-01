<template>
  <v-footer id="footer" absolute>
    <v-row no-gutters style="gap:2em">
      <!-- content -->
      <section class="fill_w space gap2 divcolmobile">
        <aside class="divcol" style="width: min(100%, 25.933125em)">
          <img class="alignmobile" src="@/assets/logos/logo.svg" alt="Logo" style="--w:min(100%,17.25em)">

          <div class="gap1 acenter alignmobile margin2bottom">
            <v-btn v-for="(item,i) in dataRedes" :key="i" icon :href="item.to"
              style="--p:2.2em">
              <img class="aspect" :src="item.icon" alt="social icons"
                style="margin-left:0;--w:2.674375em">
            </v-btn>
          </div>

          <p class="h11_em p eliminarmobile">
            Data, tables and charts are free for personal use. For commercial use, 
            please contact us at contact @econear.co. All data is for informational purposes 
            only. Before purchasing any NFT, please DYOR. 
          </p>
        </aside>

        <aside class="divcol gap2mobile" style="gap:8em">
          <div class="acenter gap2 fwrapmobile" style="--fb: 1 1 70px">
            <a v-for="(item,i) in dataFooter" :key="i" :href="item.to" class="h11_em">
              {{item.name}}
            </a>
            <button class="h11_em">
              More<v-icon medium color="var(--success)">mdi-chevron-down</v-icon>
            </button>
          </div>

          <v-text-field
            v-model="input"
            solo
            :rules="[rules.email]"
            label="example@email.com"
            style="--p: 0 0 0 12px;margin-left:auto;--w:clamp(20em, 24vw, 24.848125em);
              --h:clamp(2.6em, 3vw, 3em)"
          >
            <template v-slot:append>
              <v-btn rounded class="btn h11_em" @click="SendEmail()"
                style="--b: 1px solid #6FFFE9;--bg:var(--clr-btn);--h:clamp(2.7em, 3.1vw, 3.1em);--p:0 16px;--bs:none">
                Subscribe
              </v-btn>
            </template>
          </v-text-field>
        </aside>
      </section>

      <section class="fill_w space tcenter divcolmobile">
        <span class="h11_em normal padd2left">&copy; 2022 Econear. All Rights Reserved.</span>
        <span class="h11_em acenter gap1">
          <a href="#" target="_blank">Cookie statement</a>
          <a href="#" target="_blank">Terms &amp; Conditions</a>
          <a href="#" target="_blank">Privacy Policy</a>
        </span>
      </section>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      dataRedes: [
        { icon: require("@/assets/icons/twitter.svg"), to: "#" },
        { icon: require("@/assets/icons/discord.svg"), to: "#" },
        { icon: require("@/assets/icons/telegram.svg"), to: "#" },
      ],
      dataFooter: [
        { key: "home", name: "Home", to: "" },
        { key: "drops", name: "Drops", to: "" },
        { key: "nfts", name: "NFTS", to: "" },
        { key: "snipe", name: "Snipe tool", to: "" },
        { key: "contact", name: "Contact us", to: "" },
      ],
      input: "",
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  methods: {
    SendEmail() {
      alert('send')
    },
  }
}
</script>

<style src="./Footer.scss" lang="scss" />
