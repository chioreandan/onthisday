import { TYPES } from './eventsTypes'

export const state = () => ({
  all: [],
  allEvents: [],
  allBirths: [],
  allDeaths: [],
  errors: null
})

export const getters = {
  all: state => state.all,
  allEvents: state => state.allEvents,
  allBirths: state => state.allBirths,
  allDeaths: state => state.allDeaths,
}

export const actions = {
  async getAllEvents({ commit }, date) {
    try {
      const events = await this.$axios.$get(`${date}/events.json`)
      commit(TYPES.EVENTS_ALL, events)
    } catch (e) {
      commit(TYPES.EVENTS_ERROR)
    }
  },

  async getAllBirths({ commit }, date) {
    try {
      const births = await this.$axios.$get(`${date}/births.json`)
      commit(TYPES.BIRTHS_ALL, births)
    } catch (e) {
      commit(TYPES.BIRTHS_ERROR)
    }
  },

  async getAllDeaths({ commit }, date) {
    try {
      const deaths = await this.$axios.$get(`${date}/deaths.json`)
      commit(TYPES.DEATHS_ALL, deaths)
    } catch (e) {
      commit(TYPES.DEATHS_ERROR)
    }
  }
}

export const mutations = {
  [TYPES.EVENTS_ALL](state, events) {
    state.allEvents = events
  },
  [TYPES.BIRTHS_ALL](state, births) {
    state.allBirths = births
  },
  [TYPES.DEATHS_ALL](state, deaths) {
    state.allDeaths = deaths
  },

  [TYPES.EVENTS_ERROR](state) {
    state.errors = 'Something went wrong while fetching events.'
    console.log(state.errors)
  },
  [TYPES.BIRTHS_ERROR](state) {
    state.errors = 'Something went wrong while fetching births.'
    console.log(state.errors)
  },
  [TYPES.DEATHS_ERROR](state) {
    state.errors = 'Something went wrong while fetching deaths.'
    console.log(state.errors)
  },
}
