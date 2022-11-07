import Vue from 'vue';
import Vuex from 'vuex';
import router from '../Routes'
import * as nearAPI from 'near-api-js'
import { CONFIG } from '@/services/api'

const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI
const keyStore = new keyStores.BrowserLocalStorageKeyStore()

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
  
    // theme: "dark",
    // overlay: { opacity: 0.2, color: "white" },
    dataUser: {
      avatar: require("@/assets/logos/user-empty.png"),
      initials: '',
      fullName: '',
      email: '',
      wallet: '',
    },
  },
  mutations: {
    setAvatar(state, avatar) {
      state.dataUser.avatar = avatar
    }
    // Avatar (state, avatar) {state.user.perfil = avatar},
    // CambiarTheme(state, theme) {state.theme = theme},
    // OverlayMethod(state, theme) {
    //   if (theme == "dark") {state.overlay.opacity = "0.5";state.overlay.color = "black"}
    //   if (theme == "light") {state.overlay.opacity = "0.2";state.overlay.color = "white"}
    // },
  },
  actions: {
    GenerateAlert({commit}, {key, title, desc}) {
      const layout = router.app.$children[0].$children[0].$children[0];
      layout.$children[1].GenerateAlert(key, title, desc);
    },
    async pushHomeNormal({dispatch}) {
      console.log(this.router)
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near)
      if (!wallet.isSignedIn()) {
        router.push("/")
      } else {
        const result = await dispatch("isHolderMonke")
        if (result === 0 && wallet.getAccountId() !== "hrpalencia.near" && wallet.getAccountId() !== "jochando.near" && wallet.getAccountId() !== "andresdom.near") {
          router.push("/restricted") //No Holder
        }
      }
    },
    async pushHomeMonke({dispatch}, contract_nft) {
      console.log(this.router)
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      const wallet = new WalletConnection(near)
      if (!wallet.isSignedIn()) {
        router.push("/")
      } else {
        const result = await dispatch("isHolderMonke")
        if (result === 0 && contract_nft !== "monkeonear.neartopia.near" && wallet.getAccountId() !== "hrpalencia.near" && wallet.getAccountId() !== "jochando.near" && wallet.getAccountId() !== "andresdom.near") {
          router.push("/restricted") //No Holder
        }
      }
    },
    async isHolderMonke() {
      const CONTRACT_NAME = 'monkeonear.neartopia.near'
      // connect to NEAR
      const near = await connect(CONFIG(new keyStores.BrowserLocalStorageKeyStore()));
      // create wallet connection
      const wallet = new WalletConnection(near)
      if (wallet.isSignedIn()) {
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ['nft_supply_for_owner'],
          sender: wallet.account()
        })
        let res = await contract.nft_supply_for_owner({
          account_id: wallet.getAccountId(),
        })
          .then((response) => {
            return Number(response)
          }).catch((error) => {
            console.log("ERR",error)
            return 0
          })
        return res
      }
    },
    // CambiarTheme({state, commit}, {theme, element}) {
    //   element.href = `${state.baseURL}themes/${theme}/theme.css`;
    //   localStorage.setItem("theme", theme);
    //   commit( "CambiarTheme", theme)
    // },
  },
});
