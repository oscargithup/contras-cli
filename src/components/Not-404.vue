<template>
    <div>
        <Header/>
        <section class="section">
            <h1 class="title has-text-centered has-text-danger">¡Página no encotrada!</h1>
            <div class="has-text-centered">
                <router-link to="/">Regresar al inicio</router-link>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import Header from './partsGeneral/Header.vue';
import Footer from './partsGeneral/Footer.vue';

export default {
  name: 'Not-404',
  components: {
    Footer,
    Header,
  },
};
</script>

<style scoped>

</style>
