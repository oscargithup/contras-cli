<template>
    <div>
        <Header/>
        <Banner/>
        <div class="container">
            <div class="columns">
                <div class="column is-mobile mobile is-three-fifths-tablet
                  is-three-quarters-desktop">
                    <section class="section">
                        <div class="container is-widescreen">
                            <h1 class="title">Cooperativa de transportadores de Manta</h1>
                            <p v-once>{{content}}</p>
                        </div>
                    </section>
                </div>
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
import Footer from '../partsGeneral/Footer.vue';

export default {
  name: 'Nosotros',
  components: {
    Footer,
    Call,
    Header,
    Banner,
  },
  data() {
    return {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae doloribus\n'
                + 'facilis harum impedit minus molestiae placeat, repellendus sequi! Aliquid\n'
                + 'dolores est hic iure nemo odio reiciendis repudiandae, sint veniam.'
                + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae doloribus\n'
                + 'facilis harum impedit minus molestiae placeat, repellendus sequi! Aliquid\n'
                + 'dolores est hic iure nemo odio reiciendis repudiandae, sint veniam.',
    };
  },
};
</script>

<style scoped>

</style>
