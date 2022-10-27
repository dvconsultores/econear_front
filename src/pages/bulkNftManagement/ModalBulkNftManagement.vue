<template>
  <section id="modalBulkNftManagement">
    <!-- modal nfts -->
    <v-dialog
      v-model="modalNfts"
      max-width="82.358125em"
      persistent
    >
      <v-card id="modalNfts" class="overflowx" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalNfts = false, close()">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk NFT transfer</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <label for="address">You're about to transfer the NFT:</label>
            <div v-for="(item,i) in itemsNfts" :key="i" class="divcol fill_w">
              <span class="font-weight-black">{{item.name}} #{{item.token_id}} </span>
            </div>
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
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)" :disabled="validateAccountDis" @click="transfer_nft()">Transfer</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal list nfts -->
    <v-dialog
      v-model="modalListNfts"
      max-width="82.358125em"
      persistent
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalListNfts = false, close()">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk List NFT</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <label for="address">Price for:</label>
            <div v-for="(item,i) in itemListNfts" :key="i" class="divcol fill_w">
              <span class="font-weight-black">{{item.name}}</span>
            </div>
            <v-text-field
              v-model="priceNft"
              type="number"
              id="address"
              solo
              placeholder="Enter price"
              hide-details
              :error="price_error"
              @input="input()"
            >
            <template v-slot:append> 
              <img src="@/assets/logos/near.svg" alt="Logo Near" style="filter:invert(69%); --w:1.5em">
            </template>
            </v-text-field>
            <span class="margin1top" style="--c:#041C4C">Select the marketplace where the nft will be listed.</span>
            <v-select
              ref="address"
              v-model="marketplaces.marketplace"
              :items="marketplaces.items"
              :item-value="marketplaces.items"
              placeholder="Select..."
              solo
              hide-details
              required
              :error="select_error"
              :menu-props="{offsetY:true, contentClass: 'selectJuan'}"
              @change="change()"
            >
            <template v-slot:selection="{item}">
              <img :src="item.market_icon" style="--w: 42px" alt="Logo marketplace">
              <div>{{item.market_name}}</div>
            </template>
            <template v-slot:item="{item}">
              <img :src="item.market_icon" alt="Logo marketplace">
              <div>{{item.market_name}}</div>
            </template>
            </v-select>
            <span class="margin1top" style="--c:#041C4C">My Storage in {{marketplaces.marketplace.market_name}}: {{storageBalance}} NEAR.</span>
            <span class="margin1top" style="--c:#041C4C">Minimum Storage in {{marketplaces.marketplace.market_name}}: more than {{minimumStorage}} NEAR.</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)" @click="modalListNfts=false, close()">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)" @click="listar_nft()">List</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal update nfts -->
    <v-dialog
      v-model="modalUpdate"
      max-width="82.358125em"
      persistent
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalUpdate = false, close()">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Update price NFTS</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <label for="address">Price for: <span class="font-weight-black">{{itemListNft.name}} </span></label>
            <v-text-field
              v-model="priceNft"
              type="number"
              id="address"
              solo
              placeholder="Enter price"
              hide-details
              :error="price_error"
              @input="input()"
            >
            <template v-slot:append> 
              <img src="@/assets/logos/near.svg" alt="Logo Near" style="filter:invert(69%); --w:1.5em">
            </template>
            </v-text-field>
            <span>Marketplace: {{itemListNft.market_name}}</span>
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)" @click="modalUpdate = false, close()">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)" @click="update_nft()">Update</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>


    <!-- modal delisting nfts -->
    <v-dialog
      v-model="modalDelisting"
      max-width="82.358125em"
      persistent
    >
      <v-card id="modalNfts" class="overflowx list" style="padding-block:6em;background:linear-gradient(to right top,#172035 20%,#161D33,#161E34,#192539,#1E3143,#244251,#2D5862,#387378,#449492,#53B9B1,#63E2D2)">
        <v-btn icon class="close" @click="modalDelisting = false, close()">
          <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
        </v-btn>
        <h4 class="tcenter bold">Bulk NFT Delisting</h4>

        <v-sheet class="divcol center align">
          <div class="divcol fill_w">
            <label for="address">To unlist the NFT: <span class="font-weight-black">{{itemListNft.name}}</span>, first revoke permissions and approvals from the marketplace.</label>
            <v-btn class="btn" style="--bs:0 1px 1px 0px hsl(176, 60%, 40%, .7)" @click="revokeNft()">Revoke</v-btn>
            <label for="address">Second, remove the nft from the marketplace.</label>
            <!-- <v-btn class="btn" style="--bs:0 1px 1px 0px hsl(176, 60%, 40%, .7)" >Delisting</v-btn> -->
          </div>

          <div class="center gap2">
            <v-btn class="btn" style="--bg:var(--error);--bs:0 3px 4px 1px hsla(176, 60%, 40%, .4)" @click="modalDelisting=false, close()">Close</v-btn>
            <v-btn class="btn" style="--bs:0 3px 4px 1px hsl(176, 60%, 40%, .7)" @click="delistingNft()">Delisting</v-btn>
          </div>
        </v-sheet>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'
