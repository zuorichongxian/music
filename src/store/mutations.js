import * as types from './mutation-types'

const matutaions = {
  [types.SET_PLAYLIST](state, song) {
    // state.playList = playList
    state.playList.push(song)

  }
}
export default matutaions
