<template>
    <auth-layout class="fx-s">
        <h1 class="py_s">登錄</h1>
        <div class="h6 sub">輸入妳的郵箱賬戶登陸</div>
        <div class="pt_auth">
            <ui-input :header="'郵箱'" :is_err="named_err" class="pb input-auth">
                <input v-model="named" class="input ip-w-100" placeholder="請輸入">
            </ui-input>
            <ui-input :header="'密碼'" :is_err="pass_err" class="pb input-auth">
                <input type="password" v-model="pass" class="input ip-w-100" placeholder="請輸入">
            </ui-input>
            <div class="pt">
                <button @click="submit" class="btn-pri btn-auth upper">
                    
                    <loading v-if="dealing" :size="-1" :_class="'loading-fff'"></loading>
                    <span v-else>登錄</span>
                
                </button>
            </div>
        </div>
    </auth-layout>
</template>

<script>
import UiIconInput from '../../../funcks/ui_element/input/icon/UiIconInput.vue'
import UiInput from '../../../funcks/ui_element/input/normal/UiInput.vue'
import Logo from '../../../funcks/ui_static/logo/Logo.vue'
import Loading from '../../../funcks/ui_view/shimmer/Loading.vue'
import AuthLayout from '../comm/AuthLayout.vue'
export default {
  components: { AuthLayout, Logo, UiInput, UiIconInput,
    Loading },
    data() {
        return {
            named: '', pass: '',
            pass_err: false, named_err: false,

            dealing: true
        }
    },
    watch: {
        named(n, o) { this.named_err = n ? !this.vid.input.vid_email(n) : false },
        pass(n, o) { this.pass_err = n ? !this.vid.input.vid_named(n) : false }
    },
    mounted() {
        if (this.conf.TEST) {
            this.named = this.conf.STRAPI.named
            this.pass = this.conf.STRAPI.pass
        }
        setTimeout(e => this.dealing = false, 900)
    },
    methods: {
        _vid() {
            this.named_err = !this.vid.input.vid_email( this.named )
            this.pass_err = !this.vid.input.vid_named( this.pass )
        },
        _res() {
            this._vid()
            return (this.pass_err || this.named_err) ?
                null : 
                { named: this.named, pass: this.pass }
        },

        finish() { this.$router.push('/admin') },
        
        async submit() {
            this.dealing = true
            const data = this._res()

            await setTimeout(e => this.dealing = false, 2400)
            if (data) { 
                let res = await this.serv.sign._in(this, data)
                if (res[0] < 399) {
                    this.finish()
                } else if (res[0] >= 399 && res[0] <= 499) {
                    console.log('數據錯誤')
                } else if (res[0] >= 499 && res[0] <= 599) {
                    console.log('賬號密碼錯誤')
                }
                setTimeout(e => this.dealing = false, 500)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    // font-size: 3vw !important
</style>