import {Action, createTransaction, functionCall} from 'near-api-js/lib/transaction'
import { base_decode } from 'near-api-js/lib/utils/serialize'
import { PublicKey } from 'near-api-js/lib/utils'

const { connect, transactions, keyStores, WalletConnection, Contract, utils } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()


export default {
  name: "modalBulkNftManagement",
  i18n: require("./i18n"),
  data() {
    return {
      priceNft: null,
      marketplaces: {
        marketplace: {},
        items: []
      },
      modalNfts: false,
      dataModalNfts: {
        address: "",
      },
      modalListNfts: false,
      modalUpdate: false,
      modalDelisting: false,
      itemNft: {},
      itemsNfts: [],
      itemListNft: {},
      itemListNfts: [],
      validateAccount: false,
      validateAccountDis: true,
      select_error: false,
      price_error: false,
      storageBalance: 0,
      minimumStorage: 0,
      txs: []
    }
  },
  mounted() {
  },
  methods: {
    async revokeNft() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.itemListNft.collection, {
        changeMethods: ["nft_revoke"],
        sender: wallet.account(),
      })
      localStorage.tipohash = 'revoke'
      await contract.nft_revoke({
        token_id: this.itemListNft.token_id,
        account_id: this.itemListNft.marketplace,
      },'300000000000000',
      "1").then((response) => {
      }).catch(err => {
      })
    },
    async delistingNft() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.itemListNft.marketplace, {
        changeMethods: ["delete_market_data"],
        sender: wallet.account(),
      })
      localStorage.tipohash = 'delete'
      await contract.delete_market_data({
        token_id: this.itemListNft.token_id,
        nft_contract_id: this.itemListNft.collection,
      },'300000000000000',
      "1").then((response) => {
      }).catch(err => {
      })
    },
    close () {
      this.marketplaces = {
        marketplace: {},
        items: []
      }
      this.priceNft = null
      this.select_error = false
      this.price_error = false
      this.itemListNft = {}
      this.itemListNfts = []
      this.storageBalance = 0,
      this.minimumStorage = 0
    },
    input() {
      if (!this.priceNft) {
        this.price_error = true
      } else {
        this.price_error = false
      }
    },
    change() {
      if (!this.marketplaces.marketplace.marketplace) {
        this.select_error = true
      } else {
        this.select_error = false
        this.storage_balance()
        this.storage_minimum()
      }
    },
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
              this.validateAccountDis = false
          }).catch((error) => {
              this.validateAccount = true
              this.validateAccountDis = true
          })
    },
    async storage_balance() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.marketplaces.marketplace.marketplace, {
        viewMethods: ["storage_balance_of"],
        sender: wallet.account(),
      })
      await contract.storage_balance_of({
        account_id: wallet.getAccountId(),
      }).then((response) => {
        this.storageBalance = utils.format.formatNearAmount(response)
      }).catch(err => {
        console.log(err)
      })
    },
    async storage_minimum() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.marketplaces.marketplace.marketplace, {
        viewMethods: ["storage_minimum_balance"],
        sender: wallet.account(),
      })
      await contract.storage_minimum_balance()
      .then((response) => {
        this.minimumStorage = utils.format.formatNearAmount(response)
      }).catch(err => {
        console.log(err)
      })
    },
    async storage_balance() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.marketplaces.marketplace.marketplace, {
        viewMethods: ["storage_balance_of"],
        sender: wallet.account(),
      })
      await contract.storage_balance_of({
        account_id: wallet.getAccountId(),
      }).then((response) => {
        this.storageBalance = utils.format.formatNearAmount(response)
      }).catch(err => {
        console.log(err)
      })
    },
    async transfer_nft() {
      if (this.itemsNfts.length === 1) {
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
        const wallet = new WalletConnection(near);

        const contract = new Contract(wallet.account(), this.itemsNfts[0].collection, {
          changeMethods: ["nft_transfer"],
          sender: wallet.account(),
        })
        localStorage.tipohash = 'transfer'
        await contract.nft_transfer({
          receiver_id: this.dataModalNfts.address,
          token_id: this.itemsNfts[0].token_id,
        },'300000000000000',
        "1").then((response) => {
        }).catch(err => {
          console.log(err)
        })
      } else {
        let txs = []
        for (var i = 0; i < this.itemsNfts.length; i++) {
          txs.push({
            receiverId: this.itemsNfts[i].collection,
            functionCalls: [
              {
                methodName: "nft_transfer",
                receiverId: this.itemsNfts[i].collection,
                gas: "300000000000000",
                args: {
                  receiver_id: this.dataModalNfts.address,
                  token_id: this.itemsNfts[i].token_id,
                },
                deposit: "1",
              },
            ],
          })
        }
        
        localStorage.tipohash = 'transfer'
        await this.batchTransaction(
          txs,
          {
            meta: "list",
          },
        );
      }
    },
    async transfer_nft_OLD() {
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const contract = new Contract(wallet.account(), this.itemNft.collection, {
        changeMethods: ["nft_transfer"],
        sender: wallet.account(),
      })
      localStorage.tipohash = 'transfer'
      await contract.nft_transfer({
        receiver_id: this.dataModalNfts.address,
        token_id: this.itemNft.token_id,
      },'300000000000000',
      "1").then((response) => {
      }).catch(err => {
      })
    },
    async update_nft() {
      if (this.priceNft) {
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
        const wallet = new WalletConnection(near);

        const contract = new Contract(wallet.account(), this.itemListNft.collection, {
          changeMethods: ["nft_approve"],
          sender: wallet.account(),
        })
        let msgs = {
          price: String(utils.format.parseNearAmount(this.priceNft)),
          market_type: "sale",
          ft_token_id: "near"
        }
        localStorage.tipohash = 'update'
        await contract.nft_approve({
          token_id: String(this.itemListNft.token_id),
          account_id: this.itemListNft.marketplace,
          msg: JSON.stringify(msgs),
        },'300000000000000',
        "350000000000000000000").then((response) => {
        //"340000000000000000000").then((response) => {
       
        }).catch(err => {
          console.log(err)
        })
      } else {
        if (!this.priceNft) {
          this.price_error = true
        }
      }
    },
    async listar_nft() {
      console.log(this.itemListNfts)
      if (this.priceNft && this.marketplaces.marketplace.marketplace) {
        const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
        const wallet = new WalletConnection(near);

        if (this.storageBalance > this.minimumStorage) {
          // const contract = new Contract(wallet.account(), this.itemListNft.collection, {
          //   changeMethods: ["nft_approve"],
          //   sender: wallet.account(),
          // })
          // let msgs2 = {
          //   price: String(utils.format.parseNearAmount(this.priceNft)),
          //   market_type: "sale",
          //   ft_token_id: "near"
          // }
          // localStorage.tipohash = 'list'
          // await contract.nft_approve({
          //   token_id: String(this.itemListNft.token_id),
          //   account_id: this.marketplaces.marketplace.marketplace,
          //   msg: JSON.stringify(msgs),
          // },'300000000000000',
          // "350000000000000000000").then((response) => {
          // //"340000000000000000000").then((response) => {
           
          // }).catch(err => {
          //   console.log(err)
          // })

          let msgs = {
            price: String(utils.format.parseNearAmount(this.priceNft)),
            market_type: "sale",
            ft_token_id: "near"
          }
          let txs = []
          for (var i = 0; i < this.itemListNfts.length; i++) {
            txs.push({
              receiverId: this.itemListNfts[i].collection,
              functionCalls: [
                {
                  methodName: "nft_approve",
                  receiverId: this.itemListNfts[i].collection,
                  gas: "300000000000000",
                  args: {
                    token_id: String(this.itemListNfts[i].token_id),
                    account_id: this.marketplaces.marketplace.marketplace,
                    msg: JSON.stringify(msgs),
                  },
                  deposit: "350000000000000000000",
                },
              ],
            })
          }
          
          localStorage.tipohash = 'transfer'
          await this.batchTransaction(
            txs,
            {
              meta: "list",
            },
          );
        } else {  
          let msgs = {
            price: String(utils.format.parseNearAmount(this.priceNft)),
            market_type: "sale",
            ft_token_id: "near"
          }
          let txs = [
            {
              receiverId: this.marketplaces.marketplace.marketplace,
              functionCalls: [
                {
                  methodName: "storage_deposit",
                  receiverId: this.marketplaces.marketplace.marketplace,
                  gas: "200000000000000",
                  args: {
                    receiverId: wallet.getAccountId(),
                  },
                  deposit: utils.format.parseNearAmount(this.minimumStorage),
                },
              ],
            }
          ]
          for (var i = 0; i < this.itemListNfts.length; i++) {
            txs.push({
              receiverId: this.itemListNfts[i].collection,
              functionCalls: [
                {
                  methodName: "nft_approve",
                  receiverId: this.itemListNfts[i].collection,
                  gas: "300000000000000",
                  args: {
                    token_id: String(this.itemListNfts[i].token_id),
                    account_id: this.marketplaces.marketplace.marketplace,
                    msg: JSON.stringify(msgs),
                  },
                  deposit: "350000000000000000000",
                },
              ],
            })
          }
          
          localStorage.tipohash = 'transfer'
          await this.batchTransaction(
            txs,
            {
              meta: "list",
            },
          );
        }
      } else {
        if (!this.priceNft) {
          this.price_error = true
        }
        if (!this.marketplaces.marketplace.marketplace) {
          this.select_error = true
        }
      }
    },
    async batchTransactions() {
      await batchTransaction(
          this.txs,
          {
            meta: "list",
          },
        );
    },

    async createTransactionFn(
      receiverId,
      actions
    ){
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      if (!wallet || !near) {
        throw new Error(`No active wallet or NEAR connection.`)
      }

      const localKey =
        await near?.connection.signer.getPublicKey(
          wallet?.account().accountId,
          near.connection.networkId
        )

      const accessKey = await wallet
        ?.account()
        .accessKeyForTransaction(receiverId, actions, localKey)

      if (!accessKey) {
        throw new Error(
          `Cannot find matching key for transaction sent to ${receiverId}`
        )
      }

      const block = await near?.connection.provider.block({
        finality: 'final',
      })

      if (!block) {
        throw new Error(`Cannot find block for transaction sent to ${receiverId}`)
      }

      const blockHash = base_decode(block?.header?.hash)
      //const blockHash = nearAPI.utils.serialize.base_decode(accessKey.block_hash);

      const publicKey = PublicKey.from(accessKey.public_key)
      //const nonce = accessKey.access_key.nonce + nonceOffset
      const nonce = ++accessKey.access_key.nonce;

      return createTransaction(
        wallet?.account().accountId,
        publicKey,
        receiverId,
        nonce,
        actions,
        blockHash
      )
    },

    async batchTransaction(transactions, options) {

      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near);

      const nearTransactions = await Promise.all(
        transactions.map(async (tx) => {
          return await this.createTransactionFn(
            tx.receiverId,
            tx.functionCalls.map((fc) => {
              return functionCall(fc.methodName, fc.args, fc.gas, fc.deposit)
            })
          )
        })
      )

      wallet.requestSignTransactions({
        transactions: nearTransactions,
        callbackUrl: options?.callbackUrl,
        meta: options?.meta,
      })
    }
  }
};
</script>

<style src="./BulkNftManagement.scss" lang="scss" />
