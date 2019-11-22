import api from '../../api/api'

const state = {
    events: []
}

const getters = {
    allEvents() {
        return state.events;
    }
}
 
// actions
const actions = {
    fetchEvents(context) {
        api.fetchEvents()
            .then(events => {
                context.commit('setEvents', events)
            })
    },
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