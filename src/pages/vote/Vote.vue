<template>
  <section id="vote" class="divcol gap2">
    <ModalVote ref="menu"></ModalVote>
    <aside class="divcol center gap1 tcenter">
      <h2 class="h5_em p bold">Vote</h2>
      <p class="h10_em" style="max-width:60ch">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis accumsan nisl, et blandit orci pellentesque
      </p>
    </aside>

    <section id="container-top" class="card jspace fwrap">
      <section class="card divcol gap2">
        <h4 class="p">The most Voted</h4>
        <v-sheet class="container-wrapper">
          <section class="container-content scrollx">
            <v-card color="transparent" v-for="(item,i) in dataVoted" :key="i" class="space gap1">
              <div class="divrow gap2">
                <div class="center gap1">
                  <span class="number">{{i+1}}</span>
                  <img :src="item.img" alt="project images" style="--w:4.710625em">
                </div>

                <div class="divcol overflow" style="width:11.63375em">
                  <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                  <span style="font-size:0.97375em">{{item.desc}}</span>
                </div>
              </div>

              <div class="right space">
                <div class="center">
                  <v-btn icon>
                    <img src="@/assets/icons/like.svg" alt="like button">
                  </v-btn>
                  <v-btn icon @click="$refs.menu.modalDislike = true">
                    <img src="@/assets/icons/dislike.svg" alt="dislike button">
                  </v-btn>
                </div>

                <div class="divcol">
                  <span style="--c:var(--success)">{{item.voted}}</span>
                  <span>Voted</span>
                </div>
              </div>
            </v-card>
          </section>
        </v-sheet>
      </section>

      <section class="card divcol gap2">
        <h4 class="p">Recently Added</h4>
        <v-sheet class="container-wrapper">
          <section class="container-content scrollx">
            <v-card color="transparent" v-for="(item,i) in dataAdded" :key="i" class="space gap1">
              <div class="divrow gap2">
                <div class="center gap1">
                  <span class="number">{{i+1}}</span>
                  <img :src="item.img" alt="project images" style="--w:4.710625em">
                </div>

                <div class="divcol overflow" style="width:11.63375em">
                  <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                  <span style="font-size:0.97375em">{{item.desc}}</span>
                </div>
              </div>

              <div class="right space">
                <div class="center">
                  <v-btn icon>
                    <img src="@/assets/icons/like.svg" alt="like button">
                  </v-btn>
                  <v-btn icon @click="$refs.menu.modalDislike = true">
                    <img src="@/assets/icons/dislike.svg" alt="dislike button">
                  </v-btn>
                </div>

                <div class="divcol">
                  <span style="--c:var(--success)">{{item.voted}}</span>
                  <span>Voted</span>
                </div>
              </div>
            </v-card>
          </section>
        </v-sheet>
      </section>
    </section>


    <section id="container-bottom" class="fwrap space">
      <!-- left -->
      <!-- <section class="divcol gap2">
        <aside class="container-controls space gap2 wrap">
          <v-tabs>
            <v-tab v-for="(item,i) in dataControlsLeft" :key="i">
              <h6 class="p">{{item.name}}</h6>
            </v-tab>
          </v-tabs>
          <v-text-field
            v-model="searchLeft"
            hide-details
            solo
            label="Search for Nft Project Name"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%, .7);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF"
            class="customeFilter"
          ></v-text-field>
        </aside>

        <v-sheet class="card divcol gap2">
          <v-sheet class="container-wrapper">
            <section class="container-content scrollx">
              <v-card color="transparent" v-for="(item,i) in dataVoteLeft" :key="i" class="space gap1">
                <div class="divrow gap2">
                  <div class="center gap1">
                    <span class="number">{{i+1}}</span>
                    <img :src="item.img" alt="project images" style="--w:4.710625em">
                  </div>

                  <div class="divcol overflow" style="width:11.63375em">
                    <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                    <span style="font-size:0.97375em">{{item.desc}}</span>
                  </div>
                </div>

                <div class="right space">
                  <div class="center">
                    <v-btn icon>
                      <img src="@/assets/icons/like.svg" alt="like button">
                    </v-btn>
                    <v-btn icon @click="$refs.menu.modalDislike = true">
                      <img src="@/assets/icons/dislike.svg" alt="dislike button">
                    </v-btn>
                  </div>

                  <div class="divcol">
                    <span style="--c:var(--success)">{{item.voted}}</span>
                    <span>Voted</span>
                  </div>
                </div>
              </v-card>
            </section>
          </v-sheet>
          
          <v-btn-toggle mandatory color="#60D2CA" class="align">
            <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn v-for="n in 5" :key="n" color="transparent">
              <span>{{n}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-right</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-sheet>
      </section> -->


      <!-- right -->
      <section class="divcol gap2">
        <aside class="container-controls space gap2 wrap">
          <v-tabs>
            <v-tab v-for="(item,i) in dataControlsRight" :key="i">
              <h6 class="p">{{item.name}}</h6>
            </v-tab>
          </v-tabs>
          <v-text-field
            v-model="searchRight"
            hide-details
            solo
            label="Search for Nft Project Name"
            append-icon="mdi-magnify"
            style="--bg:hsl(210, 48%, 10%, .7);--c:#FFFFFF;--p:0 1.5em;--label:#FFFFFF"
            class="customeFilter"
          ></v-text-field>
        </aside>

        <v-sheet class="card divcol gap2">
          <v-sheet class="container-wrapper">
            <section class="container-content scrollx">
              <v-card color="transparent" v-for="(item,i) in dataVoteRight" :key="i" class="space gap1">
                <div class="divrow gap2">
                  <div class="center gap1">
                    <span class="number">{{i+1}}</span>
                    <img :src="item.img" alt="project images" style="--w:4.710625em">
                  </div>

                  <div class="divcol overflow" style="width:11.63375em">
                    <span style="font-size:1.095625em" class="bold">{{item.name}}</span>
                    <span style="font-size:0.97375em">{{item.desc}}</span>
                  </div>
                </div>

                <div class="right space">
                  <div class="center">
                    <v-btn icon>
                      <img src="@/assets/icons/like.svg" alt="like button">
                    </v-btn>
                    <v-btn icon @click="$refs.menu.modalDislike = true">
                      <img src="@/assets/icons/dislike.svg" alt="dislike button">
                    </v-btn>
                  </div>

                  <div class="divcol">
                    <span style="--c:var(--success)">{{item.voted}}</span>
                    <span>Voted</span>
                  </div>
                </div>
              </v-card>
            </section>
          </v-sheet>
          
          <v-btn-toggle mandatory color="#60D2CA" class="align">
            <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn v-for="n in 5" :key="n" color="transparent">
              <span>{{n}}</span>
            </v-btn>
            <v-btn color="transparent">
              <v-icon color="#707070">mdi-chevron-right</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-sheet>
      </section>
    </section>
  </section>
</template>

<script>
import ModalVote from './ModalVote.vue'
export default {
  name: "vote",
  i18n: require("./i18n"),
  components: { ModalVote },
  data() {
    return {
      dataVoted: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        }
      ],
      dataAdded: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        }
      ],
      searchLeft: "",
      dataControlsLeft: [
        { name: "All", active: false },
        { name: "Popularity", active: false },
        { name: "New", active: false },
      ],
      dataVoteLeft: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
      ],
      searchRight: "",
      dataControlsRight: [
        { name: "All", active: false },
        { name: "Popularity", active: false },
        { name: "New", active: false },
      ],
      dataVoteRight: [
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
        {
          img: require("@/assets/nfts/nft1.png"),
          name: "Nft Project Name",
          desc: "Project description Lorem ipsum dolor sit amet",
          like: false,
          dislike: false,
          voted: 3556,
        },
      ],
    }
  },
  mounted() {
    const el = document.querySelectorAll(".container-wrapper")
    el.forEach(e=>{
      const el2 = document.querySelectorAll(".scrollx")
      el2.forEach(e2=>{
        e.style.setProperty("--h-slide", `${e2.getBoundingClientRect().height}px`)
      })
    })
  },
  methods: {
  }
};
</script>

<style src="./Vote.scss" lang="scss" />
