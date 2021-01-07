<template>
  <b-list-group class="mt-4">
    <h2 class="mb-3">Список маркеров</h2>
    <LocationItem
      v-for="marker in markers"
      v-bind:marker="marker"
    />
  </b-list-group>
</template>

<script>
  import LocationItem from './LocationItem';
  export default {
    name: 'LocationList',
    components: {
      LocationItem
    },
    computed: {
      markers() {
        return this.$store.getters['marker/getAllMarkers']
      },
    }
  }
</script>

<style scoped>

</style>