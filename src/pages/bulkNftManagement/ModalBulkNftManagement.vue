<template>
  <section id="modalBulkNftManagement">
    <!-- modal nfts -->
    <v-dialog
      v-model="modalNfts"
      max-width="82.358125em"
    >
      <v-card id="modalNfts" class="overflowx" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalNfts = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk NFT transfer</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <label for="address">You're about to transfer 4 NFT</label>
            <v-text-field
              v-model="dataModalNfts.address"
              id="address"
              solo
              placeholder="Enter Address"
              hide-details
            ></v-text-field>
            <span class="margin1top" style="--c:#041C4C">Make sure the receiver has enough near for storage!</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Transfer</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal list nfts -->
    <v-dialog
      v-model="modalListNfts"
      max-width="82.358125em"
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalListNfts = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk List NFT</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <span class="margin1top">Make sure the receiver has enough near for storage!</span>
            <span>Royalty: 2.4 N</span>
            <span>Marketplace Fee: 0.24 N</span>
            <span>You'll receive 9.36 N</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">List</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal update nfts -->
    <v-dialog
      v-model="modalUpdate"
      max-width="82.358125em"
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalUpdate = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Update price NFTS</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <span class="margin1top">You're about to list 4 NFT</span>
            <span>Royalty: 2.4 N</span>
            <span>Marketplace Fee: 0.24 N</span>
            <span>You'll receive 9.36 N</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Update</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal delisting nfts -->
    <v-dialog
      v-model="modalDelisting"
      max-width="82.358125em"
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalDelisting = false">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk NFT Delisting</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <span class="margin1top">You're about to list 4 NFT</span>
            <span>Royalty: 0 N</span>
            <span>Marketplace Fee: 0.24 N</span>
            <span>You'll receive 0 N</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)">Update</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "modalBulkNftManagement",
  i18n: require("./i18n"),
  data() {
    return {
      modalNfts: false,
      dataModalNfts: {
        address: "",
      },
      modalListNfts: false,
      modalUpdate: false,
      modalDelisting: false,
    }
  },
  methods: {
  }
};
</script>

<style src="./BulkNftManagement.scss" lang="scss" />
