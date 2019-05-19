import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store';
import "./validate";
import "./vant-ui";
//import "./utils/$vConsole";
import "./assets/iconfont/iconfont.css"

import getApiToken from "@/utils/$api.token";
require("./utils/$cookie");
require("./filter/index");
require("./components");
require("./assets/styles/base.less");

//阻止启动生产消息
Vue.config.productionTip = false;

getApiToken().then(res => {
    let $vm = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app");

    window.$vm = $vm;
});
