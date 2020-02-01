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
import Call from '../partsGeneral/Call.vue';
import Controller from './controller/CtrlHome.vue';
import Footer from '../partsGeneral/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Controller,
    Header,
    Call,
    Banner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
