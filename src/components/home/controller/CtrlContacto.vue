<template>
    <div class="column is-mobile mobile is-three-fifths-tablet is-three-quarters-desktop">
        <section class="section">
            <div class="container is-widescreen">
                <h1 class="title">Escríbenos</h1>
                <form @submit.prevent="addComentario">
                    <div class="field">
                        <label for="nombrec" class="label">Nombre</label>
                        <div class="control">
                            <input v-model.trim="comment.nombre" type="text"
                                   class="input" name="name" id="nombreC"
                                   placeholder="Nombre completo">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Descripción</label>
                        <div class="control">
                            <textarea
                                    v-model.trim="comment.descripcion"
                                    class="textarea" name="description"
                                    placeholder="Deja tu duda o comentario es este campo">
                            </textarea>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Correo</label>
                        <div class="control">
                            <input
                              v-model.trim="comment.correo"
                              class="input"
                              type="email"
                              placeholder="Correo donde desea recibir respuesta">
                        </div>
                        <p class="help is-hidden is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                        <label class="label">Teléfono</label>
                        <div class="control">
                            <input
                               v-model.number.trim="comment.telefono"
                               class="input"
                               type="text"
                               placeholder="Celular o teléfono"
                               name="phone">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input
                                   v-model="comment.terminos"
                                   type="checkbox"
                                   name="check">
                                Acepto los <a href="#">términos y condiciones</a>
                            </label>
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link">Enviar</button>
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-link is-light">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <div :class="{'is-active':modal}" class="modal is-clipped">
            <div @click="modal = !modal" class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{info.message}}</p>
                    <button  @click="modal = !modal" class="delete" aria-label="close"/>
                </header>
                <section class="modal-card-body">
                    <ul>
                        <li
                                v-for="error in errors" :key="error.id"
                                :class="{'has-text-danger' : info.fail}">{{ error }}
                        </li>
                    </ul>
                </section>
                <footer class="modal-card-foot">
                    <button @click="modal = !modal" class="button is-warning">Cerrar</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = `${process.env.VUE_APP_DB_HOST}/login`;

export default {
  name: 'CtrlContacto',
  data: () => ({
    modal: false,
    info: {
      message: 'Completa los datos',
      fail: true,
    },
    errors: [],
    comment: {
      nombre: null,
      telefono: null,
      correo: null,
      descripcion: null,
      terminos: false,
    },
  }),
  methods: {
    addComentario() {
      // this.checkForm();
      // if (this.openModal()) {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.comment),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.errno) {
            this.modal = true;
            this.errors.push('No se pudo guardar la información, SORRY!!');
          } else if (res.message === '') {
            this.modal = true;
            this.errors.push('La informacion se guardo correctamente');
          }
        });
      // }
    },
    // eslint-disable-next-line consistent-return
    openModal() {
      this.errors = [];
      this.modal = true;
      if (!this.errors.length) {
        this.info.message = 'Gracias!!';
        this.info.fail = false;
        this.errors.push('La información fue enviada. Gracias por escribirnos. Dentro de poco te notificaremos al correo');
        return true;
      }
      this.info.message = 'Completa los campos!!';
      this.info.fail = true;
      return false;
    },
    // eslint-disable-next-line consistent-return
    checkForm() {
      this.errors = [];

      if (!this.comment.nombre) {
        this.errors.push('Nombre requerido');
      }
      if (!this.comment.correo) {
        this.errors.push('Correo requerido');
      }
      if (!this.comment.descripcion) {
        this.errors.push('Descripcion requerida');
      }
      if (!this.comment.telefono) {
        this.errors.push('Teléfono requerido');
      }
      if (!this.comment.terminos) {
        this.errors.push('Acepte los terminos');
      }
    },
  },
};
</script>

<style scoped>

</style>
