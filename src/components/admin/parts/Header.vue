<template>
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <span class="has-text-weight-bold" style="color: #0260ff">
                    <em>Coontransmanta Ltda | ADMIN</em>
                </span>
            </router-link>
            <a role="button"
               @click="menuMovil = !menuMovil"
               :class="{'is-active':menuMovil}"
               class="navbar-burger burger"
               aria-label="menu"
               aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample"
             :class="{'is-active':menuMovil}"
             class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/" class="button is-success is-light">
                            Sitio WEB
                        </router-link>
                        <a @click="removeToken"
                           id="btnCloseSession"
                           class="button is-warning is-light">
                           Cerrar sesión
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuMovil: false,
    };
  },
  methods: {
    removeToken() {
      localStorage.removeItem('token');
      this.$router.push('login');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
