<template>
  <div class="container">
    <div class="ymaps">
      <div class="ymaps__controls">
        <LocationEdit
            v-if="edit"
        />
        <LocationAdd
            v-else
        />
        <LocationList
        />
      </div>
      <LocationMap
      />
    </div>
  </div>
</template>

<script>
  import LocationList from '../components/LocationList'
  import LocationAdd from '../components/LocationAdd'
  import LocationEdit from '../components/LocationEdit'
  import LocationMap from '../components/LocationMap'

  export default {
    components: {LocationMap, LocationAdd, LocationEdit, LocationList},
    name: 'Location',
    computed: {
      edit() {
        return this.$store.getters['marker/isEdit']
      }
    },
    mounted() {
      this.$store.dispatch('marker/getAllMarkers')
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1200px;
  }
  .ymaps {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
  }
  .ymaps__controls {
    width: 370px;
  }
</style>