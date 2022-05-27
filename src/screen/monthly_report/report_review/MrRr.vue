<template>
    <layout-screen :cls_bar="'pt'">
        <layout-filter-full class="mt-0" slot="bar"></layout-filter-full>
        <div slot="cont" class="w-100">
            <div class="table-iine">
                <mr-rr-tr></mr-rr-tr>
                <ui-page-empty :load="loading" :srcs="many">
                    <mr-rr-td v-for="(v, i) in many" :key="i" :one="v"></mr-rr-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutFilterFull from '../../../funcks/ui_layout/filter/LayoutFilterFull.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue'
import MrRrTr from './table/MrRrTr.vue'
import MrRrTd from './table/MrRrTd.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'

export default {
    components: { LayoutScreen, LayoutFilterFull, PanelDef, MrRrTr, UiPageEmpty, MrRrTd },
    
    methods: {
        async fetching() {
            this.loading = true
            setTimeout(e => this.loading = false, 500)
        }
    },
    mounted() { this.fetching() },
    data() {
        return {
            loading: true, 
            many: [ 
                    {
                        name: '大型项目', uid: 'uid-00001;ss-0001', name_cbs: '王总', month: '2022-12', id: 1 }, 
                    { 
                        name: '大型项目', uid: 'uid-00001;ss-0001', name_cbs: '王总', month: '2022-12', id: 2 }
                ]
        }
    }
}
</script>

<style>

</style>