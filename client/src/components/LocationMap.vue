<template>
  <yandex-map
      v-if="coords"
      :coords="coords"
      :zoom="5"
      @click="onClick"
  >
    <ymap-marker
        v-for="n in markers"
        :key="n._id"
        :marker-id="n._id"
        :coords="n.coords"
        :balloon="{ body: n.name }"
    ></ymap-marker>
  </yandex-map>

</template>

<script>
  import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'

  export default {
    components: {
      yandexMap,
      ymapMarker,
    },
    data: () => ({
      coords: null,
      settings: {
        apiKey: '7f037fcc-21f0-4c1b-ad6e-1f292ef45a2f',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
    }),
    computed: {
      markers() {
        return this.$store.getters['marker/getAllMarkers']
      }
    },
    methods: {
      onClick(e) {
        this.coords = e.get('coords')
        this.$store.commit('marker/setCoords', this.coords)
      },
      showMarker(coords) {
        this.coords = coords
      }
    },
    async mounted() {
      await loadYmap({...this.settings, debug: true})

      ymaps.geolocation.get().then(res => {
        this.coords = res.geoObjects.position
      })
      this.$eventBus.$on('go-to-marker', this.showMarker)
    }
  }
</script>

<style scoped>
  .ymap-container {
    width: 750px;
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
</style>