<template>
    <div>
        <crumbs ref="cruREF">
            <slot name="top"></slot>
        </crumbs>
        <ui-header class="pt_s" :header="_head">
            <button v-if="back" slot="cont" class="btn-pri wh-btn-simp" @click="$emit('back')">返回</button>
        </ui-header>

        <div class="pt_x">
            <slot name="cont"></slot>
        </div>
        
        <!--div class="fx-s pt">
            <span></span>
            <nav>
                <button class="btn-pri-out py_s px_x3" @click="$emit('reset')">重置</button>
                <span class="px"></span>
                <button class="btn-pri py_s px_x3 righter" @click="$emit('submit')">储存</button>
            </nav>
        </div-->

        <div class="py_x3"></div>
        <div class="py_x3"></div>
    </div>
</template>

<script>
import UiHeader from '../../../../funcks/ui_element/header/UiHeader.vue'
import UiTableTdCollsp from '@/funcks/ui_element/table/tdin/UiTableTdCollsp.vue'
import Crumbs from '@/funcks/ui_layout/menu/crumbs/Crumbs.vue'
export default {
  components: { UiHeader, UiTableTdCollsp, Crumbs },
    props: {
        back: {
            type: Boolean,
            default: true
        }    
    },
    data() {
        return {
            txts: { }
        }
    },
    computed: {
        _head() { 
            return this.txts ? this.txts[ this.rt ] : '' },
        
        rt() { return this.$route.path.split('/').filter(e => e != '').pop() },
    },
    mounted() {

        this.txts = this.conf.funcks.TIT
    }
}
</script>

<style>

</style>