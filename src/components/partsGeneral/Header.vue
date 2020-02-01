<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="index.php">
                <span class="has-text-weight-bold has-text-primary">
                    <em>Coontransmanta Ltda</em>
                </span>
            </a>
            <a role="button"
               @click="menuMovil = !menuMovil"
               :class="{'is-active':menuMovil}"
               class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample"
             :class="{'is-active':menuMovil}"
             class="navbar-menu">
            <div class="navbar-end">
                <router-link class="navbar-item" to="/">Inicio</router-link>
                <router-link class="navbar-item" to="/tarifas">Tarifas</router-link>
                <router-link class="navbar-item" to="/servicios">Servicios</router-link>
                <router-link class="navbar-item" to="diamercado">Día mercado</router-link>
                <router-link class="navbar-item" to="/nosotros">Nosotros</router-link>
                <router-link class="navbar-item" to="/contacto">Contacto</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/login" class="button is-primary is-light">
                            Iniciar sesión
                        </router-link>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
