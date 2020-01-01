export const state = () => ({
  items: [
    {
      name: 'job foo',
      type: 'lambda',
      owner: 'ross',
      state: 'updating',
      created: '31/12/2019:19:41:41',
      url: 'blah'
    },
    { name: 'job bar' }
  ],

  updateState: false
})

export const mutations = {
  async setAll(state, data) {
    console.log('running setAll')
    //state.items = data
    state.updateState = true
  }
}

export const actions = {
  async getAll({ commit }) {
    console.log('running getAll')
    const data = await this.$axios.$get(
      'https://jsonplaceholder.typicode.com/photos'
    )
    commit('setAll', data)
  }
}
