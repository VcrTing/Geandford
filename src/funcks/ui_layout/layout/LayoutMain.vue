<template>
    <div class="html"
        :class="{ 'html-active': menu, 'html-hide': !menu }"
    >
        <div class="menu">
            <slot name="menu"></slot>
        </div>
        <div class="menu-bg" @click="close"></div>
        <div class="content">
            <div class="top fx-s">
                <slot name="top"></slot>
            </div>
            <div class="center">
                <slot name="cont"></slot>
            </div>
        </div>

        <nav>
            <tookit-check-user></tookit-check-user>
            <tookit-check-project></tookit-check-project>
        </nav>
    </div>
</template>
<script>
import TookitCheckUser from '../../ui_tookit/check/TookitCheckUser.vue'
import TookitCheckProject from '../../ui_tookit/check/TookitCheckProject.vue'
export default {
    components: { TookitCheckUser, TookitCheckProject },
    data() {
        return {
            menu: true,
            pro_id: 0
        }
    },
    watch: {
        menu_funck(n, o) { this.menu = (n == 1) }
    },
    computed: {
        menu_funck() { return this.$store.state.funck.menu },

        // 激活项目
        project_id() { return this.$store.state.active.project_id },
    },
    mounted() { 
        this.menu = (this.menu_funck == 1)
    },
    methods: {
        close() { this.$store.commit('changeFunck', [ 'menu', 0 ]) },
    }
}
</script>