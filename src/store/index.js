import Vue from "vue";
import Vuex from 'vuex';

import posModule from './modules/pos/pos.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        pos:posModule
    }
})

export default store;