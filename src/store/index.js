import Vue from 'vue'
import Vuex from 'vuex'
import category from '../features/category/store'

Vue.use(Vuex)

/* eslint-disable */
const modules = {
    category
}

export default new Vuex.Store({
    modules
})