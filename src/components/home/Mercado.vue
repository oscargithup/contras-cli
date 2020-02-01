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
import Controller from './controller/CtrlMercado.vue';
import Footer from '../partsGeneral/Footer.vue';
import Call from '../partsGeneral/Call.vue';

export default {
  name: 'Mercado',
  components: {
    Footer,
    Call,
    Header,
    Banner,
    Controller,
  },
};
</script>

<style scoped>

</style>
