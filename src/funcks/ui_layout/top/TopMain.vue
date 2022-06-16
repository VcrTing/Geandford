<template>
    <nav class="fx-s px_x2 w-100">
        <div class="w-70">
            <span class="hand view-p" @click="menu(1)">
                MENU
                <!--i class="mdi mdi-menu h5"></i-->
            </span>
        </div>
        <div class="w-30 fx-r">
            <!--ui-search-top class=""></！ui-search-top-->
            <span class="px"></span>
            <drop-down>
                <user-face-name slot="tit"></user-face-name>
                <div class="t-c px_x2" slot="cont">
                    <button class="err min-4em py" @click="out">登出</button>
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
    methods: {
        menu(num) {
            console.log('菜单 =', num)
            this.$store.commit('changeFunck', [ 'menu', num ])
        },

        out() {
            
            this.$router.push('/login')
        }
    }
}
</script>