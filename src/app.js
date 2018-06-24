import Vue from 'vue';
import hello from './hello.vue';
import userinfo from './info';
import * as utils from './utils/utils';
import father from './components/father.vue'

new Vue({
    el:"#app",
    template:'<div><hello/><father/></div>',
    data(){
        return {
            userinfo:utils.deepclone(userinfo)
        }
    },
    components:{
	    hello,father
    },
    beforeCreate:function(){
        alert('before create....');
    },
    created:function(){
        alert('create...');
    }
});
