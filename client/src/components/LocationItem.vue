<template>
  <b-list-group-item
      class="row"
      :data-coords="marker.coords"
  >
    <div
        class="marker"
        v-on:click="showMarker(marker)"
    >
      {{marker.name}}
      <div class="marker__group">
        <span class="marker__coords">{{marker.coords[0]}}, {{marker.coords[1]}}</span>
      </div>
    </div>
   <div>
     <b-button v-on:click="deleteMarker" variant="danger">&times;</b-button>
     <b-button v-on:click="toEdit(marker)" class="btn mr-1" variant="success">&#9998;</b-button>
   </div>
  </b-list-group-item>
</template>

<script>
  export default {
    props: {
      marker: {
        type: Object,
      }
    },
    methods: {
      deleteMarker() {
        this.$store.dispatch('marker/deleteMarker', {
          id: this.marker._id
        }).then(res => this.makeToast(false, res.message))
      },
      makeToast(append = false, message) {
        this.$bvToast.toast(`${message}`, {
          title: 'Уведомление',
          autoHideDelay: 5000,
          appendToast: append
        })
      },
      showMarker(marker) {
        this.$eventBus.$emit('go-to-marker', marker.coords)
      },
      toEdit(marker) {
        this.$store.commit('marker/setName', marker.name)
        this.$store.commit('marker/setCoords', marker.coords)
        this.$store.commit('marker/setId', marker._id)
        this.$eventBus.$emit('edit-marker', true, marker.name)
      }
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .marker {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .marker__coords {
    font-size: 12px;
    font-weight: 300;
  }
  .btn {
    display: inline-block;
    float: right;
  }
</style>