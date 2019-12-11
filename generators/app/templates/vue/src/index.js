import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;

/* new instance */
new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app', component: { App }
});
