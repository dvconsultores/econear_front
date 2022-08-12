<template>
  <section id="hero" class="divcol acenter gap2">
    <!-- <h1 class="h4_em h5_emmobile tcenter">
      The whole <br class="vermobile"><span class="mask" :style="`--mask:'NEAR ecosystem'`">NEAR ecosystem</span><br>at one place.
    </h1> -->
    <h1 class="h4_em h5_emmobile tcenter">
      The whole <br class="vermobile"><span class="mask">NEAR ecosystem</span><br>at one place.
    </h1>

    <v-btn class="btn h10_em center" @click="modalProject=true"
      style="--p:0 2em;--h:62px;--w:13.5em;--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Get Started</v-btn>

    <blockquote class="fill_w scrollxmobile">
      <aside v-for="(item,i) in dataCards" :key="i" class="wrapperCards"
        :style="`--top:${item.style.top};--left:${item.style.left};--right:${item.style.right}`">
        <v-card class="hero-cards divcol center tcenter gap1"
            :style="`--clip:${item.style.clip}`">
          <h3 class="p">{{item.title}}</h3>
          <v-btn class="btn">Buy Here</v-btn>
          <img :src="item.img" alt="Card Image" style="--w:min(100%,10.25em)">
        </v-card>
      </aside>
    </blockquote>

    <v-dialog
      v-model="modalProject"
      max-width="82.358125em"
    >
      <v-card color="var(--primary)" class="modalProject">
        <v-btn icon class="close" @click="modalProject = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h3 class="h7_em tcenter align" style="max-width: 15ch">Listed Your Project on Econear</h3>
        <v-sheet class="divcol center" style="padding:2em">
          <section class="fill_w grid" style="--gtc:repeat(auto-fit, minmax(min(100%,350px), 1fr));gap:2em;margin-bottom:1em">
            <v-text-field
              label="Project Name"
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
              label="Website"
              style="--c:#000000"
              solo
            ></v-text-field>

            <v-text-field
              label="Twitter Account"
              style="--c:#000000"
              solo
            ></v-text-field>

            <v-text-field
              label="Discord Server"
              placeholder="discord.gg/invitecode"
              style="--c:#000000"
              solo
            ></v-text-field>
          </section>

          <section class="fill_w">
            <center style="font-size:clamp(14px, 1vw, 16px)">
              <label style="color:var(--clr-inv)">Have you already minted ?</label>
            </center>
            <div class="container-checkbox space">
              <aside class="acenter">
                <label class="labels" for="A" style="color:var(--clr-inv);--tag:'A'">No, the mint is upcoming!</label>
                <v-checkbox
                  id="A"
                ></v-checkbox>
              </aside>

              <aside class="acenter">
                <label class="labels" for="B" style="color:var(--clr-inv);--tag:'B'">Yes, Already minted</label>
                <v-checkbox
                  id="B"
                ></v-checkbox>
              </aside>
            </div>
          </section>

          <v-btn class="btn h10_em" style="--bs:none;width:min(90%,517px);">
            Submint
          </v-btn>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
const leftCards = 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 10%)';
const rightCards = 'polygon(0 0, 85% 0, 100% 10%, 100% 100%, 0 100%)';
export default {
  name: "hero",
  i18n: require("./i18n"),
  data() {
    return {
      // responsive: false,
      modalProject: false,
      dataCards: [
        {
          img: require('@/assets/images/c1.png'),
          title: "New Collection",
          style: { clip: leftCards, top: "-12.5em", left: "0"}
        },
        {
          img: require('@/assets/images/c2.png'),
          title: "Top Volume Projects",
          style: { clip: leftCards, top: "-3.125em", left: "20%"}
        },
        {
          img: require('@/assets/images/c3.png'),
          title: "Top Collection",
          style: { clip: rightCards , top: "3.125em"}
        },
        {
          img: require('@/assets/images/c4.png'),
          title: "Top Voted Projects",
          style: { clip: rightCards, top: "-3.125em", right: "20%"}
        },
        {
          img: require('@/assets/images/c5.png'),
          title: "Top Floor Featured Projects",
          style: { clip: rightCards, top: "-12.5em", right: "0"}
        },
      ]
    }
  },
  // mounted() {
  //   this.Responsive();
  //   window.onresize = () => this.Responsive();
  // },
  methods: {
    // Responsive() {
    //   if (window.innerWidth <= 880) {
    //     this.responsive = true
    //   } else {
    //     this.responsive = false
    //   }
    // },
  }
};
</script>

<style src="./Hero.scss" lang="scss" />
