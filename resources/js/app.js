/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.$ = window.jQuery = require('jquery');

require('sleek-dashboard/dist/assets/plugins/daterangepicker/daterangepicker.js');
require('sleek-dashboard/dist/assets/plugins/slimscrollbar/jquery.slimscroll.min.js');
require('sleek-dashboard/dist/assets/plugins/jekyll-search.min.js');
require('sleek-dashboard/dist/assets/plugins/charts/Chart.min.js');
require('sleek-dashboard/dist/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js');
require('sleek-dashboard/dist/assets/plugins/jvectormap/jquery-jvectormap-world-mill.js');
require('sleek-dashboard/dist/assets/js/sleek.bundle.js');
//select2
require('select2/dist/js/select2.js');
$.fn.select2.defaults.set( "theme", "bootstrap4" );

require('sweetalert2/dist/sweetalert2.js');
// import Swal from 'sweetalert2/dist/sweetalert2.js'

window.Swal = require('sweetalert2/dist/sweetalert2');
// const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000
// });
// window.Toast = Toast;



// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app'
// });
