/* eslint-disable no-new */
import { axios } from 'axios'

const setList = async ({ commit }, obj) => {
    const list = (await axios.get('http://localhost:8080/')).data.categories
    commit('SET_LIST',{list})
}

export default {
    setList
}
