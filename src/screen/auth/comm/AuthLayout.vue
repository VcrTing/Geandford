<template>
    <div class="auth-wrapper">
        <div class="auth-img" ></div>
    
        <div class="auth-cont fx-s fx-t ">
            
            <div class="w-50 auth-panel">
                <logo class="auth-logo"></logo>
                <nav>
                    <div class="br">
                        <slot></slot>
                    </div>
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + im + ')' }">
                
            </div>
        </div>

        <!--h5 class="auth-tool pr">
            <button class="fx-r" @click="go('/register')" v-if="mode == 1">
                註冊&nbsp;&nbsp;<i class="mdi mdi-arrow-right h4"></i>
            </button>
            <button class="fx-r" @click="go('/login')" v-if="mode == 2">
                登錄&nbsp;&nbsp;<i class="mdi mdi-arrow-right h4"></i>
            </button>
        </h5-->
    </div>
</template>

<script>
import Logo from '../../../funcks/ui_static/logo/Logo.vue'
import Login from '../login/Login.vue'
export default {
  components: { Login, Logo },
    data() { return { im: '', mode: 1 } },
    computed: {
        rt() { return this.$route.path.split('/').filter(e => e == 'login') }
    },
    mounted() { 
        this.im = require('../../../assets/img/Login_BG.jpeg') 

        this.mode = (this.rt && this.rt.length > 0) ? 1 : 2
    }
}
</script>
