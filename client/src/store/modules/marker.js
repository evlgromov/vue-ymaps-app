import axios from 'axios'

export default {
  namespaced: true,
  state: {
    markers: [],
    coords: [],
    name: '',
    id: '',
    isEdit: false,
  },
  actions: {
    getAllMarkers(context) {
      axios.get('/location', {

      }).then((res) => {
        context.commit('setMarkers', res.data)
      }).catch(e => {
        console.log(e)
      })
    },
    addMarker(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/location`, {
              name: payload.name,
              coords: [payload.longitude, payload.latitude],
            }
          )
          .then(res => {
            context.commit('addMarker', res.data)
            resolve(res.data)
          })
          .catch(e => {
            console.log(e)
            reject(e)
          })
      })
    },
    editMarker(context, marker) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`/location/${marker.id}`, {
              name: marker.name,
              coords: marker.coords
            },
            {
              headers: {
                'Authorization': context.getters.getToken,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            }
          )
          .then(res => {
            context.commit('editMarker', res.data.location)
            resolve(res.data)
          })
          .catch(e => {
            return e
            reject(e)
          })
      })
    },
    deleteMarker(context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/location/${id.id}`, {
          headers: {
            'Authorization': context.getters.getToken,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          context.commit('deleteMarker', id)
          resolve(res.data)
        }).catch((e) => {
          reject(e)
        })
      })
    },
  },
  mutations: {
    setMarkers(state, payload) {
      state.markers = payload
    },
    addMarker(state, data) {
      state.markers.push(data.location)
    },
    editMarker(state, marker) {
      state.markers.map((m) => {
        if(m._id === marker._id) {
          m.name = marker.name
          m.coords = marker.coords
        }
      })
    },
    deleteMarker(state, id) {
      state.markers = state.markers.filter(marker => {
        return marker._id !== id.id
      })
    },
    setId(state, id) {
      state.id = id
    },
    setName(state, name) {
      state.name = name
    },
    setCoords(state, coords) {
      state.coords = coords
    },
    resetForm(state) {
      state.coords = []
      state.name = ''
    },
    setEdit(state, value) {
      state.isEdit = value
    }
  },
  getters: {
    getAllMarkers(state) {
      return state.markers
    },
    getToken(state, getters, rootState) {
      return rootState.auth.token
    },
    getId(state) {
      return state.id
    },
    getCoords(state) {
      return state.coords
    },
    getName(state) {
      return state.name
    },
    getEdit(state) {
      return state.isEdit
    }
  }
}