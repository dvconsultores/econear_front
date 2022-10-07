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
    // CambiarTheme({state, commit}, {theme, element}) {
    //   element.href = `${state.baseURL}themes/${theme}/theme.css`;
    //   localStorage.setItem("theme", theme);
    //   commit( "CambiarTheme", theme)
    // },
  },
});
