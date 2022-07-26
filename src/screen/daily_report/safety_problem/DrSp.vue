<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'請輸入個案名稱或當事人姓名進行搜索'" :_timed_1="true"
            :param_time_1="'case_date_lte'"
            :param_search="[ 'case_description_contains' , 'issue_by_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>

        <nav slot="cont" class="w-100 ">
            <div class="table-iine">
                <dr-sp-tr></dr-sp-tr>

                <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong" :load="loading" :srcs="many_origin">
                    <dr-sp-td v-for="(v, i) in many" :key="i" :one="v"></dr-sp-td>
                </ui-page-empty>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrSpTr from './table/DrSpTr.vue'
import DrSpTd from './table/DrSpTd.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
export default {
    computed: {
        pro() { return this.$store.state.project },
        iong() { return this.many_origin.length },
    },
    methods: {
        async funni(fui = {}) {
            this.loading = true
            fui['_limit'] = 300; fui['_sort'] = 'case_date:DESC'
            await this.fetching(fui)
            setTimeout(e => this.loading = false, 200)
        },
        async fetching(fui) {
            let res = await this.serv.daily.safety_issue(this, this.pro.uid, fui)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('數據 =', res)
        },
    },
    data() {
        return {
            loading: true, many: [ 
                /*{ 
                    case_description: '案例001', issue_by: '柳葉眉', remark: '這裏是個案',
                    case_id: 'manfulls-001;tst-002;00001', 
                    case_date: '2022-12-12 12:12', case_closed: false
                } */
            ],
            many_origin: [ ], iimit: 30
        }
    },
    // mounted() { this.fetching() },
    components: { LayoutScreen, UiPageEmpty, UiTdItemsWrapper, DrSpTr, DrSpTd, IayoutFilterDef },
}
</script>

<style>

</style>