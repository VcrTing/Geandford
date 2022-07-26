<template>
        <layout-screen>
            <iayout-filter-def 
                :_pahd="'輸入項目名稱或標題稱進行搜索'" :_timed_1="true"
                :param_search="[ 'project.name_contains' , 'title_contains' ]"
                :param_time_1="'created_at_lte'"
                @sign="funni"
                slot="bar"></iayout-filter-def>

            <div slot="cont" class="w-100">
                <div class="table-iine">
                    <tdpro-tr :srcs="many_origin" @sort="(v) => many_origin = v"></tdpro-tr>
                    
                    <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong"  :load="loading" :srcs="many_origin">                                
                    
                        <tdpro-td :one="o" v-for="(o, j) in many" :key="j"></tdpro-td>

                    </ui-page-empty>
                </div>
            </div>
        </layout-screen>
</template>

<script>
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'

import TdproTr from './table/TdproTr.vue'
import TdproTd from './table/TdproTd.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'

export default {
    components: { UiPageEmpty, TdproTr, TdproTd, LayoutScreen, IayoutFilterDef },
    computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'id:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            let res = await this.serv.table_download.progress_report(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('數據 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ ],
            many_origin: [ ], iimit: 30
        }
    },
}
</script>

<style>

</style>