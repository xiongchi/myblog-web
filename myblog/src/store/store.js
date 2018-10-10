/**
 * vuex核心管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  }
}

const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  }
}

const getters = {
  getNum (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state状态对象
  actions, // 包含多个对应事件的回调函数
  getters // 包含多个getter计算属性的对象
})
