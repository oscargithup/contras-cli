<template>
    <div class="column is-mobile mobile is-three-fifths-tablet is-three-quarters-desktop">
        <section class="section">
            <div class="container is-widescreen">
                <h1 class="title">Rutas Hoy - Lunes 15 de enero de 2020</h1>

                <h2 class="subtitle">Manta - Panadería salgado</h2>
                <div style="overflow-x: auto !important;">
                    <table class="table is-hoverable  is-fullwidth is-bordered">
                        <thead class="has-text-weight-bold">
                        <tr>
                            <td>Conductor </td>
                            <td>Móvil</td>
                            <td>Mañana</td>
                            <td>Tarde</td>
                            <td>Teléfono</td>
                        </tr>
                        </thead>
                        <tbody v-for="message in getListRutasMercado" :key="message._id">
                        <tr>
                            <td> {{message.conductor}}</td>
                            <td> {{message.num_movil}}</td>
                            <td> {{message.hora_morning}}</td>
                            <td>{{message.hora_afternoon}}</td>
                            <td>{{message.telefono}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const API_URL = `${process.env.VUE_APP_DB_HOST}/home`;
export default {
  name: 'CtrlHome',
  data: () => ({
    error: '',
    listRutas: [],
  }),
  computed: {
    getListRutasMercado() {
      return this.listRutas;
    },
  },
  mounted() {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.listRutas = result;
      });
  },
  components: {
  },
}; </script>

<style scoped>

</style>
