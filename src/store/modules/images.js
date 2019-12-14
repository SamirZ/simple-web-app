import axios from "axios";
const clientID = "9a3d3a93a5d4d87";

const state = {
  data: [],
  record: undefined,
  type: undefined,
  isLoading: false,
  page: 0, // integer - the data paging number
  section: "hot", // hot | top | user - defaults to hot
  showViral: true, // true | false - Show or hide viral images from the 'user' section. Defaults to true
  sort: "time", // viral | top | time | rising (only available with user section) - defaults to viral
  window: "day" //	Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
};

const getters = {
  getPosts: state => state.data,
  post: state => state.record,
  type: state => state.type,
  getIsLoading: state => state.isLoading
};

const actions = {
  async fetchImages({ commit, state }) {
    const { section, sort, page, window, showViral } = state;
    commit("setIsLoading", true);
    const { data } = await axios.get(
      `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}${
        showViral ? "?showViral=true" : ""
      }`,
      {
        headers: {
          Authorization: `Client-ID ${clientID}`
        }
      }
    );
    commit("setImages", data.data);
    commit("setIsLoading", false);
    commit("incrementPage");
  },
  async fetchImage({ commit }, { id, type }) {
    const { data } = await axios.get(
      `https://api.imgur.com/3/gallery/${type}/${id}`,
      {
        headers: {
          Authorization: `Client-ID ${clientID}`
        }
      }
    );
    commit("setImage", data.data);
    commit("setImageType", type);
  },
  incrementPage({ commit }) {
    commit("incrementPage");
  }
};

const mutations = {
  setImages: (state, data) => (state.data = [...state.data, ...data]),
  setImage: (state, record) => (state.record = record),
  setImageType: (state, type) => (state.type = type),
  incrementPage: state => (state.page = state.page + 1),
  setIsLoading: (state, isLoading) => (state.isLoading = isLoading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
