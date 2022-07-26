<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'請輸入位置或編號進行搜索'"
            @sign="funni" :_timed_1="true"
            :param_search="[ 'location.address_contains', 'uid_contains' ]"
            slot="bar"></iayout-filter-def>

        <div class="w-100" slot="cont">
            <div class="table-iine">
                <pr-rr-tr></pr-rr-tr>
                <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong" :load="loading" :srcs="many_origin">
                    <pr-rr-td v-for="(v, i) in many" :key="i" :one="v"></pr-rr-td>
                </ui-page-empty>
            </div>
        </div>
    </layout-screen>
</template>

<script>
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import PrRrTr from './table/PrRrTr.vue'
import PrRrTd from './table/PrRrTd.vue'

export default {
  components: { LayoutScreen, PrRrTd, UiPageEmpty, IayoutFilterDef, PrRrTr },
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
            let res = await this.serv.photo_report.many(this, this.pro.uid, cond)
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