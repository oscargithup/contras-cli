<template>
    <div class="hello">
        <div class="container">
            <div class="columns">
                <div class="column is-mobile mobile is-three-fifths-tablet
                is-three-quarters-desktop">
                    <section class="section">
                        <div class="container">
                            <h1 class="title"> Rutas hoy 2020-01-03</h1>
                            <h2 class="subtitle">
                                Manta - Panadería salgado
                            </h2>
                            <div style="overflow-x: auto !important">
                                <table class="table is-hoverable is-bordered is-fullwidth">
                                    <thead class="has-text-weight-bold">
                                    <tr>
                                        <td>Conductor</td>
                                        <td>Móvil</td>
                                        <td>Mañana</td>
                                        <td>Tarde</td>
                                        <td>Teléfono</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Pedro Gómez</td>
                                        <td>003</td>
                                        <td>03:33:00</td>
                                        <td>12:00:00</td>
                                        <td>3134711036</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="column">
                    <section class="section is-marginless ">
                        <div class="column is-centered">
                            <Call/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Call from './Call.vue';

export default {
  name: 'Container',
  components: {
    Call,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
