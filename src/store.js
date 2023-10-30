import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    count: 0,
    user: null,
    selectedTheme: 'light-theme', 
  },
  mutations: {
    setCount: (state, count) => (state.count = count),
    setTheme: (state, theme) => (state.selectedTheme = theme),
    setUser: (state, user) => state.user = user,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getSelectedTheme: (state) => {
      return state.selectedTheme;
    },
    getUser: (state) =>
    {
      return state.user;
    },
  },
  plugins: [createPersistedState()],
});

export default store;