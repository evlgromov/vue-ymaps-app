<template>
  <b-form>
    <b-form-group
        label="Название"
        label-for="name"
    >
      <b-form-input
          id="name"
          v-model="name"
          required
      ></b-form-input>
    </b-form-group>
    <b-form-group
        label="Долгота"
        label-for="longitude"
    >
      <b-form-input
          id="longitude"
          v-model="coords[0]"
          required
      >
      </b-form-input>
    </b-form-group>
    <b-form-group
        label="Широта"
        label-for="latitude"
    >
      <b-form-input
          id="latitude"
          v-model="coords[1]"
          required
      ></b-form-input>

    </b-form-group>
    <div v-if="isEdit">
      <b-button class="mt-3" @click="editMarker" variant="primary">Сохранить</b-button>
      <b-button @click="cancelEdit" class="ml-3 mt-3" variant="warning">Отменить</b-button>
    </div>
    <div v-else>
      <b-button class="mt-3" @click="addMarker" variant="primary">Добавить</b-button>
      <b-button @click="clearFields" class="ml-3 mt-3" variant="warning">Очистить</b-button>
    </div>
  </b-form>
</template>

<script>
  export default {
    name: 'LocationAdd',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      addMarker() {
        this.$store.dispatch('marker/addMarker', {
          name: this.name,
          longitude: this.coords[0],
          latitude: this.coords[1]
        })
          .then((res) => {
            this.clearFields()
            this.makeToast(false, res.message)
          })
          .catch(e => console.log(e.message))
      },
      editMarker() {
        this.$store.dispatch('marker/editMarker', {
          id: this.id,
          name: this.name,
          coords: this.coords
        })
          .then(res => {
            this.$store.commit('marker/setEdit', false)
            this.clearFields()
            this.makeToast(false, res.message)
          })
          .catch((e) => {
            return e
          })
      },
      cancelEdit() {
        this.$store.commit('marker/setEdit', false)
        this.clearFields()
      },
      clearFields() {
        this.name = ''
        this.$store.commit('marker/resetForm')
      },
      makeToast(append = false, message) {
        this.$bvToast.toast(`${message}`, {
          title: 'Уведомление',
          autoHideDelay: 5000,
          appendToast: append
        })
      }
    },
    computed: {
      id() {
        return this.$store.getters['marker/getId']
      },
      coords() {
        return this.$store.getters['marker/getCoords']
      },
      isEdit() {
        return this.$store.getters['marker/getEdit']
      },
      getName() {
        return this.$store.getters['marker/getName']
      }
    },
    created() {
      this.$eventBus.$on('edit-marker', (value, name) => {
        this.name = name
        this.$store.commit('marker/setEdit', value)
      })
    },
    beforeDestroy() {
      this.$eventBus.$destroy()
    }
  }
</script>

<style scoped>

</style>