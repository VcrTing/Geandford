<template>
    <layout-screen>
        <iayout-filter-def 
            :_pahd="'輸入概述或天氣進行搜索'" :_timed_1="true"
            :param_search="[ 'description_contains' , 'weather_contains' ]"
            @sign="funni"
            slot="bar"></iayout-filter-def>

        <nav slot="cont" class="w-100 ">
            <div class="table-iine">
                <dr-rr-tr :srcs="many_origin" @sort="(v) => many_origin = v"></dr-rr-tr>

                <ui-page-empty @res="(v) => many = v" :numone="iimit" :total="iong" 
                    :load="loading" :srcs="many_origin">
                    <dr-rr-td v-for="(v, i) in many" :key="i" :one="v"></dr-rr-td>
                </ui-page-empty>
            </div>
        </nav>
    </layout-screen>
</template>

<script>
import UiTdItemsWrapper from '../../../funcks/ui_element/table/td/UiTdItemsWrapper.vue'
import LayoutScreen from '../../../funcks/ui_layout/layout/screen/LayoutScreen.vue'
import UiPageEmpty from '../../../funcks/ui_view/empty/UiPageEmpty.vue'
import DrRrTd from './table/DrRrTd.vue'
import DrRrTr from './table/DrRrTr.vue'
import IayoutFilterDef from '../../../funcks/ui_layout/filter/IayoutFilterDef.vue'
export default {
  components: { LayoutScreen, DrRrTr, UiPageEmpty, UiTdItemsWrapper, DrRrTd, IayoutFilterDef },
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
            let res = await this.serv.daily.daily_report(this, this.pro.uid, cond)
            try {
                this.many_origin = this.view.sort.sorTime( res, false, 'created_at' )
            } catch(err) { }
            console.log('数据 daily_report =', res)
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