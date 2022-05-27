<template>
    <div>
        <crumbs ref="cruREF">
            
        </crumbs>
        <ui-header class="pt_s" :header="_head">
            <slot name="top"></slot>
        </ui-header>

        <div class="fx-s pt_x2 w-unf-p-r">
            <slot name="filter"></slot>
            <slot name="opera"></slot>
        </div>
        <slot name="bar"></slot>

        <div class="page-cont">
            <slot name="cont"></slot>
        </div>

        <div class="py_x2"></div>
    </div>
</template>

<script>
import UiHeader from '@/funcks/ui_element/header/UiHeader.vue'
import UiTableTdCollsp from '@/funcks/ui_element/table/tdin/UiTableTdCollsp.vue'
import Crumbs from '@/funcks/ui_layout/menu/crumbs/Crumbs.vue'

export default {
    components: { UiHeader, UiTableTdCollsp, Crumbs },
    data() {
        return {
            txts: { }
        }
    },
    computed: {
        _head() { return this.txts ? this.txts[ this.rt ] : '' },
        rt() { return this.$route.path.split('/').pop() },
    },
    mounted() {
        this.txts = this.conf.funcks.TIT
    }
}
</script>

<style>

</style>