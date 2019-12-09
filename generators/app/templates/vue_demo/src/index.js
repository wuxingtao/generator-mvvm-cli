import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/* instance Vue */
new Vue({
    router,
    render: h => h(App),
    el: '#app', component: {App}
})