import Vue from 'vue';
import Router from 'vue-router';
import { VuePlugin as ReactInVue } from 'vuera';
import Home from '@/components/Home';
import VueComponent from '@/components/VueComponent';
import ReactComponent from '@/components/ReactComponent';

Vue.use(Router);
Vue.use(ReactInVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/vue',
      name: 'VueComponent',
      component: VueComponent,
    },
    {
      path: '/react',
      name: 'ReactComponent',
      component: ReactComponent,
    },
  ],
});
