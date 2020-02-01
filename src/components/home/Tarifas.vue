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
import Controller from './controller/CtrlTarifas.vue';

export default {
  name: 'Tarifas',
  components: {
    Footer,
    Controller,
    Header,
    Banner,
    Call,
  },
};
</script>

<style scoped>

</style>
