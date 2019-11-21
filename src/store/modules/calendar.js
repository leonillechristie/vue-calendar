import api from '../../api/api'

const state = {
    events: []
}

const getters = {
}
 
// actions
const actions = {
    fetchEvents({ commit }) {
    return api.fetchEvents()
        .then(events => {
            console.log(events.items)
            commit('setEvents', events.items)
        })
    }
}

// mutations
const mutations = {
    setEvents(state, events) {
        state.events = events
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}