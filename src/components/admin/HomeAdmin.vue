<template>
    <div>
        <HeaderAdmin/>
        <Banner/>
        <div class="content section">
            <div class="columns is-12-mobile">
                <div class="column is-one-fifth-tablet">
                    <div class="list is-hoverable">
                        <a id="menuOptionCondRutas" class="list-item"
                           :class="{'is-active':seen1}"
                           v-on:click="controlShow('1')">
                            Gestionar Vehículos - Rutas
                        </a>
                        <a id="menuOptionRutas" class="list-item"
                           :class="{'is-active':seen2}"
                           v-on:click="controlShow('2')">
                            Gestionar rutas
                        </a>
                        <a id="menuOptionCondutores" class="list-item"
                           :class="{'is-active':seen3}"
                           v-on:click="controlShow('3')">
                            Gestionar conductores
                        </a>
                        <a id="menuOptionVehiculo" class="list-item"
                           :class="{'is-active':seen4}"
                           v-on:click="controlShow('4')">
                            Gestionar vehículos
                        </a>
                    </div>
                </div>
                <div class="column">
                    <Controller1 v-if="seen1"/>
                    <Controller2 v-if="seen2"/>
                    <Controller3 v-if="seen3"/>
                    <Controller4 v-if="seen4"/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HeaderAdmin from './parts/Header.vue';
import Banner from './parts/Banner.vue';
import Footer from '../partsGeneral/Footer.vue';
import Controller1 from './controller/ControllerOption1.vue';
import Controller2 from './controller/ControllerOption2.vue';
import Controller3 from './controller/ControllerOption3.vue';
import Controller4 from './controller/ControllerOption4.vue';

export default {
  name: 'HomeAdmin',
  data: () => ({
    seen1: true,
    seen2: false,
    seen3: false,
    seen4: false,
  }),
  components: {
    Footer,
    HeaderAdmin,
    Banner,
    Controller1,
    Controller2,
    Controller3,
    Controller4,
  },
  methods: {
    controlShow(el) {
      switch (el) {
        case '1':
          this.seen1 = true;
          this.seen2 = false;
          this.seen3 = false;
          this.seen4 = false;
          break;
        case '2':
          this.seen1 = false;
          this.seen2 = true;
          this.seen3 = false;
          this.seen4 = false;
          break;
        case '3':
          this.seen1 = false;
          this.seen2 = false;
          this.seen3 = true;
          this.seen4 = false;
          break;
        case '4':
          this.seen1 = false;
          this.seen2 = false;
          this.seen3 = false;
          this.seen4 = true;
          break;
        default:
          break;
      }
    },
  },
};

</script>

<style scoped>

</style>
