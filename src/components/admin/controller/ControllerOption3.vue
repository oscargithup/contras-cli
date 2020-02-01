<template>
    <div>
        <div id="table3" class="">
        <h2>Añadir conductores</h2>
        <form action="controller/IndexPost.php" method="post">
            <div style="overflow-x: auto !important;">
                <table id="tableConductores" class="table is-hoverable  is-fullwidth is-bordered">
                    <thead class="has-text-weight-bold">
                    <tr>
                        <td>#</td>
                        <td>Nombres</td>
                        <td>Apellidos</td>
                        <td>Teléfono</td>
                        <td>Acción</td>
                    </tr>
                    </thead>
                    <tbody v-for="value in listRows" :key="value.id_conductor">
                    <tr>
                        <td>{{value.id_conductor}}</td>
                        <td>{{value.nombre + value.apellido}}</td>
                        <td>{{value.apellido}}</td>
                        <td>{{value.telefono}}</td>
                        <td>
                            <button @click="openModalEdit(value.id_conductor)"
                                    class="button is-primary" type="button">
                                <span class="icon"><i class="fas fa-pen-square"></i></span>
                            </button>
                            <button  @click="openModalDelete(value.id_conductor)"
                                     id="eliminarGBtn_C_1" class="button is-warning" type="button">
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
                                    <input class="input" type="text" name="condConductor1"
                                           placeholder="Añadir conductor">
                                </div>
                            </div>
                        </td>
                        <td style="padding: 0;">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" name="apellidosConductor1"
                                           placeholder="Añadir apellidos">
                                </div>
                            </div>
                        </td>
                        <td style="padding: 0;">
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="tel" name="telConductor1"
                                           placeholder="Añadir telefono">
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
                        <button id="btnNewRowConductor" type="button"
                                class="button is-link">
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
                    <p class="modal-card-title">Editar Conductor</p>
                    <button @click="edit = !edit" class="delete" aria-label="close"/>
                </header>
                <section class="modal-card-body">
                    <form action="" method="post">
                        <div class="field">
                            <label class="label">Nombres</label>
                            <div class="control">
                                <input v-model="modalFields.nombre" class="input is-primary"
                                       type="text" name="formNombres_C" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Apellidos</label>
                            <div class="control">
                                <input v-model="modalFields.apellido" class="input is-primary"
                                       type="text" name="formApellidos_C" required="">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Télefono</label><div class="control">
                            <input v-model="modalFields.telefono"
                                   class="input is-primary" type="number"
                                   name="formTelefono_C" required="">
                        </div>
                        </div>
                    </form>
                </section>

                <footer class="modal-card-foot">
                    <button class="button is-primary">Guardar</button>
                    <button @click="edit = !edit"  class="button is-delete">Cancelar</button>
                </footer>
            </div>
        </div>
        <div :class="{'is-active':borrar}" class="modal is-clipped">
            <div @click="borrar = !borrar" class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Eliminar Conductor</p>
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
const API_URL = 'http://localhost:4000/controller3';

export default {
  name: 'ControllerOption3',
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
        if (this.listRows[i].id_conductor === id) {
          this.modalFields = this.listRows[i];
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
