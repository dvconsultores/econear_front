import Vue from 'vue';
import Vuex from 'vuex';
import router from '../Routes'

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    // theme: "dark",
    // overlay: { opacity: 0.2, color: "white" },
    // user: {
    //   perfil: require("@/assets/icons/avatar.png"),
    //   initials: 'JD',
    //   fullName: 'John Doe',
    //   email: 'john.doe@doe.com',
    //   wallet: 'detextre4.testnet',
    // },
  },
  mutations: {
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
    // CambiarTheme({state, commit}, {theme, element}) {
    //   element.href = `${state.baseURL}themes/${theme}/theme.css`;
    //   localStorage.setItem("theme", theme);
    //   commit( "CambiarTheme", theme)
    // },
  },
});
