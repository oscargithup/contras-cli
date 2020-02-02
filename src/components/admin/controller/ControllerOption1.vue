<template>
    <div>
        <div id="table1" class="is-active">
            <h2>Asignación de Vehículo - Ruta</h2>
            <form action="controller/IndexPost.php" method="post">
                <div style="overflow-x: auto !important;">
                    <table id="table-conductorRuta"
                           class="table is-hoverable is-fullwidth is-bordered">
                        <thead class="has-text-weight-bold">
                        <tr>
                            <td>Fecha</td>
                            <td>Ruta</td>
                            <td>Conductor</td>
                            <td>Móvil</td>
                            <td>Hora</td>
                            <td>Acción</td>
                        </tr>
                        </thead>
                        <tbody id="tbody" v-for="value in listRows" :key="value.id">
                        <tr>
                            <td>{{value.fecha}}</td>
                            <td>{{value.partida + ' - ' + value.destino}}</td>
                            <td>{{value.conductor}}</td>
                            <td>{{value.num_movil}}</td>
                            <td>{{value.hora_morning}}</td>
                            <td>
                                <button @click="openModalEdit(value.id)"
                                        class="button is-primary"
                                        type="button">
                                    <span class="icon"><i class="fas fa-pen-square"></i></span>
                                </button>
                                <button @click="openModalDelete(value.id)"
                                        class="button is-warning"
                                        type="button">
                                    <span class="icon"><i class="fas fa-trash"></i></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        <tr>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="date" name="date1">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <select style=" width: 100%; outline: none;
                                    border: 1px solid #dbdbdb;"
                                                class="select" name="ruta1">
                                            <option value="1">Manta - Rancho capadocia</option>
                                            <option value="2">Manta - Panadería salgado</option>
                                            <option value="3">Bogotá - Palmar abajo</option>
                                            <option value="4">guayata - guateque</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <select id="selectCond1" style=" width: 100%; outline: none;
                                    border: 1px solid #dbdbdb;" class="select" name="conductor1">
                                            <option value="1">Santiago As Gomez</option>
                                            <option value="2">Pablo Martin</option>
                                            <option value="3">Pedro Gómez</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input " type="text" name="movil1"
                                               value="034" id="movil1" disabled="">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="time" name="time1">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="container has-text-centered">
                    <div class="columns is-mobile">
                        <div class="column">
                            <input type="submit" class="button is-success" value="Guardar">
                            <button id="btnNewRowCondRuta" type="button" class="button is-link">
                                Nueva fila
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div :class="{'is-active':edit}" class="modal is-clipped">
            <div @click="edit = !edit" class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Editar Rutas</p>
                    <button @click="edit = !edit" class="delete" aria-label="close">
                    </button>
                </header>
                <section class="modal-card-body">
                    <form @submit.prevent="">
                        <div class="field">
                            <label class="label">Fecha</label>
                            <div class="control">
                                <input v-model="modalFields.fecha"
                                       class="input is-primary"
                                       type="date" required>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Ruta</label>
                            <div class="control">
                                <div class="select is-primary">
                                    <select name="formRuta_A" required="">
                                        <option value="1">Manta - Rancho capadocia</option>
                                        <option value="2">Manta - Panadería salgado</option>
                                        <option value="3">Bogotá - Palmar abajo</option>
                                        <option value="4">guayata - guateque</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Conductor</label>
                            <div class="control">
                                <div class="select is-primary">
                                    <select name="formConductor_A">
                                        <option>{{modalFields.id_conductor}}</option>
                                        <option v-for="choice in choices" :key="choice.id">
                                            {{ choice }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Móvil</label>
                            <div class="control">
                                <input v-model="modalFields.num_movil"
                                       class="input" type="text" name="formMovil_A"
                                       disabled="" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Hora</label>
                            <div class="control">
                                <input v-model="modalFields.hora_morning"
                                       class="input is-primary" type="time"
                                       name="formHora_A" required="">
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
                    <p class="modal-card-title">Eliminar Vehículo - Ruta</p>
                    <button @click="borrar = !borrar" class="delete" aria-label="close"/>
                </header>
                <section class="modal-card-body">
                    <h1 class="subtitle">¿Desea eliminar el registro?</h1></section>
                <footer class="modal-card-foot">
                    <button class="button is-danger">Eliminar</button>
                    <button @click="borrar = !borrar" class="button is-delete">Cancelar</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

const API_URL = `${process.env.VUE_APP_DB_HOST}/controller1`;

export default {
  name: 'ControllerOption1',
  data() {
    return {
      borrar: false,
      edit: false,
      listRows: [],
      choices: [1, 2, 3, 4, 5],
      modalFields: '',
    };
  },

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
        if (this.listRows[i].id === id) {
          this.modalFields = this.listRows[i];
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
