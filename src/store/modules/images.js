import axios from 'axios';
const clientID = '9a3d3a93a5d4d87';

const state = {
  data: [],
  page: 0, // integer - the data paging number
  section: 'top',// hot | top | user - defaults to hot
  showViral: true, // true | false - Show or hide viral images from the 'user' section. Defaults to true
  sort: 'viral', // viral | top | time | rising (only available with user section) - defaults to viral
  window: 'day' //	Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
};

const getters = {
  getImages: state => state.data
};

const actions = {
  async fetchImages({ commit, state }) {
    const { section, sort, page, window, showViral } = state;
    const { data } = await axios.get(
      `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}${showViral ? '?showViral=true' : ''}`,
      {
        headers: {
          'Authorization': `Client-ID ${clientID}`
        }
      }
    );
    commit('setImages', data.data);
  },
  incrementPage({ commit }) {
    commit('incrementPage');
  }
};

const mutations = {
  setImages: (state, data) => (state.data = [...state.data, ...data]),
  incrementPage: (state) => (state.page = state.page + 1 )
};

export default {
  state,
  getters,
  actions,
  mutations
};