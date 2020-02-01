<template>
    <div>
        <Header/>
        <Banner/>
        <div class="container">
            <div class="columns">
            <Controller/>
                <Call/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../partsGeneral/Header.vue';
import Banner from './parts/Banner.vue';
import Footer from '../partsGeneral/Footer.vue';
import Call from '../partsGeneral/Call.vue';
import Controller from './controller/CtrlContacto.vue';

export default {
  name: 'Contacto',
  components: {
    Footer,
    Header,
    Banner,
    Call,
    Controller,
  },
};
</script>

<style scoped>

</style>
