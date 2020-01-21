// ui dependency
import "bootcatch-themes/dist/hero/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/common.scss";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import GlobalComponents from './globalComponent';

export default {
    install(Vue) {
        Vue.use(GlobalComponents);
    }
};
