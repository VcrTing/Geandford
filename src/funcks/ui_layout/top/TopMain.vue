<template>
    <nav class="fx-s px_x2 w-100">
        <div class="w-70">
            <span class="hand view-p" @click="menu(1)">
                菜單
            </span>
        </div>
        <div class="w-30 fx-r">
            <!--ui-search-top class=""></！ui-search-top-->
            <span class="px"></span>
            <drop-down :_cis="'auth-menu'">
                <user-face-name slot="tit"></user-face-name>
                <div class="t-c" slot="cont">
                    <button class="min-4em py" @click="change">
                        切換項目
                    </button>
                    <hr/>
                    <button class="min-4em py" @click="out">登出</button>
                </div>
            </drop-down>
        </div>
    </nav>
</template>
<script>
import UserFaceName from '../../ui_view/user/UserFaceName.vue'
import DropDown from '../../ui/dropdown/DropDown.vue'
import UiSearchTop from '../../ui_element/search/UiSearchTop.vue'
export default {
  components: { UserFaceName, DropDown, UiSearchTop },
    // mounted() { this.$store.commit('changeFunck', [ 'menu', 1 ]) },
    methods: {
        menu(num) {
            console.log('菜單 =', num)
            this.$store.commit('changeFunck', [ 'menu', num ])
        },

        change() {
            // this.$store.commit('changeActive', [ 'project_id', null ])
            // sessionStorage.setItem('gendford_project_id', '')
            // this.$store.commit('change', [ 'project', null ])
            setTimeout(e => this.go('/project') ,200)
        },

        out() {
            this.$router.push('/login')
        }
    }
}
</script>