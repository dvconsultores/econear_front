<template>
  <v-dialog
    v-model="modalEdit"
    max-width="82.358125em"
    persistent
  >
    <v-card color="var(--primary)" class="modalEdit overflowx">
      <v-btn icon class="close" @click="modalEdit = false, close()">
        <img src="@/assets/icons/close.svg" alt="close" style="--w:0.921875em">
      </v-btn>
      <h4 class="tcenter">Edit Profile</h4>

      <v-sheet style="isolation:isolate">
        <section class="up" style="z-index:-1">
     
          <label for="bannerBtn" class="btn" style="--bg:#101C2F;--p:.5em .8em;--bs:0px 2.5px 7px .5px #6FFFE9;width:clamp(5em, 8vw, 8.2em);--fs:1em">Upload</label>
          <v-file-input
            id="bannerBtn"
            v-model="avatar_model"
            style="display:none"
            @change="previewBanner()"
          ></v-file-input>
      
          <v-avatar width="8.130625em" height="8.130625em">
            <img :src="avatar" alt="avatar" style="--b:3px solid var(--success);--br:50%;--w:100%">
          </v-avatar>
        </section>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <section class="down fwrap" style="--fb:1 1 clamp(15em, 22vw, 22.76125em)">
            <div class="divcol">
              <label for="username">Username</label>
              <v-text-field
                v-model="dataModalEdit.username"
                id="username"
                solo
              ></v-text-field>
            </div>

            <div class="divcol">
              <label for="email">Email</label>
              <v-text-field
                v-model="dataModalEdit.email"
                id="email"
                placeholder="example@domain.com"
                solo
                :rules="rules.email"
              ></v-text-field>
            </div>

            <div class="divcol">
              <label for="discord_id">Discord ID</label>
              <v-text-field
                v-model="dataModalEdit.discord_id"
                id="discord_id"
                placeholder="Username#321"
                solo
              ></v-text-field>
            </div>

            <div class="divcol">
              <label for="website">Website</label>
              <v-text-field
                v-model="dataModalEdit.website"
                id="website"
                solo
              ></v-text-field>
            </div>

            <div class="divcol">
              <label for="twitter">Twitter Account</label>
              <v-text-field
                v-model="dataModalEdit.twitter"
                id="twitter"
                solo
              ></v-text-field>
            </div>

            <div class="divcol">
              <label for="discord_server">Discrod Server</label>
              <v-text-field
                v-model="dataModalEdit.discord_server"
                id="discord_server"
                placeholder="discord.gg/invitecode"
                solo
              ></v-text-field>
            </div>

            <div class="bio divcol">
              <label for="bio" class="tcenter">Bio</label>
              <v-textarea
                v-model="dataModalEdit.bio"
                id="bio"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                no-resize
                solo
              ></v-textarea>
            </div>
            <v-btn class="btn align" @click="setData()" style="max-width:min(90%,32.3125em);--bs:0 3px 4px 1px hsl(176, 60%, 40%, .3)">
              <span>Save</span>
            </v-btn>
          </section>
        </v-form>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
import * as nearAPI from 'near-api-js'
const { connect, keyStores, WalletConnection } = nearAPI

const keyStore = new keyStores.BrowserLocalStorageKeyStore()
const config = {
        networkId: "testnet",
        keyStore, 
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
export default {
  name: "modalEdit",
  i18n: require("./i18n"),
  data() {
    return {
      valid: null,
      avatar_model: [],
      avatar: null,
      modalEdit: false,
      dataModalEdit: {
        // username: "",
        // email: "",
        // discord_id: "",
        // website: "",
        // twitter: "",
        // discord_server: "",
        // bio: "",
      },
      rules: {
        date: [
          v => !!v,
        ],
        long: [
          v => (v || '' ).length <= 155 || '155 max',
        ],
        email: [
          v => /.+@.+\..+/.test(v),// || 'E-mail tiene que ser valido',
        ]
      },
    }
  },
  mounted () {
    this.getData()
    this.avatar = this.$store.state.dataUser.avatar
    this.formData = new FormData();
  },
  methods: {
    previewBanner() {
      this.avatar = URL.createObjectURL(this.avatar_model);
    },
    close() {
      this.avatar = this.$store.state.dataUser.avatar
    },
    async getData() {
      const url = "api/v1/yourperfil"
      const near = await connect(config);
      const wallet = new WalletConnection(near)

      if (wallet.isSignedIn()) {
        let item = {
          wallet: wallet.getAccountId()
        }
        this.axios.post(url, item)
          .then((response) => {
            if (response.data[0]) {
              let perfil = {
                username: response.data[0].username,
                email: response.data[0].email,
                discord_id: response.data[0].discord_id,
                website: response.data[0].web_site,
                twitter: response.data[0].twitter_account,
                discord_server: response.data[0].discord_server,
                bio: response.data[0].bio || '',
              }
              this.dataModalEdit = {}
              this.dataModalEdit = perfil
            }
          }).catch((error) => {
            console.log(error)
          })
      }
    },
    async setData () {
      if (this.dataModalEdit.email === '' || this.dataModalEdit.email === null || this.$refs.form.validate()) {
        const near = await connect(config);
        const wallet = new WalletConnection(near)

        if (wallet.isSignedIn()) {
        
          this.formData.append("wallet", wallet.getAccountId());
          this.formData.append("username", this.dataModalEdit.username || '');
          this.formData.append("email", this.dataModalEdit.email || '');
          this.formData.append("discord_id", this.dataModalEdit.discord_id || '');
          this.formData.append("discord_server", this.dataModalEdit.discord_server || '');
          this.formData.append("web_site", this.dataModalEdit.website || '');
          this.formData.append("twitter_account", this.dataModalEdit.twitter || '');
          this.formData.append("bio", this.dataModalEdit.bio || '');

          if (this.avatar_model) {
           
            this.formData.append("uploaded_file", this.avatar_model)
          }

          const url = "api/v1/saveperfil"
          this.axios.post(url, this.formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }).then((response) => {
            this.$store.dispatch('GenerateAlert', {key:'success', title: 'Success!', desc: 'Profile saved successfully.'})
            this.$store.commit('setAvatar', this.avatar)
            this.$store.state.dataUser.avatar = this.avatar
            this.modalEdit = false
          }).catch((error) => {
            console.log(error)
            this.$store.dispatch('GenerateAlert', {key:'error', title: 'Error!', desc: 'Something happened.'})
          })
        }
      }
    },
  }
};
</script>

<style src="./Profile.scss" lang="scss" />
