<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'輸入項目名稱或工種名稱進行搜索'" :_timed_1="true"
            :param_search="[ 'project.name_contains' , 'worker_type_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>
        
        <div slot="cont" class="w-100">
            <div class="table-iine">
                <dr-mp-tr></dr-mp-tr>
                <ui-page-empty  @res="(v) => many = v" :numone="iimit" :total="iong" :cls="''" :load="loading" :srcs="many_origin">
                    <dr-mp-td v-for="(v, i) in many" :key="i" :one="v"></dr-mp-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrMpTd from './table/DrMpTd.vue'
import DrMpTr from './table/DrMpTr.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
export default {
  components: { LayoutScreen, DrMpTr, UiPageEmpty, DrMpTd, IayoutFilterDef },
    computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: { 
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'date:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(cond = { }) {
            let res = await this.serv.worker.worker(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('数据 =', res)
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