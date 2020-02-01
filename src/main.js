// General imports
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Styles
import '../node_modules/bulma/css/bulma.css';
import '../public/css/contras.css';
import '../public/css/fontawesome-free-5.11.2-web/css/all.css';


// Components - Public
import Home from './components/home/Home.vue';
import Tarifas from './components/home/Tarifas.vue';
import Servicios from './components/home/Servicios.vue';
import Mercado from './components/home/Mercado.vue';
import Nosotros from './components/home/Nosotros.vue';
import Contacto from './components/home/Contacto.vue';

// Component  - Admin
import Login from './components/admin/Login.vue';
import NotFound from './components/Not-404.vue';
import HomeAdmin from './components/admin/HomeAdmin.vue';


Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/tarifas', component: Tarifas },
    { path: '/servicios', component: Servicios },
    { path: '/diamercado', component: Mercado },
    { path: '/nosotros', component: Nosotros },
    { path: '/contacto', component: Contacto },
    //  Admin
    { path: '/login', component: Login },
    { path: '/admin', component: HomeAdmin },
    { path: '*', component: NotFound },
  ],
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
