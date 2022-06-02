<template>
    <div>
        <crumbs ref="cruREF"></crumbs>

        <ui-header class="" :header="_head">
            <slot slot="cont" name="top"></slot>
        </ui-header>

        <div :class="cls_bar">
            <slot name="bar"></slot>
        </div>

        <div class="page-cont fx-s fx-t">
            <slot name="left"></slot>
            <slot class="w-100" name="cont"></slot>
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
    props: {
        cls_bar: {
            type: String, default: 'pt_x'
        }
    },
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

<style></style>