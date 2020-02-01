<template>
    <div class="column is-12-mobile is-6-tablet is-offset-3">
        <section class="section">
            <div class="container is-widescreen is-centered">
                <div class="card-content card-content-login">
                    <p class="has-text-danger">{{error}}</p>
                    <form @submit.prevent="manageData">
                        <div class="field">
                            <label class="label">Correo</label>
                            <div class="control">
                                <input
                                   v-model.trim="data.username"
                                   class="input"
                                   type="email"
                                   placeholder="Correo electrónico"
                                   name="email"
                                   required="">
                            </div>
                            <p class="help is-hidden is-danger">This email is invalid</p>
                        </div>
                        <div class="field">
                            <label class="label">Contraseña</label>
                            <div class="control">
                                <input
                                   v-model="data.password"
                                   class="input"
                                   type="password"
                                   name="password"
                                   placeholder="Contraseña"
                                   required>
                            </div>
                        </div>
                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit" class="button is-success">
                                    Iniciar sesión
                                </button>
<!--                                <router-link to="/admin" class="button is-success">-->
<!--                                    Iniciar sesión-->
<!--                                </router-link>-->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

const API_URL = 'http://localhost:4000/login';

export default {
  name: 'CtrlLogin',
  data: () => ({
    error: '',
    data: {
      username: '',
      password: '',
    },
  }),
  methods: {
    manageData() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.data),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result);
          // eslint-disable-next-line no-console
          if (result.success) {
            const accessToken = result.token;
            localStorage.setItem('token', accessToken);
            window.isSignedIn = true;
            this.$router.push('/admin');
            // window.location.href = 'admin';
          } else {
            this.error = result.message;
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
