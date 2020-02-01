<template>
    <div class="column is-mobile mobile is-three-fifths-tablet is-three-quarters-desktop">
        <section class="section">
            <div class="container is-widescreen">
                <h1 class="title">Tarifas actuales</h1>

                <h2 class="subtitle">Destinos/Rutas</h2>
                <div style="overflow-x: auto !important;">
                    <table class="table is-hoverable  is-fullwidth is-bordered">
                        <thead class="has-text-weight-bold">
                        <tr>
                            <td>#</td>
                            <td>Ruta</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                        </tr>
                        </thead>
                        <tbody v-for="message in getListTarifas" :key="message._id">
                        <tr>
                            <td> {{message.id_ruta}}</td>
                            <td> {{message.partida + " - " + message.destino}}</td>
                            <td> {{message.tipo}}</td>
                            <td>$ {{message.valor}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
const API_URL = 'http://localhost:4000/rutas';

export default {
  name: 'CtrlTarifas',
  data: () => ({
    error: '',
    listTarifas: [],
    message: {
      username: 'Enter a screen name',
      subject: '',
      message: '',
      imageURL: '',
    },
  }),
  computed: {
    getListTarifas() {
      return this.listTarifas;
    },
  },
  created() {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.listTarifas = result;
      });
  },
  methods: {
    addMessage() {
      // eslint-disable-next-line no-console
      console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map((detail) => detail.message)
              .join('. ');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageForm = false;
            this.listTarifas.push(result);
          }
        });
    },
  },
  components: {
  },
};
</script>

<style scoped>

</style>
