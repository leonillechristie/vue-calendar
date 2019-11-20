import api from '../../api/api'

const state = {
    prods: []
}

// getters for filter
const getters = {
    fetchProducts: (state, getters) => {
        return state.prods.filter(prods => prods.created_date != null)
    }
}

// actions
const actions = {
    fetchProducts({ commit }) {
        return api.fetchProducts()
            .then(products => {
                console.log(products.items)
                commit('setProds', products.items)
            })
    }
}

// mutations
const mutations = {
    setProds(state, products) {
        state.prods = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}