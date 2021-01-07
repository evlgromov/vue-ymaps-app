<template>
  <div class="form">
    <h4 class="mb-4">Авторизация</h4>
    <b-form @submit.prevent="login">
      <b-form-group
          label="Адрес электронной почты"
          label-for="email"
      >
        <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          label="Пароль"
          label-for="password"
      >
        <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
        ></b-form-input>
      </b-form-group>
      <div v-if="message" class="error">{{message}}</div>
      <b-button class="mt-3" type="submit" variant="primary">Войти</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    name: 'Login',
    data: () => {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$store.dispatch('retrieveToken', {
          email: this.email,
          password: this.password
        })
          .then(res => this.$router.push('/'))
      }
    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
