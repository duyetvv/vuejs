import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const origin = 'https://mp3.zing.vn/xhr/media/get-source?type=album&key='

const state = {
  album: {},
  song: {},
  albumID: ''
}
// Getters will receive the state as their 1st argument
// Getters will also receive other getters as the 2nd argument
const getters = {
  getAlbumID: (state) => state.albumID,
  getAlbum: (state) => state.album,
  getSong: (state) => state.song,
  songSource: (state) => {
    return state.song.source && state.song.source['128']
  }
}
// Mutations will receive the state as the first argument
// the payload should be an object as the 2nd argument
const mutations = {
  setAlbumID (state, albumID) { state.albumID = albumID },
  setAlbum (state, album) { state.album = album },
  setSong (state, song) { state.song = song }
}
// Actions will receive the context(store) as the first argument
// the payload should be an object as the 2nd argument
const actions = {
  setAlbumID ({ commit }, albumID) {
    commit('setAlbumID', albumID)
  },

  setAlbum ({ dispatch, commit }, albumID) {
    dispatch('setAlbumID', albumID)

    axios.get(origin + albumID)
      .then((res) => {
        commit('setAlbum', res.data.data.items)
        dispatch('setSong', res.data.data.items[0])
      })
  },

  setSong ({ commit }, song) { commit('setSong', song) }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
