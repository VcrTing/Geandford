<template>
    <div class="auth-wrapper">
        <div class="auth-img" ></div>
    
        <div class="auth-cont fx-s fx-t ">
            
            <div class="w-50 auth-panel">
                <logo class="auth-logo"></logo>
                <nav>
                    <div>
                        <slot></slot>
                    </div>
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + im + ')' }">
                
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../../../funcks/ui_static/logo/Logo.vue'
import Login from '../login/Login.vue'
export default {
  components: { Login, Logo },
    data() { return { im: '' } },
    mounted() { this.im = require('../../../assets/img/Login_BG.jpeg') }// require('../../../assets/img/Login_BG.jpg') }
}
</script>
