<template>
    <layout-screen :cls_bar="'pt'">
        <div slot="top">
            <button class="btn-pri wh-btn">返回</button>
        </div>
        <layout-filter-full class="mt-0" slot="bar"></layout-filter-full>
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-pro-basic></cp-pro-basic>
                <div class="pb"></div>
            </panel-def>

            <mr-rr-dc></mr-rr-dc>

            <panel-def>
                <div class="py"></div>
                <mr-rr-a></mr-rr-a>
                <div class="pt_x3 pb_x">相关提示：RFI</div>
                <mr-rr-rfi></mr-rr-rfi>
                <div class="py"></div>
            </panel-def>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterFull from '../../../funcks/ui_layout/filter/LayoutFilterFull.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import CpProBasic from '../../../component/project/basic/CpProBasic.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import MrRrA from './accident/MrRrA.vue'
import MrRrRfi from './rfi/MrRrRfi.vue'
import MrRrDc from './danger_card/MrRrDc.vue'

export default {
    components: { LayoutScreen, LayoutFilterFull, PanelDef, CpProBasic, UiPageEmpty, MrRrA, MrRrRfi, MrRrDc },
    
    methods: {
    },
    mounted() {

    },
    data() {
        return {
            loading: true
        }
    }
}
</script>

<style>

</style>