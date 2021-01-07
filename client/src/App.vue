<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item v-if="!loggedIn" to="/login">Вход</b-nav-item>
        <b-nav-item v-if="!loggedIn" to="/register">Регистрация</b-nav-item>
        <b-nav-item v-if="loggedIn" v-on:click="logout" to="/login">Выйти</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('destroyToken')
        this.$router.push('/login')
      }
    }
  }
</script>

<style>
  .form {
    background: #fff;
    width: 450px;
    border: 1px solid #bababa;
    border-radius: 5px;
    padding: 40px 20px;
    margin: 50px auto;
  }
</style>
