<template>
    <div>
        <div id="table2" class="">
            <h2>Añadir rutas</h2>
            <div style="overflow-x: auto !important;">
                <form action="controller/IndexPost.php" method="post">
                    <table id="tableRutas" class="table is-hoverable  is-fullwidth is-bordered">
                        <thead class="has-text-weight-bold">
                        <tr>
                            <td>#</td>
                            <td>Partida</td>
                            <td>Destino</td>
                            <td>Valor</td>
                            <td>Tipo</td>
                            <td>Acción</td>
                        </tr>
                        </thead>
                        <tbody v-for="value in listRows" :key="value.id_ruta">
                        <tr>
                            <td>{{value.id_ruta}}</td>
                            <td>{{value.partida}}</td>
                            <td>{{value.destino}}</td>
                            <td>{{value.valor}}</td>
                            <td>{{value.tipo}}</td>
                            <td>
                                <button @click="openModalEdit(value.id_ruta)"
                                        class="button is-primary" type="button">
                                    <span class="icon"><i class="fas fa-pen-square"></i></span>
                                </button>
                                <button @click="openModalDelete(value.id_ruta)"
                                        class="button is-warning" type="button">
                                    <span class="icon"><i class="fas fa-trash"></i></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        <tr>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control is-disabled">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" name="partidaRuta1"
                                               placeholder="Añadir partida">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" name="destinoRuta1"
                                               placeholder="Añadir destino">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="number" name="valorRuta1"
                                               placeholder="Añadir valor $">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <select style=" width: 100%;
                                    outline: none; border: 1px solid #dbdbdb;"
                                                class="select" name="tipoRuta1">
                                            <option value="Expreso">Expreso</option>
                                            <option value="Normal">Normal</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="container has-text-centered">
                        <div class="columns is-mobile">
                            <div class="column">
                                <input type="submit" class="button is-success" value="Guardar">
                                <button id="btnNewRowRuta" type="button" class="button is-link">
                                    Nueva fila
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div :class="{'is-active':edit}" class="modal is-clipped">
            <div :class="{'is-active':edit}" class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Editar Rutas</p>
                    <button @click="edit = !edit" class="delete" aria-label="close"/>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="">
                        <div class="field">
                            <label class="label">Partida</label>
                            <div class="control">
                                <input v-model="modalFields.partida"
                                       class="input is-primary" type="text"
                                       name="formPartida_B" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Destino</label>
                            <div class="control">
                                <input v-model="modalFields.destino"
                                       class="input is-primary" type="text"
                                       name="formDestino_B" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Valor</label>
                            <div class="control">
                                <input v-model="modalFields.valor"
                                       class="input is-primary" type="number"
                                       name="formValor_B" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Tipo</label>
                            <div class="control">
                                <div class="select is-primary">
                                    <select name="formTipo_B" required="">
                                        <option value="Expreso">Expreso</option>
                                        <option value="Normal">Normal</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>

                <footer class="modal-card-foot">
                    <button id="guardarGBtn_B" class="button is-primary">Guardar</button>
                    <button @click="edit = !edit" class="button is-delete">Cancelar</button>
                </footer>
            </div>
        </div>
        <div :class="{'is-active':borrar}" class="modal is-clipped">
            <div @click="borrar = !borrar" class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Eliminar Ruta</p>
                    <button @click="borrar = !borrar" class="delete" aria-label="close"/>
                </header>
                <section class="modal-card-body">
                    <h1 class="subtitle">¿Desea eliminar el registro?</h1>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-danger">Eliminar</button>
                    <button @click="borrar = !borrar" class="button is-delete">Cancelar</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = `${process.env.VUE_APP_DB_HOST}/controller2`;

export default {
  name: 'ControllerOption2',
  data() {
    return {
      borrar: false,
      edit: false,
      listRows: [],
      modalFields: '',
    };
  },
  computed: {},
  created() {
    fetch(API_URL, {
      headers: {
        'access-token': localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        this.listRows = result;
      });
  },
  methods: {
    openModalEdit(id) {
      this.getData(id);
      this.edit = !this.edit;
      // eslint-disable-next-line
                //     console.log(typeof this.listRows[0].id);
    },
    openModalDelete(id) {
      // this.getData(id);
      this.borrar = !this.borrar;
      // eslint-disable-next-line
                console.log(id);
    },
    // eslint-disable-next-line consistent-return
    getData(id) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.listRows.length; i++) {
        // eslint-disable-next-line no-console
        console.log(typeof id);
        if (this.listRows[i].id_ruta === id) {
          this.modalFields = this.listRows[i];
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
