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
                            <div class="tile is-ancestor">
                                <div class="tile is-vertical">
                                    <div class="tile is-parent is-12">
                                        <article class="tile is-child notification is-light">
                                            <p class="title">Servicio normal</p>
                                            <p class="subtitle">Aligned with the right tile</p>
                                            <div class="content">{{normal}}</div>
                                        </article>
                                    </div>
                                    <div class="tile is-parent is-12">
                                        <article class="tile is-child notification is-warning">
                                            <p class="title">Expreso</p>
                                            <p class="subtitle">Aligned with the right tile</p>
                                            <div class="content">{{expreso}}</div>
                                        </article>
                                    </div>
                                    <div class="tile is-parent is-12">
                                        <article class="tile is-child notification is-primary">
                                            <p class="title">Motocicleta</p>
                                            <p class="subtitle">Aligned with the right tile</p>
                                            <div class="content">{{moto}}</div>
                                        </article>
                                    </div>
                                </div>
                            </div>
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
import Footer from '../partsGeneral/Footer.vue';
import Call from '../partsGeneral/Call.vue';

export default {
  name: 'Servicios',
  components: {
    Footer,
    Header,
    Banner,
    Call,
  },
  data() {
    return {
      normal: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae doloribus\n'
          + 'facilis harum impedit minus molestiae placeat, repellendus sequi! Aliquid\n'
          + 'dolores est hic iure nemo odio reiciendis repudiandae, sint veniam.',
      expreso: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae doloribus\n'
          + 'facilis harum impedit minus molestiae placeat, repellendus sequi! Aliquid\n'
          + 'dolores est hic iure nemo odio reiciendis repudiandae, sint veniam.',
      moto: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae doloribus\n'
          + 'facilis harum impedit minus molestiae placeat, repellendus sequi! Aliquid\n'
          + 'dolores est hic iure nemo odio reiciendis repudiandae, sint veniam.',
    };
  },
};
</script>

<style scoped>

</style>
