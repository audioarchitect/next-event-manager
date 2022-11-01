import axios from 'axios'
const API_BASE = 'http://localhost:3000/api/';

const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }
};

const apiRoutes = {
  events: {
    get: function() {
      return axios.get(`${API_BASE}/events`, options)
      .then((res) => res.data)
    },
    create: function(data) {
      return axios.post(`${API_BASE}/events`, data, options)
      .then((res) => res.data)
    },
    update: function(data) {
      return axios.put(`${API_BASE}/events/${data.id}`, data, options)
      .then((res) => res.data)
    }
  }
}

export default apiRoutes;