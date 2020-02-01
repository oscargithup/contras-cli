<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/admin" class="navbar-item" href="index.php">
                    <span class="has-text-weight-bold" style="color: #0260ff">
                        Coontransmanta Ltda.</span>
                </router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu"
                   aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

        </nav>
        <div class="container">
            <div class="columns">
                <Controller/>
            </div>
        </div>
    </div>
</template>

<script>
import Controller from './controller/CtrlLogin.vue';

export default {
  name: 'Login',
  components: {
    Controller,
  },
};

</script>

<style scoped>

</style>
