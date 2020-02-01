<template>
    <div>
        <div id="table4" class="">
            <h2>Añadir Vehículo</h2>
            <div style="overflow-x: auto !important;">
                <form action="controller/IndexPost.php" method="post">
                    <table id="tableVehiculos" class="table is-hoverable  is-fullwidth is-bordered">
                        <thead class="has-text-weight-bold">
                        <tr>
                            <td>#</td>
                            <td>Conductor</td>
                            <td>Móvil</td>
                            <td>Acción</td>
                        </tr>
                        </thead>
                        <tbody v-for="value in listRows" :key="value.id_vehiculo">
                        <tr>
                            <td>{{value.id_vehiculo}}</td>
                            <td>{{value.conductor}}</td>
                            <td>{{value.movil}}</td>
                            <td>
                                <button @click="openModalEdit(value.id_vehiculo)"
                                        id="editarGBtn_D_1"
                                        class="button is-primary"
                                        type="button">
                                    <span class="icon"><i class="fas fa-pen-square"></i></span>
                                </button>
                                <button @click="openModalDelete(value.id_conductor)"
                                        id="eliminarGBtn_D_1"
                                        class="button is-warning" type="button">
                                    <span class="icon"><i class="fas fa-trash"></i></span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        <tr>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                    </div>
                                </div>
                            </td>
                            <td style="padding: 0;">
                                <div class="field">
                                    <div class="control">
                                        <select style=" width: 100%;
                                    outline: none; border: 1px solid #dbdbdb;"
                                                class="select" name="condMovil1">
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
                                        <input class="input" type="text" name="movilVehiculo1"
                                               placeholder="Número del móvil">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="container has-text-centered">
                        <div class="columns is-mobile">
                            <div class="column">
                                <input type="submit" class="button is-success" value="Guardar">
                                <button id="btnNewRowVehiculo" type="button" class="button is-link">
                                    Nueva fila
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div :class="{'is-active':edit}" class="modal is-clipped">
                <div :class="{'is-active':edit}" class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Editar Vehículo</p>
                        <button @click="edit = !edit" class="delete" aria-label="close"/>
                    </header>
                    <section class="modal-card-body">
                        <form action="" method="post">
                            <input type="text" name="formId_D" hidden="">
                            <div class="field">
                                <label class="label">Conductor</label>
                                <div class="control">
                                    <div class="select is-primary">
                                        <select name="formConductor_D">
                                            <option value="1">Santiago As Gomez</option>
                                            <option value="2">Pablo Martin</option>
                                            <option value="3">Pedro Gómez</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Móvil</label>
                                <div class="control">
                                    <input v-model="modalFields.movil"
                                           class="input is-primary" type="text"
                                           name="formMovil_D" required="">
                                </div>
                            </div>
                        </form>
                    </section>

                    <footer class="modal-card-foot">
                        <button class="button is-primary">Guardar</button>
                        <button @click="edit = !edit" class="button is-delete">Cancelar</button>
                    </footer>
                </div>
            </div>
            <div :class="{'is-active':borrar}" class="modal is-clipped">
                <div :class="{'is-active':borrar}" class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Eliminar Vehículo</p>
                        <button @click="borrar = !borrar" class="delete" aria-label="close"/>
                    </header>
                    <section class="modal-card-body">
                        <h1 class="subtitle">¿Desea eliminar el registro?</h1>
                    </section>
                    <footer class="modal-card-foot">
                        <button id="eliminarConfirmBtn_D" class="button is-danger">Eliminar</button>
                        <button @click="borrar = !borrar" class="button is-delete">Cancelar</button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = 'http://localhost:4000/controller4';


export default {
  name: 'ControllerOption4',
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
        if (this.listRows[i].id_vehiculo === id) {
          this.modalFields = this.listRows[i];
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
