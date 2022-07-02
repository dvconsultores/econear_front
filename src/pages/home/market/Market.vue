<template>
  <section id="market" class="divcol gap2">
    <section class="marketContainer divcol acenter gap2">
      <aside class="sectionTop fill_w fwrap gap1" style="--fb: 1 1">
        <v-card v-for="(item,i) in dataMarket" :key="i"
          class="divcol jcenter tnowrap">
          <div class="space bold h11_em gap1">
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
          </div>
          <div class="space semibold h12_em gap1">
            <span class="acenter">
              {{item.state?'+':'-'}}{{item.value}}
              <img class="margin1left" :src="item.state?require('@/assets/icons/increase.svg'):require('@/assets/icons/decrease.svg')">
            </span>
            <span>{{item.state?'+':'-'}}{{item.percent}}%</span>
          </div>
        </v-card>
      </aside>

      <aside class="sectionDown fill_w fwrap gap1" style="--fb:1 1">
        <v-card v-for="(item,i) in dataBoard" :key="i" class="divcol">
          <div class="space">
            <h3 class="h9_em">{{item.title}}</h3>
            <button class="h11_em">More<v-icon color="var(--success)">mdi-chevron-right</v-icon></button>
          </div>

          <div class="divcol gap1">
            <aside v-for="(item2,i2) in item.list" :key="i2"
              class="space gap1 tnowrap">
              <div class="acenter gap1">
                <span>{{i2+1}}</span>
                <img :src="item2.img" alt="Referencial Image" style="--w:clamp(4em,4.7vw,4.75em)">
                <div class="divcol">
                  <span class="h11_em">{{item2.name}}</span>
                  <span class="h12_em">{{item2.user}}</span>
                </div>
              </div>

              <div class="divcol jcenter aend tend">
                <span v-if="item2.percent" :style="item2.state?'color:var(--success)':'color:var(--error)'"
                  class="h11_em">
                  {{item2.state?'+':'-'}}{{item2.percent}}%
                </span>

                <div v-if="item2.near&&item2.dollar" class="divcol">
                  <span :style="item2.state?'color:var(--success)':'color:var(--error)'" class="h11_em">
                    {{item2.near}}
                  </span>
                  <span class="h12_em">{{item2.dollar}}</span>
                </div>
              </div>
            </aside>
          </div>
        </v-card>
      </aside>
    </section>

    <article>
      <v-card class="fwrap center overflow" style="--fb: 1 1 495px">
        <img src="@/assets/images/anuncio.png" alt="Announcement Image" style="--w:min(100%,40em)">

        <div class="container-info space gap2">
          <h3 class="h7_em p">Our Collection MonkeONear</h3>
          <p class="p h11_em">
            The first ever community voting tool and wallet management tool that comes with 
            built-in data analysis system to find the best project on NEAR PROTOCOLV
          </p>
          <v-btn class="btn" style="--bg: var(--primary);--bs: 0px 0px 2.5px 1px #6FFFE9;--p: 0 0.75em;
            width: 7.875em;">Buy Here</v-btn>
        </div>
      </v-card>
    </article>
  </section>
</template>

<script>
export default {
  name: "market",
  i18n: require("./i18n"),
  data() {
    return {
      dataMarket: [
        {
          name: "EST.MCAP",
          price: "$12,531.843",
          value: "$0.07",
          percent: "0.25",
          state: true
        },
        {
          name: "USD/NEAR",
          price: "$5.14",
          value: "$0.07",
          percent: "1.34",
          state: false
        },
        {
          name: "USD/$PARAS",
          price: "$0.06",
          value: "$0",
          percent: "0.36",
          state: false
        },
        {
          name: "VOL 24H",
          price: "3,852 N",
          value: "344.4 N",
          percent: "9.82",
          state: true
        },
        {
          name: "VOL 7D",
          price: "30,516.38 N",
          value: "1,122.95 N",
          percent: "3.55",
          state: false
        },
      ],
      dataBoard: [
        {
          title: "Highest VOL Gainers",
          list: [
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              percent: "123,45",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              percent: "123,45",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              percent: "123,45",
              state: true,
            },
          ]
        },
        {
          title: "Sales Of The Day",
          list: [
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "45 N",
              dollar: "$ 231",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "45 N",
              dollar: "$ 231",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "45 N",
              dollar: "$ 231",
              state: true,
            },
          ]
        },
        {
          title: "Recently Added",
          list: [
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "123,45 N",
              dollar: "$ 3102",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "23,45 N",
              dollar: "$ 120,3",
              state: true,
            },
            {
              img: require('@/assets/images/m1.png'),
              name: "Collection o Nft Name",
              user: "Nftloremipsum.near",
              near: "5 N",
              dollar: "$ 28",
              state: true,
            },
          ]
        },
      ],
    }
  },
  methods: {
  }
};
</script>

<style src="./Market.scss" lang="scss" />
