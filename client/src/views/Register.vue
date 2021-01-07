<template>
  <div class="form">
    <h4 class="mb-4">Регистрация</h4>
    <b-form @submit.prevent="register">
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
      <b-form-group
          label="Подтвердите пароль"
          label-for="confirmPassword"
      >
        <b-form-input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
        ></b-form-input>
      </b-form-group>
      <b-button class="mt-3" type="submit" variant="primary">Зарегистрироваться</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register() {
        this.$store.dispatch('register', {
          email: this.email,
          password: this.password
        })
          .then(res => this.$router.push('/login'))
      }
    }
  }
</script>

<style>

</style>
