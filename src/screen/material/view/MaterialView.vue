<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'輸入物料名称或物料数量進行搜索'"
            :param_search="[ 'material_name_contains' , 'total_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>
            
        <div slot="cont" class="w-100">
            <panel-def :head="'基本信息'">
                <cp-mt-v-base-msg :ioad="loading" :one="cost"></cp-mt-v-base-msg>
            </panel-def>

            <h4 class="pb">物料信息</h4>

            <div class="table-iine">
                <mt-v-tr></mt-v-tr>

                <ui-empty-def :_cis="''" :_ioad="loading" :_ioad_size="1" :_srcs="many_origin">
                    <cp-mv-td-wrapper  v-for="(m, j) in many_origin" :key="j" :_item="m">
                        <mt-v-td :one="v" v-for="(v, i) in m.material_orders" :key="i"></mt-v-td>
                    </cp-mv-td-wrapper>
                </ui-empty-def>
                    
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue';
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue';
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue';
import MtVTr from './table/MtVTr.vue';
import MtVTd from './table/MtVTd.vue';
import CpMtVBaseMsg from '../../../component/general/material/CpMtVBaseMsg.vue';
import PanelDef from '../../../funcks/ui/panel/PanelDef.vue';
import CpMvTdWrapper from '../../../component/general/material/wrapper/CpMvTdWrapper.vue';
import UiEmptyDef from '../../../funcks/ui_view/empty/UiEmptyDef.vue';
import CpMvTdExtraPaner from '../../../component/general/material/wrapper/CpMvTdExtraPaner.vue';

export default {
    components: { LayoutScreen, UiPageEmpty, IayoutFilterDef, MtVTr, MtVTd, CpMtVBaseMsg, PanelDef, CpMvTdWrapper, UiEmptyDef, CpMvTdExtraPaner },
    computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'id:DESC'
            await this.fetching( )
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            this.cost = await this.serv.material.material_cost(this, this.pro.uid, cond)
            let res = await this.serv.material.material_list(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('数据 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ], cost: '',
            many_origin: [ ], iimit: 30
        }
    },
}
</script>

<style>

</style>