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
            <label for="address">You're about to transfer the NFT: <span class="font-weight-black">{{itemNft.name}} #{{itemNft.token_id}} </span></label>
            <v-text-field
              v-model="dataModalNfts.address"
              id="address"
              solo
              placeholder="Enter Account ID"
              hide-details
              :error="validateAccount"
              @input="debounce()"
            ></v-text-field>
            <span class="margin1top" style="--c:#041C4C">Enter a recipient address, then proceed to confirm your transaction.</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)" @click="modalNfts=false, itemNft={}">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)" :disabled="validateAccount" @click="transfer_nft()">Transfer</v-btn>
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
            <label for="address">Price for: <span class="font-weight-black">{{itemNft.name}} #{{itemNft.token_id}} </span></label>
            <v-text-field
              v-model="dataModalNfts.address"
              type="number"
              id="address"
              solo
              placeholder="Enter price"
              hide-details
              :error="validateAccount"
            >
            <template v-slot:append> 
              <img src="@/assets/logos/near.svg" alt="Logo Near" style="filter:invert(69%); --w:1.5em">
            </template>
            </v-text-field>
            <span class="margin1top" style="--c:#041C4C">Enter a recipient address, then proceed to confirm your transaction.</span>
            <v-select
              ref="address"
              v-model="marketplaces.marketplace"
              :items="marketplaces.items"
              :item-value="marketplaces.items"
              placeholder="Select..."
              solo
              hide-details
              required
              :menu-props="{offsetY:true, contentClass: 'selectJuan'}"
            >
            <template v-slot:selection="{item}">
              <img :src="item.img" alt="Logo marketplace">
              <div>{{item.name}}</div>
            </template>
            <template v-slot:item="{item}">
              <img :src="item.img" alt="Logo marketplace">
              <div>{{item.name}}</div>
            </template>
            </v-select>
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
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;

export default {
  name: "modalBulkNftManagement",
  i18n: require("./i18n"),
  data() {
    return {
      marketplaces: {
        marketplace: [],
        items: [
          {
            img: require("@/assets/logos/near.svg"),
            name: "Paras"
          },
          {
            img: require("@/assets/logos/near.svg"),
            name: "Paras 1"
          },
          {
            img: require("@/assets/logos/near.svg"),
            name: "Paras 2"
          },
          {
            img: require("@/assets/logos/near.svg"),
            name: "Paras 3"
          }
        ]
      },
      modalNfts: false,
      dataModalNfts: {
        address: "",
      },
      modalListNfts: false,
      modalUpdate: false,
      modalDelisting: false,
      itemNft: {},
      validateAccount: false,
    }
  },
  methods: {
    debounce () {
      clearTimeout(this.timer)
      this.timer = setTimeout(this.validateNear, 600)
    },
    async validateNear() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const account = await near.account(this.dataModalNfts.address);
      await account.state()
          .then((response) => {
              this.validateAccount = false
          }).catch((error) => {
              this.validateAccount = true
          })
    },
    async transfer_nft() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.itemNft.collection, {
        changeMethods: ["nft_transfer"],
        sender: wallet.account(),
      })
      await contract.nft_transfer({
        receiver_id: this.dataModalNfts.address,
        token_id: this.itemNft.token_id,
      },'300000000000000',
      "1").then((response) => {
      }).catch(err => {
      })
    },
  }
};
</script>

<style src="./BulkNftManagement.scss" lang="scss" />
